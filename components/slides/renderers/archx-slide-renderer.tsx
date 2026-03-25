"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building2, Landmark, ShieldCheck, Sparkles } from "lucide-react"

import { getSlideTranslation, isRtlLocale } from "@/content/presentation-i18n"
import { ArchxHeroGlobe } from "@/components/hero/archx-hero-globe"
import { usePresentationLocale } from "@/components/presentation/presentation-locale-context"
import { SlideSurface } from "@/components/presentation/slide-surface"
import { cn } from "@/lib/utils"
import type { ArchxSlide, SlideContentStatus, SlideVisualType } from "@/types/presentation"

interface ArchxSlideRendererProps {
  slide: ArchxSlide
}

const themeClasses = {
  "deep-navy": {
    content: "bg-[linear-gradient(180deg,rgba(0,0,0,0.98),rgba(8,8,8,0.98))] text-white",
    media: "bg-[linear-gradient(180deg,rgba(10,10,10,0.98),rgba(0,0,0,0.98))]",
  },
  "dark-accent": {
    content: "bg-[linear-gradient(180deg,rgba(0,0,0,0.98),rgba(12,12,12,0.98))] text-white",
    media: "bg-[linear-gradient(180deg,rgba(12,12,12,0.98),rgba(0,0,0,0.98))]",
  },
  "dark-minimal": {
    content:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(252,252,252,0.99))] text-[color:var(--page-dark-text)] border-black/6",
    media:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,247,247,0.98))] border-black/6",
  },
} as const

export function ArchxSlideRenderer({ slide }: ArchxSlideRendererProps) {
  const { locale } = usePresentationLocale()
  const isRtl = isRtlLocale(locale)
  const translated = getSlideTranslation(slide.id, locale)
  const localizedSlide: ArchxSlide = translated
    ? {
        ...slide,
        eyebrow: translated.eyebrow ?? slide.eyebrow,
        headline: translated.headline ?? slide.headline,
        subheadline: translated.subheadline ?? slide.subheadline,
        body: translated.body ?? slide.body,
        closingLine: translated.closingLine ?? slide.closingLine,
        footerNote: translated.footerNote ?? slide.footerNote,
        bullets: translated.bullets ?? slide.bullets,
        groups: translated.groups ?? slide.groups,
        cta: translated.cta ?? slide.cta,
      }
    : slide

  const theme = themeClasses[localizedSlide.theme]
  const isLight = localizedSlide.theme === "dark-minimal"

  if (localizedSlide.id === "slide-01-cover") {
    return <ArchxCoverHero slide={localizedSlide} isRtl={isRtl} />
  }

  if (slide.id === "slide-02-who-we-are") {
    return <ArchxWhoWeAreSlide slide={slide} />
  }

  if (slide.id === "slide-03-problem") {
    return <ArchxProblemSlide slide={slide} />
  }

  if (slide.id === "slide-04-value-proposition") {
    return <ArchxSolutionArchitectureSlideV2 slide={slide} />
  }

  if (slide.id === "slide-05-capital-structuring") {
    return <ArchxCapitalStructuringSlide slide={slide} />
  }

  if (slide.id === "slide-06-payments-liquidity") {
    return <ArchxPaymentsLiquiditySlide slide={slide} />
  }

  if (slide.id === "slide-07-local-collection") {
    return <ArchxLocalCollectionSlide slide={slide} />
  }

  if (slide.id === "slide-08-payment-rails") {
    return <ArchxPaymentRailsSlide slide={slide} />
  }

  if (localizedSlide.id === "slide-09-compliance" || localizedSlide.id === "slide-02-compliance") {
    return <ArchxComplianceSlide slide={localizedSlide} isRtl={isRtl} />
  }

  if (slide.id === "slide-10-global-presence") {
    return <ArchxGlobalPresenceSlide slide={slide} />
  }

  if (slide.id === "slide-11-client-profile") {
    return <ArchxClientProfileSlide slide={slide} />
  }

  if (slide.id === "slide-12-use-cases") {
    return <ArchxUseCasesSlide slide={slide} />
  }

  if (slide.id === "slide-13-differentials") {
    return <ArchxDifferentialsSlide slide={slide} />
  }

  if (localizedSlide.id === "slide-03-products") {
    return <ArchxProductsSlide slide={localizedSlide} isRtl={isRtl} />
  }

  if (localizedSlide.id === "slide-14-commercial-model" || localizedSlide.id === "slide-04-prices") {
    return <ArchxCommercialModelSlide slide={localizedSlide} isRtl={isRtl} />
  }

  if (localizedSlide.id === "slide-15-closing" || localizedSlide.id === "slide-05-closing") {
    return <ArchxClosingSlide slide={localizedSlide} isRtl={isRtl} />
  }

  return (
    <SlideSurface
      eyebrow={localizedSlide.eyebrow}
      title={localizedSlide.headline}
      description={localizedSlide.subheadline}
      media={<VisualPanel slide={localizedSlide} />}
      tone={isLight ? "light" : "dark"}
      contentClassName={theme.content}
      mediaClassName={theme.media}
    >
      <div className="flex h-full flex-col justify-between gap-8">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={slide.status} />
            <div className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--muted-text)]">
              {localizedSlide.visualType}
            </div>
          </div>

          {localizedSlide.body ? (
            <p className={cn("max-w-3xl text-base leading-7", isLight ? "text-[color:var(--page-dark-muted)]" : "text-[color:var(--secondary-text)]")}>
              {localizedSlide.body}
            </p>
          ) : null}

          <BulletBlock slide={localizedSlide} />

          {localizedSlide.closingLine ? (
            <div
              className={cn(
                "rounded-[18px] border px-4 py-4 text-sm leading-6",
                isLight
                  ? "border-black/8 bg-black/[0.02] text-[color:var(--page-dark-text)]"
                  : "border-white/7 bg-white/[0.03] text-[color:var(--primary-text)]",
              )}
            >
              {localizedSlide.closingLine}
            </div>
          ) : null}
        </div>

        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <MetaCard light={slide.theme === "dark-minimal"} label="Layout" value={slide.visualNotes.layout} />
            <MetaCard light={slide.theme === "dark-minimal"} label="Emphasis" value={slide.visualNotes.emphasis ?? "Institutional clarity"} />
            <MetaCard light={slide.theme === "dark-minimal"} label="Motion" value={slide.visualNotes.motionHint ?? "Subtle panel transition"} />
          </div>

          {localizedSlide.footerNote ? (
            <div
              className={cn(
                "rounded-[18px] border px-4 py-3 text-sm leading-6",
                localizedSlide.theme === "dark-minimal"
                  ? "border-black/8 bg-black/[0.02] text-[color:var(--page-dark-muted)]"
                  : "border-white/7 bg-white/[0.03] text-[color:var(--secondary-text)]",
              )}
            >
              {localizedSlide.footerNote}
            </div>
          ) : null}

          {localizedSlide.cta ? (
            <div
              className={cn(
                "rounded-[22px] border px-5 py-5",
                isLight
                  ? "border-black/8 bg-[color:var(--accent-soft)]"
                  : "border-[color:var(--accent-main)]/20 bg-[color:var(--accent-soft)]",
              )}
            >
              <div className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--accent-main)]">CTA</div>
              <div className={cn("mt-2 text-lg font-semibold", isLight ? "text-[color:var(--page-dark-text)]" : "text-[color:var(--primary-text)]")}>
                {localizedSlide.cta.title}
              </div>
              <div className={cn("mt-1 text-sm leading-6", isLight ? "text-[color:var(--page-dark-muted)]" : "text-[color:var(--secondary-text)]")}>
                {localizedSlide.cta.text}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </SlideSurface>
  )
}

function ArchxCoverHero({ slide, isRtl = false }: { slide: ArchxSlide; isRtl?: boolean }) {
  const textDirection = isRtl ? "rtl" : "ltr"
  const textAlign = isRtl ? "text-right" : "text-left"

  return (
    <section className="relative h-full px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <div className="grid h-full grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "col-span-12 flex h-full flex-col justify-center rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.98),rgba(7,7,7,0.98))] px-4 py-4 sm:px-7 sm:py-7 lg:col-span-7 lg:rounded-[30px] lg:px-12 lg:py-12",
            textAlign,
          )}
          dir={textDirection}
        >
          <div className="max-w-[680px]">
            <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--accent-main)] sm:mb-4 sm:text-[11px] lg:mb-6 lg:text-[12px] lg:tracking-[0.18em]">{slide.eyebrow}</div>
            <h2 className="font-display max-w-[620px] text-[1.9rem] font-bold leading-[0.96] tracking-[-0.04em] text-white sm:text-[2.4rem] md:text-[2.8rem] lg:text-[4.3rem] lg:leading-[0.94] lg:tracking-[-0.06em] xl:text-[4.45rem]">
              {slide.headline}
            </h2>
            <p className="mt-4 max-w-[560px] text-[0.9rem] leading-6 text-white/72 sm:text-[0.98rem] sm:leading-7 md:text-[1.03rem] lg:mt-8 lg:text-[1.26rem] lg:leading-8 lg:text-white/66">{slide.subheadline}</p>

            <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2 lg:mt-10 lg:gap-2.5">
              {slide.bullets.map((bullet, index) => (
                <motion.div
                  key={bullet}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.05, duration: 0.28 }}
                  className="rounded-full border border-white/8 bg-white/[0.02] px-2.5 py-1 text-[0.7rem] text-white/72 shadow-[0_0_40px_rgba(223,44,47,0.03)] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[0.78rem] lg:px-3.5 lg:py-1.5 lg:text-[0.82rem]"
                >
                  {bullet}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-span-12 hidden overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(4,4,4,0.98),rgba(0,0,0,0.98))] lg:col-span-5 lg:block lg:rounded-[30px]"
        >
          <ArchxHeroGlobe />
        </motion.div>
      </div>
    </section>
  )
}

function ArchxWhoWeAreSlide({ slide }: { slide: ArchxSlide }) {
  const cards = [
    {
      title: "Financas Globais",
      copy: "Estruturas para operacoes internacionais, liquidez e acesso a capital.",
    },
    {
      title: "Private Banking",
      copy: "Solucoes patrimoniais e bancarias para estruturas sofisticadas.",
    },
    {
      title: "Ativos Digitais",
      copy: "Stablecoins, tokenizacao e liquidez digital integrada.",
    },
    {
      title: "Compliance Institucional",
      copy: "Governanca, monitoramento e adequacao regulatoria.",
    },
  ]

  return (
    <section className="relative h-full px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="h-full overflow-hidden rounded-[32px] border border-black/8 bg-[linear-gradient(180deg,#f4efe8,#ece6dd)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >
        <div className="relative h-full px-12 py-11">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_12%,rgba(223,44,47,0.06),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.24),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-y-12 left-[48.5%] hidden w-px bg-gradient-to-b from-transparent via-black/7 to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-y-16 left-[calc(48.5%-28px)] hidden w-[56px] bg-[radial-gradient(circle,rgba(223,44,47,0.055),transparent_72%)] blur-2xl lg:block" />

          <div className="relative grid h-full items-start gap-10 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)]">
            <div className="flex h-full flex-col justify-start pt-2">
              <div className="max-w-[470px]">
                <div className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] text-[#DF2C2F]">{slide.eyebrow}</div>
                <h2 className="font-display max-w-[410px] text-[3.45rem] font-bold leading-[0.95] tracking-[-0.06em] text-[#0f0f10]">
                  {slide.headline}
                </h2>
                <div className="mt-6 h-px w-16 bg-[color:var(--accent-main)]/70" />
                <p className="mt-5 max-w-[460px] text-[1.15rem] leading-8 text-[#433f3b]">{slide.subheadline}</p>
                {slide.body ? <p className="mt-4 max-w-[470px] text-[0.98rem] leading-8 text-[#5b554f]">{slide.body}</p> : null}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-0">
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.05, duration: 0.28 }}
                  className="group relative flex min-h-[160px] flex-col rounded-[24px] border border-black/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.68))] px-5 py-4 shadow-[0_8px_18px_rgba(0,0,0,0.035)] transition-colors duration-300 hover:border-[color:var(--accent-main)]/18"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent-main)]/55 to-transparent opacity-70" />
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[color:var(--accent-main)]/88" />
                    <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-main)]">
                      Pilar {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <h3 className="max-w-[220px] text-[1.08rem] font-semibold leading-6 text-[#111214]">{card.title}</h3>
                  <p className="mt-3 max-w-[240px] text-[0.95rem] leading-6 text-[#4f4943]">{card.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function ArchxProblemSlide({ slide }: { slide: ArchxSlide }) {
  return (
    <section className="relative h-full px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <div className="grid h-full grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-span-12 overflow-hidden rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,#f5f0e8,#efe8de)] shadow-[0_18px_44px_rgba(0,0,0,0.08)] lg:col-span-[6]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(223,44,47,0.08),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.2),transparent_26%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.022)_1px,transparent_1px)] bg-[size:48px_48px] opacity-25" />
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M16 74 C 26 68, 30 61, 36 52" stroke="rgba(223,44,47,0.18)" strokeWidth="0.18" fill="none" strokeDasharray="2.2 2.2" />
            <path d="M36 52 C 42 48, 48 49, 56 44" stroke="rgba(0,0,0,0.08)" strokeWidth="0.16" fill="none" strokeDasharray="2 2.8" />
            <path d="M56 44 C 64 40, 70 34, 80 30" stroke="rgba(223,44,47,0.12)" strokeWidth="0.16" fill="none" strokeDasharray="1.8 3" />
          </svg>
          <div className="pointer-events-none absolute left-[15%] top-[69%] h-14 w-14 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.08),_transparent_72%)] blur-2xl" />
          <div className="pointer-events-none absolute left-[33%] top-[49%] h-2.5 w-2.5 rounded-full border border-[color:var(--accent-main)]/25 bg-white/55" />
          <div className="pointer-events-none absolute left-[53%] top-[43%] h-2 w-2 rounded-full border border-black/10 bg-white/45" />
          <div className="pointer-events-none absolute left-[78%] top-[29%] h-2 w-2 rounded-full border border-[color:var(--accent-main)]/20 bg-white/45" />
          <div className="relative flex h-full flex-col px-12 py-10">
            <div className="max-w-[520px]">
              <div className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[#DF2C2F]">{slide.eyebrow}</div>
              <h2 className="font-display max-w-[470px] text-[3.05rem] font-bold leading-[0.94] tracking-[-0.065em] text-[#0f0f10]">
                {slide.headline}
              </h2>
              <p className="mt-5 max-w-[468px] text-[1.04rem] leading-7 text-[#433f3b]">{slide.subheadline}</p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3.5">
              {slide.bullets.map((bullet, index) => (
                <motion.div
                  key={bullet}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.05, duration: 0.26 }}
                  className="relative rounded-[20px] border border-black/10 bg-[rgba(255,255,255,0.58)] px-5 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.03)]"
                >
                  <div className="absolute left-5 top-0 h-px w-14 bg-[color:var(--accent-main)]" />
                  <div className="mb-2.5 h-px w-10 bg-[color:var(--accent-main)]/55" />
                  <div className="text-[0.98rem] font-medium leading-6 text-[#161719]">{bullet}</div>
                </motion.div>
              ))}
            </div>

            {slide.closingLine ? (
              <div className="mt-5 rounded-[20px] border border-[color:var(--accent-main)]/10 bg-[color:var(--accent-main)]/[0.045] px-5 py-3.5 text-[0.93rem] leading-6 text-[#332f2b]">
                {slide.closingLine}
              </div>
            ) : null}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-span-12 overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(4,4,4,0.98),rgba(0,0,0,0.98))] lg:col-span-[6]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_36%,rgba(223,44,47,0.12),transparent_18%),radial-gradient(circle_at_36%_68%,rgba(223,44,47,0.10),transparent_16%)]" />
          <div className="absolute inset-[26px] rounded-[26px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.012),rgba(255,255,255,0.004))]" />
          <FragmentedNetworkVisual />
        </motion.div>
      </div>
    </section>
  )
}

function ArchxSolutionArchitectureSlide({ slide }: { slide: ArchxSlide }) {
  const pillars = [
    {
      title: "Capital & Structuring",
      copy: "Estruturas para captação, proteção patrimonial, tokenização, securitização e acesso a mercados globais.",
      className: "left-[10%] top-[18%]",
    },
    {
      title: "Payments & Liquidity",
      copy: "Recebimento local, liquidação internacional, tesouraria global e trilhos operacionais integrados.",
      className: "right-[8%] top-[32%]",
    },
    {
      title: "Compliance & Governance",
      copy: "KYC, KYB, AML, reporting, monitoramento e disciplina regulatória como base da operação.",
      className: "left-[20%] bottom-[12%]",
    },
  ]

  return (
    <section className="relative h-full px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <div className="grid h-full grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 flex h-full flex-col justify-center rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.985),rgba(8,8,8,0.985))] px-12 py-12 lg:col-span-[5]"
        >
          <div className="max-w-[440px]">
            <div className="mb-6 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-main)]">{slide.eyebrow}</div>
            <h2 className="font-display max-w-[420px] text-[3.55rem] font-bold leading-[0.95] tracking-[-0.06em] text-white">
              {slide.headline}
            </h2>
            <p className="mt-6 max-w-[420px] text-[1.16rem] leading-8 text-white/68">{slide.subheadline}</p>
            {slide.body ? <p className="mt-5 max-w-[430px] text-[0.98rem] leading-7 text-white/50">{slide.body}</p> : null}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.48, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-span-12 overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(4,4,4,0.98),rgba(0,0,0,0.98))] lg:col-span-[7]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(223,44,47,0.1),transparent_20%),radial-gradient(circle_at_72%_28%,rgba(223,44,47,0.06),transparent_16%)]" />
          <div className="absolute inset-[28px] rounded-[26px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.012),rgba(255,255,255,0.004))]" />

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M49 48 C 36 38, 28 34, 20 27" stroke="rgba(255,255,255,0.14)" strokeWidth="0.22" fill="none" />
            <path d="M50 49 C 63 42, 71 39, 82 41" stroke="rgba(223,44,47,0.28)" strokeWidth="0.22" fill="none" />
            <path d="M48 51 C 40 61, 34 69, 31 78" stroke="rgba(255,255,255,0.12)" strokeWidth="0.22" fill="none" />
          </svg>

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.14),_transparent_72%)] blur-3xl" />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[color:var(--accent-main)]/25 bg-[linear-gradient(180deg,rgba(18,18,18,0.98),rgba(6,6,6,0.98))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_36px_rgba(0,0,0,0.35)]">
              <div className="text-center">
                <div className="text-[11px] uppercase tracking-[0.34em] text-[color:var(--accent-main)]">Core</div>
                <div className="mt-2 font-display text-xl font-semibold tracking-[0.18em] text-white">ARCHX</div>
              </div>
            </div>
          </div>

          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.06, duration: 0.28 }}
              className={cn(
                "absolute z-10 w-[34%] rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(17,17,17,0.94),rgba(10,10,10,0.92))] px-5 py-5 shadow-[0_14px_28px_rgba(0,0,0,0.24)] backdrop-blur-sm",
                pillar.className,
              )}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[color:var(--accent-main)]/90" />
                <div className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--accent-main)]">Layer</div>
              </div>
              <h3 className="max-w-[230px] text-[1.02rem] font-semibold leading-6 text-white">{pillar.title}</h3>
              <p className="mt-3 text-[0.9rem] leading-6 text-white/58">{pillar.copy}</p>
            </motion.div>
          ))}

          <div className="pointer-events-none absolute left-[16%] top-[26%] h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.08),_transparent_72%)] blur-3xl" />
          <div className="pointer-events-none absolute right-[18%] top-[38%] h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.08),_transparent_72%)] blur-3xl" />
          <div className="pointer-events-none absolute left-[30%] bottom-[16%] h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.07),_transparent_72%)] blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}

function FragmentedNetworkVisual() {
  const nodes = [
    { label: "BANK", left: "19%", top: "26%" },
    { label: "FX", left: "66%", top: "25%" },
    { label: "KYC", left: "46%", top: "49%" },
    { label: "WIRE", left: "24%", top: "68%" },
    { label: "TREAS", left: "71%", top: "66%" },
  ]

  return (
    <div className="relative h-full">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M19 26 C 30 28, 34 35, 42 42" stroke="rgba(255,255,255,0.12)" strokeWidth="0.22" fill="none" strokeDasharray="2.2 1.8" />
        <path d="M42 42 C 48 46, 47 49, 46 53" stroke="rgba(223,44,47,0.34)" strokeWidth="0.24" fill="none" />
        <path d="M46 53 C 55 50, 60 42, 66 25" stroke="rgba(255,255,255,0.12)" strokeWidth="0.22" fill="none" strokeDasharray="2.2 2.8" />
        <path d="M24 68 C 38 66, 49 63, 71 66" stroke="rgba(255,255,255,0.1)" strokeWidth="0.22" fill="none" strokeDasharray="2 2.6" />
        <path d="M24 68 C 28 60, 33 58, 39 57" stroke="rgba(223,44,47,0.28)" strokeWidth="0.22" fill="none" />
      </svg>

      <div className="absolute left-[14%] top-[20%] h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.11),_transparent_72%)] blur-3xl" />
      <div className="absolute right-[18%] top-[18%] h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.1),_transparent_72%)] blur-3xl" />
      <div className="absolute left-[34%] top-[48%] h-28 w-28 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.08),_transparent_72%)] blur-3xl" />

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 + index * 0.05, duration: 0.28 }}
          className="absolute"
          style={{ left: node.left, top: node.top }}
        >
          <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.14),_transparent_72%)]" />
          <div className="relative flex h-10 min-w-10 items-center justify-center rounded-full border border-white/8 bg-black/72 px-3 text-[10px] font-medium tracking-[0.2em] text-white/84 backdrop-blur-sm">
            {node.label}
          </div>
        </motion.div>
      ))}

      <div className="absolute inset-x-[18%] top-[33%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-[26%] bottom-[29%] h-px bg-gradient-to-r from-transparent via-[color:var(--accent-main)]/20 to-transparent" />
    </div>
  )
}

function BulletBlock({ slide }: { slide: ArchxSlide }) {
  const isLight = slide.theme === "dark-minimal"
  const cardClass = isLight
    ? "border-black/8 bg-black/[0.02] text-[color:var(--page-dark-text)]"
    : "border-white/7 bg-white/[0.03] text-[color:var(--primary-text)]"
  const subTextClass = isLight ? "text-[color:var(--page-dark-muted)]" : "text-[color:var(--secondary-text)]"

  if (slide.groups?.length) {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {slide.groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.24 }}
            className={cn("rounded-[22px] border px-4 py-5", cardClass)}
          >
            <div className={cn("text-[11px] uppercase tracking-[0.28em]", isLight ? "text-[color:var(--page-dark-muted)]" : "text-[color:var(--accent-main)]")}>
              {group.title}
            </div>
            <div className="mt-4 space-y-3">
              {group.items.map((item) => (
                <div key={item} className={cn("text-sm leading-6", isLight ? "text-[color:var(--page-dark-text)]" : "text-[color:var(--primary-text)]")}>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  if (slide.visualType === "table") {
    return (
      <div className={cn("overflow-hidden rounded-[24px] border", isLight ? "border-black/8 bg-black/[0.02]" : "border-white/8 bg-white/[0.02]")}>
        {slide.bullets.map((bullet, index) => {
          const [label, value] = bullet.split(" - ")
          return (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * index, duration: 0.24 }}
              className={cn("grid grid-cols-[1fr_auto] gap-4 px-5 py-4", index !== slide.bullets.length - 1 && (isLight ? "border-b border-black/8" : "border-b border-white/7"))}
            >
              <div className={cn("text-sm uppercase tracking-[0.18em]", subTextClass)}>{label}</div>
              <div className={cn("font-display text-lg font-semibold", isLight ? "text-[color:var(--page-dark-text)]" : "text-[color:var(--primary-text)]")}>{value ?? "-"}</div>
            </motion.div>
          )
        })}
      </div>
    )
  }

  if (slide.visualType === "cards" || slide.visualType === "grid") {
    const columns = slide.bullets.length >= 5 ? "md:grid-cols-3" : "md:grid-cols-2"
    return (
      <div className={cn("grid gap-4", columns)}>
        {slide.bullets.map((bullet, index) => (
          <motion.div
            key={bullet}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.24 }}
            className={cn("rounded-[22px] border px-4 py-5", cardClass)}
          >
            <div
              className={cn(
                "text-sm leading-6",
                isLight ? "text-[color:var(--page-dark-text)]" : "text-[color:var(--primary-text)]",
              )}
            >
              {bullet}
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  if (slide.visualType === "diagram" || slide.visualType === "map") {
    return (
      <div className="space-y-3">
        {slide.bullets.map((bullet, index) => (
          <motion.div
            key={bullet}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.24 }}
            className={cn("flex items-center justify-between rounded-[18px] border px-4 py-3", cardClass)}
          >
            <span className={cn("text-sm", isLight ? "text-[color:var(--page-dark-text)]" : "text-[color:var(--primary-text)]")}>{bullet}</span>
            <ArrowRight className="h-4 w-4 text-[color:var(--accent-main)]" />
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-3">
      {slide.bullets.map((bullet, index) => (
        <motion.div
          key={bullet}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * index, duration: 0.24 }}
          className={cn("rounded-full border px-4 py-2 text-sm", isLight ? "border-black/8 bg-black/[0.02] text-[color:var(--page-dark-muted)]" : "border-white/7 bg-white/[0.03] text-[color:var(--secondary-text)]")}
        >
          {bullet}
        </motion.div>
      ))}
    </div>
  )
}

function MetaCard({ label, value, light = false }: { label: string; value: string; light?: boolean }) {
  return (
    <div className={cn("rounded-[18px] border px-4 py-4", light ? "border-black/8 bg-black/[0.02]" : "border-white/7 bg-white/[0.03]")}>
      <div className={cn("text-[11px] uppercase tracking-[0.32em]", light ? "text-[color:var(--page-dark-muted)]" : "text-[color:var(--muted-text)]")}>{label}</div>
      <div className={cn("mt-2 text-sm leading-6", light ? "text-[color:var(--page-dark-muted)]" : "text-[color:var(--secondary-text)]")}>{value}</div>
    </div>
  )
}

function StatusBadge({ status }: { status: SlideContentStatus }) {
  const styles: Record<SlideContentStatus, string> = {
    "official-site": "border-emerald-400/18 bg-emerald-400/10 text-emerald-200",
    "proposed-offering": "border-amber-400/18 bg-amber-400/10 text-amber-200",
    hybrid: "border-cyan-400/18 bg-cyan-400/10 text-cyan-200",
  }

  const labels: Record<SlideContentStatus, string> = {
    "official-site": "Official Site",
    "proposed-offering": "Proposed Offering",
    hybrid: "Hybrid",
  }

  return <div className={cn("rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.24em]", styles[status])}>{labels[status]}</div>
}

function VisualPanel({ slide }: { slide: ArchxSlide }) {
  const isLight = slide.theme === "dark-minimal"
  return (
    <div className="relative h-full p-8">
      <div className={cn("absolute inset-8 rounded-[28px] border", isLight ? "border-black/8" : "border-white/8")} />
      <div className="absolute inset-x-12 top-12 flex items-center justify-between">
        <div className={cn("text-[11px] uppercase tracking-[0.34em]", isLight ? "text-[color:var(--page-dark-muted)]" : "text-[color:var(--muted-text)]")}>{slide.visualNotes.mediaHint ?? slide.eyebrow ?? "Archx"}</div>
        <VisualIcon visualType={slide.visualType} />
      </div>

      {slide.visualType === "hero" ? (
        <HeroPanel slide={slide} />
      ) : slide.visualType === "diagram" ? (
        <DiagramPanel slide={slide} />
      ) : slide.visualType === "map" ? (
        <MapPanel slide={slide} />
      ) : slide.visualType === "table" ? (
        <TablePanel slide={slide} />
      ) : (
        <GridPanel slide={slide} />
      )}
    </div>
  )
}

function VisualIcon({ visualType }: { visualType: SlideVisualType }) {
  const Icon =
    visualType === "diagram"
      ? Sparkles
      : visualType === "map"
        ? Landmark
        : visualType === "table"
          ? Building2
          : ShieldCheck

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] text-[color:var(--accent-main)]">
      <Icon className="h-4 w-4" />
    </div>
  )
}

function HeroPanel({ slide }: { slide: ArchxSlide }) {
  return (
    <>
      <div className="absolute left-12 right-12 top-28 rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6">
        <div className="font-display text-4xl font-bold tracking-[-0.04em] text-[color:var(--primary-text)]">{String(slide.order).padStart(2, "0")}</div>
        <div className="mt-4 text-sm leading-7 text-[color:var(--secondary-text)]">{slide.visualNotes.emphasis ?? slide.subheadline}</div>
      </div>
      <div className="absolute bottom-12 left-12 right-12 grid grid-cols-2 gap-4">
        {slide.bullets.map((bullet) => (
          <div key={bullet} className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-5 text-sm text-[color:var(--primary-text)]">
            {bullet}
          </div>
        ))}
      </div>
    </>
  )
}

function DiagramPanel({ slide }: { slide: ArchxSlide }) {
  return (
    <>
      <div className="absolute left-1/2 top-[26%] -translate-x-1/2 rounded-full border border-[color:var(--accent-main)]/20 bg-[color:var(--accent-soft)] px-5 py-3 text-sm text-[color:var(--primary-text)]">
        {slide.headline}
      </div>
      {slide.bullets.map((bullet, index) => {
        const positions = [
          { left: "11%", top: "54%" },
          { left: "56%", top: "48%" },
          { left: "28%", top: "74%" },
        ]
        const pos = positions[index] ?? { left: "58%", top: "74%" }
        return (
          <div
            key={bullet}
            className="absolute rounded-[20px] border border-white/8 bg-[rgba(12,12,12,0.94)] px-4 py-4 text-sm text-[color:var(--primary-text)]"
            style={pos}
          >
            {bullet}
          </div>
        )
      })}
      <svg className="absolute inset-0 h-full w-full">
        <path d="M330 140 L 175 260" stroke="rgba(255,255,255,0.18)" fill="none" />
        <path d="M330 140 L 475 235" stroke="rgba(223,44,47,0.30)" fill="none" />
        <path d="M330 140 L 300 360" stroke="rgba(255,255,255,0.18)" fill="none" />
      </svg>
    </>
  )
}

function MapPanel({ slide }: { slide: ArchxSlide }) {
  return (
    <>
      <div className="absolute inset-12 rounded-[24px] bg-[radial-gradient(circle_at_35%_30%,rgba(223,44,47,0.10),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />
      {slide.bullets.map((bullet, index) => {
        const points = [
          { name: "BR", left: "26%", top: "60%" },
          { name: "US", left: "18%", top: "33%" },
          { name: "UAE", left: "66%", top: "40%" },
          { name: "KY", left: "31%", top: "48%" },
          { name: "SA", left: "69%", top: "50%" },
        ]
        const point = points[index] ?? { name: "XX", left: "50%", top: "50%" }
        return (
          <div key={bullet} className="absolute" style={{ left: point.left, top: point.top }}>
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.18),_transparent_72%)]" />
            <div className="relative flex h-9 min-w-9 items-center justify-center rounded-full border border-[color:var(--accent-main)]/24 bg-[rgba(6,8,22,0.86)] px-3 text-xs font-semibold tracking-[0.18em] text-[color:var(--primary-text)]">
              {point.name}
            </div>
          </div>
        )
      })}
    </>
  )
}

function TablePanel({ slide }: { slide: ArchxSlide }) {
  return (
    <div className={cn("absolute inset-x-12 top-24 overflow-hidden rounded-[24px] border", slide.theme === "dark-minimal" ? "border-black/8 bg-black/[0.02]" : "border-white/8 bg-white/[0.02]")}>
      {slide.bullets.map((bullet, index) => {
        const [label, value] = bullet.split(" - ")
        return (
          <div key={bullet} className={cn("grid grid-cols-[1fr_auto] gap-4 px-5 py-4", index !== slide.bullets.length - 1 && (slide.theme === "dark-minimal" ? "border-b border-black/8" : "border-b border-white/7"))}>
            <div className={cn("text-sm uppercase tracking-[0.18em]", slide.theme === "dark-minimal" ? "text-[color:var(--page-dark-muted)]" : "text-[color:var(--secondary-text)]")}>{label}</div>
            <div className={cn("font-display text-lg font-semibold", slide.theme === "dark-minimal" ? "text-[color:var(--page-dark-text)]" : "text-[color:var(--primary-text)]")}>{value ?? "-"}</div>
          </div>
        )
      })}
    </div>
  )
}

function GridPanel({ slide }: { slide: ArchxSlide }) {
  const isLight = slide.theme === "dark-minimal"
  const columns = slide.bullets.length <= 4 ? "grid-cols-2" : "grid-cols-3"
  return (
    <div className={cn("absolute left-12 right-12 top-24 grid gap-4", columns)}>
      {slide.bullets.map((bullet) => (
        <div key={bullet} className={cn("rounded-[20px] border px-4 py-5 text-sm leading-6", isLight ? "border-black/8 bg-black/[0.02] text-[color:var(--page-dark-text)]" : "border-white/8 bg-white/[0.03] text-[color:var(--primary-text)]")}>
          {bullet}
        </div>
      ))}
    </div>
  )
}

function ArchxSolutionArchitectureSlideV2({ slide }: { slide: ArchxSlide }) {
  const pillars = [
    {
      title: "Capital & Structuring",
      copy: "Captacao, protecao patrimonial, tokenizacao e acesso a mercados globais.",
      className: "left-[7%] top-[12%]",
    },
    {
      title: "Payments & Liquidity",
      copy: "Recebimento local, liquidacao internacional e tesouraria global integrada.",
      className: "right-[7%] top-[25%]",
    },
    {
      title: "Compliance & Governance",
      copy: "KYC, KYB, AML, reporting e disciplina regulatoria como base da operacao.",
      className: "left-[28%] bottom-[10%]",
    },
  ]

  return (
    <section className="relative h-full px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <div className="grid h-full grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 flex h-full flex-col justify-center rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.985),rgba(8,8,8,0.985))] px-12 py-12 lg:col-span-5"
        >
          <div className="max-w-[400px]">
            <div className="mb-6 text-[12px] font-medium uppercase tracking-[0.36em] text-white/58">{slide.eyebrow}</div>
            <h2 className="font-display max-w-[380px] text-[3.08rem] font-bold leading-[0.95] tracking-[-0.065em] text-white">
              <span className="block">Uma Arquitetura</span>
              <span className="block">Financeira Integrada</span>
            </h2>
            <p className="mt-6 max-w-[360px] text-[1.08rem] leading-8 text-white/68">{slide.subheadline}</p>
            {slide.body ? <p className="mt-5 max-w-[380px] text-[0.96rem] leading-7 text-white/52">{slide.body}</p> : null}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.48, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-span-12 overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(4,4,4,0.98),rgba(0,0,0,0.98))] lg:col-span-7"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(223,44,47,0.11),transparent_20%),radial-gradient(circle_at_73%_27%,rgba(223,44,47,0.06),transparent_16%)]" />
          <div className="absolute inset-[28px] rounded-[26px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.012),rgba(255,255,255,0.004))]" />

          <div className="absolute inset-[34px]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M50 48 C 36 33, 24 24, 17 20" stroke="rgba(255,255,255,0.14)" strokeWidth="0.22" fill="none" />
              <path d="M52 48 C 64 40, 74 35, 86 33" stroke="rgba(223,44,47,0.24)" strokeWidth="0.22" fill="none" />
              <path d="M49 53 C 44 65, 39 76, 31 82" stroke="rgba(255,255,255,0.12)" strokeWidth="0.22" fill="none" />
            </svg>

            <div className="absolute left-1/2 top-[48%] z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.18),_transparent_72%)] blur-3xl" />
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-[color:var(--accent-main)]/30 bg-[linear-gradient(180deg,rgba(20,20,20,0.99),rgba(6,6,6,0.99))] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_22px_44px_rgba(0,0,0,0.38)]">
                <div className="text-center">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--accent-main)]">Core</div>
                  <div className="mt-2 font-display text-[1.3rem] font-semibold tracking-[0.18em] text-white">ARCHX</div>
                </div>
              </div>
            </div>

            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.06, duration: 0.28 }}
                className={cn(
                  "absolute z-10 w-[30%] rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(17,17,17,0.94),rgba(10,10,10,0.92))] px-5 py-5 shadow-[0_14px_28px_rgba(0,0,0,0.24)] backdrop-blur-sm",
                  pillar.className,
                )}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[color:var(--accent-main)]/90" />
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--accent-main)]">
                    Pilar {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="max-w-[250px] text-[1.02rem] font-semibold leading-6 text-white">{pillar.title}</h3>
                <p className="mt-3.5 text-[0.88rem] leading-[1.7] text-white/58">{pillar.copy}</p>
              </motion.div>
            ))}
          </div>

          <div className="pointer-events-none absolute left-[16%] top-[24%] h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.08),_transparent_72%)] blur-3xl" />
          <div className="pointer-events-none absolute right-[18%] top-[34%] h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.08),_transparent_72%)] blur-3xl" />
          <div className="pointer-events-none absolute left-[31%] bottom-[16%] h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.07),_transparent_72%)] blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}

function ArchxCapitalStructuringSlide({ slide }: { slide: ArchxSlide }) {
  const capabilityNotes = [
    "Estruturas digitais com padrão institucional.",
    "Empacotamento e distribuição de ativos.",
    "Acesso estratégico a captação internacional.",
    "Arquitetura patrimonial e bancária global.",
    "Veículos flexíveis para capital sofisticado.",
  ]

  return (
    <section className="relative h-full px-8 py-8">
      <div className="grid h-full grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 flex h-full flex-col justify-center rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.985),rgba(8,8,8,0.985))] px-12 py-12 lg:col-span-6"
        >
          <div className="max-w-[470px]">
            <div className="mb-6 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-main)]">{slide.eyebrow}</div>
            <h2 className="font-display max-w-[420px] text-[3.2rem] font-bold leading-[1.02] tracking-[-0.06em] text-white">
              {slide.headline}
            </h2>
            <p className="mt-6 max-w-[430px] text-[1.08rem] leading-8 text-white/68">{slide.subheadline}</p>
            {slide.body ? <p className="mt-5 max-w-[440px] text-[0.98rem] leading-7 text-white/52">{slide.body}</p> : null}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.48, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-span-12 overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(4,4,4,0.98),rgba(0,0,0,0.98))] lg:col-span-6"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_24%,rgba(223,44,47,0.1),transparent_18%),radial-gradient(circle_at_34%_72%,rgba(223,44,47,0.06),transparent_16%)]" />
          <div className="absolute inset-[28px] rounded-[26px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.012),rgba(255,255,255,0.004))]" />

          <div className="relative grid h-full grid-cols-2 gap-5 px-10 py-10">
            {slide.bullets.map((bullet, index) => (
              <motion.div
                key={bullet}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.05, duration: 0.28 }}
                className={cn(
                  "group relative rounded-[24px] border border-white/10 bg-white/[0.05] px-5 py-5 shadow-[0_14px_28px_rgba(0,0,0,0.22)] backdrop-blur-[8px]",
                  index === 4 ? "col-span-2" : "",
                )}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent-main)]/55 to-transparent" />
                <div className="mb-4 h-[2px] w-4 bg-[color:var(--accent-main)] shadow-[0_0_40px_rgba(223,44,47,0.08)]" />
                <div className="max-w-[260px] text-[1rem] font-semibold leading-6 text-white">{bullet}</div>
                <div className="mt-3 max-w-[270px] text-[0.86rem] leading-6 text-white/44">{capabilityNotes[index]}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ArchxPaymentsLiquiditySlide({ slide }: { slide: ArchxSlide }) {
  const groups = [
    {
      title: "Recebimento Local",
      items: ["Coleta PIX", "Máquina de cartão", "Checkout com cartão"],
    },
    {
      title: "Transferências Internacionais",
      items: ["Pagamentos globais", "Wire / SWIFT", "Outras moedas"],
    },
    {
      title: "Liquidez Digital",
      items: ["Compra de stablecoin"],
    },
  ]

  const flowNodes = [
    {
      title: "Local Collection",
      copy: "PIX, cartão presencial e checkout.",
      className: "left-[8%] top-[18%]",
    },
    {
      title: "Global Transfers",
      copy: "Pagamentos globais, Wire / SWIFT e outras moedas.",
      className: "right-[7%] top-[24%]",
    },
    {
      title: "Digital Liquidity",
      copy: "Compra de stablecoin e trilhos digitais integrados.",
      className: "left-[27%] bottom-[22%]",
    },
  ]

  return (
    <section className="relative h-full px-8 py-8">
      <div className="grid h-full grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 flex h-full flex-col justify-start rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.985),rgba(8,8,8,0.985))] px-8 py-7 lg:col-span-5"
        >
          <div className="max-w-[372px] pt-3">
            <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-main)]">{slide.eyebrow}</div>
            <h2 className="font-display max-w-[288px] text-[2.22rem] font-bold leading-[0.95] tracking-[-0.06em] text-white">
              {slide.headline}
            </h2>
            <p className="mt-3 max-w-[340px] text-[0.88rem] leading-5 text-white/68">{slide.subheadline}</p>
            {slide.body ? <p className="mt-2.5 max-w-[350px] text-[0.81rem] leading-5 text-white/52">{slide.body}</p> : null}
          </div>

          <div className="mt-4 space-y-2">
            {groups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.05, duration: 0.26 }}
                className="rounded-[16px] border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-[6px]"
              >
                <div className="mb-1.5 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[color:var(--accent-main)]/90" />
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[color:var(--accent-main)]">{group.title}</div>
                </div>
                <div className="space-y-0.5">
                  {group.items.map((item) => (
                    <div key={item} className="text-[0.8rem] leading-5 text-white/80">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {slide.closingLine ? (
            <div className="mt-2 rounded-[14px] border border-[color:var(--accent-main)]/10 bg-[color:var(--accent-main)]/[0.045] px-4 py-1.5 text-[0.76rem] leading-5 text-white/72">
              {slide.closingLine}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.48, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-span-12 overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(4,4,4,0.98),rgba(0,0,0,0.98))] lg:col-span-7"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_48%,rgba(223,44,47,0.11),transparent_20%),radial-gradient(circle_at_76%_26%,rgba(223,44,47,0.06),transparent_16%)]" />
          <div className="absolute inset-[28px] rounded-[26px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.012),rgba(255,255,255,0.004))]" />

          <div className="absolute inset-[34px]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M48 47 C 39 39, 33 34, 25 29" stroke="rgba(255,255,255,0.14)" strokeWidth="0.22" fill="none" />
              <path d="M52 48 C 61 45, 67 42, 73 39" stroke="rgba(223,44,47,0.24)" strokeWidth="0.22" fill="none" />
              <path d="M48 53 C 44 61, 41 67, 37 73" stroke="rgba(255,255,255,0.12)" strokeWidth="0.22" fill="none" />
            </svg>

            <div className="absolute left-1/2 top-[48%] z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.16),_transparent_72%)] blur-3xl" />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[color:var(--accent-main)]/28 bg-[linear-gradient(180deg,rgba(20,20,20,0.99),rgba(6,6,6,0.99))] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_40px_rgba(0,0,0,0.35)]">
                <div className="text-center">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--accent-main)]">Flow</div>
                  <div className="mt-2 font-display text-[1.18rem] font-semibold tracking-[0.14em] text-white">ARCHX</div>
                </div>
              </div>
            </div>

            {flowNodes.map((node, index) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.06, duration: 0.28 }}
                className={cn(
                  "absolute z-10 w-[30%] rounded-[24px] border border-white/10 bg-white/[0.05] px-5 py-4 shadow-[0_14px_28px_rgba(0,0,0,0.24)] backdrop-blur-[8px]",
                  node.className,
                )}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[color:var(--accent-main)]/90" />
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--accent-main)]">
                    {node.title}
                  </div>
                </div>
                <h3 className="max-w-[240px] text-[1rem] font-semibold leading-6 text-white">{node.title}</h3>
                <p className="mt-2.5 text-[0.84rem] leading-[1.55] text-white/58">{node.copy}</p>
              </motion.div>
            ))}
          </div>

          <div className="pointer-events-none absolute left-[15%] top-[22%] h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.08),_transparent_72%)] blur-3xl" />
          <div className="pointer-events-none absolute right-[17%] top-[31%] h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.08),_transparent_72%)] blur-3xl" />
          <div className="pointer-events-none absolute left-[30%] bottom-[15%] h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.07),_transparent_72%)] blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}

function ArchxLocalCollectionSlide({ slide }: { slide: ArchxSlide }) {
  const capabilities = slide.bullets

  const flowSteps = [
    { title: "Coleta PIX", className: "left-[8%] top-[18%]" },
    { title: "Cartão Presencial", className: "left-[38%] top-[34%]" },
    { title: "Checkout com Cartão", className: "left-[66%] top-[50%]" },
    { title: "Conciliação & Preparação", className: "left-[46%] top-[70%]" },
  ]

  return (
    <section className="relative h-full px-8 py-8">
      <div className="grid h-full grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 flex h-full flex-col justify-center rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,#f5f0e8,#efe8de)] px-10 py-10 shadow-[0_18px_44px_rgba(0,0,0,0.08)] lg:col-span-5"
        >
          <div className="max-w-[400px]">
            <div className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-main)]">{slide.eyebrow}</div>
            <h2 className="font-display max-w-[360px] text-[2.8rem] font-bold leading-[0.98] tracking-[-0.055em] text-[#0f0f10]">
              {slide.headline}
            </h2>
            <p className="mt-5 max-w-[380px] text-[0.96rem] leading-7 text-[#3f3a35]">{slide.subheadline}</p>
            {slide.body ? <p className="mt-4 max-w-[390px] text-[0.88rem] leading-6 text-[#5b554f]">{slide.body}</p> : null}
          </div>

          <div className="mt-5 rounded-[20px] border border-black/10 bg-white/55 px-4 py-4">
            <div className="grid grid-cols-2 gap-x-5 gap-y-2">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-[0.84rem] leading-5 text-[#18191c]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-main)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {slide.closingLine ? (
            <div className="mt-4 rounded-[16px] border border-[color:var(--accent-main)]/14 bg-[color:var(--accent-main)]/[0.06] px-4 py-2.5 text-[0.8rem] leading-5 text-[#2f2a25]">
              {slide.closingLine}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.48, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-span-12 overflow-hidden rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,#f3efe8,#ece7df)] lg:col-span-7"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.024)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(223,44,47,0.1),transparent_22%),radial-gradient(circle_at_35%_70%,rgba(223,44,47,0.06),transparent_18%)]" />
          <div className="absolute inset-[26px] rounded-[24px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.18))]" />
          <div className="absolute inset-x-[26px] top-[26px] h-px bg-[color:var(--accent-main)]/38" />

          <div className="absolute inset-[34px]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M16 23 C 30 28, 38 34, 46 42" stroke="rgba(15,17,20,0.24)" strokeWidth="0.28" fill="none" />
              <path d="M46 42 C 56 48, 64 54, 74 60" stroke="rgba(15,17,20,0.24)" strokeWidth="0.28" fill="none" />
              <path d="M74 60 C 70 67, 64 72, 57 78" stroke="rgba(223,44,47,0.34)" strokeWidth="0.28" fill="none" />
              <path d="M57 78 C 66 82, 76 84, 89 84" stroke="rgba(223,44,47,0.42)" strokeWidth="0.3" fill="none" />
            </svg>

            {flowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.05, duration: 0.24 }}
                className={cn(
                  "absolute rounded-[18px] border border-black/10 bg-white/65 px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.05)] backdrop-blur-[4px]",
                  step.className,
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-main)]" />
                  <span className="text-[0.82rem] font-semibold leading-5 text-[#121317]">{step.title}</span>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.28, duration: 0.24 }}
              className="absolute right-[2%] top-[79%] rounded-[18px] border border-[color:var(--accent-main)]/35 bg-white/80 px-4 py-3 shadow-[0_0_40px_rgba(223,44,47,0.08)]"
            >
              <div className="text-[0.72rem] uppercase tracking-[0.16em] text-[color:var(--accent-main)]">Ready</div>
              <div className="mt-1 text-[0.86rem] font-semibold text-[#131418]">Global Operations Ready</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ArchxPaymentRailsSlide({ slide }: { slide: ArchxSlide }) {
  const groups = slide.groups ?? []
  const railBlocks = [
    {
      title: "Local Rails",
      copy: "PIX, cartao e checkout",
      className: "left-[8%] top-[16%]",
    },
    {
      title: "Bank Rails",
      copy: "Wire e SWIFT",
      className: "right-[7%] top-[26%]",
    },
    {
      title: "Digital Rails",
      copy: "Stablecoins e liquidacao global",
      className: "left-[26%] bottom-[14%]",
    },
  ]

  return (
    <section className="relative h-full px-8 py-8">
      <div className="grid h-full grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 flex h-full flex-col justify-center rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.985),rgba(8,8,8,0.985))] px-10 py-10 lg:col-span-6"
        >
          <div className="max-w-[430px]">
            <div className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-main)]">{slide.eyebrow}</div>
            <h2 className="font-display max-w-[400px] text-[2.7rem] font-bold leading-[0.98] tracking-[-0.06em] text-white">{slide.headline}</h2>
            <p className="mt-4 max-w-[410px] text-[0.95rem] leading-7 text-white/68">{slide.subheadline}</p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {groups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.05, duration: 0.25 }}
                className="rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-[6px]"
              >
                <div className="mb-2 flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-main)]" />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[color:var(--accent-main)]">{group.title}</span>
                </div>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <div key={item} className="text-[0.82rem] leading-5 text-white/80">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {slide.closingLine ? (
            <div className="mt-4 rounded-[16px] border border-[color:var(--accent-main)]/12 bg-[color:var(--accent-main)]/[0.045] px-4 py-2.5 text-[0.82rem] leading-5 text-white/74">
              {slide.closingLine}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.48, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-span-12 overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(4,4,4,0.98),rgba(0,0,0,0.98))] lg:col-span-6"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,rgba(223,44,47,0.12),transparent_20%),radial-gradient(circle_at_78%_24%,rgba(223,44,47,0.06),transparent_16%)]" />
          <div className="absolute inset-[26px] rounded-[24px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.012),rgba(255,255,255,0.004))]" />

          <div className="absolute inset-[34px]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M49 47 C 37 37, 28 30, 20 25" stroke="rgba(255,255,255,0.14)" strokeWidth="0.22" fill="none" />
              <path d="M52 49 C 64 44, 73 40, 82 37" stroke="rgba(223,44,47,0.26)" strokeWidth="0.22" fill="none" />
              <path d="M49 53 C 44 63, 40 71, 34 78" stroke="rgba(255,255,255,0.12)" strokeWidth="0.22" fill="none" />
            </svg>

            <div className="absolute left-1/2 top-[48%] z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute left-1/2 top-1/2 h-42 w-42 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.16),_transparent_72%)] blur-3xl" />
              <div className="relative flex h-27 w-27 items-center justify-center rounded-full border border-[color:var(--accent-main)]/30 bg-[linear-gradient(180deg,rgba(20,20,20,0.99),rgba(6,6,6,0.99))] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_40px_rgba(0,0,0,0.35)]">
                <div className="text-center">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--accent-main)]">Core</div>
                  <div className="mt-2 font-display text-[1.06rem] font-semibold tracking-[0.14em] text-white">ARCHX RAILS</div>
                </div>
              </div>
            </div>

            {railBlocks.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.06, duration: 0.26 }}
                className={cn(
                  "absolute z-10 w-[31%] rounded-[20px] border border-white/10 bg-white/[0.05] px-4 py-3 shadow-[0_12px_24px_rgba(0,0,0,0.24)] backdrop-blur-[8px]",
                  block.className,
                )}
              >
                <div className="mb-2 text-[0.9rem] font-semibold text-white">{block.title}</div>
                <div className="text-[0.8rem] leading-5 text-white/62">{block.copy}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ArchxComplianceSlide({ slide, isRtl = false }: { slide: ArchxSlide; isRtl?: boolean }) {
  const textDirection = isRtl ? "rtl" : "ltr"
  const textAlign = isRtl ? "text-right" : "text-left"

  const controlNodes = [
    { title: "KYC / KYB", className: "left-[8%] top-[14%] sm:left-[9%] sm:top-[18%]" },
    { title: "AML / CFT", className: "right-[8%] top-[16%] sm:right-[9%] sm:top-[20%]" },
    { title: "LGPD / GDPR", className: "left-[9%] bottom-[24%] sm:left-[12%] sm:bottom-[16%]" },
    { title: "Audit & Reporting", className: "right-[7%] bottom-[26%] sm:right-[6%] sm:bottom-[24%]" },
    { title: "Regulatory Structures", className: "left-1/2 -translate-x-1/2 bottom-[8%] sm:left-[56%] sm:translate-x-0 sm:bottom-[8%]" },
  ]

  return (
    <section className="relative h-full px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <div className="grid h-full grid-cols-12 gap-3 sm:gap-4 lg:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "col-span-12 flex min-h-0 flex-col overflow-hidden rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.985),rgba(8,8,8,0.985))] px-3 py-3 sm:px-5 sm:py-5 lg:col-span-5 lg:h-full lg:rounded-[30px] lg:px-10 lg:py-9",
            textAlign,
          )}
          dir={textDirection}
        >
          <div className="max-w-[420px]">
            <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--accent-main)] sm:text-[11px] lg:mb-5 lg:text-[12px] lg:tracking-[0.18em]">{slide.eyebrow}</div>
            <h2 className="font-display max-w-[360px] text-[1.55rem] font-bold leading-[1] tracking-[-0.03em] text-white sm:text-[1.9rem] lg:text-[2.62rem] lg:tracking-[-0.06em]">{slide.headline}</h2>
            <p className="mt-3 max-w-[400px] text-[0.82rem] leading-6 text-white/74 sm:text-[0.9rem] lg:mt-4 lg:text-[0.95rem] lg:leading-7 lg:text-white/68">{slide.subheadline}</p>
            {slide.body ? <p className="mt-2.5 hidden max-w-[410px] text-[0.76rem] leading-5 text-white/62 sm:block sm:text-[0.82rem] sm:leading-6 lg:mt-4 lg:text-[0.86rem] lg:text-white/52">{slide.body}</p> : null}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-1.5 sm:gap-2 lg:mt-5 lg:gap-2.5">
            {slide.bullets.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.04, duration: 0.24 }}
                className={cn(
                  "rounded-[14px] border border-white/12 bg-white/[0.04] px-3 py-2 text-[0.72rem] leading-4 text-white/84 backdrop-blur-[6px] sm:text-[0.78rem] sm:leading-5 lg:rounded-[16px] lg:px-4 lg:py-2.5 lg:text-[0.82rem]",
                  index === 4 ? "col-span-2" : "",
                )}
              >
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-main)]" />
                  <span>{item}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {slide.closingLine ? (
            <div className="mt-2 rounded-[14px] border border-[color:var(--accent-main)]/14 bg-[color:var(--accent-main)]/[0.05] px-3 py-2 text-[0.7rem] leading-4 text-white/78 sm:text-[0.78rem] sm:leading-5 lg:mt-4 lg:rounded-[16px] lg:px-4 lg:py-2.5 lg:text-[0.8rem] lg:text-white/74">
              {slide.closingLine}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.48, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-span-12 min-h-[190px] overflow-hidden rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,rgba(4,4,4,0.98),rgba(0,0,0,0.98))] sm:min-h-[220px] lg:col-span-7 lg:min-h-0 lg:rounded-[30px]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_48%,rgba(223,44,47,0.12),transparent_20%),radial-gradient(circle_at_78%_26%,rgba(223,44,47,0.06),transparent_16%)]" />
          <div className="absolute inset-[12px] rounded-[16px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.012),rgba(255,255,255,0.004))] sm:inset-[18px] lg:inset-[26px] lg:rounded-[24px]" />

          <div className="absolute inset-[16px] sm:inset-[24px] lg:inset-[34px]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M49 48 C 38 37, 28 30, 20 24" stroke="rgba(255,255,255,0.18)" strokeWidth="0.22" fill="none" />
              <path d="M52 48 C 64 40, 73 34, 84 28" stroke="rgba(255,255,255,0.18)" strokeWidth="0.22" fill="none" />
              <path d="M49 52 C 42 60, 34 66, 24 76" stroke="rgba(255,255,255,0.17)" strokeWidth="0.22" fill="none" />
              <path d="M51 52 C 62 60, 74 64, 86 68" stroke="rgba(255,255,255,0.17)" strokeWidth="0.22" fill="none" />
              <path d="M51 54 C 56 66, 60 74, 67 82" stroke="rgba(223,44,47,0.34)" strokeWidth="0.24" fill="none" />
            </svg>

            <div className="absolute left-1/2 top-[48%] z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.16),_transparent_72%)] blur-3xl" />
              <div className="relative flex h-[6.2rem] w-[6.2rem] items-center justify-center rounded-full border border-[color:var(--accent-main)]/40 bg-[linear-gradient(180deg,rgba(20,20,20,0.99),rgba(6,6,6,0.99))] shadow-[0_0_0_1px_rgba(255,255,255,0.055),0_20px_40px_rgba(0,0,0,0.35)] sm:h-[7rem] sm:w-[7rem] lg:h-[8.5rem] lg:w-[8.5rem]">
                <div className="text-center">
                  <div className="text-[9px] font-medium uppercase tracking-[0.16em] text-[color:var(--accent-main)] sm:text-[10px] lg:text-[11px] lg:tracking-[0.18em]">Core</div>
                  <div className="mt-1 font-display text-[0.72rem] font-semibold leading-3 tracking-[0.08em] text-white sm:text-[0.8rem] sm:leading-4 lg:mt-1.5 lg:text-[0.9rem] lg:tracking-[0.09em]">
                    <div>ARCHX</div>
                    <div className="text-[0.54rem] tracking-[0.1em] text-white/84 sm:text-[0.58rem] lg:text-[0.68rem] lg:tracking-[0.13em]">CONTROL LAYER</div>
                  </div>
                </div>
              </div>
            </div>

            {controlNodes.map((node, index) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.05, duration: 0.24 }}
                className={cn(
                  "absolute rounded-[12px] border border-white/10 bg-white/[0.05] px-2.5 py-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.22)] backdrop-blur-[8px] sm:px-3 sm:py-2 lg:rounded-[16px] lg:px-3.5 lg:py-2.5",
                  node.className,
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-main)]" />
                  <span
                    className={cn(
                      "text-[0.62rem] font-medium leading-4 text-white/85 sm:text-[0.7rem] lg:text-[0.78rem] lg:leading-5",
                      index === 4 ? "text-[0.56rem] sm:text-[0.66rem] lg:text-[0.74rem]" : "",
                    )}
                  >
                    {node.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ArchxGlobalPresenceSlide({ slide }: { slide: ArchxSlide }) {
  const jurisdictions = slide.bullets.map((item) => {
    const [country, ...rest] = item.split(" - ")
    return {
      country: country.trim(),
      role: rest.join(" - ").trim(),
    }
  })

  const hubs = [
    { code: "US", className: "left-[14%] top-[18%]" },
    { code: "KY", className: "left-[24%] top-[43%]" },
    { code: "BR", className: "left-[18%] bottom-[18%]" },
    { code: "UAE", className: "right-[16%] top-[24%]" },
    { code: "SA", className: "right-[14%] bottom-[24%]" },
  ]

  return (
    <section className="relative h-full px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="h-full overflow-hidden rounded-[32px] border border-black/8 bg-[linear-gradient(180deg,#f3eee6,#ece6dd)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >
        <div className="relative grid h-full gap-5 px-9 py-8 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)]">
          <div className="flex h-full min-h-0 flex-col">
            <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#DF2C2F]">{slide.eyebrow}</div>
            <h2 className="font-display max-w-[430px] text-[2.72rem] font-bold leading-[0.95] tracking-[-0.05em] text-[#111115]">
              <span className="block">Cinco Jurisdicoes</span>
              <span className="block">Estrategicas</span>
            </h2>
            <p className="mt-3.5 max-w-[510px] text-[0.98rem] leading-7 text-[#46413b]">{slide.subheadline}</p>
            {slide.body ? <p className="mt-2.5 max-w-[530px] text-[0.9rem] leading-6 text-[#5b554f]">{slide.body}</p> : null}

            <div className="mt-4 space-y-2.5">
              {jurisdictions.map((item, index) => (
                <motion.div
                  key={item.country}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.05, duration: 0.26 }}
                  className="rounded-[14px] border border-black/9 bg-white/45 px-3.5 py-2"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#DF2C2F]" />
                    <div className="text-[0.86rem] leading-[1.45] text-[#34302c]">
                      <span className="font-semibold text-[#151519]">{item.country}</span>
                      {item.role ? <span className="text-[#4f4944]"> - {item.role}</span> : null}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-full overflow-hidden rounded-[26px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(248,242,234,0.72))]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:44px_44px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(223,44,47,0.11),transparent_30%),radial-gradient(circle_at_18%_20%,rgba(223,44,47,0.06),transparent_22%)]" />

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M15 20 C 23 29, 26 36, 26 42" stroke="rgba(17,17,21,0.22)" strokeWidth="0.25" fill="none" />
              <path d="M26 42 C 23 55, 20 64, 17 78" stroke="rgba(17,17,21,0.2)" strokeWidth="0.25" fill="none" />
              <path d="M26 42 C 44 35, 63 28, 82 24" stroke="rgba(223,44,47,0.28)" strokeWidth="0.26" fill="none" />
              <path d="M82 24 C 84 38, 84 51, 84 64" stroke="rgba(17,17,21,0.2)" strokeWidth="0.25" fill="none" />
              <path d="M17 78 C 39 76, 62 72, 84 64" stroke="rgba(17,17,21,0.16)" strokeWidth="0.22" fill="none" />
            </svg>

            {hubs.map((hub, index) => (
              <motion.div
                key={hub.code}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.05, duration: 0.24 }}
                className={cn(
                  "absolute rounded-full border border-black/18 bg-[linear-gradient(180deg,rgba(20,20,22,0.94),rgba(10,10,11,0.94))] px-3.5 py-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.22)]",
                  hub.className,
                )}
              >
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white">{hub.code}</div>
              </motion.div>
            ))}

            <div className="absolute right-6 top-5 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#635d57]">ARCHX GLOBAL</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function ArchxClientProfileSlide({ slide }: { slide: ArchxSlide }) {
  const clusters = [
    {
      title: "Operacao",
      items: ["Empresas em expansao", "Holdings internacionais"],
    },
    {
      title: "Capital",
      items: ["Investidores qualificados", "Capital institucional"],
    },
    {
      title: "Gestao",
      items: ["Family offices", "Gestoras"],
    },
  ]

  return (
    <section className="relative h-full px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="h-full overflow-hidden rounded-[32px] border border-black/8 bg-[linear-gradient(180deg,#f3eee6,#ece6dd)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >
        <div className="relative grid h-full gap-5 px-9 py-8 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)]">
          <div className="flex h-full min-h-0 flex-col pb-8">
            <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#DF2C2F]">{slide.eyebrow}</div>
            <h2 className="font-display max-w-[500px] text-[2.66rem] font-bold leading-[0.95] tracking-[-0.05em] text-[#111115]">{slide.headline}</h2>
            <p className="mt-3.5 max-w-[520px] text-[0.99rem] leading-7 text-[#46413b]">{slide.subheadline}</p>
            {slide.body ? <p className="mt-2.5 max-w-[510px] text-[0.89rem] leading-6 text-[#5b554f]">{slide.body}</p> : null}

            {slide.closingLine ? (
              <div className="mt-4 max-w-[520px] rounded-[14px] border border-black/10 bg-white/38 px-4 py-2.5 text-[0.83rem] leading-5 text-[#3a3530]">
                {slide.closingLine}
              </div>
            ) : null}
          </div>

          <div className="relative h-full min-h-0 rounded-[26px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(248,242,234,0.74))] p-5">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.028)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(223,44,47,0.1),transparent_28%)]" />
            <div className="pointer-events-none absolute inset-x-5 top-5 h-[30%] rounded-[18px] border border-black/7 bg-white/28" />
            <div className="pointer-events-none absolute inset-x-5 top-[36%] h-[30%] rounded-[18px] border border-black/7 bg-white/24" />
            <div className="pointer-events-none absolute inset-x-5 bottom-5 h-[28%] rounded-[18px] border border-black/7 bg-white/22" />
            <div className="pointer-events-none absolute right-[12%] top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.12),_transparent_72%)] blur-2xl" />

            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M42 18 C 56 26, 66 34, 76 44" stroke="rgba(17,17,21,0.18)" strokeWidth="0.24" fill="none" />
              <path d="M42 50 C 56 50, 66 50, 76 50" stroke="rgba(223,44,47,0.25)" strokeWidth="0.24" fill="none" />
              <path d="M42 82 C 56 74, 66 66, 76 56" stroke="rgba(17,17,21,0.17)" strokeWidth="0.24" fill="none" />
            </svg>

            <div className="pointer-events-none absolute right-[8.5%] top-1/2 -translate-y-1/2 rounded-full border border-black/14 bg-white/66 px-3 py-1.5">
              <div className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#8a4a4b]">ARCHX ICP</div>
            </div>

            <div className="relative grid h-full min-h-0 grid-rows-3 gap-3 pb-8">
              {clusters.map((cluster, index) => (
                <motion.div
                  key={cluster.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.06, duration: 0.25 }}
                  className="mr-20 rounded-[18px] border border-black/10 bg-white/62 px-4 py-3"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-1.5 w-3.5 rounded-full bg-[#DF2C2F]" />
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#8a4a4b]">{cluster.title}</div>
                  </div>
                  <div className="space-y-1.5">
                    {cluster.items.map((item) => (
                      <div key={item} className="text-[0.92rem] font-medium leading-6 text-[#1f1c1a]">
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function ArchxUseCasesSlide({ slide }: { slide: ArchxSlide }) {
  const useCases = [
    {
      title: "Expansão internacional",
      copy: "Estruturas para crescimento e atuação cross-border.",
    },
    {
      title: "Estruturação de fundos",
      copy: "Veículos para capital, tese e governança.",
    },
    {
      title: "Modelos de fundos de research",
      copy: "Estruturas orientadas a pesquisa, tese e monetização.",
    },
    {
      title: "Acesso institucional",
      copy: "Soluções para capital sofisticado e estruturas de maior exigência.",
    },
  ]

  return (
    <section className="relative h-full px-8 py-8">
      <div className="grid h-full grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 flex h-full min-h-0 flex-col rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.985),rgba(8,8,8,0.985))] px-10 py-9 lg:col-span-5"
        >
          <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-main)]">{slide.eyebrow}</div>
          <h2 className="font-display max-w-[420px] text-[2.7rem] font-bold leading-[0.95] tracking-[-0.05em] text-white">{slide.headline}</h2>
          <p className="mt-4 max-w-[430px] text-[0.97rem] leading-7 text-white/72">{slide.subheadline}</p>
          {slide.body ? <p className="mt-3 max-w-[440px] text-[0.88rem] leading-6 text-white/58">{slide.body}</p> : null}

          {slide.closingLine ? (
            <div className="mt-5 max-w-[440px] rounded-[16px] border border-[color:var(--accent-main)]/12 bg-[color:var(--accent-main)]/[0.045] px-5 py-2.5 text-[0.82rem] leading-5 text-white/78">
              {slide.closingLine}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 22, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.46, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-span-12 min-h-0 overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(4,4,4,0.98),rgba(0,0,0,0.98))] px-6 py-6 lg:col-span-7"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(223,44,47,0.1),transparent_28%),radial-gradient(circle_at_24%_74%,rgba(223,44,47,0.07),transparent_24%)]" />

          <div className="relative grid h-full min-h-0 grid-cols-2 grid-rows-2 gap-4">
            {useCases.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.06, duration: 0.25 }}
                className="rounded-[22px] border border-white/12 bg-white/[0.05] px-5 py-4 shadow-[0_14px_24px_rgba(0,0,0,0.24)] backdrop-blur-[8px]"
              >
                <div className="mb-3.5 flex items-center gap-2">
                  <span className="h-1.5 w-4 rounded-full bg-[color:var(--accent-main)]" />
                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.17em] text-[color:var(--accent-main)]">Caso de uso</span>
                </div>
                <div className="text-[1.02rem] font-semibold leading-6 text-white">{item.title}</div>
                <div className="mt-2.5 max-w-[92%] text-[0.86rem] leading-[1.65] text-white/66">{item.copy}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ArchxDifferentialsSlide({ slide }: { slide: ArchxSlide }) {
  const proofBlocks = [
    {
      title: "5 jurisdições estratégicas",
      copy: "Presença internacional para estruturar operações com alcance global e flexibilidade regulatória.",
      className: "col-[1/8] row-[1/5]",
      tone: "strong",
    },
    {
      title: "Estruturas sob medida",
      copy: "Arquiteturas customizadas para teses e perfis operacionais de maior complexidade.",
      className: "col-[8/13] row-[1/4]",
      tone: "medium",
    },
    {
      title: "Acesso a capital global",
      copy: "Conexão com estruturas e fluxos internacionais para expansão com padrão institucional.",
      className: "col-[8/13] row-[4/8]",
      tone: "medium",
    },
    {
      title: "Monitoramento em tempo real",
      copy: "Camadas de controle e visibilidade para decisões com mais segurança operacional.",
      className: "col-[1/5] row-[5/8]",
      tone: "light",
    },
    {
      title: "Integração nativa com blockchain",
      copy: "Trilhos modernos para liquidez digital e estruturas financeiras de nova geração.",
      className: "col-[5/8] row-[5/8]",
      tone: "light",
    },
  ] as const

  return (
    <section className="relative h-full px-8 py-8">
      <div className="grid h-full grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 flex h-full min-h-0 flex-col rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.985),rgba(8,8,8,0.985))] px-10 py-9 lg:col-span-5"
        >
          <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-main)]">{slide.eyebrow}</div>
          <h2 className="font-display max-w-[440px] text-[2.68rem] font-bold leading-[0.98] tracking-[-0.05em] text-white">{slide.headline}</h2>
          <p className="mt-4 max-w-[440px] text-[0.97rem] leading-7 text-white/72">{slide.subheadline}</p>
          {slide.body ? <p className="mt-3 max-w-[450px] text-[0.88rem] leading-6 text-white/58">{slide.body}</p> : null}

          {slide.closingLine ? (
            <div className="mt-5 max-w-[450px] rounded-[16px] border border-[color:var(--accent-main)]/10 bg-[color:var(--accent-main)]/[0.045] px-5 py-2 text-[0.82rem] leading-5 text-white/78">
              {slide.closingLine}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 22, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.46, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-span-12 min-h-0 overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(4,4,4,0.98),rgba(0,0,0,0.98))] px-6 py-6 lg:col-span-7"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(223,44,47,0.12),transparent_28%),radial-gradient(circle_at_28%_76%,rgba(223,44,47,0.08),transparent_25%)]" />

          <div className="relative grid h-full min-h-0 grid-cols-12 grid-rows-7 gap-3 pb-8">
            {proofBlocks.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.24 }}
                className={cn(
                  "rounded-[18px] border bg-white/[0.05] px-4 py-3.5 shadow-[0_12px_24px_rgba(0,0,0,0.24)] backdrop-blur-[8px]",
                  block.className,
                  block.tone === "strong" ? "border-white/18" : block.tone === "medium" ? "border-white/14" : "border-white/10",
                )}
              >
                <div className="mb-2.5 flex items-center gap-2">
                  <span className="h-1.5 w-4 rounded-full bg-[color:var(--accent-main)]" />
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-main)]">Diferencial</span>
                </div>
                <div className="text-[0.98rem] font-semibold leading-6 text-white">{block.title}</div>
                <div className="mt-2.5 max-w-[95%] text-[0.82rem] leading-[1.68] text-white/66">{block.copy}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ArchxProductsSlide({ slide, isRtl = false }: { slide: ArchxSlide; isRtl?: boolean }) {
  const textDirection = isRtl ? "rtl" : "ltr"
  const textAlign = isRtl ? "text-right" : "text-left"

  const groups =
    slide.groups ?? [
      { title: "Recebimento local", items: [] },
      { title: "Câmbio e liquidação", items: [] },
      { title: "Estrutura e suporte", items: [] },
    ]

  return (
    <section className="relative h-full px-8 py-8">
      <div className="grid h-full grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "col-span-12 flex h-full min-h-0 flex-col rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.99),rgba(8,8,8,0.99))] px-4 py-4 sm:px-7 sm:py-6 lg:col-span-5 lg:rounded-[30px] lg:px-10 lg:py-9",
            textAlign,
          )}
          dir={textDirection}
        >
          <div className="mb-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--accent-main)] sm:text-[11px] lg:mb-3 lg:tracking-[0.18em]">{slide.eyebrow}</div>
          <h2 className="font-display max-w-[430px] text-[1.6rem] font-bold leading-[1] tracking-[-0.03em] text-white sm:text-[2rem] lg:text-[2.66rem] lg:leading-[0.95] lg:tracking-[-0.05em]">{slide.headline}</h2>
          <p className="mt-3 max-w-[430px] text-[0.82rem] leading-6 text-white/74 sm:text-[0.9rem] lg:mt-4 lg:text-[0.97rem] lg:leading-7 lg:text-white/72">{slide.subheadline}</p>
          {slide.body ? <p className="mt-2 max-w-[440px] text-[0.75rem] leading-5 text-white/62 sm:text-[0.82rem] sm:leading-6 lg:mt-3 lg:text-[0.88rem] lg:text-white/58">{slide.body}</p> : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 22, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.46, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative col-span-12 min-h-0 overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(4,4,4,0.98),rgba(0,0,0,0.98))] px-3 py-3 sm:px-4 sm:py-4 lg:col-span-7 lg:rounded-[30px] lg:px-6 lg:py-6"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(223,44,47,0.1),transparent_28%),radial-gradient(circle_at_24%_76%,rgba(223,44,47,0.08),transparent_24%)]" />

          <div className="relative grid h-full min-h-0 grid-rows-3 gap-2.5 sm:gap-3 lg:gap-4">
            {groups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.05, duration: 0.24 }}
                className="relative overflow-hidden rounded-[16px] border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.065),rgba(255,255,255,0.035))] px-3 py-2.5 shadow-[0_14px_28px_rgba(0,0,0,0.24)] backdrop-blur-[9px] sm:px-4 sm:py-3 lg:rounded-[22px] lg:px-5 lg:py-4"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent-main)]/45 to-transparent" />
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-4 rounded-full bg-[color:var(--accent-main)]" />
                </div>
                <div className="text-[0.9rem] font-semibold leading-5 text-white sm:text-[0.98rem] lg:text-[1.08rem] lg:leading-6">{group.title}</div>
                <div className="mt-2 space-y-1.5 sm:space-y-2 lg:mt-3">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="mt-[0.44rem] h-1 w-1 rounded-full bg-white/45" />
                      <span className="text-[0.74rem] leading-[1.45] text-white/80 sm:text-[0.82rem] lg:text-[0.93rem] lg:leading-[1.6] lg:text-white/78">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ArchxCommercialModelSlide({ slide, isRtl = false }: { slide: ArchxSlide; isRtl?: boolean }) {
  const textDirection = isRtl ? "rtl" : "ltr"
  const textAlign = isRtl ? "text-right" : "text-left"

  const rows = slide.bullets.map((item) => {
    const [service, rate] = item.split(" - ")
    return {
      service: service.trim(),
      rate: (rate ?? "xx%").trim(),
    }
  })

  return (
    <section className="relative h-full px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="h-full overflow-hidden rounded-[24px] border border-black/8 bg-[linear-gradient(180deg,#f3eee6,#ece6dd)] shadow-[0_20px_60px_rgba(0,0,0,0.08)] lg:rounded-[32px]"
      >
        <div className="relative grid h-full gap-2.5 px-3 py-3 sm:gap-3 sm:px-4 sm:py-4 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-5 lg:px-9 lg:py-8">
          <div className={cn("flex h-full min-h-0 flex-col pb-4", textAlign)} dir={textDirection}>
            <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#DF2C2F] sm:text-[11px] lg:mb-3 lg:tracking-[0.18em]">{slide.eyebrow}</div>
            <h2 className="font-display max-w-[480px] text-[1.58rem] font-bold leading-[1] tracking-[-0.03em] text-[#111115] sm:text-[1.95rem] lg:text-[2.6rem] lg:leading-[0.96] lg:tracking-[-0.05em]">{slide.headline}</h2>
            <p className="mt-2.5 max-w-[520px] text-[0.8rem] leading-5 text-[#46413b] sm:text-[0.86rem] sm:leading-6 lg:mt-3 lg:text-[0.98rem] lg:leading-7">{slide.subheadline}</p>
            {slide.body ? <p className="mt-1.5 max-w-[500px] text-[0.72rem] leading-5 text-[#5b554f] sm:text-[0.78rem] sm:leading-5 lg:mt-2 lg:text-[0.88rem] lg:leading-6">{slide.body}</p> : null}

            {slide.footerNote ? (
              <div className="mt-2 max-w-[510px] rounded-[12px] border border-black/18 bg-white/58 px-3 py-2 text-[0.68rem] leading-4 text-[#2c2722] shadow-[0_8px_16px_rgba(0,0,0,0.05)] sm:mt-2.5 sm:px-4 sm:py-2.5 sm:text-[0.74rem] sm:leading-5 lg:mt-auto lg:rounded-[14px] lg:px-6 lg:py-3 lg:text-[0.82rem]">
                {slide.footerNote}
              </div>
            ) : null}
          </div>

          <div className="relative h-full min-h-0 rounded-[16px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(248,242,234,0.76))] p-2.5 sm:p-3 lg:rounded-[26px] lg:p-5">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.024)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(223,44,47,0.08),transparent_28%)]" />

            <div className="relative flex h-full min-h-0 flex-col pb-8">
              <div className="rounded-[12px] border border-black/10 bg-white/60 px-2.5 py-1.5 sm:px-3 sm:py-2 lg:rounded-[14px] lg:px-4 lg:py-3">
                <div className="grid grid-cols-[1fr_auto] items-center gap-3">
                  <div className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[#8a4a4b] sm:text-[0.62rem] lg:text-[0.72rem] lg:tracking-[0.17em]">Serviço</div>
                  <div className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[#8a4a4b] sm:text-[0.62rem] lg:text-[0.72rem] lg:tracking-[0.17em]">Taxa inicial</div>
                </div>
                <div className="mt-2 h-px w-full bg-gradient-to-r from-[#DF2C2F]/70 via-[#DF2C2F]/38 to-transparent" />
              </div>

              <div className="mt-1.5 flex-1 rounded-[12px] border border-black/10 bg-white/48 px-2.5 py-1 sm:px-3 sm:py-1.5 lg:mt-2.5 lg:rounded-[14px] lg:px-4">
                {rows.map((row) => (
                  <div key={row.service} className="grid grid-cols-[1fr_auto] items-center gap-2 border-b border-black/9 py-1.5 sm:py-2 last:border-b-0 lg:gap-3 lg:py-3.5">
                    <div className="text-[0.72rem] font-medium leading-5 text-[#17161a] sm:text-[0.8rem] lg:text-[0.95rem] lg:leading-6">{row.service}</div>
                    <div className="font-display text-[0.84rem] font-bold tracking-[-0.01em] text-[#0f0f12] sm:text-[0.95rem] lg:text-[1.12rem]">{row.rate}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function ArchxClosingSlide({ slide, isRtl = false }: { slide: ArchxSlide; isRtl?: boolean }) {
  const textDirection = isRtl ? "rtl" : "ltr"
  const textAlign = isRtl ? "text-right" : "text-left"
  const manifestoLines = slide.headline.split("\n")

  return (
    <section className="relative h-full px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.995),rgba(7,7,7,0.995))] lg:rounded-[32px]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(223,44,47,0.26),transparent_36%),radial-gradient(circle_at_82%_24%,rgba(223,44,47,0.11),transparent_20%),radial-gradient(circle_at_16%_72%,rgba(223,44,47,0.1),transparent_20%)]" />
        <ClosingNetworkVisual />

        <div className={cn("relative z-10 flex h-full items-center justify-center px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-10", isRtl ? "text-right" : "text-center")}>
          <div className="max-w-[980px]">
            <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--accent-main)] sm:text-[11px] lg:mb-5 lg:text-[12px] lg:tracking-[0.18em]">{slide.eyebrow}</div>
            <div className={cn("space-y-1", textAlign)} dir={textDirection}>
              {manifestoLines.map((line, index) => {
                const [prefix, ...rest] = line.split(" ")
                return (
                  <h2 key={index} className="font-display text-[1.5rem] font-bold leading-[0.95] tracking-[-0.03em] text-white sm:text-[1.9rem] lg:text-[4.05rem] lg:leading-[0.9] lg:tracking-[-0.06em]">
                    <span>{prefix} </span>
                    <span className="text-[color:var(--accent-main)]">{rest.join(" ")}</span>
                  </h2>
                )
              })}
            </div>
            <p className="mx-auto mt-3 max-w-[790px] text-[0.8rem] leading-6 text-white/78 sm:text-[0.9rem] lg:mt-7 lg:text-[1.02rem] lg:leading-8 lg:text-white/74">{slide.subheadline}</p>

            {slide.cta ? (
              <div className="mt-4 inline-flex items-center gap-2 border-b border-[color:var(--accent-main)]/60 pb-1 text-[0.78rem] font-medium text-white sm:text-[0.84rem] lg:mt-8 lg:pb-1.5 lg:text-[0.95rem]">
                <span>{slide.cta.title}</span>
                <ArrowRight className="h-4 w-4 text-[color:var(--accent-main)]" />
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function ClosingNetworkVisual() {
  const nodes = [
    { className: "left-[12%] top-[18%]", red: false },
    { className: "left-[84%] top-[20%]", red: true },
    { className: "left-[10%] top-[74%]", red: true },
    { className: "left-[88%] top-[76%]", red: false },
    { className: "left-[76%] top-[46%]", red: false },
    { className: "left-[20%] top-[46%]", red: false },
  ]

  return (
    <div className="absolute inset-[34px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M12 18 C 20 28, 20 38, 20 46" stroke="rgba(255,255,255,0.14)" strokeWidth="0.23" fill="none" />
        <path d="M12 18 C 26 14, 40 12, 52 12" stroke="rgba(223,44,47,0.22)" strokeWidth="0.22" fill="none" />
        <path d="M88 20 C 80 30, 78 38, 76 46" stroke="rgba(255,255,255,0.14)" strokeWidth="0.23" fill="none" />
        <path d="M88 76 C 82 66, 80 56, 76 46" stroke="rgba(223,44,47,0.2)" strokeWidth="0.22" fill="none" />
        <path d="M10 74 C 16 66, 18 56, 20 46" stroke="rgba(223,44,47,0.2)" strokeWidth="0.22" fill="none" />
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12 + index * 0.06, duration: 0.24 }}
          className={cn(
            "absolute h-3 w-3 rounded-full border border-white/18 bg-[#121217]",
            node.red ? "shadow-[0_0_0_4px_rgba(223,44,47,0.12)]" : "",
            node.className,
          )}
        />
      ))}
    </div>
  )
}
