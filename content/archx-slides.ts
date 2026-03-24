import type { ArchxSlide } from "@/types/presentation"

export const archxSlides: ArchxSlide[] = [
  {
    id: "slide-01-cover",
    order: 1,
    eyebrow: "ARCHX CAPITAL",
    headline: "Global Financial Infrastructure",
    subheadline:
      "Capital, pagamentos globais, liquidez e governanca institucional para operacoes que exigem escala internacional.",
    bullets: ["Capital", "Payments", "Liquidity", "Compliance"],
    speakerNotes:
      "Abrimos posicionando a Archx como infraestrutura financeira internacional. A ideia nao e parecer uma fintech varejista nem uma consultoria generica, mas uma estrutura institucional que conecta capital, tecnologia e private banking global.",
    visualType: "hero",
    theme: "deep-navy",
    status: "hybrid",
    visualNotes: {
      layout: "hero central com muito respiro e headline dominante",
      emphasis: "headline + mapa abstrato/global network",
      mediaHint: "fundo dark com grid sutil e blooms discretos",
      motionHint: "fade in do headline, depois bullets em sequencia",
    },
  },
  {
    id: "slide-02-who-we-are",
    order: 2,
    eyebrow: "QUEM SOMOS",
    headline: "Arquitetura Financeira Global",
    subheadline:
      "A Archx integra capital, tecnologia e private banking global em estruturas financeiras elegantes, solidas e escalaveis.",
    body:
      "Atuamos na intersecao entre capital markets, ativos digitais, pagamentos globais e compliance institucional, conectando solucoes modernas a operacoes internacionais de alto nivel.",
    bullets: ["Financas Globais", "Private Banking", "Ativos Digitais", "Compliance Institucional"],
    speakerNotes:
      "Aqui definimos a empresa. A Archx opera na intersecao entre financas globais, tecnologia e estruturas patrimoniais. Esse slide precisa consolidar credibilidade e escopo institucional logo no inicio.",
    visualType: "split",
    theme: "dark-minimal",
    status: "official-site",
    visualNotes: {
      layout: "split 60/40, texto a esquerda e bloco institucional a direita",
      emphasis: "quatro pilares em cards grandes",
      mediaHint: "icones lineares e labels tecnicas",
      motionHint: "entrada lateral suave dos pilares",
    },
  },
  {
    id: "slide-03-problem",
    order: 3,
    eyebrow: "O DESAFIO",
    headline: "Operações Globais Ainda São Fragmentadas",
    subheadline:
      "Operar entre jurisdições, moedas, trilhos de pagamento e exigências regulatórias ainda gera fricção, custo e perda de eficiência.",
    bullets: [
      "Fragmentação bancária",
      "Pagamentos internacionais lentos",
      "Complexidade regulatória",
      "Tesouraria desconectada",
    ],
    closingLine:
      "A Archx transforma essa complexidade em uma operação mais integrada, segura e escalável.",
    speakerNotes:
      "Este slide cria a dor. O foco e mostrar que a empresa moderna opera com varias camadas desconectadas: bancos, remessas, compliance, ativos digitais e tesouraria. A Archx entra para integrar tudo isso.",
    visualType: "cards",
    theme: "dark-minimal",
    status: "hybrid",
    visualNotes: {
      layout: "grade 2x2 com quatro dores centrais",
      emphasis: "cards grandes com icones e poucas linhas",
      mediaHint: "grid tecnico no fundo",
      motionHint: "reveal em cascata por card",
    },
  },
  {
    id: "slide-04-value-proposition",
    order: 4,
    eyebrow: "A SOLUÇÃO",
    headline: "Uma Arquitetura Financeira Integrada",
    subheadline:
      "A Archx conecta três camadas críticas da operação internacional em uma única estrutura.",
    body:
      "Mais do que serviços isolados, entregamos uma arquitetura capaz de integrar capital, pagamentos globais, liquidez, ativos digitais e governança institucional.",
    bullets: ["Capital & Structuring", "Payments & Liquidity", "Compliance & Governance"],
    speakerNotes:
      "Esse e um slide-chave. A empresa nao deve parecer uma soma de servicos soltos. O que estamos vendendo e uma arquitetura unica com tres pilares complementares.",
    visualType: "diagram",
    theme: "dark-accent",
    status: "hybrid",
    visualNotes: {
      layout: "diagrama de tres camadas conectadas",
      emphasis: "conexao entre os pilares",
      mediaHint: "linhas finas, glow leve e labels tecnicas",
      motionHint: "entrada progressiva por camada",
    },
  },
  {
    id: "slide-05-capital-structuring",
    order: 5,
    eyebrow: "PILAR 01",
    headline: "Capital & Structuring",
    subheadline:
      "Estruturas financeiras internacionais para expansão, captação, proteção patrimonial e acesso a mercados globais.",
    body:
      "A Archx estrutura soluções para empresas, grupos patrimoniais e investidores que precisam de mecanismos mais sofisticados de capital, proteção e expansão internacional.",
    bullets: ["Tokenização de ativos", "Securitização", "Mini-IPO", "Offshore & Private Banking", "Fundos e estruturas híbridas"],
    speakerNotes:
      "Aqui entram os servicos ja sustentados pelo site: stablecoins institucionais, investimentos imobiliarios, tokenizacao, securitizacao, mini-IPO, offshore/private banking e fundos. E um slide mais institucional e menos operacional.",
    visualType: "editorial",
    theme: "deep-navy",
    status: "official-site",
    visualNotes: {
      layout: "editorial premium com lista a esquerda e visual a direita",
      emphasis: "capacidade estrutural e sofisticacao",
      mediaHint: "abstracao de capital flow, documentos, nos financeiros",
      motionHint: "entrada por linhas de texto com leve translate",
    },
  },
  {
    id: "slide-06-payments-liquidity",
    order: 6,
    eyebrow: "PILAR 02",
    headline: "Payments & Liquidity",
    subheadline:
      "Recebimento local, liquidação internacional e tesouraria global em uma mesma infraestrutura operacional.",
    body:
      "A Archx conecta trilhos locais, internacionais e digitais para dar mais fluidez à entrada de receita, à liquidez e à movimentação financeira global.",
    bullets: ["Coleta PIX", "Máquina de cartão", "Checkout com cartão", "Compra de stablecoin", "Pagamentos globais", "Wire / SWIFT", "Outras moedas"],
    closingLine:
      "Uma camada operacional pensada para conectar receita local, liquidação internacional e liquidez global.",
    speakerNotes:
      "Este slide apresenta a nova camada de oferta. O ponto mais importante e enquadrar esses servicos como infraestrutura de liquidez e pagamentos, nao como lista isolada de meios de pagamento.",
    visualType: "grid",
    theme: "dark-accent",
    status: "proposed-offering",
    visualNotes: {
      layout: "grid modular com 6 ou 7 blocos grandes",
      emphasis: "servicos operacionais",
      mediaHint: "estetica de rails financeiros / dashboard sofisticado",
      motionHint: "entrada em sequencia por bloco",
    },
    footerNote:
      "Conteudo proposto para o novo deck comercial; nao depende de ja estar publicado no site.",
  },
  {
    id: "slide-07-local-collection",
    order: 7,
    eyebrow: "CAMADA DE COLETA",
    headline: "Recebimento Local, Alcance Global",
    subheadline:
      "Soluções de captura financeira que conectam recebimento local à operação global.",
    body:
      "A Archx estrutura a camada de entrada de receita da operação, aumentando eficiência no fluxo de caixa e integração entre coleta local, conciliação e liquidação global.",
    bullets: ["Coleta PIX", "Cartão presencial", "Checkout com cartão", "Conciliação preparada para escala"],
    closingLine:
      "Mais fluidez na entrada financeira. Mais preparo para a operação global.",
    speakerNotes:
      "Este slide desce um nivel e mostra entrada de receita. A mensagem e: a Archx tambem pode estruturar a camada de coleta financeira local, preparando a operacao para liquidacao e expansao global.",
    visualType: "split",
    theme: "dark-minimal",
    status: "proposed-offering",
    visualNotes: {
      layout: "split com fluxo visual local → global",
      emphasis: "entrada financeira e conciliacao",
      mediaHint: "trilhas de pagamento, nos e setas discretas",
      motionHint: "animacao de fluxo entre pontos",
    },
  },
  {
    id: "slide-08-payment-rails",
    order: 8,
    eyebrow: "TRILHOS SUPORTADOS",
    headline: "Trilhos de Pagamento Suportados",
    subheadline:
      "A Archx combina trilhos bancarios, digitais e locais para ampliar flexibilidade operacional e liquidez global.",
    bullets: [],
    groups: [
      {
        title: "Trilhos Locais",
        items: ["PIX", "Cartao presencial", "Checkout com cartao"],
      },
      {
        title: "Trilhos Bancarios",
        items: ["Wire", "SWIFT"],
      },
      {
        title: "Trilhos Digitais",
        items: ["Stablecoins", "Liquidacao internacional", "Outras moedas"],
      },
    ],
    closingLine:
      "Uma infraestrutura que conecta trilhos tradicionais e digitais para operacoes mais ageis, flexiveis e globais.",
    speakerNotes:
      "Este slide torna tangivel a infraestrutura. Ele organiza os metodos em trilhos locais, bancarios e digitais, ajudando o cliente enterprise a entender capacidade operacional sem excesso de detalhes tecnicos.",
    visualType: "diagram",
    theme: "dark-accent",
    status: "hybrid",
    visualNotes: {
      layout: "tres colunas: local rails, bank rails, digital rails",
      emphasis: "combinacao entre trilhos tradicionais e digitais",
      mediaHint: "labels pequenos em uppercase e conectores sutis",
      motionHint: "reveal por coluna",
    },
  },
  {
    id: "slide-09-compliance",
    order: 9,
    eyebrow: "PILAR 03",
    headline: "Compliance as Infrastructure",
    subheadline:
      "Governança, monitoramento e adequação regulatória como parte central da operação.",
    body:
      "A Archx trata compliance como infraestrutura operacional, conectando monitoramento, reporting, adequação regulatória e disciplina institucional à expansão global.",
    bullets: ["KYC / KYB", "AML / CFT", "LGPD / GDPR", "Auditoria & Reporting", "Estruturas regulatórias internacionais"],
    closingLine:
      "Escalar sem governança aumenta risco. A Archx combina expansão internacional com disciplina institucional.",
    speakerNotes:
      "O site e forte nesse bloco, entao o design aqui precisa transmitir rigor, controle e confianca. Compliance deve aparecer como ativo estrategico, nao como burocracia.",
    visualType: "cards",
    theme: "deep-navy",
    status: "official-site",
    visualNotes: {
      layout: "coluna ou grade de 5 pilares",
      emphasis: "rigor institucional",
      mediaHint: "visual sobrio com escudo abstrato ou selo tecnico",
      motionHint: "fade + rise discreto por item",
    },
  },
  {
    id: "slide-10-global-presence",
    order: 10,
    eyebrow: "PRESENCA GLOBAL",
    headline: "Cinco Jurisdicoes Estrategicas",
    subheadline:
      "Presenca internacional para ampliar alcance, flexibilidade estrutural e seguranca regulatoria.",
    body:
      "A Archx opera em hubs estrategicos que ampliam acesso a capital, estruturas internacionais, fundos, banking e operacoes cross-border.",
    bullets: [
      "Brasil - integracao bancaria e operacoes locais",
      "Estados Unidos - acesso a capital e estruturas internacionais",
      "Emirados Arabes Unidos - hub financeiro e gateway MENA",
      "Ilhas Cayman - fundos e estruturas offshore",
      "Arabia Saudita - capital institucional e projetos estrategicos",
    ],
    speakerNotes:
      "Aqui a geografia precisa ser lida como estrategia. Nao e uma simples lista de paises; e um mapa de acesso a capital, banking, fundos, liquidez e estruturas regulatorias.",
    visualType: "map",
    theme: "dark-minimal",
    status: "official-site",
    visualNotes: {
      layout: "mapa minimalista ou lista editorial com siglas grandes",
      emphasis: "alcance global e hubs estrategicos",
      mediaHint: "pontos luminosos discretos e linhas finas",
      motionHint: "highlight progressivo por jurisdicao",
    },
  },
  {
    id: "slide-11-client-profile",
    order: 11,
    eyebrow: "PARA QUEM E",
    headline: "Construido para Enterprise e Capital Sofisticado",
    subheadline:
      "A Archx atende operacoes que exigem estrutura internacional, liquidez, governanca e execucao com padrao institucional.",
    body:
      "Atuamos junto a organizacoes e estruturas que precisam integrar pagamentos, liquidez global, estruturacao patrimonial e acesso a mercados internacionais.",
    bullets: ["Empresas em expansao", "Investidores qualificados", "Family offices", "Holdings internacionais", "Gestoras", "Capital institucional"],
    closingLine:
      "Mais aderente a operacoes com ambição internacional, maior complexidade financeira e necessidade de governanca.",
    speakerNotes:
      "Esse slide elimina ambiguidade de publico. O site ja indica empresas, investidores qualificados, family offices, holdings internacionais, gestoras e investidores institucionais.",
    visualType: "grid",
    theme: "dark-minimal",
    status: "official-site",
    visualNotes: {
      layout: "6 cards ou 3 blocos maiores",
      emphasis: "perfil de cliente e sofisticacao",
      mediaHint: "sem fotos humanas, foco em labels institucionais",
      motionHint: "entrada sequencial leve",
    },
  },
  {
    id: "slide-12-use-cases",
    order: 12,
    eyebrow: "CASOS DE USO",
    headline: "Onde a Archx Gera Valor",
    subheadline:
      "Da captação internacional à liquidez global, a estrutura é adaptada ao nível de complexidade do cliente.",
    body:
      "A Archx desenha estruturas financeiras sob medida para operações que exigem mais sofisticação, alcance internacional e capacidade de execução.",
    bullets: ["Expansao internacional", "Estruturacao de fundos", "Modelos de fundos de research", "Acesso institucional"],
    closingLine:
      "A proposta da Archx é adaptar a estrutura ao nível de ambição, complexidade e maturidade da operação.",
    speakerNotes:
      "Este slide traduz a empresa em cenarios concretos. A ideia e mostrar onde a Archx gera valor na pratica, sem transformar o deck em apresentacao tecnica demais.",
    visualType: "cards",
    theme: "dark-accent",
    status: "official-site",
    visualNotes: {
      layout: "quatro paineis maiores com microdescricoes",
      emphasis: "aplicacao pratica",
      mediaHint: "visual modular com labels curtas",
      motionHint: "cards entram um a um",
    },
  },
  {
    id: "slide-13-differentials",
    order: 13,
    eyebrow: "POR QUE ARCHX",
    headline: "Força Institucional, Trilhos Modernos",
    subheadline:
      "Uma combinação rara entre presença internacional, estruturas sob medida, ativos digitais e governança institucional.",
    body:
      "A Archx combina visão financeira, capacidade operacional e disciplina institucional para construir estruturas mais fortes, mais flexíveis e mais globais.",
    bullets: ["5 jurisdicoes estrategicas", "Monitoramento em tempo real", "Estruturas sob medida", "Integracao nativa com blockchain", "Acesso a capital global"],
    closingLine:
      "Uma arquitetura desenhada para operar com sofisticação, escala e confiança institucional.",
    speakerNotes:
      "Esse e um dos slides mais fortes do deck. Ele precisa sintetizar o diferencial competitivo: presenca internacional, monitoramento em tempo real, estruturas sob medida, integracao com blockchain/stablecoins e acesso a investidores globais.",
    visualType: "grid",
    theme: "dark-accent",
    status: "official-site",
    visualNotes: {
      layout: "5 blocos grandes com peso visual maior",
      emphasis: "prova de posicionamento",
      mediaHint: "mais contraste e brilho controlado",
      motionHint: "highlight individual por diferencial",
    },
  },
  {
    id: "slide-14-commercial-model",
    order: 14,
    eyebrow: "MODELO COMERCIAL",
    headline: "Taxas Estruturadas por Perfil Operacional",
    subheadline:
      "Modelo comercial adaptado a volume, jurisdicao, moeda, trilho de liquidacao e enquadramento de compliance.",
    body:
      "As condicoes comerciais variam conforme a estrutura da operacao, o perfil transacional e o nivel de complexidade regulatoria envolvido.",
    bullets: [
      "Coleta PIX - xx%",
      "Maquina de cartao - xx%",
      "Checkout com cartao - xx%",
      "Compra de stablecoin - xx%",
      "Pagamentos globais - xx%",
      "Wire / SWIFT - xx%",
      "Outras moedas - xx%",
    ],
    speakerNotes:
      "O objetivo aqui e passar seriedade comercial. O slide deve ser limpo, direto e elegante. A leitura correta e que a taxa depende da estrutura operacional e do perfil do cliente.",
    visualType: "table",
    theme: "dark-minimal",
    status: "proposed-offering",
    visualNotes: {
      layout: "tabela premium com muito respiro",
      emphasis: "taxas e nota tecnica no rodape",
      mediaHint: "numeros com destaque e linhas sutis",
      motionHint: "entrada simples sem efeitos exagerados",
    },
    footerNote:
      "Taxas sujeitas a análise de perfil, volume transacionado, jurisdição, moeda, método de liquidação e enquadramento de compliance.",
  },
  {
    id: "slide-15-closing",
    order: 15,
    eyebrow: "ENCERRAMENTO",
    headline: "Mais alcance.\nMais controle.\nMais confianca institucional.",
    subheadline:
      "Capital, pagamentos globais, liquidez e governanca em uma arquitetura preparada para crescer com seguranca.",
    bullets: [],
    cta: {
      title: "Estruture sua operacao com a Archx",
      text: "Fale com a Archx e descubra a estrutura ideal para a sua operacao.",
    },
    speakerNotes:
      "Fechamos consolidando a tese inteira: a Archx nao e so estruturacao, nem so pagamento, nem so cripto. E uma infraestrutura financeira internacional preparada para operacoes sofisticadas.",
    visualType: "hero",
    theme: "deep-navy",
    status: "hybrid",
    visualNotes: {
      layout: "hero de fechamento, mais limpo e mais elegante",
      emphasis: "frase final + CTA discreto",
      mediaHint: "retomar linguagem visual do slide 1",
      motionHint: "fade final com progresso concluido",
    },
  },
]
