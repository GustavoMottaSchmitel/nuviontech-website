import type { Metadata } from "next"
import CaseCard from "@/components/CaseCard"
import ContactBand from "@/components/ContactBand"
import { cases } from "@/data/site"

export const metadata: Metadata = {
  title: "Projetos",
  description: "Cases de landing pages, produto digital e desenvolvimento da NuvionTech.",
  alternates: { canonical: "/projetos" },
  openGraph: {
    title: "Projetos — NuvionTech",
    description: "Cases de landing pages, produto digital e desenvolvimento da NuvionTech.",
    url: "/projetos",
    siteName: "NuvionTech",
    locale: "pt_BR",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projetos — NuvionTech",
    description: "Cases de landing pages, produto digital e desenvolvimento da NuvionTech.",
    images: ["/opengraph-image"],
  },
}

export default function ProjectsPage() {
  return (
    <main id="conteudo">
      <section className="inner-hero">
        <div className="shell">
          <p className="inner-hero__meta"><span>Arquivo 01</span> Trabalhos selecionados</p>
          <h1>O produto real<br />é a prova.</h1>
          <p className="inner-hero__lead">
            Projetos em que estratégia, narrativa, interface e engenharia precisaram trabalhar como uma única disciplina.
          </p>
        </div>
      </section>
      <section className="inner-section section--light">
        <div className="shell projects-index">
          <h2 className="sr-only">Cases da NuvionTech</h2>
          {cases.map((item) => <CaseCard item={item} key={item.slug} />)}
        </div>
      </section>
      <ContactBand origin="página de projetos" />
    </main>
  )
}
