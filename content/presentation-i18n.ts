export type Locale = "en" | "pt-BR" | "ar" | "ru"

export type SlideTranslation = {
  eyebrow?: string
  headline: string
  subheadline: string
  body?: string
  closingLine?: string
  footerNote?: string
  bullets?: string[]
  groups?: Array<{
    title: string
    items: string[]
  }>
  cta?: {
    title: string
    text: string
  }
}

type SlideTranslationMap = Record<string, Partial<Record<Locale, SlideTranslation>>>

export const localeOptions: Array<{ value: Locale; label: string }> = [
  { value: "en", label: "EN" },
  { value: "pt-BR", label: "PT-BR" },
  { value: "ar", label: "AR" },
  { value: "ru", label: "RU" },
]

export const defaultLocale: Locale = "en"

export const isRtlLocale = (locale: Locale) => locale === "ar"

const slideTranslations: SlideTranslationMap = {
  "slide-01-cover": {
    en: {
      eyebrow: "ARCHX CAPITAL",
      headline: "Global Financial Infrastructure",
      subheadline:
        "Payments, liquidity, compliance and financial structuring for operations with international reach.",
      body:
        "Archx operates with an international financial structure designed for operations that demand efficiency, regulatory security and global capability.",
      bullets: ["Global payments", "Liquidity", "Compliance", "International financial structuring"],
    },
    "pt-BR": {
      eyebrow: "ARCHX CAPITAL",
      headline: "Infraestrutura Financeira Global",
      subheadline:
        "Pagamentos, liquidez, compliance e estrutura financeira para operações com alcance internacional.",
      body:
        "A Archx atua com estrutura financeira internacional voltada a operações que exigem eficiência operacional, segurança regulatória e capacidade global.",
      bullets: ["Pagamentos globais", "Liquidez", "Compliance", "Estrutura financeira internacional"],
    },
    ru: {
      eyebrow: "ARCHX CAPITAL",
      headline: "Глобальная финансовая инфраструктура",
      subheadline:
        "Платежи, ликвидность, комплаенс и финансовое структурирование для операций с международным охватом.",
      body:
        "Archx предоставляет международную финансовую инфраструктуру для операций, требующих эффективности, регуляторной надежности и глобального масштаба.",
      bullets: ["Глобальные платежи", "Ликвидность", "Комплаенс", "Международное структурирование"],
    },
    ar: {
      eyebrow: "ARCHX CAPITAL",
      headline: "بنية تحتية مالية عالمية",
      subheadline:
        "مدفوعات وسيولة وامتثال وهيكلة مالية لعمليات تتطلب نطاقًا دوليًا.",
      body:
        "تقدم Archx بنية مالية دولية للعمليات التي تتطلب كفاءة تشغيلية وأمانًا تنظيميًا وقدرة عالمية.",
      bullets: ["مدفوعات عالمية", "السيولة", "الامتثال", "هيكلة مالية دولية"],
    },
  },
  "slide-02-compliance": {
    en: {
      eyebrow: "COMPLIANCE",
      headline: "Compliance as an Operational Foundation",
      subheadline:
        "Governance, monitoring and regulatory alignment as a central part of the operational structure.",
      body:
        "Archx treats compliance, audit and regulatory structure as part of execution, ensuring institutional security, governance and trust.",
      bullets: ["Governance", "Audit", "Regulatory structure", "Operational security"],
      closingLine: "Compliance as infrastructure to scale with control and institutional confidence.",
    },
    "pt-BR": {
      eyebrow: "COMPLIANCE",
      headline: "Compliance como base da operação",
      subheadline:
        "Governança, monitoramento e adequação regulatória como parte central da estrutura operacional.",
      body:
        "A atuação da Archx considera compliance, auditoria e estrutura regulatória como parte da operação, garantindo mais segurança, governança e confiabilidade institucional.",
      bullets: ["Governança", "Auditoria", "Estrutura regulatória", "Segurança operacional"],
      closingLine: "Compliance como infraestrutura para escalar com controle e confiança institucional.",
    },
    ru: {
      eyebrow: "КОМПЛАЕНС",
      headline: "Комплаенс как основа операций",
      subheadline:
        "Управление, мониторинг и регуляторное соответствие как центральная часть операционной структуры.",
      body:
        "Archx интегрирует комплаенс, аудит и регуляторную архитектуру в операционную модель, обеспечивая безопасность, управление и институциональное доверие.",
      bullets: ["Управление", "Аудит", "Регуляторная структура", "Операционная безопасность"],
      closingLine: "Комплаенс как инфраструктура для масштабирования с контролем и доверием.",
    },
    ar: {
      eyebrow: "الامتثال",
      headline: "الامتثال كأساس للتشغيل",
      subheadline:
        "الحوكمة والمراقبة والمواءمة التنظيمية كجزء مركزي من الهيكل التشغيلي.",
      body:
        "تتعامل Archx مع الامتثال والتدقيق والبنية التنظيمية كجزء من التنفيذ لضمان الأمان والثقة المؤسسية.",
      bullets: ["الحوكمة", "التدقيق", "البنية التنظيمية", "الأمان التشغيلي"],
      closingLine: "الامتثال كبنية تحتية للتوسع مع التحكم والثقة المؤسسية.",
    },
  },
  "slide-03-products": {
    en: {
      eyebrow: "PRODUCTS",
      headline: "Products and Services",
      subheadline:
        "An objective offering for collection, payments, USDT FX and global financial support.",
      body:
        "Solutions organized for local operations, international settlement and higher-complexity financial support.",
      groups: [
        {
          title: "Local Collection",
          items: ["PIX collection", "Credit card machine", "Online credit card payment / checkout"],
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
      eyebrow: "PRODUTOS",
      headline: "Produtos e serviços",
      subheadline:
        "Uma oferta objetiva para recebimento, pagamentos, câmbio em USDT e suporte financeiro global.",
      body:
        "Soluções organizadas para operação local, liquidação internacional e suporte financeiro de maior complexidade.",
      groups: [
        {
          title: "Recebimento local",
          items: ["Coleta de PIX", "Maquininha de cartão de crédito", "Pagamento online via cartão de crédito / checkout"],
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
      eyebrow: "ПРОДУКТЫ",
      headline: "Продукты и сервисы",
      subheadline:
        "Объективное предложение для сбора, платежей, USDT FX и глобальной финансовой поддержки.",
      body:
        "Решения для локальных операций, международных расчетов и более сложной финансовой поддержки.",
      groups: [
        {
          title: "Локальный сбор",
          items: ["Сбор через PIX", "Терминал для карт", "Онлайн-оплата картой / checkout"],
        },
        {
          title: "Обмен и расчеты",
          items: ["Crypto FX USDT", "Глобальные платежи в USD (USDT в USD)"],
        },
        {
          title: "Структура и поддержка",
          items: ["Глобальный финансово-бухгалтерский консалтинг"],
        },
      ],
    },
    ar: {
      eyebrow: "المنتجات",
      headline: "المنتجات والخدمات",
      subheadline:
        "عرض عملي للتحصيل والمدفوعات وتحويل USDT والدعم المالي العالمي.",
      body:
        "حلول منظمة للتشغيل المحلي والتسوية الدولية والدعم المالي الأكثر تعقيدًا.",
      groups: [
        {
          title: "التحصيل المحلي",
          items: ["تحصيل PIX", "ماكينة بطاقات ائتمان", "دفع أونلاين عبر البطاقة / checkout"],
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
  },
  "slide-04-prices": {
    en: {
      eyebrow: "PRICING",
      headline: "Commercial Model",
      subheadline:
        "Rates organized objectively for institutional presentation and initial commercial proposal.",
      body:
        "Commercial terms vary according to operational structure, transactional profile and regulatory complexity.",
      bullets: [
        "PIX collection - 0.4%",
        "Card machine - 1.5% to 1.8%",
        "BRL -> USDT - 0.65% to 0.68%",
        "USDT -> USD - 0.36% to 0.5%",
        "Consulting - to be defined",
      ],
      footerNote: "Rates may vary according to operational profile, volume and structure of the operation.",
    },
    "pt-BR": {
      eyebrow: "PREÇOS",
      headline: "Modelo comercial",
      subheadline:
        "Tarifas organizadas de forma objetiva para apresentação institucional e proposta comercial inicial.",
      body:
        "As condições comerciais variam conforme a estrutura da operação, o perfil transacional e o nível de complexidade regulatória envolvido.",
      bullets: [
        "Coleta PIX - 0,4%",
        "Maquininha de cartão - 1,5% a 1,8%",
        "BRL -> USDT - 0,65% a 0,68%",
        "USDT -> USD - 0,36% a 0,5%",
        "Consultoria - a combinar",
      ],
      footerNote: "Tarifas podem variar por perfil operacional, volume e estrutura da operação.",
    },
    ru: {
      eyebrow: "ТАРИФЫ",
      headline: "Коммерческая модель",
      subheadline:
        "Тарифы структурированы для институциональной презентации и первичного коммерческого предложения.",
      body:
        "Условия зависят от структуры операции, транзакционного профиля и регуляторной сложности.",
      bullets: [
        "Сбор через PIX - 0,4%",
        "Терминал карт - 1,5% до 1,8%",
        "BRL -> USDT - 0,65% до 0,68%",
        "USDT -> USD - 0,36% до 0,5%",
        "Консалтинг - по договоренности",
      ],
      footerNote: "Тарифы могут меняться в зависимости от профиля, объема и структуры операции.",
    },
    ar: {
      eyebrow: "الأسعار",
      headline: "النموذج التجاري",
      subheadline:
        "رسوم منظمة بشكل واضح للعرض المؤسسي والمقترح التجاري الأولي.",
      body:
        "تختلف الشروط التجارية حسب هيكل العملية والملف المعاملاتي ومستوى التعقيد التنظيمي.",
      bullets: [
        "تحصيل PIX - 0,4%",
        "ماكينة البطاقات - 1,5% إلى 1,8%",
        "BRL -> USDT - 0,65% إلى 0,68%",
        "USDT -> USD - 0,36% إلى 0,5%",
        "استشارات - حسب الاتفاق",
      ],
      footerNote: "قد تختلف الرسوم حسب الملف التشغيلي والحجم وهيكل العملية.",
    },
  },
  "slide-05-closing": {
    en: {
      eyebrow: "CLOSING",
      headline: "More reach.\nMore control.\nMore institutional confidence.",
      subheadline:
        "Payments, liquidity, compliance and financial structuring for operations that require international reach.",
      cta: {
        title: "Talk to Archx",
        text: "Structure your operation with Archx.",
      },
    },
    "pt-BR": {
      eyebrow: "ENCERRAMENTO",
      headline: "Mais alcance.\nMais controle.\nMais confiança institucional.",
      subheadline:
        "Pagamentos, liquidez, compliance e estrutura financeira para operações que exigem alcance internacional.",
      cta: {
        title: "Fale com a Archx",
        text: "Estruture sua operação com a Archx.",
      },
    },
    ru: {
      eyebrow: "ЗАВЕРШЕНИЕ",
      headline: "Больше охвата.\nБольше контроля.\nБольше институционального доверия.",
      subheadline:
        "Платежи, ликвидность, комплаенс и финансовое структурирование для операций международного масштаба.",
      cta: {
        title: "Свяжитесь с Archx",
        text: "Структурируйте свою операцию с Archx.",
      },
    },
    ar: {
      eyebrow: "الختام",
      headline: "وصول أكبر.\nتحكم أكبر.\nثقة مؤسسية أكبر.",
      subheadline:
        "مدفوعات وسيولة وامتثال وهيكلة مالية لعمليات تتطلب نطاقًا دوليًا.",
      cta: {
        title: "تواصل مع Archx",
        text: "هيكل عملياتك مع Archx.",
      },
    },
  },
}

export const getSlideTranslation = (slideId: string, locale: Locale): SlideTranslation | null => {
  const bySlide = slideTranslations[slideId]
  if (!bySlide) return null
  return bySlide[locale] ?? bySlide[defaultLocale] ?? null
}

export const getSlideLabel = (slideId: string, locale: Locale) =>
  getSlideTranslation(slideId, locale)?.eyebrow ?? "Slide"
