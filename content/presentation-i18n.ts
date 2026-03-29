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
      subheadline: "Payments, liquidity, compliance and financial structuring for operations with international reach.",
      body: "Archx operates with an international financial structure designed for operations that demand efficiency, regulatory security and global capability.",
      bullets: ["Global payments", "Liquidity", "Compliance", "International financial structuring"],
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
      body: "Initial conditions organized by service layer, including setup, monthly minimum and contract framing.",
      groups: [
        {
          title: "Access Fee (Setup)",
          items: ["Banking as a Service|R$ 45,000.00|R$ 20,000.00", "Crypto as a Service|R$ 15,000.00|R$ 10,000.00"],
        },
        {
          title: "Monthly minimum",
          items: ["Monthly minimum|R$ 2,000.00", "Charging starts|From month 2"],
        },
        {
          title: "Contract notes",
          items: [
            "* Monthly minimum of R$ 2,000.00 starts from month 2.",
            "Setup is invoiced after signature with due date up to 10 days.",
            "Contract period: 3 years.",
          ],
        },
      ],
    },
    "pt-BR": {
      eyebrow: "IMPLANTAÇÃO API",
      headline: "Implantação API",
      subheadline: "Condições de setup e mensalidade mínima estruturadas para início de operação com previsibilidade comercial.",
      body: "Condições iniciais organizadas por camada de serviço, com foco em setup de entrada e regra simples de cobrança recorrente.",
      groups: [
        {
          title: "Access Fee (Setup)",
          items: ["Banking as a Service|R$ 45.000,00|R$ 20.000,00", "Crypto as a Service|R$ 15.000,00|R$ 10.000,00"],
        },
        {
          title: "Mensalidade mínima",
          items: ["Mensalidade mínima|R$ 2.000,00", "Início da cobrança|A partir do mês 2"],
        },
        {
          title: "Observações contratuais",
          items: [
            "* Mensalidade mínima de R$ 2.000,00 cobrada a partir do mês 2.",
            "Setup faturado após assinatura, com vencimento em até 10 dias.",
            "Período de contrato: 3 anos.",
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
          title: "Opened accounts PF / PJ",
          items: ["Active account*|R$ 0.90", "Inactive account|R$ 0.25"],
        },
        {
          title: "KYC PF** / KYC PJ**",
          items: ["KYC PF|R$ 5.00", "KYC PJ|R$ 15.50", "Per request"],
        },
        {
          title: "PIX (Cash-in and Cash-out)",
          items: [
            "0 - 25,000|R$ 0.30",
            "25,001 - 50,000|R$ 0.28",
            "50,001 - 100,000|R$ 0.26",
            "100,001 - 250,000|R$ 0.24",
            "250,001 - 500,000|R$ 0.22",
            "From 500,001|R$ 0.21",
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
    "pt-BR": {
      eyebrow: "BANKING AS A SERVICE",
      headline: "BaaS",
      subheadline: "Tarifas operacionais por tipo de serviço, com escala por volume e regras de cobrança bem definidas.",
      body: "Framework de pricing para contas, KYC, PIX, antifraude e P2P, organizado para leitura executiva e comparação rápida.",
      groups: [
        {
          title: "Contas abertas PF / PJ",
          items: ["Conta ativa*|R$ 0,90", "Conta inativa|R$ 0,25"],
        },
        {
          title: "KYC PF** / KYC PJ**",
          items: ["KYC PF|R$ 5,00", "KYC PJ|R$ 15,50", "Por solicitação"],
        },
        {
          title: "PIX (Cash-in e Cash-out)",
          items: [
            "0 - 25.000|R$ 0,30",
            "25.001 - 50.000|R$ 0,28",
            "50.001 - 100.000|R$ 0,26",
            "100.001 - 250.000|R$ 0,24",
            "250.001 - 500.000|R$ 0,22",
            "A partir de 500.001|R$ 0,21",
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
          items: ["Issuance|Waived", "Settlement|R$ 1.60", "Write-off|R$ 0.55", "Return|R$ 2.20"],
        },
        {
          title: "Bill Payments",
          items: ["Compensation slip|R$ 0.18 (remunerated)", "Utilities and Taxes|No remuneration"],
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
          items: ["Emissão|Isento", "Liquidação|R$ 1,60", "Baixa|R$ 0,55", "Devolução|R$ 2,20"],
        },
        {
          title: "Pagamento de conta",
          items: ["Ficha de compensação|R$ 0,18 (é remunerado)", "Utilities e Tributos|Não remuneramos"],
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
          items: ["BRL → USDT|0.4%", "USDT → USD|0.4%"],
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
          items: ["BRL → USDT|0,4%", "USDT → USD|0,4%"],
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
            "After contract signature, setup is invoiced with due date up to 10 days.",
            "If unpaid, production credentials cannot be released.",
          ],
        },
        {
          title: "Production go-live and charging start",
          items: [
            "Charging of fees (minimum commitment, monthly, transactional, etc.) follows grace periods negotiated per product and is independent of production go-live.",
          ],
        },
      ],
      closingLine:
        "Billing is issued on the 5th business day of the month following signature, and the corresponding amount is automatically debited from the client account by day 20 of each month.",
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
            "Após assinatura do contrato, o setup será faturado com vencimento em até 10 dias.",
            "Caso não seja pago, não será possível receber as credenciais de produção.",
          ],
        },
        {
          title: "Prazo para entrada em produção e início das cobranças",
          items: [
            "O início da cobrança das tarifas (mínimo de franquia, mensalidades, transacionais, etc.) terá carência conforme negociado em cada produto e independe da entrada em produção do parceiro.",
          ],
        },
      ],
      closingLine:
        "O faturamento será emitido no 5º dia útil do mês subsequente à assinatura, e o valor correspondente será debitado automaticamente da conta do cliente até o dia 20 de cada mês.",
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
  return bySlide[locale] ?? bySlide[defaultLocale] ?? null
}

export const getSlideLabel = (slideId: string, locale: Locale) => getSlideTranslation(slideId, locale)?.eyebrow ?? "Slide"
