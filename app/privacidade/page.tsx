import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do site da NuvionTech.",
  alternates: { canonical: "/privacidade" },
  openGraph: { title: "Política de Privacidade — NuvionTech", description: "Política de privacidade do site da NuvionTech.", url: "/privacidade", siteName: "NuvionTech", locale: "pt_BR", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title: "Política de Privacidade — NuvionTech", description: "Política de privacidade do site da NuvionTech.", images: ["/opengraph-image"] },
}

export default function PrivacyPage() {
  return (
    <main id="conteudo">
      <section className="inner-hero">
        <div className="shell">
          <p className="inner-hero__meta"><span>Legal</span> Última atualização: 12 de agosto de 2026</p>
          <h1>Política de<br />privacidade.</h1>
          <p className="inner-hero__lead">Como este site trata dados durante a navegação e o contato com a NuvionTech.</p>
        </div>
      </section>
      <section className="inner-section section--light">
        <article className="shell legal">
          <p>Esta política descreve o tratamento de informações no site institucional da NuvionTech. A versão atual do site não possui formulário próprio de cadastro ou newsletter.</p>
          <h2>Contato por serviços externos</h2>
          <p>Ao escolher falar pelo WhatsApp ou Instagram, você será direcionado ao serviço correspondente. O tratamento de dados nessas plataformas segue também as políticas de cada empresa.</p>
          <h2>Dados técnicos</h2>
          <p>O provedor de hospedagem pode processar dados técnicos necessários à entrega e segurança do site, como endereço IP, data, horário, navegador e registros de acesso.</p>
          <h2>Cookies e medição</h2>
          <p>Não ativamos ferramentas próprias de publicidade, pixels ou analytics nesta versão sem uma configuração e uma base de consentimento adequadas. Se isso mudar, esta política será atualizada e o controle correspondente será apresentado.</p>
          <h2>Seus direitos</h2>
          <p>Você pode solicitar informações, correção ou exclusão de dados fornecidos diretamente à NuvionTech. Para iniciar uma solicitação, utilize os canais indicados na página de contato.</p>
          <h2>Atualizações</h2>
          <p>Esta política pode ser revisada quando o site ganhar novos recursos, integrações ou meios de contato. A data da versão mais recente permanecerá indicada no início da página.</p>
        </article>
      </section>
    </main>
  )
}
