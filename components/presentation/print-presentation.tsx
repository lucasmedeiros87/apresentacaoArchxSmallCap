"use client"

import { PresentationLocaleProvider } from "@/components/presentation/presentation-locale-context"
import { archxSlides } from "@/content/archx-slides"
import { orderDeckItemsByLocale } from "@/content/presentation-deck-order"
import { isRtlLocale, type Locale } from "@/content/presentation-i18n"
import { buildPresentationSlides } from "@/lib/slides"
import type { ArchxSlide } from "@/types/presentation"

type PrintPresentationProps = {
  locale: Locale
  slidesSource?: ArchxSlide[]
}

export function PrintPresentation({ locale, slidesSource = archxSlides }: PrintPresentationProps) {
  const slides = orderDeckItemsByLocale(buildPresentationSlides(slidesSource, { mode: "print" }), locale)
  const rtl = isRtlLocale(locale)

  return (
    <PresentationLocaleProvider value={{ locale }}>
      <div className="pdf-deck-root pdf-mode-print" dir={rtl ? "rtl" : "ltr"}>
        <div className="pdf-deck">
          {slides.map((slide) => (
            <section key={slide.id} className="pdf-slide" data-slide-id={slide.id}>
              <div className="pdf-slide-inner">
                <slide.component />
              </div>
            </section>
          ))}
        </div>
      </div>
    </PresentationLocaleProvider>
  )
}
