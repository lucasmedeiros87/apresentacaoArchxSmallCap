import type { Locale } from "@/content/presentation-i18n"

const ptBrDeckOrder = [
  "slide-01-cover",
  "slide-02-compliance",
  "slide-03-products",
  "slide-04-api-implementation",
  "slide-05-baas",
  "slide-06-boleto-payments",
  "slide-07-crypto-caas",
  "slide-08-commercial-policy",
  "slide-08-closing",
] as const

const defaultDeckOrder = ptBrDeckOrder

export const deckOrderByLocale: Record<Locale, readonly string[]> = {
  "pt-BR": ptBrDeckOrder,
  en: ptBrDeckOrder,
  es: ptBrDeckOrder,
  ar: ptBrDeckOrder,
  ru: ptBrDeckOrder,
}

export function orderDeckItemsByLocale<T extends { id: string }>(items: T[], locale: Locale): T[] {
  const order = deckOrderByLocale[locale] ?? defaultDeckOrder
  const byId = new Map(items.map((item) => [item.id, item]))

  return order
    .map((id) => byId.get(id))
    .filter((item): item is T => Boolean(item))
}
