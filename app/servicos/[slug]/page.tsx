import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import ArrowIcon from "@/components/ArrowIcon"
import ContactBand from "@/components/ContactBand"
import { services, SITE_URL, whatsappUrl } from "@/data/site"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((entry) => entry.slug === slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.intro,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: { title: `${service.title} — NuvionTech`, description: service.intro, url: `${SITE_URL}/servicos/${service.slug}`, siteName: "NuvionTech", locale: "pt_BR", images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title: `${service.title} — NuvionTech`, description: service.intro, images: ["/opengraph-image"] },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((entry) => entry.slug === slug)
  if (!service) notFound()

  return (
    <main id="conteudo">
      <section className="inner-hero">
        <div className="shell">
          <p className="inner-hero__meta"><span>{service.number}</span> {service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p className="inner-hero__lead">{service.intro}</p>
        </div>
      </section>
      <section className="inner-section section--light">
        <div className="shell inner-grid">
          <div>
            <p className="kicker">Quando faz sentido</p>
            <h2>Começar pelo problema muda a entrega.</h2>
          </div>
          <div className="rich-copy">
            <p>{service.description}</p>
            <ul className="rich-list">
              {service.idealFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="inner-section section--warm">
        <div className="shell inner-grid">
          <div>
            <p className="kicker">O que pode entrar</p>
            <h2>Uma frente conectada do início ao lançamento.</h2>
          </div>
          <div className="rich-copy">
            <p>{service.outcome}</p>
            <ul className="rich-list">
              {service.deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a className="button button--outline" style={{ marginTop: 38 }} href={whatsappUrl(service.title)} target="_blank" rel="noopener noreferrer">
              <span>Conversar sobre este serviço</span><ArrowIcon />
            </a>
          </div>
        </div>
      </section>
      <section className="inner-section section--light">
        <div className="shell section-heading section-heading--compact" style={{ marginBottom: 0 }}>
          <div>
            <p className="kicker">Prova real</p>
            <h2>Veja o critério aplicado em projetos no ar.</h2>
            <Link className="button button--outline" style={{ marginTop: 35 }} href="/projetos"><span>Explorar projetos</span><ArrowIcon /></Link>
          </div>
        </div>
      </section>
      <ContactBand origin={service.title} />
    </main>
  )
}
