export const SITE_URL = "https://www.nuviontech.com.br"
export const INSTAGRAM_URL = "https://www.instagram.com/nuviontech.official/"
export const FOUNDER_URL = "https://gustavo-motta.vercel.app"
export const PHONE = "5527997498818"

export function whatsappUrl(origin = "site") {
  const message = `Olá! Cheguei à NuvionTech por meio de ${origin} e quero conversar sobre um projeto.`
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
}

export type Service = {
  slug: string
  number: string
  eyebrow: string
  title: string
  shortTitle: string
  intro: string
  description: string
  idealFor: string[]
  deliverables: string[]
  outcome: string
}

export const services: Service[] = [
  {
    slug: "landing-pages",
    number: "01",
    eyebrow: "Oferta clara, presença forte",
    title: "Landing pages e sites",
    shortTitle: "Landing pages",
    intro:
      "Para ofertas que precisam ser entendidas antes de serem escolhidas.",
    description:
      "Estratégia, arquitetura de informação, copy, direção visual e desenvolvimento avançam como uma única entrega — do argumento à página publicada.",
    idealFor: [
      "Lançar ou reposicionar uma oferta",
      "Substituir um site que já não representa a empresa",
      "Organizar uma solução complexa sem virar catálogo",
    ],
    deliverables: [
      "Descoberta e direção estratégica",
      "Arquitetura, copy e UX/UI",
      "Desenvolvimento responsivo",
      "SEO técnico e preparação de analytics",
      "QA, performance e publicação assistida",
    ],
    outcome:
      "Uma experiência comercial clara, rápida e pronta para conduzir a próxima decisão.",
  },
  {
    slug: "sistemas-sob-medida",
    number: "02",
    eyebrow: "A operação vira produto",
    title: "Sistemas sob medida",
    shortTitle: "Sistemas",
    intro:
      "Para rotinas que já não cabem em planilhas, mensagens e ferramentas desconectadas.",
    description:
      "Mapeamos a operação real para desenhar portais, dashboards e aplicações que façam sentido no dia a dia e permaneçam preparadas para evoluir.",
    idealFor: [
      "Centralizar dados e etapas espalhadas",
      "Transformar um processo interno em software",
      "Construir uma ferramenta que não existe pronta",
    ],
    deliverables: [
      "Mapeamento de fluxo e requisitos",
      "Arquitetura de informação e produto",
      "Interface e prototipação",
      "Desenvolvimento e integrações",
      "Testes, documentação e evolução",
    ],
    outcome:
      "Software alinhado à rotina da empresa — em vez de mais uma ferramenta que a equipe precisa contornar.",
  },
  {
    slug: "automacao-e-ia",
    number: "03",
    eyebrow: "Menos passagem manual",
    title: "Automação e IA",
    shortTitle: "Automação & IA",
    intro:
      "Para tarefas repetitivas, informações que chegam tarde e decisões sem contexto.",
    description:
      "Integramos ferramentas, automatizamos fluxos e aplicamos IA a uma tarefa definida. A tecnologia entra onde remove atrito de verdade, não como camada decorativa.",
    idealFor: [
      "Reduzir retrabalho entre ferramentas",
      "Automatizar triagens, registros e notificações",
      "Dar contexto a equipes com dados dispersos",
    ],
    deliverables: [
      "Diagnóstico do fluxo atual",
      "Desenho da automação e pontos de controle",
      "Integrações e orquestração",
      "Aplicação de IA quando fizer sentido",
      "Monitoramento e documentação",
    ],
    outcome:
      "Um fluxo mais previsível, rastreável e simples de operar.",
  },
]

export type CaseStudy = {
  slug: string
  number: string
  name: string
  category: string
  headline: string
  summary: string
  challenge: string
  challengeTitle: string
  decision: string
  decisionTitle: string
  scope: string[]
  liveUrl: string
  desktopPreview: string
  mobilePreview: string
  accent: string
  accentRgb: string
}

export const cases: CaseStudy[] = [
  {
    slug: "ata-crm",
    number: "01",
    name: "ATA CRM",
    category: "Landing page de produto B2B",
    headline: "Um ecossistema inteiro, sem sobrecarregar a primeira leitura.",
    summary:
      "A experiência comercial organiza atendimento, relacionamento e automações em uma jornada que parte do problema e conduz até o produto.",
    challenge:
      "Apresentar uma solução extensa sem reduzir o CRM a uma lista de funcionalidades — e sem exigir que o visitante já conhecesse a lógica do produto.",
    challengeTitle: "Mostrar a escala do CRM sem começar pelas funcionalidades.",
    decision:
      "Estruturamos a narrativa por momentos da operação. Cada bloco responde uma dúvida e prepara a próxima, mantendo a profundidade disponível para quem quer explorar.",
    decisionTitle: "A operação virou o fio condutor da página.",
    scope: ["Estratégia", "Copy", "Design", "Desenvolvimento"],
    liveUrl: "https://crm.atasistemas.com.br",
    desktopPreview: "/cases/crm-desktop-preview.webp",
    mobilePreview: "/cases/crm-mobile-preview.webp",
    accent: "#7a5cff",
    accentRgb: "122, 92, 255",
  },
  {
    slug: "ata-ponto",
    number: "02",
    name: "ATA Ponto",
    category: "Experiência comercial responsiva",
    headline: "Hardware, software e rotina falando a mesma língua.",
    summary:
      "Uma apresentação que conecta equipamentos, gestão e operação diária em uma narrativa clara sobre controle de jornada.",
    challenge:
      "Explicar uma solução formada por diferentes camadas físicas e digitais sem transformar a página em catálogo técnico.",
    challengeTitle: "Relógio, software e RH precisavam formar uma única história.",
    decision:
      "Organizamos a experiência a partir da rotina de RH e aproximamos cada tecnologia do contexto em que ela resolve um problema concreto.",
    decisionTitle: "A rotina ganhou prioridade sobre a ficha técnica.",
    scope: ["Direção", "Interface", "Responsividade", "Performance"],
    liveUrl: "https://ponto.atasistemas.com.br",
    desktopPreview: "/cases/ponto-desktop-preview.webp",
    mobilePreview: "/cases/ponto-mobile-preview.webp",
    accent: "#ff6b35",
    accentRgb: "255, 107, 53",
  },
  {
    slug: "ata-seguranca",
    number: "03",
    name: "ATA Segurança",
    category: "Segurança eletrônica para empresas",
    headline: "Vinte e sete frentes. Uma decisão de cada vez.",
    summary:
      "Soluções, analíticos, tecnologias e segmentos organizados em uma experiência explorável, sem perder presença ou precisão.",
    challenge:
      "Conectar uma oferta ampla de segurança eletrônica sem fazer o visitante atravessar uma parede de equipamentos e termos técnicos.",
    challengeTitle: "Vinte e sete frentes não podiam virar vinte e sete caminhos.",
    decision:
      "A arquitetura começa pelo contexto de uso, abre caminhos de exploração e apresenta a tecnologia na hora em que ela ganha significado.",
    decisionTitle: "Cada escolha abre a próxima, sem ponto cego.",
    scope: ["Estratégia", "Direção visual", "Frontend", "Mobile"],
    liveUrl: "https://seguranca.atasistemas.com.br",
    desktopPreview: "/cases/seguranca-desktop-preview.webp",
    mobilePreview: "/cases/seguranca-mobile-preview.webp",
    accent: "#20d7ec",
    accentRgb: "32, 215, 236",
  },
  {
    slug: "ata-acesso",
    number: "04",
    name: "ATA Acesso",
    category: "Controle de acesso para empresas",
    headline: "A tecnologia aparece depois que o contexto faz sentido.",
    summary:
      "Uma página que explica o fluxo de pessoas e veículos a partir de situações reais de uso, com clareza no desktop e no celular.",
    challenge:
      "Apresentar diferentes formas de entrada, identificação e controle com uma experiência comercial que permanecesse simples.",
    challengeTitle: "Explicar controle de acesso sem bloquear a leitura.",
    decision:
      "Trocamos a lógica de catálogo por uma sequência de cenários. O visitante entende primeiro a situação e depois encontra a solução adequada.",
    decisionTitle: "O cenário aparece antes do equipamento.",
    scope: ["Produto", "UX/UI", "Desenvolvimento", "Responsividade"],
    liveUrl: "https://acesso.atasistemas.com.br",
    desktopPreview: "/cases/acesso-desktop-preview.webp",
    mobilePreview: "/cases/acesso-mobile-preview.webp",
    accent: "#2f6dff",
    accentRgb: "47, 109, 255",
  },
]

export const processSteps = [
  {
    number: "01",
    title: "Entender",
    text: "Negócio, contexto, público e o problema que realmente precisa ser resolvido.",
  },
  {
    number: "02",
    title: "Definir",
    text: "Oferta, experiência, arquitetura, provas e critérios antes da execução.",
  },
  {
    number: "03",
    title: "Construir",
    text: "Copy, design e engenharia avançando dentro do mesmo sistema.",
  },
  {
    number: "04",
    title: "Evoluir",
    text: "QA, preparação do lançamento, medição e os próximos movimentos.",
  },
]

export const faqs = [
  {
    question: "A Nuvion entra somente no desenvolvimento?",
    answer:
      "Não. Podemos assumir estratégia, arquitetura, copy, direção visual e desenvolvimento. O escopo é definido pelo problema, não por um pacote fixo.",
  },
  {
    question: "É possível reconstruir um site ou sistema existente?",
    answer:
      "Sim. Primeiro avaliamos o que ainda serve, o que limita a experiência e quais riscos precisam ser preservados na transição. A reconstrução pode ser gradual ou completa.",
  },
  {
    question: "Vocês trabalham com projeto de ponta a ponta?",
    answer:
      "Sim. Estratégia, interface e engenharia podem acontecer na mesma frente, com decisões compartilhadas desde o início até a publicação.",
  },
  {
    question: "Como começa um novo projeto?",
    answer:
      "Com uma conversa sobre contexto, objetivo e restrições. A partir dela definimos qual entrega faz sentido e quais informações ainda precisamos levantar.",
  },
]
