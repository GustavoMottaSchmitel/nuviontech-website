"use client"

import { motion } from "motion/react"

const WA = "https://wa.me/5527997498818?text=Ol%C3%A1%21+Vim+pelo+site+da+NuvionTech+e+quero+um+or%C3%A7amento+para+meu+projeto."

const TRUST = [
  "Sem taxa de consulta",
  "Proposta em 24h",
  "Suporte pós-entrega",
  "100% Personalizado",
]

export default function CtaBand() {
  return (
    <section
      id="cta"
      className="relative py-24 px-5 overflow-hidden"
      style={{ background: "linear-gradient(135deg,#0A1628 0%,#0D1F3E 100%)" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(41,121,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(41,121,255,.06) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(41,121,255,.2),transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[700px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-6 px-4 py-2 rounded-full bg-[#25D366]/12 border border-[#25D366]/30 text-[12px] font-bold uppercase tracking-[.1em] text-[#25D366]">
            💬 Resposta em até 1 hora
          </span>

          <h2
            className="font-[family-name:var(--font-syne)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white mb-5"
            style={{ fontSize: "clamp(32px,5vw,56px)" }}
          >
            Pronto para ter um<br />
            <span className="gradient-text">site que vende?</span>
          </h2>

          <p className="text-[17px] text-[#6B8AAD] leading-[1.7] mb-10 max-w-[540px] mx-auto">
            Fale comigo agora pelo WhatsApp e receba uma proposta personalizada para o seu negócio. Sem enrolação.
          </p>

          <motion.a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, boxShadow: "0 16px 48px rgba(37,211,102,.45)" }}
            whileTap={{ scale: .97 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-[14px] text-[17px] font-bold text-white bg-[#25D366] transition-all mb-10"
          >
            <WaIcon />
            Solicitar Orçamento Gratuito
          </motion.a>

          <div className="flex flex-wrap gap-6 justify-center">
            {TRUST.map((item) => (
              <div key={item} className="flex items-center gap-2 text-[13px] font-medium text-[#6B8AAD]">
                <span className="text-[#25D366] font-bold">✓</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
      <path d="M22.5 19.87c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H12c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.05 2.85 1.2 3.05c.15.2 2.07 3.16 5.01 4.43.7.3 1.25.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z" fill="white"/>
    </svg>
  )
}
