"use client"

import { PresentationLocaleProvider } from "@/components/presentation/presentation-locale-context"
import { archxSlides } from "@/content/archx-slides"
import { orderDeckItemsByLocale } from "@/content/presentation-deck-order"
import { isRtlLocale, type Locale } from "@/content/presentation-i18n"
import { buildPresentationSlides } from "@/lib/slides"

type PrintPresentationProps = {
  locale: Locale
}

export function PrintPresentation({ locale }: PrintPresentationProps) {
  const slides = orderDeckItemsByLocale(buildPresentationSlides(archxSlides, { mode: "print" }), locale)
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
