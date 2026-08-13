import type { Metadata } from "next"
import ArrowIcon from "@/components/ArrowIcon"
import { CONTACT_EMAIL, FOUNDER_URL, INSTAGRAM_URL, whatsappUrl } from "@/data/site"

export const metadata: Metadata = {
  title: "Contato",
  description: "Converse com a NuvionTech sobre seu próximo projeto digital.",
  alternates: { canonical: "/contato" },
  openGraph: { title: "Contato — NuvionTech", description: "Converse com a NuvionTech sobre seu próximo projeto digital.", url: "/contato", siteName: "NuvionTech", locale: "pt_BR", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title: "Contato — NuvionTech", description: "Converse com a NuvionTech sobre seu próximo projeto digital.", images: ["/opengraph-image"] },
}

export default function ContactPage() {
  return (
    <main id="conteudo">
      <section className="inner-hero">
        <div className="shell">
          <p className="inner-hero__meta"><span>Contato</span> A primeira conversa começa pelo contexto</p>
          <h1>Qual problema<br />precisa sair do caminho?</h1>
          <p className="inner-hero__lead">
            Conte sobre a empresa, a ideia ou a operação. A partir disso, identificamos juntos qual próximo movimento faz sentido.
          </p>
        </div>
      </section>
      <section className="inner-section section--light">
        <div className="shell contact-grid">
          <div>
            <p className="kicker">Abrir conversa</p>
            <h2 style={{ fontSize: "clamp(45px,6vw,80px)", letterSpacing: "-.065em", lineHeight: ".94" }}>Escolha o canal mais simples para você.</h2>
          </div>
          <div className="contact-options">
            <a className="contact-option" href={`mailto:${CONTACT_EMAIL}`}>
              <div><h3>E-mail</h3><p>{CONTACT_EMAIL}</p></div><ArrowIcon diagonal />
            </a>
            <a className="contact-option" href={whatsappUrl("página de contato")} target="_blank" rel="noopener noreferrer">
              <div><h3>WhatsApp</h3><p>Fale diretamente sobre o projeto</p></div><ArrowIcon diagonal />
            </a>
            <a className="contact-option" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <div><h3>Instagram</h3><p>Acompanhe projetos e bastidores</p></div><ArrowIcon diagonal />
            </a>
            <a className="contact-option" href={FOUNDER_URL} target="_blank" rel="noopener noreferrer">
              <div><h3>Gustavo Motta</h3><p>Conheça o fundador e seu portfólio</p></div><ArrowIcon diagonal />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
