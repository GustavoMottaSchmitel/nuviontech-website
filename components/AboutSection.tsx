"use client"

import Image from "next/image"
import { motion } from "motion/react"

const WA = "https://wa.me/5527997498818?text=Ol%C3%A1%21+Quero+iniciar+um+projeto+com+a+NuvionTech."

const SKILLS = [
  "Desenvolvimento Full Stack", "Sistemas Web",
  "Performance & SEO", "UX/UI Design",
  "Automação com IA", "Chatbots & APIs",
]

const HIGHLIGHTS = [
  { val: "+5",   label: "Projetos" },
  { val: "100%", label: "Satisfação" },
  { val: "24h",  label: "Suporte" },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-5 overflow-hidden bg-[#091526]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative hidden lg:block"
        >
          {/* Decorative glow */}
          <div
            className="absolute -top-6 -right-6 w-[140px] h-[140px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(41,121,255,.3),transparent 70%)" }}
          />

          <div className="relative rounded-[24px] overflow-hidden border border-[#1A3050] group">
            <Image
              src="/soueu1.jpeg"
              alt="Fundador da NuvionTech"
              width={480}
              height={600}
              className="w-full object-cover aspect-[4/5] group-hover:scale-[1.03] transition-transform duration-700"
            />
            {/* overlay bottom */}
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(5,13,26,.5) 0%, transparent 50%)" }} />

            {/* Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#050D1A]/90 backdrop-blur-xl border border-[#1A3050] rounded-[16px] p-4 flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-[12px] flex items-center justify-center text-[20px] flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#2979FF,#7C4DFF)" }}
              >
                💻
              </div>
              <div>
                <strong className="block text-[16px] font-bold text-white">Fundador da NuvionTech</strong>
                <span className="text-[12px] text-[#6B8AAD]">Desenvolvedor Full Stack</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#2979FF] mb-3">
            Sobre mim
          </p>
          <h2
            className="font-[family-name:var(--font-syne)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-5"
            style={{ fontSize: "clamp(28px,3.5vw,44px)" }}
          >
            Prazer, sou o fundador da{" "}
            <span className="gradient-text">NuvionTech</span>
          </h2>

          <p className="text-[16px] text-[#6B8AAD] leading-[1.8] mb-4">
            Sou um desenvolvedor full stack apaixonado por criar soluções digitais que realmente fazem a diferença. Minha jornada na tecnologia começou há mais de 2 anos, e desde então venho transformando ideias em realidade através do código.
          </p>
          <p className="text-[16px] text-[#6B8AAD] leading-[1.8] mb-8">
            A tecnologia deve ser acessível, eficiente e transformadora. Meu objetivo é não apenas desenvolver sistemas, mas criar experiências digitais que impulsionem negócios e resolvam problemas reais.
          </p>

          {/* Highlights */}
          <div className="flex gap-4 mb-8 flex-wrap">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.val}
                className="flex-1 min-w-[90px] bg-[#0D1F35] border border-[#1A3050] rounded-[12px] p-4 text-center"
              >
                <div className="font-[family-name:var(--font-syne)] text-[28px] font-extrabold gradient-text-blue">
                  {h.val}
                </div>
                <div className="text-[11px] font-semibold text-[#6B8AAD] uppercase tracking-[.06em] mt-1">
                  {h.label}
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            {SKILLS.map((s) => (
              <div key={s} className="flex items-center gap-2 text-[14px] font-medium text-[#C8DCEF]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#00E5FF] flex-shrink-0" />
                {s}
              </div>
            ))}
          </div>

          <motion.a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(41,121,255,.4)" }}
            whileTap={{ scale: .97 }}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-xl text-[16px] font-bold text-white transition-all"
            style={{ background: "linear-gradient(135deg,#2979FF,#7C4DFF)" }}
          >
            🚀 Iniciar Projeto Agora
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
