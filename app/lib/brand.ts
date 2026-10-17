// Dados institucionais da cliente; avaliações conferidas no Google em 17/10/2026.
export const brand = {
  name: "Nathália Bastos",
  businessName: "Nathália Bastos — Advocacia e Consultoria Jurídica",
  specialty: "Advocacia bancária",
  phone: "(34) 99165-9554",
  phoneDigits: "5534991659554",
  whatsappDigits: "5534991659554",
  address: "Av. Rui Barbosa, 621 · Edifício Vila Rica · Sala 403, 4º andar · Centro · Patrocínio — MG · CEP 38740-012",
  location: "Patrocínio · Minas Gerais",
  logo: "/nathalia-bastos-logo.png",
  portrait: "/nathalia-bastos-retrato.png",
  office: "/nathalia-bastos-escritorio.png",
  googleReviewCount: 14,
  googleRating: "5,0",
  instagram: "https://www.instagram.com/nathaliabastos.adv/",
  instagramHandle: "@nathaliabastos.adv",
  googleCid: "1582243004221022442",
};

// Trechos literais de até 25 palavras por autor. Fonte: perfil Google do escritório.
// As duas avaliações sem texto não recebem depoimentos inventados.
export const testimonials = [
  { name: "Brenda Priscila", text: "A Dra. Natália Bastos presta um atendimento atencioso, esclarece todas as dúvidas com muita clareza e demonstra grande conhecimento jurídico.", excerpt: true },
  { name: "mônica santos", text: "Ótima experiência. Atendimento humanizado, profissionais qualificados e sempre disponíveis para esclarecer dúvidas. Transmitem confiança e segurança.", excerpt: true },
  { name: "Arthur Felipe", text: "Advogada muito bem instruida, atenciosa e educada. Todas as vezes que precisei sempre esteve disposta a me ajudar. Muito prestativa", excerpt: false },
  { name: "Maria Luiza Samuel", text: "Dra. Nathalia é excelente, recomendo muito! Conhecimento amplo e muita agilidade.", excerpt: false },
  { name: "Natalia Andrade", text: "Competente, séria. Uma profissional ímpar. Parabéns Nathalia, continue brilhando na sua profissão.", excerpt: false },
  { name: "comercial amaral", text: "Excelente profissional! Equipe também Excelente! Super indico!", excerpt: false },
  { name: "vanessa cortes", text: "Recomendo muito o escritório.", excerpt: true },
  { name: "Gislene de Fatima Almeida Campos", text: "Excelente.otima profissional", excerpt: false },
  { name: "Davi Campos", text: "Excelente profissional", excerpt: false },
  { name: "João Vítor", text: "Excelente!", excerpt: false },
  { name: "Roberto Samuel Rodrigues Pereira", text: "Excelente Profissional", excerpt: false },
  { name: "Aline Aparecida", text: "Uma excelente profissional ! Super recomendo", excerpt: false },
];

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Dra. Nathália! Gostaria de orientação sobre ${subject}.`
    : "Olá, Dra. Nathália! Gostaria de informações para agendar um atendimento em Direito Bancário.";
  return `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = `https://www.google.com/maps?cid=${brand.googleCid}`;
