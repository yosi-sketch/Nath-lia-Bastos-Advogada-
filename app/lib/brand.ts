// Dados institucionais e avaliações do material fornecido; sem integração ao vivo.
export const brand = {
  name: "Marcela Santos",
  businessName: "Santos Advocacia",
  phone: "(37) 99929-3550",
  phoneDigits: "5537999293550",
  whatsappPhone: "(37) 99929-3550",
  whatsappDigits: "5537999293550",
  address: "Rua Silviano Brandão — Centro, Formiga — MG, 35570-112",
  location: "Formiga · Minas Gerais",
  logo: "/marcela-santos-logo.png",
  portrait: "/marcela-santos-retrato.png",
  googleReviewCount: 24,
  googleRating: "5,0",
  instagram: "https://www.instagram.com/marcelasantosadv/",
  instagramHandle: "@marcelasantosadv",
  googleCid: "15075427671493642874",
};

// Trechos literais dos depoimentos enviados, com autoria preservada.
export const testimonials = [
  { name: "Emyrlaine Silva", text: "Super atenciosa, ótima no que faz , pode confiar de olho fechado" },
  { name: "Pâmela Lima", text: "Excelente profissional, competente, atenciosa e dedicada. Recomendo!" },
  { name: "Rinaldo Victor", text: "Ótimo atendimento! Domínio e conhecimento técnico excepcional." },
];

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Dra. Marcela! Gostaria de saber mais sobre ${subject}.`
    : "Olá, Dra. Marcela! Gostaria de informações para agendar um atendimento.";
  return `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = `https://www.google.com/maps?cid=${brand.googleCid}`;
