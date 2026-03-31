export type Locale = "en" | "pt-BR" | "es" | "ar" | "ru"

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
  { value: "es", label: "ES" },
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
      subheadline: "Payments, liquidity, compliance and financial structuring for operations with international reach.",
      body: "Archx operates with an international financial structure designed for operations that demand efficiency, regulatory security and global capability.",
      bullets: ["Global payments", "Liquidity", "Compliance", "International financial structuring"],
    },
    es: {
      eyebrow: "ARCHX CAPITAL",
      headline: "Infraestructura Financiera Global",
      subheadline: "Pagos, liquidez, compliance y estructuración financiera para operaciones con alcance internacional.",
      body: "Archx opera con una estructura financiera internacional orientada a operaciones que exigen eficiencia operativa, seguridad regulatoria y capacidad global.",
      bullets: ["Pagos globales", "Liquidez", "Compliance", "Estructuración financiera internacional"],
    },
    ar: {
      eyebrow: "ARCHX CAPITAL",
      headline: "البنية المالية العالمية",
      subheadline: "المدفوعات والسيولة والامتثال والهيكلة المالية لعمليات ذات نطاق دولي.",
      body: "تعمل Archx بهيكل مالي دولي مصمم لعمليات تتطلب كفاءة تشغيلية وأمانًا تنظيميًا وقدرة عالمية.",
      bullets: ["مدفوعات عالمية", "السيولة", "الامتثال", "هيكلة مالية دولية"],
    },
    ru: {
      eyebrow: "ARCHX CAPITAL",
      headline: "Глобальная финансовая инфраструктура",
      subheadline: "Платежи, ликвидность, комплаенс и финансовое структурирование для операций международного масштаба.",
      body: "Archx работает с международной финансовой структурой для операций, требующих операционной эффективности, регуляторной безопасности и глобального охвата.",
      bullets: ["Глобальные платежи", "Ликвидность", "Комплаенс", "Международное финансовое структурирование"],
    },
    "pt-BR": {
      eyebrow: "ARCHX CAPITAL",
      headline: "Infraestrutura Financeira Global",
      subheadline: "Pagamentos, liquidez, compliance e estrutura financeira para operações com alcance internacional.",
      body: "A Archx atua com estrutura financeira internacional voltada a operações que exigem eficiência operacional, segurança regulatória e capacidade global.",
      bullets: ["Pagamentos globais", "Liquidez", "Compliance", "Estrutura financeira internacional"],
    },
  },
  "slide-02-compliance": {
    en: {
      eyebrow: "COMPLIANCE",
      headline: "Compliance as an Operational Foundation",
      subheadline: "Governance, monitoring and regulatory alignment as a central part of the operational structure.",
      body: "Archx treats compliance, audit and regulatory structure as part of execution, ensuring institutional security, governance and trust.",
      bullets: ["Governance", "Audit", "Regulatory structure", "Operational security"],
      closingLine: "Compliance as infrastructure to scale with control and institutional confidence.",
    },
    es: {
      eyebrow: "COMPLIANCE",
      headline: "Compliance como base de la operación",
      subheadline: "Gobernanza, monitoreo y adecuación regulatoria como parte central de la estructura operativa.",
      body: "La actuación de Archx considera compliance, auditoría y estructura regulatoria como parte de la operación, garantizando mayor seguridad, gobernanza y confiabilidad institucional.",
      bullets: ["Gobernanza", "Auditoría", "Estructura regulatoria", "Seguridad operativa"],
      closingLine: "Compliance como infraestructura para escalar con control y confianza institucional.",
    },
    ar: {
      eyebrow: "COMPLIANCE",
      headline: "الامتثال كأساس للتشغيل",
      subheadline: "الحوكمة والمراقبة والمواءمة التنظيمية كجزء محوري من الهيكل التشغيلي.",
      body: "تتعامل Archx مع الامتثال والتدقيق والهيكلة التنظيمية كجزء من التنفيذ، بما يضمن الأمان المؤسسي والحوكمة والثقة.",
      bullets: ["الحوكمة", "التدقيق", "الهيكل التنظيمي", "الأمن التشغيلي"],
      closingLine: "الامتثال كبنية تحتية للتوسع مع التحكم والثقة المؤسسية.",
    },
    ru: {
      eyebrow: "COMPLIANCE",
      headline: "Комплаенс как основа операций",
      subheadline: "Управление, мониторинг и регуляторное соответствие как центральная часть операционной структуры.",
      body: "Archx рассматривает комплаенс, аудит и регуляторную структуру как часть исполнения, обеспечивая институциональную безопасность, управление и доверие.",
      bullets: ["Управление", "Аудит", "Регуляторная структура", "Операционная безопасность"],
      closingLine: "Комплаенс как инфраструктура для масштабирования с контролем и институциональным доверием.",
    },
    "pt-BR": {
      eyebrow: "COMPLIANCE",
      headline: "Compliance como base da operação",
      subheadline: "Governança, monitoramento e adequação regulatória como parte central da estrutura operacional.",
      body: "A atuação da Archx considera compliance, auditoria e estrutura regulatória como parte da operação, garantindo mais segurança, governança e confiabilidade institucional.",
      bullets: ["Governança", "Auditoria", "Estrutura regulatória", "Segurança operacional"],
      closingLine: "Compliance como infraestrutura para escalar com controle e confiança institucional.",
    },
  },
  "slide-03-products": {
    en: {
      eyebrow: "PRODUCTS",
      headline: "Products and Services",
      subheadline: "An objective offering for collection, payments, USDT FX and global financial support.",
      body: "Solutions organized for local operations, international settlement and higher-complexity financial support.",
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
    es: {
      eyebrow: "PRODUCTOS",
      headline: "Productos y servicios",
      subheadline: "Una oferta objetiva para cobranzas, pagos, cambio en USDT y soporte financiero global.",
      body: "Soluciones organizadas para operación local, liquidación internacional y soporte financiero de mayor complejidad.",
      groups: [
        {
          title: "Cobranza local",
          items: [
            "Cobro de PIX",
            "Terminal de tarjetas",
            "Pago online con tarjeta de crédito / checkout",
            "Tarjetas de crédito y débito locales e internacionales",
            "Cuenta bancaria en Brasil y EE. UU.",
          ],
        },
        {
          title: "Cambio y liquidación",
          items: ["Crypto FX USDT", "Pagos globales en dólares (USDT a USD)"],
        },
        {
          title: "Estructura y soporte",
          items: ["Consultoría contable y financiera global"],
        },
      ],
    },
    ar: {
      eyebrow: "المنتجات",
      headline: "المنتجات والخدمات",
      subheadline: "عرض موضوعي للتحصيل والمدفوعات وصرف USDT والدعم المالي العالمي.",
      body: "حلول منظمة للعمليات المحلية والتسوية الدولية والدعم المالي الأعلى تعقيدًا.",
      groups: [
        {
          title: "التحصيل المحلي",
          items: [
            "تحصيل PIX",
            "جهاز نقاط البيع للبطاقات",
            "الدفع عبر الإنترنت بالبطاقة / checkout",
            "بطاقات الائتمان والخصم المحلية والدولية",
            "حساب بنكي في البرازيل والولايات المتحدة",
          ],
        },
        {
          title: "الصرف والتسوية",
          items: ["Crypto FX USDT", "مدفوعات عالمية بالدولار (USDT إلى USD)"],
        },
        {
          title: "الهيكلة والدعم",
          items: ["استشارات محاسبية ومالية عالمية"],
        },
      ],
    },
    ru: {
      eyebrow: "ПРОДУКТЫ",
      headline: "Продукты и услуги",
      subheadline: "Структурированное предложение для приема платежей, расчетов, обмена USDT и глобальной финансовой поддержки.",
      body: "Решения для локальных операций, международного клиринга и более сложной финансовой поддержки.",
      groups: [
        {
          title: "Локальный прием платежей",
          items: [
            "Сбор PIX",
            "POS-терминал для карт",
            "Онлайн-оплата картой / checkout",
            "Локальные и международные кредитные и дебетовые карты",
            "Банковский счет в Бразилии и США",
          ],
        },
        {
          title: "Валютный обмен и расчеты",
          items: ["Crypto FX USDT", "Глобальные долларовые платежи (USDT в USD)"],
        },
        {
          title: "Структура и поддержка",
          items: ["Глобальный бухгалтерский и финансовый консалтинг"],
        },
      ],
    },
    "pt-BR": {
      eyebrow: "PRODUTOS",
      headline: "Produtos e serviços",
      subheadline: "Uma oferta objetiva para recebimento, pagamentos, câmbio em USDT e suporte financeiro global.",
      body: "Soluções organizadas para operação local, liquidação internacional e suporte financeiro de maior complexidade.",
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
  },
  "slide-04-api-implementation": {
    en: {
      eyebrow: "API IMPLEMENTATION",
      headline: "API Implementation",
      subheadline: "Setup and minimum commitment terms structured for predictable commercial onboarding.",
      body: "Initial conditions organized by service layer, including setup and recurring fee framing.",
      groups: [
        {
          title: "Access Fee (Setup)",
          items: ["Banking as a Service|R$ 45,000.00|R$ 20,000.00", "Crypto as a Service|R$ 15,000.00|R$ 10,000.00"],
        },
        {
          title: "Minimum fee",
          items: ["Minimum fee|R$ 2,000.00", "Charging starts|From month 2"],
        },
        {
          title: "Contract notes",
          items: [
            "* Minimum fee of R$ 2,000.00 starts from month 2.",
            "Setup is invoiced after signature with due date up to 10 days.",
          ],
        },
      ],
    },
    es: {
      eyebrow: "IMPLEMENTACIÓN API",
      headline: "Implementación API",
      subheadline: "Condiciones de setup y fee mínimo estructuradas para inicio de operación con previsibilidad comercial.",
      body: "Condiciones iniciales organizadas por capa de servicio, con foco en setup de entrada y una regla simple de cobro recurrente.",
      groups: [
        {
          title: "Access Fee (Setup)",
          items: ["Banking as a Service|R$ 45.000,00|R$ 20.000,00", "Crypto as a Service|R$ 15.000,00|R$ 10.000,00"],
        },
        {
          title: "Fee mínimo",
          items: ["Fee mínimo|R$ 2.000,00", "Inicio del cobro|A partir del mes 2"],
        },
        {
          title: "Observaciones contractuales",
          items: [
            "* Fee mínimo de R$ 2.000,00 cobrado a partir del mes 2.",
            "El setup se factura después de la firma, con vencimiento en hasta 10 días.",
          ],
        },
      ],
    },
    ar: {
      eyebrow: "تنفيذ API",
      headline: "تنفيذ API",
      subheadline: "شروط الإعداد والحد الأدنى من الرسوم منظمة لبداية تشغيل متوقعة تجاريًا.",
      body: "شروط أولية منظمة حسب طبقة الخدمة، مع التركيز على إعداد البداية وقاعدة بسيطة للرسوم المتكررة.",
      groups: [
        {
          title: "Access Fee (Setup)",
          items: ["Banking as a Service|R$ 45.000,00|R$ 20.000,00", "Crypto as a Service|R$ 15.000,00|R$ 10.000,00"],
        },
        {
          title: "الحد الأدنى للرسوم",
          items: ["الحد الأدنى للرسوم|R$ 2.000,00", "بدء التحصيل|ابتداءً من الشهر 2"],
        },
        {
          title: "ملاحظات تعاقدية",
          items: [
            "* يتم تحصيل حد أدنى R$ 2.000,00 ابتداءً من الشهر 2.",
            "تُفوتر رسوم الإعداد بعد التوقيع مع استحقاق خلال 10 أيام.",
          ],
        },
      ],
    },
    ru: {
      eyebrow: "ВНЕДРЕНИЕ API",
      headline: "Внедрение API",
      subheadline: "Условия setup и минимальной комиссии структурированы для предсказуемого коммерческого запуска.",
      body: "Начальные условия организованы по сервисным слоям, с фокусом на входной setup и простое правило регулярного списания.",
      groups: [
        {
          title: "Access Fee (Setup)",
          items: ["Banking as a Service|R$ 45.000,00|R$ 20.000,00", "Crypto as a Service|R$ 15.000,00|R$ 10.000,00"],
        },
        {
          title: "Минимальная комиссия",
          items: ["Минимальная комиссия|R$ 2.000,00", "Начало списаний|Начиная со 2-го месяца"],
        },
        {
          title: "Условия договора",
          items: [
            "* Минимальная комиссия R$ 2.000,00 взимается со 2-го месяца.",
            "Setup выставляется после подписания, срок оплаты — до 10 дней.",
          ],
        },
      ],
    },
    "pt-BR": {
      eyebrow: "IMPLANTAÇÃO API",
      headline: "Implantação API",
      subheadline: "Condições de setup e fee mínimo estruturadas para início de operação com previsibilidade comercial.",
      body: "Condições iniciais organizadas por camada de serviço, com foco em setup de entrada e regra simples de cobrança recorrente.",
      groups: [
        {
          title: "Access Fee (Setup)",
          items: ["Banking as a Service|R$ 45.000,00|R$ 20.000,00", "Crypto as a Service|R$ 15.000,00|R$ 10.000,00"],
        },
        {
          title: "Fee mínimo",
          items: ["Fee mínimo|R$ 2.000,00", "Início da cobrança|A partir do mês 2"],
        },
        {
          title: "Observações contratuais",
          items: [
            "* Fee mínimo de R$ 2.000,00 cobrado a partir do mês 2.",
            "Setup faturado após assinatura, com vencimento em até 10 dias.",
          ],
        },
      ],
    },
  },
  "slide-05-baas": {
    en: {
      eyebrow: "BANKING AS A SERVICE",
      headline: "BaaS",
      subheadline: "Operational pricing by service type, with scale logic and clear charging rules.",
      body: "Framework for accounts, KYC, PIX, anti-fraud and P2P, organized for executive readability.",
      groups: [
        {
          title: "Active accounts PF / PJ",
          items: ["Active account PF|R$ 0.96", "Active account PJ|R$ 0.18"],
        },
        {
          title: "KYC PF** / KYC PJ**",
          items: ["KYC PF|R$ 5.40", "KYC PJ|R$ 18.00"],
        },
        {
          title: "PIX (Cash-in and Cash-out)",
          items: [
            "0 - 25,000|R$ 0.30",
            "25,001 - 50,000|R$ 0.29",
            "50,001 - 100,000|R$ 0.28",
            "100,001 - 250,000|R$ 0.26",
            "250,001 - 500,000|R$ 0.25",
            "From 500,001|R$ 0.24",
          ],
        },
        {
          title: "Transactional Anti-fraud",
          items: ["Per transaction|R$ 0.03"],
        },
        {
          title: "P2P",
          items: ["Per transaction|Waived"],
        },
      ],
      closingLine:
        "*Active account means accounts with transactions in the last 30 days. ** KYC charge is applied as data revalidation every 12 months for active clients.",
    },
    es: {
      eyebrow: "BANKING AS A SERVICE",
      headline: "BaaS",
      subheadline: "Tarifas operativas por tipo de servicio, con escala por volumen y reglas de cobro bien definidas.",
      body: "Framework de pricing para cuentas, KYC, PIX, antifraude y P2P, organizado para lectura ejecutiva y comparación rápida.",
      groups: [
        {
          title: "Cuentas activas PF / PJ",
          items: ["Cuenta activa PF|R$ 0,96", "Cuenta activa PJ|R$ 0,18"],
        },
        {
          title: "KYC PF** / KYC PJ**",
          items: ["KYC PF|R$ 5,40", "KYC PJ|R$ 18,00"],
        },
        {
          title: "PIX (Cash-in y Cash-out)",
          items: [
            "0 - 25.000|R$ 0,30",
            "25.001 - 50.000|R$ 0,29",
            "50.001 - 100.000|R$ 0,28",
            "100.001 - 250.000|R$ 0,26",
            "250.001 - 500.000|R$ 0,25",
            "A partir de 500.001|R$ 0,24",
          ],
        },
        {
          title: "Antifraude transaccional",
          items: ["Por transacción|R$ 0,03"],
        },
        {
          title: "P2P",
          items: ["Por transacción|Exento"],
        },
      ],
      closingLine:
        "* Se considera cuenta activa la que transaccionó en los últimos 30 días. ** Cobro de KYC como revalidación de datos cada 12 meses para clientes activos.",
    },
    ar: {
      eyebrow: "BANKING AS A SERVICE",
      headline: "BaaS",
      subheadline: "رسوم تشغيلية حسب نوع الخدمة، مع تدرج بالحجم وقواعد تحصيل واضحة.",
      body: "إطار تسعير للحسابات وKYC وPIX ومكافحة الاحتيال وP2P، منظم للقراءة التنفيذية والمقارنة السريعة.",
      groups: [
        {
          title: "الحسابات النشطة PF / PJ",
          items: ["حساب نشط PF|R$ 0,96", "حساب نشط PJ|R$ 0,18"],
        },
        {
          title: "KYC PF** / KYC PJ**",
          items: ["KYC PF|R$ 5,40", "KYC PJ|R$ 18,00"],
        },
        {
          title: "PIX (Cash-in و Cash-out)",
          items: [
            "0 - 25.000|R$ 0,30",
            "25.001 - 50.000|R$ 0,29",
            "50.001 - 100.000|R$ 0,28",
            "100.001 - 250.000|R$ 0,26",
            "250.001 - 500.000|R$ 0,25",
            "ابتداءً من 500.001|R$ 0,24",
          ],
        },
        {
          title: "مكافحة الاحتيال المعاملاتي",
          items: ["لكل معاملة|R$ 0,03"],
        },
        {
          title: "P2P",
          items: ["لكل معاملة|معفى"],
        },
      ],
      closingLine:
        "* يُعتبر الحساب نشطًا إذا أجرى معاملات خلال آخر 30 يومًا. ** تُطبق رسوم KYC كإعادة تحقق من البيانات كل 12 شهرًا للعملاء النشطين.",
    },
    ru: {
      eyebrow: "BANKING AS A SERVICE",
      headline: "BaaS",
      subheadline: "Операционные тарифы по типу сервиса, со шкалированием по объему и четкими правилами списания.",
      body: "Прайсинг-фреймворк для счетов, KYC, PIX, антифрода и P2P, организованный для управленческого чтения и быстрой сверки.",
      groups: [
        {
          title: "Активные счета PF / PJ",
          items: ["Активный счет PF|R$ 0,96", "Активный счет PJ|R$ 0,18"],
        },
        {
          title: "KYC PF** / KYC PJ**",
          items: ["KYC PF|R$ 5,40", "KYC PJ|R$ 18,00"],
        },
        {
          title: "PIX (Cash-in и Cash-out)",
          items: [
            "0 - 25.000|R$ 0,30",
            "25.001 - 50.000|R$ 0,29",
            "50.001 - 100.000|R$ 0,28",
            "100.001 - 250.000|R$ 0,26",
            "250.001 - 500.000|R$ 0,25",
            "От 500.001|R$ 0,24",
          ],
        },
        {
          title: "Транзакционный антифрод",
          items: ["За транзакцию|R$ 0,03"],
        },
        {
          title: "P2P",
          items: ["За транзакцию|Без комиссии"],
        },
      ],
      closingLine:
        "* Активным считается счет, по которому были транзакции за последние 30 дней. ** Плата за KYC взимается как повторная валидация данных каждые 12 месяцев для активных клиентов.",
    },
    "pt-BR": {
      eyebrow: "BANKING AS A SERVICE",
      headline: "BaaS",
      subheadline: "Tarifas operacionais por tipo de serviço, com escala por volume e regras de cobrança bem definidas.",
      body: "Framework de pricing para contas, KYC, PIX, antifraude e P2P, organizado para leitura executiva e comparação rápida.",
      groups: [
        {
          title: "Contas ativas PF / PJ",
          items: ["Conta ativa PF|R$ 0,96", "Conta ativa PJ|R$ 0,18"],
        },
        {
          title: "KYC PF** / KYC PJ**",
          items: ["KYC PF|R$ 5,40", "KYC PJ|R$ 18,00"],
        },
        {
          title: "PIX (Cash-in e Cash-out)",
          items: [
            "0 - 25.000|R$ 0,30",
            "25.001 - 50.000|R$ 0,29",
            "50.001 - 100.000|R$ 0,28",
            "100.001 - 250.000|R$ 0,26",
            "250.001 - 500.000|R$ 0,25",
            "A partir de 500.001|R$ 0,24",
          ],
        },
        {
          title: "Antifraude transacional",
          items: ["Por transação|R$ 0,03"],
        },
        {
          title: "P2P",
          items: ["Por transação|Isento"],
        },
      ],
      closingLine:
        "* Considera-se conta ativa aquelas que transacionaram nos últimos 30 dias. ** Cobrança de KYC como revalidação de dados a cada 12 meses dos clientes ativos.",
    },
  },
  "slide-06-boleto-payments": {
    en: {
      eyebrow: "BANKING AS A SERVICE",
      headline: "Boleto and Payments",
      subheadline: "Boleto and bill payment conditions organized for clear commercial reading.",
      body: "From issuance to settlement, services are presented with explicit charging and remuneration rules.",
      groups: [
        {
          title: "Boleto",
          items: ["Issuance|Waived", "Settlement|R$ 1.68", "Write-off|R$ 0.50", "Return|R$ 2.35"],
        },
        {
          title: "Bill Payments",
          items: ["Compensation slip|R$ 0.11 (remunerated)", "Utilities and Taxes|No remuneration"],
        },
      ],
    },
    es: {
      eyebrow: "BANKING AS A SERVICE",
      headline: "Boleto y pagos",
      subheadline: "Condiciones de boleto y pago de cuentas organizadas en una estructura objetiva para propuesta comercial.",
      body: "Del ciclo de boleto a la liquidación de cuentas, los servicios se presentan con claridad de cobro y remuneración.",
      groups: [
        {
          title: "Boleto",
          items: ["Emisión|Exento", "Liquidación|R$ 1,68", "Baja|R$ 0,50", "Devolución|R$ 2,35"],
        },
        {
          title: "Pago de cuentas",
          items: ["Ficha de compensación|R$ 0,11 (remunerado)", "Servicios e impuestos|No remuneramos"],
        },
      ],
    },
    ar: {
      eyebrow: "BANKING AS A SERVICE",
      headline: "Boleto والمدفوعات",
      subheadline: "شروط boleto ودفع الفواتير منظمة بطريقة موضوعية للعرض التجاري.",
      body: "من دورة boleto إلى تسوية المدفوعات، تُعرض الخدمات بوضوح في الرسوم والعائد.",
      groups: [
        {
          title: "Boleto",
          items: ["الإصدار|معفى", "التسوية|R$ 1,68", "الإغلاق|R$ 0,50", "الاسترجاع|R$ 2,35"],
        },
        {
          title: "دفع الفواتير",
          items: ["Ficha de compensação|R$ 0,11 (بعائد)", "Utilities والضرائب|بدون عائد"],
        },
      ],
    },
    ru: {
      eyebrow: "BANKING AS A SERVICE",
      headline: "Boleto и платежи",
      subheadline: "Условия по boleto и оплате счетов организованы в объективной структуре для коммерческого предложения.",
      body: "От выпуска boleto до расчетов по счетам — услуги представлены с прозрачными условиями списания и вознаграждения.",
      groups: [
        {
          title: "Boleto",
          items: ["Выпуск|Без комиссии", "Расчет|R$ 1,68", "Закрытие|R$ 0,50", "Возврат|R$ 2,35"],
        },
        {
          title: "Оплата счетов",
          items: ["Ficha de compensação|R$ 0,11 (вознаграждается)", "Utilities и налоги|Без вознаграждения"],
        },
      ],
    },
    "pt-BR": {
      eyebrow: "BANKING AS A SERVICE",
      headline: "Boleto e pagamento",
      subheadline: "Condições de boleto e pagamento de contas organizadas em estrutura objetiva para proposta comercial.",
      body: "Do ciclo de boleto à liquidação de contas, os serviços são apresentados com clareza de cobrança e remuneração.",
      groups: [
        {
          title: "Boleto",
          items: ["Emissão|Isento", "Liquidação|R$ 1,68", "Baixa|R$ 0,50", "Devolução|R$ 2,35"],
        },
        {
          title: "Pagamento de conta",
          items: ["Ficha de compensação|R$ 0,11 (é remunerado)", "Utilities e Tributos|Não remuneramos"],
        },
      ],
    },
  },
  "slide-07-crypto-caas": {
    en: {
      eyebrow: "CRYPTO AS A SERVICE",
      headline: "Liquidity",
      subheadline: "Conversion — Fiat to crypto",
      body: "USD spot quotation (B3).",
      groups: [
        {
          title: "Crypto as a Service",
          items: [
            "BRL -> USDT|Standard rate 0.57%|Special condition 0.4%",
            "USDT -> USD|Standard rate 0.57%|Special condition 0.4%",
          ],
        },
      ],
    },
    es: {
      eyebrow: "CRYPTO AS A SERVICE",
      headline: "Liquidez",
      subheadline: "Conversión — Fiat a crypto",
      body: "Cotización del dólar spot (B3).",
      groups: [
        {
          title: "Crypto as a Service",
          items: [
            "BRL -> USDT|Tasa estándar 0,57%|Condición especial 0,4%",
            "USDT -> USD|Tasa estándar 0,57%|Condición especial 0,4%",
          ],
        },
      ],
    },
    ar: {
      eyebrow: "CRYPTO AS A SERVICE",
      headline: "السيولة",
      subheadline: "التحويل — من Fiat إلى crypto",
      body: "سعر الدولار الفوري (B3).",
      groups: [
        {
          title: "Crypto as a Service",
          items: [
            "BRL -> USDT|السعر القياسي 0,57%|شرط خاص 0,4%",
            "USDT -> USD|السعر القياسي 0,57%|شرط خاص 0,4%",
          ],
        },
      ],
    },
    ru: {
      eyebrow: "CRYPTO AS A SERVICE",
      headline: "Ликвидность",
      subheadline: "Конверсия — Fiat в crypto",
      body: "Спотовый курс доллара (B3).",
      groups: [
        {
          title: "Crypto as a Service",
          items: [
            "BRL -> USDT|Стандартная ставка 0,57%|Специальное условие 0,4%",
            "USDT -> USD|Стандартная ставка 0,57%|Специальное условие 0,4%",
          ],
        },
      ],
    },
    "pt-BR": {
      eyebrow: "CRYPTO AS A SERVICE",
      headline: "Liquidity",
      subheadline: "Conversão — Fiat para crypto",
      body: "Cotação do dólar spot (B3).",
      groups: [
        {
          title: "Crypto as a Service",
          items: [
            "BRL -> USDT|Taxa padrão 0,57%|Condição especial 0,4%",
            "USDT -> USD|Taxa padrão 0,57%|Condição especial 0,4%",
          ],
        },
      ],
    },
  },
  "slide-08-commercial-policy": {
    en: {
      eyebrow: "COMMERCIAL POLICY",
      headline: "Commercial Policy",
      subheadline: "Operational and billing rules for onboarding, grace periods and charging start.",
      body: "Objective conditions for setup, production launch and recurring billing.",
      groups: [
        {
          title: "Setup payment",
          items: [
            "After contract signature, setup is invoiced with a due date of up to 5 days.",
            "If unpaid, production credentials cannot be released.",
          ],
        },
        {
          title: "Production go-live and charging start",
          items: [
            "The start of fee charging (minimum fee, transactional fees, etc.) follows grace periods negotiated per product and is independent of production go-live.",
          ],
        },
      ],
      closingLine:
        "Fees are automatically debited from the account after each transaction. If the minimum fee amount is not reached, the difference is debited on the 5th day of the following month.",
    },
    es: {
      eyebrow: "POLÍTICA COMERCIAL",
      headline: "Política Comercial",
      subheadline: "Condiciones operativas y de facturación para entrada, carencia e inicio de cobro.",
      body: "Reglas objetivas para setup, go-live y facturación recurrente de la operación.",
      groups: [
        {
          title: "Pago de setup",
          items: [
            "Después de la firma del contrato, el setup se facturará con vencimiento de hasta 5 días.",
            "Si no se paga, no será posible recibir las credenciales de producción.",
          ],
        },
        {
          title: "Plazo para entrada en producción e inicio de cobros",
          items: [
            "El inicio del cobro de tarifas (fee mínimo, tarifas de transacciones, etc.) tendrá carencia según lo negociado en cada producto y es independiente de la entrada en producción del socio.",
          ],
        },
      ],
      closingLine:
        "Las tarifas se debitarán automáticamente en cuenta después de cada transacción. Si no se alcanza el valor del fee mínimo, la diferencia se debitará el día 5 del mes siguiente.",
    },
    ar: {
      eyebrow: "السياسة التجارية",
      headline: "السياسة التجارية",
      subheadline: "شروط تشغيل وفوترة واضحة للدخول وفترة السماح وبداية التحصيل.",
      body: "قواعد موضوعية لـ setup وgo-live والفوترة المتكررة للتشغيل.",
      groups: [
        {
          title: "دفع setup",
          items: [
            "بعد توقيع العقد، يتم إصدار فاتورة setup مع استحقاق خلال 5 أيام.",
            "في حال عدم السداد، لا يمكن تسليم بيانات اعتماد الإنتاج.",
          ],
        },
        {
          title: "موعد الدخول للإنتاج وبداية التحصيل",
          items: [
            "بداية تحصيل الرسوم (الحد الأدنى للرسوم، رسوم المعاملات، إلخ) تخضع لفترة سماح متفق عليها لكل منتج، وهي مستقلة عن الدخول للإنتاج.",
          ],
        },
      ],
      closingLine:
        "تُخصم الرسوم تلقائيًا من الحساب بعد كل معاملة. وإذا لم يتم بلوغ قيمة الحد الأدنى للرسوم، يُخصم الفرق في اليوم الخامس من الشهر التالي.",
    },
    ru: {
      eyebrow: "КОММЕРЧЕСКАЯ ПОЛИТИКА",
      headline: "Коммерческая политика",
      subheadline: "Операционные и биллинговые условия для подключения, льготного периода и старта списаний.",
      body: "Объективные правила для setup, go-live и регулярного биллинга операции.",
      groups: [
        {
          title: "Оплата setup",
          items: [
            "После подписания договора setup выставляется к оплате со сроком до 5 дней.",
            "При неоплате передача production-учетных данных невозможна.",
          ],
        },
        {
          title: "Срок выхода в production и начала списаний",
          items: [
            "Начало списания тарифов (минимальная комиссия, транзакционные тарифы и т.д.) имеет льготный период по договоренности для каждого продукта и не зависит от выхода партнера в production.",
          ],
        },
      ],
      closingLine:
        "Тарифы автоматически списываются со счета после каждой транзакции. Если минимальная комиссия не достигнута, разница списывается 5-го числа следующего месяца.",
    },
    "pt-BR": {
      eyebrow: "POLÍTICA COMERCIAL",
      headline: "Política Comercial",
      subheadline: "Condições operacionais e de faturamento para entrada, carência e início de cobrança.",
      body: "Regras objetivas para setup, go-live e faturamento recorrente da operação.",
      groups: [
        {
          title: "Pagamento de setup",
          items: [
            "Após assinatura do contrato, o setup será faturado com vencimento em até 5 dias.",
            "Caso não seja pago, não será possível receber as credenciais de produção.",
          ],
        },
        {
          title: "Prazo para entrada em produção e início das cobranças",
          items: [
            "O início da cobrança das tarifas (fee mínimo, tarifas de transações, etc.) terá carência conforme negociado em cada produto e independe da entrada em produção do parceiro.",
          ],
        },
      ],
      closingLine:
        "As tarifas serão debitadas automaticamente em conta após cada transação. Caso não seja atingido o valor do fee mínimo, a diferença será debitada no dia 5 do mês subsequente.",
    },
  },
  "slide-07-prices": {
    en: {
      eyebrow: "PRICING",
      headline: "Commercial Model",
      subheadline: "Rates organized objectively for institutional presentation and initial commercial proposal.",
      body: "Commercial terms vary according to operational structure, transactional profile and regulatory complexity.",
      bullets: [
        "PIX collection - 0.4%",
        "Card machine - 2%",
        "BRL -> USDT - standard 0.5% | 0.4% above 20MM BRL/month",
        "USDT -> USD - standard 0.5% | 0.4% above 5MM USD/month",
        "Consulting - to be defined",
      ],
      footerNote: "Rates may vary according to operational profile, volume and structure of the operation.",
    },
    es: {
      eyebrow: "PRECIOS",
      headline: "Modelo comercial",
      subheadline: "Tarifas organizadas de forma objetiva para presentación institucional y propuesta comercial inicial.",
      body: "Las condiciones comerciales varían según la estructura de la operación, el perfil transaccional y el nivel de complejidad regulatoria involucrado.",
      bullets: [
        "Cobro PIX - 0,4%",
        "Terminal de tarjetas - 2%",
        "BRL -> USDT - estándar 0,5% | 0,4% por encima de 20MM BRL/mes",
        "USDT -> USD - estándar 0,5% | 0,4% por encima de 5MM USD/mes",
        "Consultoría - a definir",
      ],
      footerNote: "Las tarifas pueden variar según el perfil operativo, volumen y estructura de la operación.",
    },
    ar: {
      eyebrow: "الأسعار",
      headline: "النموذج التجاري",
      subheadline: "رسوم منظمة بطريقة موضوعية للعرض المؤسسي والمقترح التجاري الأولي.",
      body: "تختلف الشروط التجارية حسب هيكل التشغيل ونمط المعاملات ومستوى التعقيد التنظيمي.",
      bullets: [
        "تحصيل PIX - 0,4%",
        "جهاز البطاقة - 2%",
        "BRL -> USDT - قياسي 0,5% | 0,4% فوق 20MM BRL/شهر",
        "USDT -> USD - قياسي 0,5% | 0,4% فوق 5MM USD/شهر",
        "الاستشارات - حسب الاتفاق",
      ],
      footerNote: "قد تختلف الرسوم حسب النمط التشغيلي والحجم وهيكل العملية.",
    },
    ru: {
      eyebrow: "ЦЕНЫ",
      headline: "Коммерческая модель",
      subheadline: "Тарифы структурированы для институциональной презентации и начального коммерческого предложения.",
      body: "Коммерческие условия зависят от структуры операции, транзакционного профиля и уровня регуляторной сложности.",
      bullets: [
        "Сбор PIX - 0,4%",
        "POS-терминал - 2%",
        "BRL -> USDT - стандарт 0,5% | 0,4% выше 20MM BRL/мес",
        "USDT -> USD - стандарт 0,5% | 0,4% выше 5MM USD/мес",
        "Консалтинг - по договоренности",
      ],
      footerNote: "Тарифы могут меняться в зависимости от операционного профиля, объема и структуры операции.",
    },
    "pt-BR": {
      eyebrow: "PREÇOS",
      headline: "Modelo comercial",
      subheadline: "Tarifas organizadas de forma objetiva para apresentação institucional e proposta comercial inicial.",
      body: "As condições comerciais variam conforme a estrutura da operação, o perfil transacional e o nível de complexidade regulatória envolvido.",
      bullets: [
        "Coleta PIX - 0,4%",
        "Maquininha de cartão - 2%",
        "BRL -> USDT - padrão 0,5% | 0,4% acima de 20MM BRL/mês",
        "USDT -> USD - padrão 0,5% | 0,4% acima de 5MM USD/mês",
        "Consultoria - a combinar",
      ],
      footerNote: "Tarifas podem variar por perfil operacional, volume e estrutura da operação.",
    },
  },
  "slide-08-closing": {
    en: {
      eyebrow: "CLOSING",
      headline: "More reach.\nMore control.\nMore institutional confidence.",
      subheadline: "Payments, liquidity, compliance and financial structuring for operations that require international reach.",
      cta: {
        title: "Talk to Archx",
        text: "Structure your operation with Archx.",
      },
    },
    es: {
      eyebrow: "CIERRE",
      headline: "Más alcance.\nMás control.\nMás confianza institucional.",
      subheadline: "Pagos, liquidez, compliance y estructuración financiera para operaciones que exigen alcance internacional.",
      cta: {
        title: "Habla con Archx",
        text: "Estructura tu operación con Archx.",
      },
    },
    ar: {
      eyebrow: "الختام",
      headline: "مدى أوسع.\nتحكم أكبر.\nثقة مؤسسية أعلى.",
      subheadline: "المدفوعات والسيولة والامتثال والهيكلة المالية لعمليات تتطلب نطاقًا دوليًا.",
      cta: {
        title: "تحدث مع Archx",
        text: "نظّم عملياتك مع Archx.",
      },
    },
    ru: {
      eyebrow: "ЗАВЕРШЕНИЕ",
      headline: "Больше охвата.\nБольше контроля.\nБольше институционального доверия.",
      subheadline: "Платежи, ликвидность, комплаенс и финансовая структура для операций с международным охватом.",
      cta: {
        title: "Связаться с Archx",
        text: "Структурируйте вашу операцию вместе с Archx.",
      },
    },
    "pt-BR": {
      eyebrow: "ENCERRAMENTO",
      headline: "Mais alcance.\nMais controle.\nMais confiança institucional.",
      subheadline: "Pagamentos, liquidez, compliance e estrutura financeira para operações que exigem alcance internacional.",
      cta: {
        title: "Fale com a Archx",
        text: "Estruture sua operação com a Archx.",
      },
    },
  },
}

export const getSlideTranslation = (slideId: string, locale: Locale): SlideTranslation | null => {
  const bySlide = slideTranslations[slideId]
  if (!bySlide) return null
  return bySlide[locale] ?? bySlide[defaultLocale] ?? bySlide["pt-BR"] ?? null
}

export const getSlideLabel = (slideId: string, locale: Locale) => getSlideTranslation(slideId, locale)?.eyebrow ?? "Slide"
