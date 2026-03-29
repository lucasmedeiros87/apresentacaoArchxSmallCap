# Contexto e Regras do Projeto (Archx SmallCap)

## 1) Objetivo
Este projeto e a versao curta (executiva/comercial) da apresentacao da Archx, com:
- 5 slides institucionais
- visual premium (black / white / red)
- suporte multilanguage no mesmo deck
- modo de proposta comercial por cliente via URL

Meta principal: permitir que o time comercial gere variacoes por cliente mudando apenas dados simples (nome e data), sem redesenhar slides.

---

## 2) Stack e Base Tecnica
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

Arquivos-chave:
- `app/page.tsx`: deck principal
- `app/proposta/page.tsx`: gerador de link de proposta
- `app/proposta/[slug]/page.tsx`: deck dinamico por cliente
- `components/presentation/presentation-shell.tsx`: shell (header, navegacao, idioma, progress)
- `components/slides/renderers/archx-slide-renderer.tsx`: renderer principal dos slides
- `content/archx-slides.ts`: base dos 5 slides
- `content/presentation-i18n.ts`: traducoes EN/PT-BR/AR/RU
- `content/proposal-template.ts`: regras de customizacao de proposta
- `lib/slides.tsx`: builder dos slides
- `types/presentation.ts`: tipos de slide e locale override

---

## 3) Rotas do Sistema

### Deck base
- `/`

### Gerador de proposta
- `/proposta`
- Tela para preencher:
  - nome do cliente
  - data da proposta
  - slug opcional

### Proposta dinamica por cliente
- `/proposta/[slug]?cliente=Nome+Cliente&data=dd%2Fmm%2Faaaa`

Parametros suportados:
- `cliente`: nome exibido no slide 1 (rodape do painel esquerdo)
- `data`: usada no caption da barra inferior
- `slide`: slide atual (persistencia de navegacao)
- `lang`: idioma atual (quando switcher ativo)

Exemplo:
- `/proposta/teste-lucas?cliente=Teste+Lucas&data=27%2F03%2F2026&slide=3&lang=pt-BR`

---

## 4) Idioma (Multilanguage)

Idiomas ativos:
- `en` (default global)
- `pt-BR`
- `ar`
- `ru`

Regras:
- Troca de idioma no mesmo slide (sem reset de navegacao)
- Sem duplicar paginas por idioma
- Fallback para EN quando faltar traducao
- Para AR: RTL aplicado em blocos textuais, sem espelhar deck inteiro

Arquitetura:
- Dicionario central em `content/presentation-i18n.ts`
- `getSlideTranslation(slideId, locale)`
- `isRtlLocale(locale)`
- `LanguageSwitcher` no shell
- `localeOverrides` por slide para customizacao especifica em proposta

---

## 5) Estrutura Oficial do Deck Curto (5 slides)

1. **Slide 01 - Quem somos (Cover)**
   - Globo premium no painel direito
   - Na proposta: exibe cliente no rodape do painel esquerdo
   - Caption da barra: `Proposta Comercial - {data}`

2. **Slide 02 - Compliance**
   - Conceito de compliance como base operacional
   - Sem mudancas estruturais na proposta

3. **Slide 03 - Produtos**
   - Organizacao em 3 blocos:
     - Recebimento local
     - Cambio e liquidacao
     - Estrutura e suporte
   - Regra da proposta: **adicionar** itens no recebimento (nao remover os existentes)
   - Ajuste visual atual:
     - 1o bloco maior
     - 2o e 3o menores

4. **Slide 04 - Precos**
   - Tabela/lista com modelo comercial
   - Regra atual da proposta:
     - Coleta PIX: 0,4%
     - Maquininha de cartao: 2%
     - BRL -> USDT: padrao 0,5% | 0,4% acima de 20MM BRL/mes
     - USDT -> USD: padrao 0,5% | 0,4% acima de 5MM USD/mes
     - Consultoria: a combinar

5. **Slide 05 - Encerramento**
   - Manifesto curto
   - Sem mudanca estrutural na proposta

---

## 6) Regras de Design (Nao Quebrar)

Identidade:
- Black / White / Red
- Vermelho principal: `#DF2C2F`
- Hover/acao: `#B82326`

Direcao visual:
- Premium institucional
- Contraste limpo
- Sem cara de dashboard
- Sem cara de template genérico

Proibido:
- Labels de debug/template visiveis no UI final
- Placeholders tecnicos
- Duplicar conteudo em esquerda e direita sem funcao clara

---

## 7) Regras de Responsividade

Objetivo:
- Desktop e mobile legiveis
- Sem corte e sem scroll vertical para consumo normal do deck

Regras praticas:
- Nao degradar desktop para consertar mobile
- Ajustes mobile devem ser por breakpoint
- Garantir:
  - portrait (celular em pe)
  - landscape (celular deitado)
  - desktop 1440x900, 1600x900, 1728x972

---

## 8) Fluxo de Proposta Comercial

1. Abrir `/proposta`
2. Preencher:
   - nome do cliente
   - data
   - slug (opcional)
3. Abrir ou copiar URL gerada
4. Usar o mesmo deck com:
   - conteudo personalizado
   - idioma selecionavel
   - navegacao mantendo slide atual

---

## 9) Problemas Conhecidos e Diagnostico Rapido

### A) Hydration mismatch no Next
Mensagem comum citando atributos como:
- `data-new-gr-c-s-check-loaded`
- `data-gr-ext-installed`

Causa comum:
- extensao do navegador alterando DOM (ex: Grammarly)

Acao:
- testar em aba anonima / sem extensoes
- isso nao costuma ser bug real do codigo

### B) Cache webpack/.next quebrado
Erro de `PackFileCacheStrategy` ou runtime inconsistente.

Acao:
1. parar servidor
2. apagar `.next`
3. rodar `npm run dev` novamente

---

## 10) Comandos Uteis

Desenvolvimento:
```bash
npm run dev
```

Build de validacao:
```bash
npm run build
```

Subir para GitHub:
```bash
git add .
git commit -m "mensagem do commit"
git push origin main
```

Criar branch de teste:
```bash
git checkout -b nome-da-branch
git push -u origin nome-da-branch
```

---

## 11) Checklist Antes de Deploy

- [ ] idioma trocando no mesmo slide (`lang`)
- [ ] slide 3 sem perda de itens originais (apenas acrescimos)
- [ ] slide 4 com taxas corretas da proposta
- [ ] cliente/data corretos na URL de proposta
- [ ] sem overflow/corte em desktop e mobile
- [ ] `npm run build` sem erro
- [ ] commit/push no repo correto (`apresentacaoArchxSmallCap`)

---

## 12) Observacoes de Manutencao

- Este projeto teve historico de problemas de encoding em alguns arquivos.
- Preferir UTF-8 consistente no editor.
- Evitar copiar/colar texto de fontes que geram caracteres corrompidos.
- Se mexer em copy PT-BR, revisar acentuacao no navegador apos commit.

---

## 13) Fonte de Verdade

Para continuidade sem perder contexto:
- regras comerciais: este documento
- regras de customizacao por cliente: `content/proposal-template.ts`
- copy multilanguage: `content/presentation-i18n.ts`
- composicao visual: `components/slides/renderers/archx-slide-renderer.tsx`

