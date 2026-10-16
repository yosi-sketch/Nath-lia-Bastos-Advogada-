# Rocha Advocacia — Dra. Shirley Rocha

<!-- impeccable:product-schema 1 -->

## Platform
web

## Users
Pessoas em Sete Lagoas, Minas Gerais, que buscam orientação sobre aposentadoria, benefícios do INSS e relações de trabalho. O alcance nacional do atendimento não foi informado.

## Product Purpose
Apresentar a Rocha Advocacia e a Dra. Shirley Rocha, explicar a atuação previdenciária e trabalhista e facilitar o primeiro contato por WhatsApp, telefone, Instagram e localização.

## Positioning
Escuta, clareza, atenção e acompanhamento individual. Comunicação institucional acessível, sem promessas de resultado, prazos de concessão ou benefícios garantidos.

## Operating Context
Página em pt-BR com início, informações de atendimento, atuação, sobre, processo de atendimento, FAQ, avaliações, contato, chamada final e rodapé. A implementação apresenta quatro temas em linhas com diálogos: Direito Previdenciário, Planejamento previdenciário, Direito Trabalhista e Direito Civil e Contratos. Civil/Contratos tem respaldo no material fornecido; o foco institucional do briefing e da apresentação é Previdenciário/Trabalhista.

O processo descreve escuta da história, análise de documentos e explicação dos caminhos possíveis. O FAQ aborda primeiro contato, endereço, questões previdenciárias/trabalhistas e documentos. Não há formulário de contato.

## Capabilities and Constraints
Next.js 16.3.5, React 19.2.8, Tailwind CSS 4, Framer Motion e Lucide conforme package.json. Consultar AGENTS.md e os guias locais em node_modules/next/dist/docs antes de alterar código Next.js.

Dados, depoimentos e destinos centralizados em app/lib/brand.ts; página em app/page.tsx; tema em app/globals.css; fontes e metadados em app/layout.tsx; CTA compartilhado em app/components/GlowingButton.tsx. Os caminhos components/GlowingButton.tsx e lib/brand.ts são relativos a app/ neste projeto.

NEXT_PUBLIC_SITE_URL recebe um domínio real quando ele for informado. Sem essa configuração, layout.tsx omite imagens sociais de Open Graph e Twitter. O logo é a imagem social configurada quando existe metadataBase. Não há domínio de produção confirmado.

## Brand Commitments
Preservar os arquivos originais do logo e do retrato, sem redesenho, recoloração ou corte permanente. Logo PNG de 1983 × 793 e retrato PNG de 1230 × 1278. O manifesto .impeccable/asset-origins.json registra cópias binárias integrais, dimensões e hashes de origem/destino iguais; esta documentação não refez a comparação dos binários.

Amostras opacas do logo, quantizadas em passos de 16: #800010, #202020, #303030, #707070 e #c0c0c0. Tons complementares implementados em app/globals.css. Marcellus nos títulos e Source Sans 3 na leitura, carregadas por next/font/google com display swap. O logo contém a assinatura original e deve permanecer integral; seu conteúdo não autoriza ampliar as áreas ou credenciais anunciadas.

## Evidence on Hand
Dados conforme material fornecido e representação em app/lib/brand.ts:

| Dado | Valor e origem |
| --- | --- |
| Escritório | Rocha Advocacia |
| Profissional | Dra. Shirley Rocha |
| Foco | Previdenciário e Trabalhista |
| Localização | Sete Lagoas · Minas Gerais |
| WhatsApp | (31) 97173-1592 · 5531971731592, conforme link de WhatsApp fornecido no Instagram |
| Telefone | (31) 97173-1591 · 5531971731591, conforme cadastro fornecido |
| Instagram | @rochaadvocaciaa · https://www.instagram.com/rochaadvocaciaa/ |
| Endereço | Rua Luiz Privat, 29A — Centro, Sete Lagoas — MG, 35700-001 |
| Avaliações | Nota 5,0/5 e 35 avaliações, conforme material fornecido, sem integração ao vivo |

WhatsApp usa wa.me/5531971731592 com mensagem codificada, contextual nos diálogos. Ligações usam tel:+5531971731591. Maps é uma busca por nome e endereço; reviews usa esse mesmo destino. Não há identificador específico de perfil Google confirmado no código.

Trechos literais fornecidos, preservados em app/lib/brand.ts, inclusive pontuação:

- Rogerio Pontes: “Durante todo o processo, recebi orientação técnica, atenção e acompanhamento, inclusive diante da demora e das pendências operacionais do próprio INSS.”
- Fabienne Alves: “Fui muito bem atendida, uma ótima profissional e muito competente sempre me informava sobre o andamento.”
- Fernanda Lopes Mourão: “Excelente! Profissional empática, competente,dedicada e sobretudo,Humana! Obgda Dra Shirley, GRATIDÃO!”

Lista literal fornecida pelo usuário: “Serviços: Advocacia de apelação, Avaliação de casos, Litígio civil, Litígio corporativo, Litígio de contratos, Litígio de divórcio, Litígio de emprego e Litígio trabalhista”. Litígio civil e Litígio de contratos respaldam o quarto serviço implementado; a lista é evidência de origem, não a relação de diálogos da página.

OAB, e-mail, domínio, horários, anos de experiência, formação e outras credenciais não foram informados. Atendimento nacional também não foi informado. Não preencher lacunas com suposições.

## Product Principles
Apresentar a profissional real, explicar os assuntos do atendimento com clareza e oferecer contato direto. Manter separados o telefone cadastral e o WhatsApp. Tratar nota e relatos como material fornecido, sem afirmar consulta ou atualização ao vivo.

Validação fornecida pelo principal: npm run build, npm run lint -- app e tsc --noEmit concluídos com exit 0; navegador de produção sem errors/warnings; larguras 320, 390, 527, 768, 1024 e 1440px sem overflow horizontal; imagens carregadas; menu móvel fecha por seleção; FAQ abre/fecha; quatro modais com WhatsApp contextual, Escape, foco inicial, ciclo Tab/Shift+Tab, retorno de foco e remoção de inert/scroll lock. Revisão independente: ship. Evidências em .impeccable/review/qa-results.json e, na mesma pasta, desktop.png, mobile.png, user-527.png, desktop-hero.png e mobile-hero.png. Esta passagem documentou esses resultados; não os executou.

Contrastes informados pelo principal: CTA 10,91:1; texto 15,19:1; secundário 6,53:1; grafite 13,27:1. Nenhuma medição foi refeita nesta passagem.
