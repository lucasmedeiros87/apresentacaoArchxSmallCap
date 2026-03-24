import type { ArchxSlide } from "@/types/presentation"

export const archxSlides: ArchxSlide[] = [
  {
    id: "slide-01-cover",
    order: 1,
    eyebrow: "ARCHX CAPITAL",
    headline: "Infraestrutura Financeira Global",
    subheadline:
      "Pagamentos, liquidez, compliance e estrutura financeira para operações com alcance internacional.",
    body:
      "A Archx atua com estrutura financeira internacional voltada a operações que exigem eficiência operacional, segurança regulatória e capacidade global.",
    bullets: ["Pagamentos globais", "Liquidez", "Compliance", "Estrutura financeira internacional"],
    speakerNotes: "Abertura institucional com foco em alcance global e execução financeira com padrão premium.",
    visualType: "hero",
    theme: "deep-navy",
    status: "hybrid",
    visualNotes: {
      layout: "hero com texto dominante à esquerda e globo premium à direita",
      emphasis: "headline e alcance global",
      mediaHint: "hub map premium com glow vermelho controlado",
      motionHint: "fade in com sequência curta de bullets",
    },
  },
  {
    id: "slide-02-compliance",
    order: 2,
    eyebrow: "COMPLIANCE",
    headline: "Compliance como base da operação",
    subheadline:
      "Governança, monitoramento e adequação regulatória como parte central da estrutura operacional.",
    body:
      "A atuação da Archx considera compliance, auditoria e estrutura regulatória como parte da operação, garantindo mais segurança, governança e confiabilidade institucional.",
    bullets: ["Governança", "Auditoria", "Estrutura regulatória", "Segurança operacional"],
    closingLine: "Compliance como infraestrutura para escalar com controle e confiança institucional.",
    speakerNotes: "Versão curta do pilar de compliance com mensagem objetiva e institucional.",
    visualType: "cards",
    theme: "deep-navy",
    status: "official-site",
    visualNotes: {
      layout: "editorial à esquerda e control layer simplificado à direita",
      emphasis: "rigor e confiabilidade",
      mediaHint: "rede de controle discreta",
      motionHint: "entrada suave dos blocos",
    },
  },
  {
    id: "slide-03-products",
    order: 3,
    eyebrow: "PRODUTOS",
    headline: "Produtos e serviços",
    subheadline:
      "Uma oferta objetiva para recebimento, pagamentos, câmbio em USDT e suporte financeiro global.",
    body:
      "Soluções organizadas para operação local, liquidação internacional e suporte financeiro de maior complexidade.",
    bullets: [],
    groups: [
      {
        title: "Recebimento local",
        items: [
          "Coleta de PIX",
          "Maquininha de cartão de crédito",
          "Pagamento online via cartão de crédito / checkout",
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
    speakerNotes: "Consolidação comercial de oferta em formato institucional e escaneável.",
    visualType: "grid",
    theme: "dark-accent",
    status: "hybrid",
    visualNotes: {
      layout: "direita com 3 blocos agrupados e esquerda editorial curta",
      emphasis: "clareza comercial e agrupamento lógico",
      mediaHint: "módulos institucionais com micro acentos vermelhos",
      motionHint: "reveal em sequência curta por bloco",
    },
  },
  {
    id: "slide-04-prices",
    order: 4,
    eyebrow: "PREÇOS",
    headline: "Modelo comercial",
    subheadline:
      "Tarifas organizadas de forma objetiva para apresentação institucional e proposta comercial inicial.",
    body:
      "As condições comerciais variam conforme a estrutura da operação, o perfil transacional e o nível de complexidade regulatória envolvido.",
    bullets: [
      "Coleta PIX - 0,4%",
      "Maquininha de cartão - 1,5% a 1,8%",
      "BRL → USDT - 0,65% a 0,68%",
      "USDT → USD - 0,36% a 0,5%",
      "Consultoria - a combinar",
    ],
    footerNote: "Tarifas podem variar por perfil operacional, volume e estrutura da operação.",
    speakerNotes: "Slide comercial com leitura imediata: contexto à esquerda e tabela única à direita.",
    visualType: "table",
    theme: "dark-minimal",
    status: "proposed-offering",
    visualNotes: {
      layout: "esquerda editorial e direita tabular premium",
      emphasis: "clareza comercial e taxa",
      mediaHint: "linhas sutis e números com destaque",
      motionHint: "entrada limpa sem efeitos excessivos",
    },
  },
  {
    id: "slide-05-closing",
    order: 5,
    eyebrow: "ENCERRAMENTO",
    headline: "Mais alcance.\nMais controle.\nMais confiança institucional.",
    subheadline:
      "Pagamentos, liquidez, compliance e estrutura financeira para operações que exigem alcance internacional.",
    bullets: [],
    cta: {
      title: "Fale com a Archx",
      text: "Estruture sua operação com a Archx.",
    },
    speakerNotes: "Fechamento manifesto, centralizado e memorável, com assinatura visual da marca.",
    visualType: "hero",
    theme: "deep-navy",
    status: "hybrid",
    visualNotes: {
      layout: "lockup manifesto centralizado",
      emphasis: "mensagem final e CTA discreto",
      mediaHint: "fundo dark com glow vermelho e nós discretos",
      motionHint: "fade final com presença de marca",
    },
  },
]
