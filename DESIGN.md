---
name: "Nathália Bastos — Advocacia e Consultoria Jurídica"
description: "Champanhe, bronze, preto quente e marfim; Marcellus e Manrope."
colors:
  ink: "#30251e"
  ink-soft: "#6b5a4d"
  paper: "#ffffff"
  ivory: "#faf7f2"
  linen: "#e9dfd2"
  brand-50: "#f5ede2"
  brand-100: "#f3e1cc"
  brand-200: "#ffe0c0"
  brand-300: "#f0d0a0"
  brand-400: "#e0b080"
  brand-500: "#c09060"
  brand-600: "#a06e48"
  brand-700: "#805135"
  brand-800: "#65402b"
  brand-900: "#24201c"
  brand-950: "#141311"
typography:
  display:
    fontFamily: "Marcellus, Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.025em"
    fontSize: "4.2rem"
    lineHeight: 1.1
  display-tablet:
    fontFamily: "Marcellus, Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.025em"
    fontSize: "3.6rem"
    lineHeight: 1.1
  display-mobile:
    fontFamily: "Marcellus, Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.025em"
    fontSize: "2.75rem"
    lineHeight: 1.1
  headline:
    fontFamily: "Marcellus, Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.035em"
    fontSize: "3.55rem"
    lineHeight: 1.07
  headline-tablet:
    fontFamily: "Marcellus, Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.035em"
    fontSize: "3rem"
    lineHeight: 1.07
  headline-mobile:
    fontFamily: "Marcellus, Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.035em"
    fontSize: "2.25rem"
    lineHeight: 1.07
  title:
    fontFamily: "Marcellus, Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.025em"
    fontSize: "1.8rem"
    lineHeight: 1.25
  title-mobile:
    fontFamily: "Marcellus, Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.025em"
    fontSize: "1.55rem"
    lineHeight: 1.25
  dialog-mobile:
    fontFamily: "Marcellus, Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.025em"
    fontSize: "1.7rem"
    lineHeight: 1.25
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontWeight: 400
    fontSize: "16px"
    lineHeight: "28px"
  body-spacious:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontWeight: 400
    fontSize: "16px"
    lineHeight: "32px"
  intro:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontWeight: 400
    fontSize: "15px"
    lineHeight: "28px"
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontWeight: 600
    fontSize: "14px"
    lineHeight: "20px"
  small:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontWeight: 400
    fontSize: "12px"
    lineHeight: "24px"
  metadata:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontWeight: 400
    fontSize: "10px"
    lineHeight: "15px"
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

# Design System: Nathália Bastos

## Overview

**Creative North Star: "Clareza com presença"**

O logo champanhe e bronze de Nathália Bastos orienta uma identidade de tons quentes, com preto quente nas superfícies escuras e marfim na leitura. Marcellus traz proporções clássicas e terminais discretos; Manrope mantém a leitura clara nos textos e controles.

**Key Characteristics:**

- Logo original sobre preto quente, sem distorção ou recoloração.
- Champanhe nas ações e bronze profundo no texto sobre claro.
- Marcellus nos títulos e Manrope nos textos e controles.
- Superfícies planas, divisórias finas e imagens fornecidas.

## Colors

### Primary
Champanhe brand-300 nas ações e brand-200 no hover. A amostragem de pixels opacos do logo, quantizados em passos de 16, também fornece brand-400 e brand-500. Os reflexos claros e o bronze mantêm a relação com a marca original.

### Secondary
Bronze profundo brand-700 para títulos destacados, ícones e links sobre claro; brand-800 em ações secundárias. Esses tons derivados mantêm contraste na leitura.

### Neutral
Preto quente brand-950 no cabeçalho, hero, processo, avaliações e rodapé; marfim ivory no fundo; paper em seções claras e linen nas divisórias. Ink e ink-soft oferecem hierarquia sobre claro; brand-100 e brand-200 sobre escuro.

**The Logo Integrity Rule.** Preservar o arquivo original, suas proporções e cores; apresentar o logo sobre uma superfície escura.

## Typography

Marcellus 400 nos títulos e Manrope 400/500/600/700 na leitura e controles, hospedadas por next/font com display swap. A escala declarada acima registra as funções e seus passos responsivos.

H1: display-mobile na base, display-tablet a partir de 640px e display em 1024px. H2 compartilhado: headline-mobile, headline-tablet e headline nos mesmos marcos. Serviços: title-mobile e title. Descrições principais: intro, com 16px/32px no hero a partir de 640px. Serviços e etapas: body; apresentação: body-spacious. FAQ e diálogo: 14px/28px. Texto secundário e rodapé: small; labels e direitos autorais podem usar metadata. Largura de leitura limitada em geral a 32–36rem.

## Layout

Contêiner de até 80rem. Gutters e espaçamento de seções seguem os tokens acima. Cabeçalho sticky de 104px na base e 112px a partir de 640px. Hero com padding vertical de 48px, 64px em telas intermediárias e 48px em desktop; colunas 1.2fr/0.8fr em 1024px, empilhadas abaixo disso.

Logo com largura de 202px na base e 225px a partir de 640px. Retrato com largura máxima de 287px na base e 310px a partir de 640px, altura proporcional, em moldura fina champanhe com 12px de respiro interno e legenda escura. Imagem da identidade no Sobre com largura máxima de 460px. Serviços em linhas, com ícone e ação alinhados a partir de 640px. Sobre, etapas, FAQ e contato usam duas colunas a partir de 1024px. Avaliações em grid de uma coluna na base, duas em 768px e três em 1024px. Seis relatos visíveis de início, com expansão para doze e retorno a seis.

## Elevation & Depth

Profundidade por superfícies e divisórias. Sombra apenas no diálogo: 0 18px 48px rgb(48 37 30 / 18%). Backdrop ink/55 com desfoque pequeno.

**The Flat Surface Rule.** Usar superfícies e divisórias para hierarquia; reservar a sombra ao diálogo.

## Shapes

Botões com cantos discretos sm. Ícones e controles compactos podem ser circulares. Diálogo com cantos superiores de 1rem no celular, raio sm a partir de 640px, altura máxima de 90dvh e rolagem interna. Imagens retangulares com proporção original.

## Components

- Botão principal champanhe, texto escuro, altura mínima de 44px, hover claro e foco visível. Tamanhos: 12px/20px de padding no compacto, 14px/24px no padrão e 16px/28px no amplo.
- Navegação clara sobre preto quente. Menu móvel sobre marfim, fecha por seleção ou Escape.
- Serviços em linhas com ações de detalhes; diálogos nomeados, foco contido, Escape, retorno do foco, fundo inert e bloqueio de rolagem. WhatsApp contextual para cada assunto.
- FAQ nativo details/summary. Avaliações reais do Google com autoria, estrelas e trechos de até 25 palavras por autor. Nota 5,0 e total de 14 avaliações conferidos em 17/10/2026; sem atualização automática. O botão de expansão informa aria-expanded e aria-controls.
- Contato direto, endereço e rodapé com os dados centralizados em app/lib/brand.ts. Sem formulário.
- Revelação única do retrato por clip-path em 1s. Conteúdo visível por padrão. Movimento reduzido desativa a assinatura; MotionConfig respeita a preferência do usuário. Estados, seleção, caret, scrollbars e foco usam a paleta.

## Do's and Don'ts

### Do:

- Do preservar as proporções e os arquivos originais.
- Do usar bronze profundo para destaques sobre claro e champanhe com texto escuro nas ações.
- Do manter foco visível, leitura responsiva e movimento reduzido.

### Don't:

- Don't usar champanhe como texto pequeno sobre branco.
- Don't ampliar excessivamente o retrato de resolução reduzida.
- Don't adicionar credenciais, avaliações ou contatos sem fonte.
