---
name: "Santos Advocacia — Dra. Marcela Santos"
description: "Dourado do logo, grafite e marfim; Cinzel e Lato."
colors:
  ink: "#24221e"
  ink-soft: "#625d53"
  paper: "#ffffff"
  ivory: "#faf8f2"
  linen: "#eae3d5"
  brand-50: "#f4efe3"
  brand-100: "#eee3cc"
  brand-200: "#ebd6a5"
  brand-300: "#e0c080"
  brand-400: "#d0b070"
  brand-500: "#b48b43"
  brand-600: "#a07030"
  brand-700: "#805020"
  brand-800: "#704010"
  brand-900: "#2c2923"
  brand-950: "#171715"
  gold-border: "rgb(224 192 128 / 40%)"
  gold-divider: "rgb(224 192 128 / 25%)"
typography:
  display:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "3.8rem"
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "3.55rem"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.8rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "28px"
  label:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "20px"
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
components:
  button-primary:
    backgroundColor: "{colors.brand-300}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-200}"
    textColor: "{colors.ink}"
---

# Design System: Santos Advocacia

## Overview

**Creative North Star: "Clareza com presença"**

Logo e retrato originais definem a identidade da Santos Advocacia. Dourado e bronze acompanham o grafite e as superfícies claras de marfim. Cinzel aproxima os títulos das serifas do logo; Lato mantém a leitura dos textos e controles.

**Key Characteristics:**

- Logo original sobre escuro, preservando suas proporções.
- Dourado nas ações; bronze nos destaques sobre claro.
- Cinzel nos títulos e Lato nos textos e controles.
- Divisórias finas e superfícies planas, com sombra reservada ao diálogo.

## Colors

### Primary
Dourado brand-300 no CTA, brand-200 no hover. Bronze brand-700 no texto de destaque sobre claro; brand-800 em links. A origem é o logo fornecido: amostras opacas quantizadas em passos de 16, com dourados, bronzes e reflexos claros.

### Neutral
Grafite brand-950 sustenta o cabeçalho, processo e rodapé. Marfim ivory oferece superfície de leitura; paper mantém os trechos brancos. ink e ink-soft são usados em texto sobre claro; brand-100 e brand-200 em texto sobre escuro. gold-border e gold-divider registram as bordas translúcidas do cabeçalho e rodapé.

**The Logo Integrity Rule.** Preservar o arquivo original, sem recoloração ou distorção; apresentar sobre uma superfície escura.

## Typography

Cinzel 400 nos títulos e Lato 400/700 nos textos, via next/font/google com display swap. H1: 2.6rem na base, 3.5rem em sm e 3.8rem em lg, entrelinha 1,13. Títulos de seção: 2.25/3/3.55rem, entrelinha 1,07. Serviços: 1.55/1.8rem. Tracking dos títulos: -0,025em; títulos Heading declaram -0,035em. Texto principal: 15px/28px, chegando a 16px/32px no hero em sm; textos menores: 13px/24px. CTA: 14px, ou 16px no tamanho amplo. Navegação: 15px, peso 600 solicitado ao navegador. Links compactos do Maps usam 10px e caixa alta.

## Layout

Contêiner de até 80rem; gutters 20/32/48px. Seções principais: 80/112/128px de padding vertical; hero 48/64px. Cabeçalho sticky de 92px na base e 104px em sm. Breakpoints: logo 360px, sm 640px, md 768px e lg 1024px. Hero empilhado até lg; texto à esquerda e retrato à direita em lg. Retrato integral com largura máxima de 400/440px. Serviços em linhas; avaliações em três colunas a partir de md. Contato e Sobre em duas colunas em lg.

## Elevation & Depth

Profundidade por superfícies e divisórias. Sombra exclusiva do diálogo: 0 18px 48px rgb(36 34 30 / 18%). Backdrop ink/55 e desfoque pequeno.

**The Flat Surface Rule.** Reservar sombras para o diálogo; usar divisórias e diferenças de superfície nos demais componentes.

## Shapes

CTA com raio sm; ícones e controles compactos circulares. Diálogo com cantos superiores de 1rem no celular, raio sm em sm e altura máxima de 90dvh com rolagem interna. Retrato sem corte permanente ou distorção.

## Components

- CTA compartilhado dourado com texto escuro, altura mínima de 44px, tamanhos sm/md/lg, hover e foco visível.
- Cabeçalho escuro com logo integral, links claros e sublinhado no hover. Menu móvel com aria-expanded, fechamento por seleção e Escape.
- Quatro serviços em linhas com diálogos nomeados, WhatsApp contextual, foco inicial no fechamento, ciclo Tab/Shift+Tab, Escape, retorno do foco, fundo inert e bloqueio de rolagem.
- FAQ nativo details/summary; contato direto sem formulário. Rodapé escuro com logo integral e contatos.
- Revelação do retrato por clip-path em 1s; conteúdo visível por padrão. Movimento reduzido desativa a assinatura e reduz durações. MotionConfig reducedMotion=user.

## Do's and Don'ts

### Do:

- Do preservar os arquivos originais e suas proporções.
- Do usar bronze para texto sobre claro e dourado para ações com texto escuro.
- Do manter foco visível e respeitar movimento reduzido.

### Don't:

- Don't recolorir o logo ou cortar permanentemente o retrato.
- Don't usar dourado claro como texto pequeno sobre branco.
- Don't inventar credenciais, especialidades ou contatos.
