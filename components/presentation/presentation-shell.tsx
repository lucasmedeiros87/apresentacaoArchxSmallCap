"use client"

import { useEffect, useRef, useState, type TouchEvent as ReactTouchEvent } from "react"
import { AnimatePresence, motion, type PanInfo, type Variants } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { defaultLocale, getSlideLabel, localeOptions, type Locale } from "@/content/presentation-i18n"
import { LanguageSwitcher } from "@/components/presentation/language-switcher"
import { PresentationLocaleProvider } from "@/components/presentation/presentation-locale-context"
import { ArchxLogo } from "@/components/presentation/wordmark"
import { Button } from "@/components/ui/button"
import type { PresentationSlide } from "@/lib/slides"
import { cn } from "@/lib/utils"
import { isBrowser } from "@/utils/client-utils"

interface PresentationShellProps {
  brandName: string
  slides: PresentationSlide[]
}

export function PresentationShell({ brandName, slides }: PresentationShellProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [direction, setDirection] = useState(1)
  const wheelLockRef = useRef(false)
  const touchStartRef = useRef<number | null>(null)
  const slideParamKey = "slide"
  const langParamKey = "lang"
  const storageKey = "archx-current-slide"
  const localeStorageKey = "archx-locale"

  const clampSlideIndex = (index: number) => Math.min(slides.length - 1, Math.max(0, index))

  useEffect(() => {
    if (!isBrowser() || slides.length === 0) return

    const params = new URLSearchParams(window.location.search)
    const fromQuery = params.get(slideParamKey)
    const queryIndex = fromQuery ? Number.parseInt(fromQuery, 10) - 1 : Number.NaN
    if (Number.isFinite(queryIndex)) {
      setCurrentSlide(clampSlideIndex(queryIndex))
      return
    }

    const fromStorage = window.localStorage.getItem(storageKey)
    const storageIndex = fromStorage ? Number.parseInt(fromStorage, 10) - 1 : Number.NaN
    if (Number.isFinite(storageIndex)) {
      setCurrentSlide(clampSlideIndex(storageIndex))
    }

    const fromQueryLang = params.get(langParamKey)
    const queryLocale = localeOptions.find((option) => option.value === fromQueryLang)?.value
    if (queryLocale) {
      setLocale(queryLocale)
      return
    }

    const fromStorageLang = window.localStorage.getItem(localeStorageKey)
    const storageLocale = localeOptions.find((option) => option.value === fromStorageLang)?.value
    if (storageLocale) {
      setLocale(storageLocale)
    }
  }, [slides.length])

  const updateSlide = (nextIndex: number) => {
    if (nextIndex === currentSlide || nextIndex < 0 || nextIndex >= slides.length) return
    setDirection(nextIndex > currentSlide ? 1 : -1)
    setCurrentSlide(nextIndex)
  }

  const nextSlide = () => updateSlide(currentSlide + 1)
  const prevSlide = () => updateSlide(currentSlide - 1)

  useEffect(() => {
    if (!isBrowser()) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown") nextSlide()
      if (event.key === "ArrowLeft" || event.key === "PageUp") prevSlide()
    }

    const handleWheel = (event: WheelEvent) => {
      if (wheelLockRef.current) return
      if (Math.abs(event.deltaY) < 24) return

      wheelLockRef.current = true
      if (event.deltaY > 0) nextSlide()
      if (event.deltaY < 0) prevSlide()

      window.setTimeout(() => {
        wheelLockRef.current = false
      }, 550)
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("wheel", handleWheel, { passive: true })

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("wheel", handleWheel)
    }
  }, [currentSlide])

  useEffect(() => {
    if (!isBrowser() || slides.length === 0) return

    const oneBasedSlide = String(currentSlide + 1)
    const params = new URLSearchParams(window.location.search)
    params.set(slideParamKey, oneBasedSlide)
    params.set(langParamKey, locale)
    const nextUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`
    window.history.replaceState(null, "", nextUrl)
    window.localStorage.setItem(storageKey, oneBasedSlide)
    window.localStorage.setItem(localeStorageKey, locale)
  }, [currentSlide, locale, slides.length])

  const currentSlideData = slides[currentSlide]
  const contextLabel = getSlideLabel(currentSlideData.id, locale)

  const slideVariants: Variants = {
    enter: (customDirection: number) => ({
      opacity: 0,
      x: customDirection > 0 ? 72 : -72,
      filter: "blur(8px)",
    }),
    center: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.42,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (customDirection: number) => ({
      opacity: 0,
      x: customDirection > 0 ? -56 : 56,
      filter: "blur(8px)",
      transition: {
        duration: 0.32,
        ease: [0.4, 0, 1, 1],
      },
    }),
  }

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x <= -70) nextSlide()
    if (info.offset.x >= 70) prevSlide()
  }

  const handleTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    touchStartRef.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current
    const end = event.changedTouches[0]?.clientX
    if (start == null || end == null) return

    const delta = end - start
    if (delta <= -55) nextSlide()
    if (delta >= 55) prevSlide()
    touchStartRef.current = null
  }

  return (
    <PresentationLocaleProvider value={{ locale }}>
      <div className="viewport-shell">
      <div className="background-bleed" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[10vh] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute bottom-[10vh] left-[16vw] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.10),_transparent_72%)] blur-3xl" />
      </div>

      <div className="slide-stage">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(223,44,47,0.08),transparent_22%)]" />

        <header className="relative z-10 flex h-[76px] items-center justify-between border-b border-white/10 bg-black/30 px-5 md:px-8 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <ArchxLogo />
            <div className="hidden xl:block">
              <div className="text-[11px] uppercase tracking-[0.36em] text-[color:var(--muted-text)]">Capital, Technology, Private Banking</div>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="shrink-0">
              <LanguageSwitcher locale={locale} onChange={setLocale} />
            </div>
            <div className="hidden items-center gap-3 text-[11px] uppercase tracking-[0.34em] text-[color:var(--muted-text)] xl:flex">
              <span>{brandName}</span>
              <span className="h-1 w-1 rounded-full bg-[color:var(--accent-main)]/80" />
              <span>{contextLabel}</span>
            </div>
            <div className="font-display text-lg font-semibold tabular-nums text-[color:var(--primary-text)]">
              {String(currentSlide + 1).padStart(2, "0")}
              <span className="px-2 text-[color:var(--muted-text)]">/</span>
              <span className="text-[color:var(--secondary-text)]">{String(slides.length).padStart(2, "0")}</span>
            </div>
          </div>
        </header>

        <main
          className="relative z-10 h-[calc(100%-152px)] overflow-y-auto overflow-x-hidden md:overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={currentSlideData.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.04}
              onDragEnd={handleDragEnd}
              className="absolute inset-0"
            >
              <currentSlideData.component />
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="relative z-10 flex h-[76px] items-center justify-between border-t border-white/10 bg-black/30 px-8 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="h-10 rounded-full border border-white/10 bg-white/[0.02] px-4 text-[color:var(--secondary-text)] hover:bg-white/[0.06] hover:text-[color:var(--accent-main)]"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="h-10 rounded-full border border-white/10 bg-white/[0.02] px-4 text-[color:var(--secondary-text)] hover:bg-white/[0.06] hover:text-[color:var(--accent-main)]"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex min-w-[260px] items-center gap-3">
            <div className="h-px flex-1 overflow-hidden rounded-full bg-white/8">
              <motion.div
                className="h-full bg-[linear-gradient(90deg,rgba(223,44,47,0.15),rgba(223,44,47,1))]"
                animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => updateSlide(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    currentSlide === index ? "w-6 bg-[color:var(--accent-main)]" : "w-2 bg-white/18 hover:bg-white/32",
                  )}
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                />
              ))}
            </div>
          </div>
        </footer>
      </div>
      </div>
    </PresentationLocaleProvider>
  )
}
