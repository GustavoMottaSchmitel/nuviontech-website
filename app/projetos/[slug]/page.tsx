import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import ArrowIcon from "@/components/ArrowIcon"
import ContactBand from "@/components/ContactBand"
import DeviceScene from "@/components/DeviceScene"
import { cases, SITE_URL } from "@/data/site"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = cases.find((entry) => entry.slug === slug)
  if (!item) return {}
  return {
    title: item.name,
    description: item.summary,
    alternates: { canonical: `/projetos/${item.slug}` },
    openGraph: { title: `${item.name} — Case NuvionTech`, description: item.summary, url: `${SITE_URL}/projetos/${item.slug}`, siteName: "NuvionTech", locale: "pt_BR", images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title: `${item.name} — Case NuvionTech`, description: item.summary, images: ["/opengraph-image"] },
  }
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params
  const item = cases.find((entry) => entry.slug === slug)
  if (!item) notFound()

  return (
    <main id="conteudo">
      <section
        className="case-hero"
        style={{ "--case-accent": item.accent, "--case-accent-rgb": item.accentRgb } as React.CSSProperties}
      >
        <div className="shell case-hero__grid">
          <div>
            <p className="inner-hero__meta"><span>{item.number}</span> {item.category}</p>
            <h1>{item.name}</h1>
            <p className="case-hero__headline">{item.headline}</p>
            <ul className="scope-chips" aria-label="Escopo do projeto">
              {item.scope.map((scope) => <li key={scope}>{scope}</li>)}
            </ul>
          </div>
          <DeviceScene desktop={item.desktopPreview} mobile={item.mobilePreview} alt={`Landing page ${item.name}`} />
        </div>
      </section>

      <section className="inner-section section--light">
        <div className="shell case-story">
          <article className="story-block">
            <span>01 · O desafio</span>
            <h2>{item.challengeTitle}</h2>
            <p>{item.challenge}</p>
          </article>
          <article className="story-block">
            <span>02 · A decisão</span>
            <h2>{item.decisionTitle}</h2>
            <p>{item.decision}</p>
          </article>
        </div>
      </section>

      <section className="full-page-showcase" aria-label={`Detalhes da experiência ${item.name}`}>
        <div className="shell full-page-showcase__devices">
          <div className="full-page-monitor">
            <div>
              <Image src={item.desktopPreview} alt={`Página ${item.name} no desktop`} fill priority sizes="(max-width: 1200px) 90vw, 1100px" />
            </div>
          </div>
          <div className="full-page-phone">
            <div>
              <Image src={item.mobilePreview} alt={`Página ${item.name} no celular`} fill priority sizes="190px" />
            </div>
          </div>
        </div>
        <div className="shell section-end-link">
          <a className="button button--outline" href={item.liveUrl} target="_blank" rel="noopener noreferrer">
            <span>Abrir projeto ao vivo</span><ArrowIcon diagonal />
          </a>
        </div>
      </section>
      <ContactBand origin={`case ${item.name}`} />
    </main>
  )
}
