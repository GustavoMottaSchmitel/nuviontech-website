import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"
import { INSTAGRAM_URL, SITE_URL } from "@/data/site"
import "./globals.css"

const archivo = localFont({
  src: "./Archivo-Variable.woff2",
  variable: "--font-display",
  display: "swap",
})

const manrope = localFont({
  src: "./Manrope-Variable.woff2",
  variable: "--font-body",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07111c",
  colorScheme: "dark light",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NuvionTech — Estratégia, design e engenharia",
    template: "%s | NuvionTech",
  },
  description:
    "Landing pages, sistemas sob medida e automações construídos em torno de problemas reais de negócio.",
  applicationName: "NuvionTech",
  authors: [{ name: "NuvionTech", url: SITE_URL }],
  creator: "NuvionTech",
  publisher: "NuvionTech",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "NuvionTech",
    title: "NuvionTech — Complexo por dentro. Claro para quem usa.",
    description:
      "Estratégia, design e engenharia para landing pages, sistemas e automações.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NuvionTech — estratégia, design e engenharia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NuvionTech — Estratégia, design e engenharia",
    description: "Landing pages, sistemas sob medida e automações.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon",
    apple: "/brand/nuvion-symbol.png",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "NuvionTech",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/nuvion-symbol.png`,
      founder: { "@type": "Person", name: "Gustavo Motta" },
      sameAs: [INSTAGRAM_URL],
      areaServed: { "@type": "Country", name: "Brasil" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "NuvionTech",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "pt-BR",
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${manrope.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  )
}
