import type { Metadata, Viewport } from "next";
import { Marcellus, Source_Sans_3 } from "next/font/google";
import { brand } from "./lib/brand";
import "./globals.css";

const displayFont = Marcellus({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const shareImage = brand.logo;
const title = "Rocha Advocacia | Shirley Rocha · Previdenciário e Trabalhista em Sete Lagoas";
const description = "Orientação previdenciária e trabalhista com a Dra. Shirley Rocha, em Sete Lagoas, MG. Aposentadorias, benefícios do INSS e direitos do trabalho. WhatsApp: (31) 97173-1592.";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title,
  description,
  keywords: ["Rocha Advocacia", "Shirley Rocha", "advogada em Sete Lagoas", "direito previdenciário", "direito trabalhista", "planejamento previdenciário", "aposentadoria", "INSS"],
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    siteName: brand.businessName,
    type: "website",
    images: metadataBase
      ? [
          {
            url: shareImage,
            width: 1983,
            height: 793,
            alt: brand.businessName,
          },
        ]
      : undefined,
  },
  twitter: {
    card: metadataBase ? "summary_large_image" : "summary",
    title,
    description,
    ...(metadataBase ? { images: [shareImage] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#800010",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bodyFont.variable + " " + displayFont.variable}>
      <body className="min-h-screen bg-ivory font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
