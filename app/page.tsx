import Image from "next/image"
import Link from "next/link"
import ArrowIcon from "@/components/ArrowIcon"
import CaseCard from "@/components/CaseCard"
import ContactBand from "@/components/ContactBand"
import { cases, faqs, FOUNDER_URL, processSteps, services, whatsappUrl } from "@/data/site"

export default function Home() {
  return (
    <main id="conteudo">
      <section className="hero-home" aria-labelledby="hero-title">
        <Image
          className="hero-home__image"
          src="/brand/hero-studio-v1.webp"
          alt="Escultura digital em metal e vidro, conectando diferentes disciplinas"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-home__veil" aria-hidden="true" />
        <div className="hero-home__grid" aria-hidden="true" />
        <div className="shell hero-home__content">
          <p className="hero-label"><span /> Estratégia · Design · Engenharia</p>
          <h1 id="hero-title">Complexo por dentro.<br /><em>Claro</em> para quem usa.</h1>
          <p className="hero-home__lead">
            A NuvionTech transforma ofertas, operações e ideias em landing pages,
            sistemas e automações pensados a partir de um problema real de negócio.
          </p>
          <div className="hero-home__actions">
            <a className="button button--primary" href={whatsappUrl("site")} target="_blank" rel="noopener noreferrer">
              <span>Conversar sobre um projeto</span><ArrowIcon />
            </a>
            <a className="text-link text-link--light" href="#projetos">Ver trabalhos reais <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="hero-home__scope" aria-label="Áreas de atuação">
            <li>Landing pages</li>
            <li>Sistemas sob medida</li>
            <li>Automação e IA</li>
          </ul>
        </div>
        <div className="hero-home__index" aria-hidden="true">
          <span>NUV / 26</span>
          <span>20°19&apos;S · 40°20&apos;W</span>
        </div>
      </section>

      <section className="proof-intro section section--light" id="projetos" aria-labelledby="projects-title">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="kicker">Projetos selecionados</p>
              <h2 id="projects-title">Projetos no ar.<br />Decisões que você pode explorar.</h2>
            </div>
            <p>
              A prova está no próprio produto. Veja como diferentes níveis de complexidade
              foram organizados em experiências claras.
            </p>
          </div>
          <div className="case-stack">
            {cases.map((item, index) => <CaseCard key={item.slug} item={item} priority={index === 0} />)}
          </div>
          <div className="section-end-link">
            <Link className="button button--outline" href="/projetos"><span>Explorar todos os projetos</span><ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="services-home section section--ink" id="servicos" aria-labelledby="services-title">
        <div className="services-home__orb" aria-hidden="true" />
        <div className="shell">
          <div className="section-heading section-heading--dark">
            <div>
              <p className="kicker kicker--light">O que fazemos</p>
              <h2 id="services-title">Três formas de tirar<br />complexidade do caminho.</h2>
            </div>
            <p>
              O formato muda. O critério permanece: entender o problema antes de escolher a tecnologia.
            </p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <Link className="service-row" href={`/servicos/${service.slug}`} key={service.slug}>
                <span className="service-row__number">{service.number}</span>
                <div>
                  <p>{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-row__intro">{service.intro}</p>
                <span className="service-row__arrow"><ArrowIcon diagonal /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="principles section section--warm" aria-labelledby="principles-title">
        <div className="shell principles__grid">
          <div className="principles__statement">
            <p className="kicker">Nosso critério</p>
            <h2 id="principles-title">Bonito é só<br />o começo.</h2>
            <p>
              Uma landing precisa organizar uma decisão. Um sistema precisa caber na operação.
              Uma automação precisa retirar atrito sem criar outro.
            </p>
          </div>
          <ol className="principles__list">
            <li><span>01</span><strong>Clareza antes do efeito.</strong></li>
            <li><span>02</span><strong>Produto real como prova.</strong></li>
            <li><span>03</span><strong>Mobile como parte do conceito.</strong></li>
            <li><span>04</span><strong>Tecnologia preparada para evoluir.</strong></li>
          </ol>
        </div>
      </section>

      <section className="process section section--light" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading section-heading--compact">
            <div>
              <p className="kicker">Como trabalhamos</p>
              <h2 id="process-title">Quatro movimentos.<br />Uma conversa só.</h2>
            </div>
          </div>
          <ol className="process-grid">
            {processSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="founder section section--blue" aria-labelledby="founder-title">
        <div className="founder__texture" aria-hidden="true" />
        <div className="shell founder__grid">
          <div className="founder__portrait">
            <div className="founder__frame">
              <Image src="/founder/gustavo-motta-portrait.webp" alt="Gustavo Motta, fundador da NuvionTech" fill sizes="(max-width: 760px) 90vw, 42vw" />
            </div>
            <span className="founder__stamp">GUSTAVO<br />MOTTA</span>
          </div>
          <div className="founder__copy">
            <p className="kicker kicker--light">NuvionTech + Gustavo Motta</p>
            <h2 id="founder-title">Uma empresa de tecnologia com autoria.</h2>
            <p>
              Fundada por Gustavo Motta, a NuvionTech trabalha na interseção entre estratégia,
              experiência e desenvolvimento. Assim, as decisões importantes permanecem próximas.
            </p>
            <a className="button button--light" href={FOUNDER_URL} target="_blank" rel="noopener noreferrer">
              <span>Conhecer Gustavo Motta</span><ArrowIcon diagonal />
            </a>
          </div>
        </div>
      </section>

      <section className="faq section section--light" aria-labelledby="faq-title">
        <div className="shell faq__grid">
          <div>
            <p className="kicker">Antes de começar</p>
            <h2 id="faq-title">Perguntas que ajudam a abrir a conversa.</h2>
          </div>
          <div className="faq__list">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary><span>0{index + 1}</span>{faq.question}<i aria-hidden="true">+</i></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactBand origin="site" />
    </main>
  )
}
