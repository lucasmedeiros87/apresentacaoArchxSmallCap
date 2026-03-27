import { archxSlides } from "@/content/archx-slides"
import type { ArchxSlide } from "@/types/presentation"

export type ProposalContext = {
  slug: string
  clientName: string
  proposalDate: string
}

const proposalDefaultsBySlug: Record<string, Pick<ProposalContext, "clientName" | "proposalDate">> = {
  cliente1: { clientName: "Cliente 1", proposalDate: "27/03/2026" },
  cliente2: { clientName: "Cliente 2", proposalDate: "27/03/2026" },
}

const toSafeLabel = (value: string) => value.trim().replace(/[-_]+/g, " ")

const titleCase = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((token) => token[0]?.toUpperCase() + token.slice(1).toLowerCase())
    .join(" ")

const resolveClientName = (slug: string, queryClient?: string | null) => {
  if (queryClient && queryClient.trim()) return queryClient.trim()
  const fromPreset = proposalDefaultsBySlug[slug]?.clientName
  if (fromPreset) return fromPreset
  return titleCase(toSafeLabel(slug))
}

const resolveProposalDate = (slug: string, queryDate?: string | null) => {
  if (queryDate && queryDate.trim()) return queryDate.trim()
  const fromPreset = proposalDefaultsBySlug[slug]?.proposalDate
  if (fromPreset) return fromPreset
  return new Intl.DateTimeFormat("pt-BR").format(new Date())
}

export const buildProposalContext = (
  slugRaw: string,
  query?: { cliente?: string | null; data?: string | null },
): ProposalContext => {
  const slug = slugRaw.trim().toLowerCase()
  return {
    slug,
    clientName: resolveClientName(slug, query?.cliente ?? null),
    proposalDate: resolveProposalDate(slug, query?.data ?? null),
  }
}

const cloneSlide = (slide: ArchxSlide): ArchxSlide => ({
  ...slide,
  bullets: [...slide.bullets],
  groups: slide.groups ? slide.groups.map((group) => ({ title: group.title, items: [...group.items] })) : undefined,
  cta: slide.cta ? { ...slide.cta } : undefined,
  localeOverrides: slide.localeOverrides
    ? {
        ...slide.localeOverrides,
      }
    : undefined,
})

const mergeLocaleOverrides = (
  current: ArchxSlide["localeOverrides"],
  incoming: NonNullable<ArchxSlide["localeOverrides"]>,
): NonNullable<ArchxSlide["localeOverrides"]> => ({
  ...(current ?? {}),
  ...incoming,
  en: {
    ...(current?.en ?? {}),
    ...(incoming.en ?? {}),
  },
  "pt-BR": {
    ...(current?.["pt-BR"] ?? {}),
    ...(incoming["pt-BR"] ?? {}),
  },
  ru: {
    ...(current?.ru ?? {}),
    ...(incoming.ru ?? {}),
  },
  ar: {
    ...(current?.ar ?? {}),
    ...(incoming.ar ?? {}),
  },
})

const mergeUnique = (baseItems: string[], additionalItems: string[]) => {
  const merged = [...baseItems]
  additionalItems.forEach((item) => {
    if (!merged.includes(item)) merged.push(item)
  })
  return merged
}

const slide03ProposalOverrides: NonNullable<ArchxSlide["localeOverrides"]> = {
  en: {
    groups: [
      {
        title: "Local Collection",
        items: [
          "PIX collection",
          "Credit card machine",
          "Online credit card payment / checkout",
          "Local and international credit and debit cards",
          "Bank account in Brazil and USA",
        ],
      },
      {
        title: "FX and Settlement",
        items: ["Crypto FX USDT", "Global USD payments (USDT to USD)"],
      },
      {
        title: "Structure and Support",
        items: ["Global accounting and financial advisory"],
      },
    ],
  },
  "pt-BR": {
    groups: [
      {
        title: "Recebimento local",
        items: [
          "Coleta de PIX",
          "Maquininha de cartão de crédito",
          "Pagamento online via cartão de crédito / checkout",
          "Cartão de crédito e débito local e internacional",
          "Conta bancária Brasil e USA",
        ],
      },
      {
        title: "Câmbio e liquidação",
        items: ["Crypto FX USDT", "Pagamentos globais em dólar (USDT para USD)"],
      },
      {
        title: "Estrutura e suporte",
        items: ["Consultoria contábil financeira global"],
      },
    ],
  },
  ru: {
    groups: [
      {
        title: "Локальный сбор",
        items: [
          "Сбор через PIX",
          "Терминал для кредитных карт",
          "Онлайн-оплата кредитной картой / checkout",
          "Локальные и международные кредитные и дебетовые карты",
          "Банковский счет в Бразилии и США",
        ],
      },
      {
        title: "Обмен и расчеты",
        items: ["Crypto FX USDT", "Глобальные платежи в долларах (USDT в USD)"],
      },
      {
        title: "Структура и поддержка",
        items: ["Глобальный финансовый и бухгалтерский консалтинг"],
      },
    ],
  },
  ar: {
    groups: [
      {
        title: "التحصيل المحلي",
        items: [
          "تحصيل PIX",
          "ماكينة بطاقات الائتمان",
          "دفع أونلاين عبر بطاقة الائتمان / checkout",
          "بطاقات ائتمان وخصم محلية ودولية",
          "حساب بنكي في البرازيل والولايات المتحدة",
        ],
      },
      {
        title: "التحويل والتسوية",
        items: ["Crypto FX USDT", "مدفوعات عالمية بالدولار (USDT إلى USD)"],
      },
      {
        title: "الهيكلة والدعم",
        items: ["استشارات محاسبية ومالية عالمية"],
      },
    ],
  },
}

const slide04ProposalOverrides: NonNullable<ArchxSlide["localeOverrides"]> = {
  en: {
    bullets: [
      "PIX collection - 0.4%",
      "Card machine - 2%",
      "BRL -> USDT - standard 0.5% | 0.4% above 20MM BRL/month",
      "USDT -> USD - standard 0.5% | 0.4% above 5MM USD/month",
      "Consulting - to be defined",
    ],
    footerNote: "Rates may vary according to operational profile, volume and structure of the operation.",
  },
  "pt-BR": {
    bullets: [
      "Coleta PIX - 0,4%",
      "Maquininha de cartão - 2%",
      "BRL -> USDT - padrão 0,5% | 0,4% acima de 20MM BRL/mês",
      "USDT -> USD - padrão 0,5% | 0,4% acima de 5MM USD/mês",
      "Consultoria - a combinar",
    ],
    footerNote: "Tarifas podem variar por perfil operacional, volume e estrutura da operação.",
  },
  ru: {
    bullets: [
      "Сбор через PIX - 0,4%",
      "Терминал карт - 2%",
      "BRL -> USDT - стандарт 0,5% | 0,4% выше 20MM BRL/месяц",
      "USDT -> USD - стандарт 0,5% | 0,4% выше 5MM USD/месяц",
      "Консалтинг - по договоренности",
    ],
    footerNote: "Тарифы могут варьироваться в зависимости от профиля, объема и структуры операции.",
  },
  ar: {
    bullets: [
      "تحصيل PIX - 0,4%",
      "ماكينة البطاقات - 2%",
      "BRL -> USDT - القياسي 0,5% | 0,4% فوق 20MM BRL/شهريًا",
      "USDT -> USD - القياسي 0,5% | 0,4% فوق 5MM USD/شهريًا",
      "الاستشارات - حسب الاتفاق",
    ],
    footerNote: "قد تختلف الرسوم حسب الملف التشغيلي والحجم وهيكل العملية.",
  },
}

export const buildProposalSlides = (context: ProposalContext): ArchxSlide[] => {
  const slides = archxSlides.map(cloneSlide)

  return slides.map((slide) => {
    if (slide.id === "slide-01-cover") {
      return {
        ...slide,
        proposalClientName: context.clientName,
      }
    }

    if (slide.id === "slide-03-products") {
      const firstGroup = slide.groups?.[0]
      const updatedGroups = slide.groups?.map((group, index) =>
        index === 0 && firstGroup
          ? {
              ...group,
              items: mergeUnique(group.items, ["Cartão de crédito e débito local e internacional", "Conta bancária Brasil e USA"]),
            }
          : group,
      )

      return {
        ...slide,
        groups: updatedGroups ?? slide.groups,
        localeOverrides: mergeLocaleOverrides(slide.localeOverrides, slide03ProposalOverrides),
      }
    }

    if (slide.id === "slide-04-prices") {
      return {
        ...slide,
        bullets: slide04ProposalOverrides["pt-BR"]?.bullets ?? slide.bullets,
        footerNote: slide04ProposalOverrides["pt-BR"]?.footerNote ?? slide.footerNote,
        localeOverrides: mergeLocaleOverrides(slide.localeOverrides, slide04ProposalOverrides),
      }
    }

    return slide
  })
}
