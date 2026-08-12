import ArrowIcon from "./ArrowIcon"
import { whatsappUrl } from "@/data/site"

export default function ContactBand({ origin = "site" }: { origin?: string }) {
  return (
    <section className="contact-band" aria-labelledby="contact-band-title">
      <div className="contact-band__signal" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="shell contact-band__inner">
        <p className="kicker kicker--light">Tem um desafio em mente?</p>
        <h2 id="contact-band-title">Qual problema o seu projeto precisa resolver?</h2>
        <p>
          Conte o contexto. A primeira conversa serve para identificar a decisão certa antes de definir a entrega.
        </p>
        <a
          className="button button--white"
          href={whatsappUrl(origin)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Começar a conversa</span>
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
