import { PrintPresentation } from "@/components/presentation/print-presentation"
import { localeOptions, type Locale } from "@/content/presentation-i18n"

type PrintPageProps = {
  searchParams?: Promise<{ lang?: string }>
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

  return <PrintPresentation locale={locale} />
}
