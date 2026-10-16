// Dados institucionais e avaliações do material fornecido; sem integração ao vivo.
export const brand = {
  name: "Shirley Rocha",
  businessName: "Rocha Advocacia",
  phone: "(31) 97173-1591",
  phoneDigits: "5531971731591",
  whatsappPhone: "(31) 97173-1592",
  whatsappDigits: "5531971731592",
  address: "Rua Luiz Privat, 29A — Centro, Sete Lagoas — MG, 35700-001",
  location: "Sete Lagoas · Minas Gerais",
  logo: "/rocha-advocacia-logo.png",
  portrait: "/shirley-rocha-retrato.png",
  googleReviewCount: 35,
  googleRating: "5,0",
  instagram: "https://www.instagram.com/rochaadvocaciaa/",
  instagramHandle: "@rochaadvocaciaa",
};

// Trechos literais dos depoimentos enviados, com autoria preservada.
export const testimonials = [
  { name: "Rogerio Pontes", text: "Durante todo o processo, recebi orientação técnica, atenção e acompanhamento, inclusive diante da demora e das pendências operacionais do próprio INSS." },
  { name: "Fabienne Alves", text: "Fui muito bem atendida, uma ótima profissional e muito competente sempre me informava sobre o andamento." },
  { name: "Fernanda Lopes Mourão", text: "Excelente! Profissional empática, competente,dedicada e sobretudo,Humana! Obgda Dra Shirley, GRATIDÃO!" },
];

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Dra. Shirley! Gostaria de conversar sobre ${subject}.`
    : "Olá, Dra. Shirley! Gostaria de orientação sobre o meu caso.";
  return `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${brand.businessName}, ${brand.address}`)}`;
export const reviews = maps;
