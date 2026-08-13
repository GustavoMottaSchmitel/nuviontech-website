import type { Metadata } from "next"
import Image from "next/image"
import ArrowIcon from "@/components/ArrowIcon"
import ContactBand from "@/components/ContactBand"
import { FOUNDER_URL, processSteps } from "@/data/site"

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a NuvionTech e Gustavo Motta, fundador do estúdio.",
  alternates: { canonical: "/sobre" },
  openGraph: { title: "Sobre — NuvionTech", description: "Conheça a NuvionTech e Gustavo Motta, fundador do estúdio.", url: "/sobre", siteName: "NuvionTech", locale: "pt_BR", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title: "Sobre — NuvionTech", description: "Conheça a NuvionTech e Gustavo Motta, fundador do estúdio.", images: ["/opengraph-image"] },
}

export default function AboutPage() {
  return (
    <main id="conteudo">
      <section className="inner-hero">
        <div className="shell about-hero-grid">
          <div>
            <p className="inner-hero__meta"><span>Sobre</span> NuvionTech + Gustavo Motta</p>
            <h1>Tecnologia<br />com autoria.</h1>
            <p className="inner-hero__lead">
              Um estúdio de produto digital em que estratégia, experiência e desenvolvimento permanecem na mesma conversa.
            </p>
          </div>
          <div className="about-portrait">
            <Image src="/founder/gustavo-motta-centered.webp" alt="Gustavo Motta" fill priority sizes="(max-width: 860px) 80vw, 36vw" />
          </div>
        </div>
      </section>

      <section className="inner-section section--light">
        <div className="shell inner-grid">
          <div>
            <p className="kicker">O estúdio</p>
            <h2>Decisões importantes ficam próximas.</h2>
          </div>
          <div className="rich-copy">
            <p>
              Fundada por Gustavo Motta, a NuvionTech transforma ofertas, operações e ideias em experiências digitais que as pessoas entendem e conseguem usar.
            </p>
            <p>
              Não separamos aparência de resultado nem experiência de engenharia. O que o negócio precisa explicar, o que o usuário precisa entender e o que o software precisa sustentar são partes do mesmo projeto.
            </p>
            <a className="button button--outline" href={FOUNDER_URL} target="_blank" rel="noopener noreferrer" style={{ marginTop: 22 }}>
              <span>Conhecer o portfólio do fundador</span><ArrowIcon diagonal />
            </a>
          </div>
        </div>
      </section>

      <section className="inner-section section--warm">
        <div className="shell">
          <div className="section-heading section-heading--compact">
            <div><p className="kicker">Nosso processo</p><h2>Da descoberta à evolução.</h2></div>
          </div>
          <ol className="process-grid">
            {processSteps.map((step) => <li key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}
          </ol>
        </div>
      </section>
      <ContactBand origin="página sobre" />
    </main>
  )
}
