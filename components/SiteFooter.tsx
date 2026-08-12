import Link from "next/link"
import Brand from "./Brand"
import ArrowIcon from "./ArrowIcon"
import { FOUNDER_URL, INSTAGRAM_URL, whatsappUrl } from "@/data/site"

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand">
          <Brand />
          <p>Estratégia, design e engenharia para produtos digitais construídos em torno de problemas reais.</p>
        </div>
        <div className="footer-column">
          <p>Explorar</p>
          <Link href="/projetos">Projetos</Link>
          <Link href="/#servicos">Serviços</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </div>
        <div className="footer-column">
          <p>Conectar</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram <ArrowIcon diagonal /></a>
          <a href={FOUNDER_URL} target="_blank" rel="noopener noreferrer">Gustavo Motta <ArrowIcon diagonal /></a>
          <a href={whatsappUrl("rodapé do site")} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowIcon diagonal /></a>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>© {new Date().getFullYear()} NuvionTech</p>
        <p>Espírito Santo · Brasil</p>
        <Link href="/privacidade">Privacidade</Link>
      </div>
    </footer>
  )
}
