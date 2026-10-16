---
name: "Luana Oliveira — Advocacia"
description: "Dourado do logo LO, vinho e bege das referências; serifas elegantes e leitura clara."
colors:
  ink: "#321b23"
  ink-soft: "#6c555b"
  gold-divider: "rgb(224 192 144 / 25%)"
  gold-frame: "rgb(224 192 144 / 40%)"
  paper: "#ffffff"
  ivory: "#faf7f0"
  linen: "#e5d9c9"
  brand-50: "#f3ede3"
  brand-100: "#eee0cf"
  brand-200: "#fff0d0"
  brand-300: "#e0c090"
  brand-400: "#d0b080"
  brand-500: "#b09060"
  brand-600: "#836337"
  brand-700: "#731d35"
  brand-800: "#64162c"
  brand-900: "#420d1b"
  brand-950: "#501020"
typography:
  feature:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.7rem"
    fontWeight: 400
    lineHeight: 1.25
  feature-caption:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "1.25rem"
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3.25rem"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  display-tablet:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "4.4rem"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  display-desktop:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "4.8rem"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.025em"
  headline-tablet:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.025em"
  headline-desktop:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3.55rem"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.025em"
  service-title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.55rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  service-title-tablet:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.8rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: "2rem"
    letterSpacing: "-0.025em"
  professional-name:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: "2.25rem"
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.75rem"
    letterSpacing: "normal"
  body-small:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.75rem"
    letterSpacing: "normal"
  compact-body:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.5rem"
    letterSpacing: "normal"
  navigation:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: "1.5"
    letterSpacing: "normal"
  label:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1rem"
    letterSpacing: "0.14em"
  label-small:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: "1.5"
    letterSpacing: "0.13em"
rounded:
  sm: "0.25rem"
  modal-mobile: "1rem"
  full: "9999px"
spacing:
  gutter-mobile: "1.25rem"
  gutter-tablet: "2rem"
  gutter-desktop: "3rem"
  section-mobile: "5rem"
  section-tablet: "7rem"
  section-desktop: "8rem"
  hero-mobile: "3.5rem"
  hero-tablet: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.brand-300}"
    textColor: "{colors.brand-950}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.875rem 1.5rem"
  button-primary-small:
    backgroundColor: "{colors.brand-300}"
    textColor: "{colors.brand-950}"
    typography: "{typography.label-small}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.25rem"
  button-primary-large:
    backgroundColor: "{colors.brand-300}"
    textColor: "{colors.brand-950}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-200}"
    textColor: "{colors.brand-950}"
---

# Design System: Luana Oliveira

## Overview

A identidade vem dos anexos originais: dourado do monograma LO e vinho e bege da apresentação profissional. Títulos serifados, fotografias reais e superfícies claras trazem elegância e proximidade. Cabeçalho, hero e rodapé escuros sustentam a assinatura dourada.

## Colors

O logo forneceu amostras opacas quantizadas em passos de 16: #e0c090, #f0d0a0, #d0b080, #fff0d0 e #b09060. A apresentação forneceu #501020 e #d0c0b0. Os tons derivados normativos estão no frontmatter e em app/globals.css, onde o Tailwind 4 configura o tema com @theme inline.

Dourado brand-300 nos CTAs sobre vinho; brand-200 no hover. Vinho brand-700 em links sobre claro. Ivory e paper alternam leitura; ink-soft mantém 6,36:1 sobre ivory. Ink/ivory 14,91:1; brand-700/ivory 10,03:1; brand-950/brand-300 8,43:1; brand-100/brand-950 11,28:1. Divisórias douradas usam 25%, e a moldura do retrato usa 40%.

## Typography

Cormorant Garamond nos títulos, peso 400, tracking -0,025em. Lato na leitura; arquivos locais otimizados por next/font/google com display swap. Display carrega 400/500/600; Lato carrega 400/700, com pesos intermediários solicitados pelos controles resolvidos pelo navegador. H1 3,25/4,4/4,8rem; títulos 2,25/3/3,55rem. Texto 15px/28px; detalhes 13px/24px. Navegação desktop 14px. Rótulos de apoio 11px; destaque de atendimento e diálogo 1,7rem.

## Layout

Contêiner máximo 80rem; gutters 20/32/48px; breakpoints sm 640, md 768 e lg 1024px. Cabeçalho sticky 96/112px. Hero em duas colunas no desktop, texto seguido de retrato no celular. Foto integral até 400px; arte Sobre quadrada até 460px, limitada pela coluna disponível. Serviços em linhas separadas por divisórias; avaliações em três colunas no desktop. Contato em duas colunas a partir de lg. Sem rolagem horizontal nas larguras 320, 390, 768, 1024 e 1440px verificadas.

## Elevation & Depth

Superfícies planas com separação tonal. Sombra do diálogo: 0 18px 48px rgb(50 27 35 / 18%). Backdrop ink/55 com desfoque. Menu 220ms, diálogo 240ms, CTA 200ms, navegação 180ms. Revelação da moldura por clip-path em 1200ms. Movimento reduzido respeitado; conteúdo visível por padrão.

## Shapes

Painéis retangulares, botões com raio de 4px, controles compactos circulares. Modal com cantos superiores de 16px no celular e 4px no desktop, altura máxima 90dvh e rolagem interna. Imagens originais preservadas integralmente.

## Components

CTAs dourados com texto vinho, altura mínima 44px e foco visível. Links do cabeçalho claros sobre vinho escuro, dourados no hover. Menu móvel marfim, com aria-expanded e fechamento por seleção ou Escape. Logo original diretamente sobre vinho no cabeçalho e rodapé.

Quatro serviços: inventário, usucapião, regularização de imóveis e consultoria imobiliária e registral. Diálogos nomeados com foco inicial, ciclo Tab/Shift+Tab, Escape, retorno de foco, fundo inert e bloqueio de rolagem. WhatsApp contextual inclui o assunto selecionado.

FAQ em details/summary. Endereço em Caratinga, telefone, Instagram e atendimento on-line nacional; destinos centralizados em app/lib/brand.ts. Nota 5,0 e 43 avaliações correspondem ao material fornecido, sem integração ao vivo. Não há e-mail ou inscrição OAB informados.

Logo 2172 × 724, retrato 340 × 510 e arte Sobre 510 × 510 em public/luana-oliveira-*.png. Proveniência e hashes em .impeccable/asset-origins.json. A baixa resolução do retrato é a do arquivo original.

## Do's and Don'ts

- Do preservar cores, proporções e integridade dos anexos.
- Do manter dourado sobre vinho e texto escuro sobre fundos claros.
- Do preservar foco visível e acessibilidade dos diálogos.
- Don't inventar e-mail, OAB, domínio, horários ou resultados.
- Don't apresentar os oito anos em cartório como oito anos de advocacia.
