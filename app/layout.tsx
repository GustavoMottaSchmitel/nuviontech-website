import type { Metadata, Viewport } from "next"
import { Syne, DM_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050D1A",
  colorScheme: "dark",
}

export const metadata: Metadata = {
  title: {
    default: "NuvionTech — Sites, Sistemas e Automações que Geram Resultados",
    template: "%s | NuvionTech",
  },
  description:
    "Desenvolvemos sites, sistemas e automações com IA que transformam visitantes em clientes. Tecnologia de ponta para negócios que querem crescer no Espírito Santo e em todo o Brasil.",
  keywords: [
    "desenvolvimento web", "chatbot IA", "automação", "site empresarial",
    "landing page", "sistemas personalizados", "Next.js", "React",
    "TypeScript", "inteligência artificial", "ES", "Espírito Santo",
  ],
  authors: [{ name: "NuvionTech" }],
  creator: "NuvionTech",
  publisher: "NuvionTech",
  metadataBase: new URL("https://www.nuviontech.com.br"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.nuviontech.com.br",
    title: "NuvionTech — Sites, Sistemas e Automações que Geram Resultados",
    description: "Desenvolvemos sites, sistemas e automações com IA para negócios que querem crescer.",
    siteName: "NuvionTech",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "NuvionTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NuvionTech — Desenvolvimento Web e IA",
    description: "Soluções tecnológicas personalizadas para empresas",
    images: ["/logo.png"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "NuvionTech",
              description: "Desenvolvimento de soluções tecnológicas personalizadas para empresas",
              url: "https://www.nuviontech.com.br",
              telephone: "+5527997498818",
              address: { "@type": "PostalAddress", addressRegion: "ES", addressCountry: "BR" },
              contactPoint: { "@type": "ContactPoint", contactType: "customer service", telephone: "+5527997498818" },
              areaServed: { "@type": "Country", name: "Brazil" },
              serviceType: ["Web Development", "Chatbot Development", "Business Automation", "AI Integration"],
            }),
          }}
        />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
