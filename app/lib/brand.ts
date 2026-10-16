// Dados institucionais e avaliações do material fornecido; sem integração ao vivo.
export const brand = {
  name: "Luana Oliveira",
  businessName: "Luana Oliveira — Advogada",
  phone: "(33) 98739-4137",
  phoneDigits: "5533987394137",
  address: "Rua Raul Soares, 134 — Centro, Caratinga — MG, 35300-020",
  location: "Caratinga · Minas Gerais",
  logo: "/luana-oliveira-logo.png",
  portrait: "/luana-oliveira-retrato.png",
  aboutImage: "/luana-oliveira-sobre.png",
  googleReviewCount: 43,
  googleRating: "5,0",
  instagram: "https://www.instagram.com/luanaoliadv/",
  instagramHandle: "@luanaoliadv",
};

// Trechos literais dos depoimentos enviados, com autoria preservada.
export const testimonials = [
  { name: "Marcos Vinícius", text: "Ela foi muito atenciosa comigo e teve muita clareza nas explicações para eu entender melhor aquelas partes burocráticas de imóveis e inventário. Além disso, o atendimento foi bem rápido e com total transparência do começo ao fim. Nota 10!" },
  { name: "Alessandra Moreira", text: "Profissional competente, dedicada e muito atenciosa. Transmite confiança e cuidado em cada detalhe. Recomendo seu trabalho." },
  { name: "Sergio Luiz Moreira", text: "Excelente profissional. Capacitada e preparada para atendê-lo, principalmente na área do direito imobiliário, notarial e registral." },
];

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Dra. Luana! Gostaria de conversar sobre ${subject}.`
    : "Olá, Dra. Luana! Gostaria de orientação sobre o meu caso.";
  return `https://wa.me/${brand.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = "https://www.google.com/maps?cid=785740618994194925";
