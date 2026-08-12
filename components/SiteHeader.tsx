import Link from "next/link"
import Brand from "./Brand"
import ArrowIcon from "./ArrowIcon"
import MobileMenu from "./MobileMenu"
import { whatsappUrl } from "@/data/site"

const links = [
  { href: "/projetos", label: "Projetos" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
]

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="site-brand" href="/" aria-label="NuvionTech — início">
          <Brand compact />
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          className="button button--small button--light header-contact"
          href={whatsappUrl("site")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Iniciar projeto</span>
          <ArrowIcon />
        </a>

        <MobileMenu />
      </div>
    </header>
  )
}
