import type { Metadata, Viewport } from "next";
import { Cinzel, Lato } from "next/font/google";
import { brand } from "./lib/brand";
import "./globals.css";

const displayFont = Cinzel({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bodyFont = Lato({
  weight: ["400", "700"],
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const shareImage = brand.logo;
const title = "Santos Advocacia | Dra. Marcela Santos · Advogada em Formiga, MG";
const description = "Dra. Marcela Santos: Direito Previdenciário, Trabalhista, Civil e do Consumidor. Sede em Formiga, MG, e atendimento em todo o Brasil. (37) 99929-3550.";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title,
  description,
  keywords: ["Santos Advocacia", "Marcela Santos", "advogada em Formiga", "advocacia em Formiga MG", "orientação jurídica"],
  icons: { icon: [{ url: brand.logo, type: "image/png" }] },
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
            width: 2172,
            height: 724,
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
  themeColor: "#171715",
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
