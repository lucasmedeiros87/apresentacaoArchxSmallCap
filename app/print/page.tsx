import { PrintPresentation } from "@/components/presentation/print-presentation"
import { archxSlides } from "@/content/archx-slides"
import { localeOptions, type Locale } from "@/content/presentation-i18n"
import { buildProposalContext, buildProposalSlides } from "@/content/proposal-template"
import type { ArchxSlide } from "@/types/presentation"

type PrintPageProps = {
  searchParams?: Promise<{ lang?: string; slug?: string; cliente?: string; data?: string }>
}

const allowedLocales = new Set(localeOptions.map((option) => option.value))

const resolveLocale = (lang?: string): Locale => {
  if (lang && allowedLocales.has(lang as Locale)) {
    return lang as Locale
  }
  return "pt-BR"
}

export default async function PrintPage({ searchParams }: PrintPageProps) {
  const resolved = (await searchParams) ?? {}
  const locale = resolveLocale(resolved?.lang)
  const hasProposalContext = Boolean(resolved?.slug || resolved?.cliente || resolved?.data)

  let slidesSource: ArchxSlide[] = archxSlides
  if (hasProposalContext) {
    const context = buildProposalContext(resolved?.slug ?? "cliente", {
      cliente: resolved?.cliente ?? null,
      data: resolved?.data ?? null,
    })
    slidesSource = buildProposalSlides(context)
  }

  return <PrintPresentation locale={locale} slidesSource={slidesSource} />
}
