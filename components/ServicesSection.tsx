"use client"

import { useState } from "react"
import { motion } from "motion/react"

const WA = "https://wa.me/5527997498818?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+NuvionTech."

const SERVICES = [
  {
    icon: "🤖",
    title: "Chatbots Inteligentes",
    desc: "Automação avançada com IA para atendimento 24h. Respostas naturais e integração com WhatsApp, Instagram e seu site.",
    tags: ["Atendimento 24/7", "WhatsApp", "Multiplataforma"],
  },
  {
    icon: "⚡",
    title: "Automação de Processos",
    desc: "Fluxos automáticos que otimizam vendas, agendamentos, follow-ups e gestão de clientes sem intervenção manual.",
    tags: ["Workflows", "+Produtividade", "Zero Esforço"],
  },
  {
    icon: "🧠",
    title: "IA Generativa Integrada",
    desc: "ChatGPT, modelos de linguagem e sistemas de recomendação integrados aos seus processos para gerar valor real.",
    tags: ["ChatGPT", "Análise Preditiva", "Conteúdo IA"],
  },
  {
    icon: "🚀",
    title: "Landing Pages de Alta Conversão",
    desc: "Páginas ultrarrápidas, modernas e otimizadas para transformar visitantes em clientes com design que vende.",
    tags: ["Alta Performance", "SEO", "+Conversão"],
  },
  {
    icon: "⚙️",
    title: "Sistemas Sob Medida",
    desc: "Aplicações completas, dashboards, CRMs e soluções full stack construídas especificamente para o seu negócio.",
    tags: ["Full Stack", "Escalável", "Integração Total"],
  },
  {
    icon: "📊",
    title: "Dashboards & Relatórios",
    desc: "Painéis inteligentes com métricas em tempo real, insights de performance e relatórios automáticos em PDF.",
    tags: ["Tempo Real", "Relatórios Auto", "Analytics"],
  },
]

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-24 px-5 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#050D1A 0%,#091526 100%)" }}>
      {/* bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(41,121,255,.07),transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#2979FF] mb-3">
            Nossos serviços
          </p>
          <h2
            className="font-[family-name:var(--font-syne)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white mb-4"
            style={{ fontSize: "clamp(32px,5vw,56px)" }}
          >
            Tecnologia que{" "}
            <span className="gradient-text">impulsiona resultados</span>
          </h2>
          <p className="text-[17px] text-[#6B8AAD] max-w-[540px] leading-[1.7]">
            Cada solução é construída sob medida para resolver problemas reais e gerar crescimento mensurável no seu negócio.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -4 }}
              className="relative bg-[#0D1F35] border border-[#1A3050] rounded-[20px] p-8 cursor-pointer overflow-hidden transition-shadow"
              style={{
                boxShadow: hovered === i ? "0 20px 60px rgba(41,121,255,.15)" : "none",
                borderColor: hovered === i ? "rgba(41,121,255,.45)" : "#1A3050",
              }}
            >
              {/* subtle gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 rounded-[20px] pointer-events-none"
                animate={{ opacity: hovered === i ? .04 : 0 }}
                style={{ background: "linear-gradient(135deg,#2979FF,#7C4DFF)" }}
              />

              {/* arrow */}
              <motion.div
                animate={{
                  background: hovered === i ? "#2979FF" : "rgba(41,121,255,.1)",
                  color: hovered === i ? "#fff" : "#2979FF",
                  x: hovered === i ? 2 : 0,
                  y: hovered === i ? -2 : 0,
                }}
                className="absolute top-8 right-8 w-8 h-8 rounded-full flex items-center justify-center text-[16px]"
              >
                ↗
              </motion.div>

              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-[22px] mb-5 bg-[#2979FF]/12 border border-[#2979FF]/20">
                {s.icon}
              </div>
              <h3 className="font-[family-name:var(--font-syne)] text-[18px] font-bold text-white mb-3">
                {s.title}
              </h3>
              <p className="text-[14px] text-[#6B8AAD] leading-[1.7] mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-[11px] font-semibold text-[#448AFF] tracking-[.04em] bg-[#2979FF]/10 border border-[#2979FF]/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <motion.a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(37,211,102,.4)" }}
            whileTap={{ scale: .97 }}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-xl text-[16px] font-bold text-white bg-[#25D366] transition-all"
          >
            <WaIcon /> Quero uma Solução Personalizada
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
      <path d="M22.5 19.87c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H12c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.05 2.85 1.2 3.05c.15.2 2.07 3.16 5.01 4.43.7.3 1.25.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z" fill="white"/>
    </svg>
  )
}
