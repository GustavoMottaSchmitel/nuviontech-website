"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import NuvionLogo from "./NuvionLogo"

const WA = "https://wa.me/5527997498818?text=Ol%C3%A1%21+Vim+pelo+site+da+NuvionTech+e+quero+come%C3%A7ar+um+projeto."

const STATS = [
  { val: "100%", label: "Clientes Satisfeitos" },
  { val: "24/7",  label: "Suporte Dedicado" },
  { val: "+5",    label: "Projetos Entregues" },
  { val: "ES",    label: "Espírito Santo, BR" },
]

const PARTICLE_COLORS = ["#2979FF", "#7C4DFF", "#00E5FF"]

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Inject CSS particles after mount
  useEffect(() => {
    if (!mounted || !heroRef.current) return
    const hero = heroRef.current
    for (let i = 0; i < 22; i++) {
      const p = document.createElement("div")
      const size = Math.random() * 3 + 1
      p.style.cssText = `
        position:absolute;border-radius:50%;pointer-events:none;
        width:${size}px;height:${size}px;
        background:${PARTICLE_COLORS[i % 3]};
        left:${Math.random() * 100}%;
        top:${Math.random() * 80 + 10}%;
        animation:particle-float ${Math.random() * 4 + 5}s linear ${Math.random() * 6}s infinite;
        opacity:0;
      `
      hero.appendChild(p)
    }
  }, [mounted])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050D1A] px-5 pt-24 pb-16"
    >
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern animate-grid-drift opacity-80" />

      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(circle,rgba(41,121,255,.2) 0%,rgba(124,77,255,.1) 50%,transparent 70%)" }}
        />
        <div
          className="absolute top-[15%] left-[8%] w-[280px] h-[280px] rounded-full animate-float"
          style={{ background: "radial-gradient(circle,rgba(0,229,255,.14),transparent 70%)" }}
        />
        <div
          className="absolute bottom-[18%] right-[8%] w-[240px] h-[240px] rounded-full animate-float"
          style={{ background: "radial-gradient(circle,rgba(124,77,255,.12),transparent 70%)", animationDelay: ".5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center">
        
        {/* Logo rings */}
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8, delay: .1 }}
          className="relative inline-flex items-center justify-center mb-10"
        >
          <div
            className="absolute w-[140px] h-[140px] rounded-full border border-[#00E5FF]/25 animate-spin-slow"
          />
          <div
            className="absolute w-[180px] h-[180px] rounded-full border border-[#2979FF]/15 animate-spin-reverse"
          />
          <div
            className="absolute w-[220px] h-[220px] rounded-full border border-[#7C4DFF]/10"
            style={{ animation: "spin-slow 20s linear infinite" }}
          />
          <div
            className="absolute inset-[-40px] rounded-full animate-pulse-glow"
            style={{ background: "radial-gradient(circle,rgba(41,121,255,.25),transparent 70%)" }}
          />
          <NuvionLogo size={88} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .25 }}
          className="font-[family-name:var(--font-syne)] font-extrabold leading-[1] tracking-[-0.03em] mb-6"
          style={{ fontSize: "clamp(42px,7vw,88px)" }}
        >
          Transformamos Ideias<br />
          <span className="gradient-text">em Resultados Reais</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .4 }}
          className="text-[18px] md:text-[20px] font-light text-[#6B8AAD] leading-relaxed max-w-[580px] mx-auto mb-12"
        >
          Desenvolvemos{" "}
          <strong className="text-[#C8DCEF] font-semibold">sites</strong>,{" "}
          <strong className="text-[#C8DCEF] font-semibold">sistemas</strong> e{" "}
          <strong className="text-[#C8DCEF] font-semibold">automações com IA</strong>{" "}
          que impulsionam negócios e geram vendas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .55 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(37,211,102,.4)" }}
            whileTap={{ scale: .97 }}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-xl text-[16px] font-bold text-white transition-all bg-[#25D366]"
          >
            <WaIcon />
            Começar Meu Projeto
          </motion.a>

          <motion.a
            href="#portfolio"
            whileHover={{ y: -2 }}
            whileTap={{ scale: .97 }}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-xl text-[16px] font-semibold text-[#C8DCEF] border border-[#1A3050] bg-white/5 hover:border-[#448AFF] hover:bg-[#2979FF]/10 transition-all"
          >
            <GridIcon />
            Ver Portfólio
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .7, delay: .75 }}
          className="mt-20 flex flex-wrap justify-center gap-12"
        >
          {STATS.map((s) => (
            <div key={s.val} className="text-center">
              <div
                className="font-[family-name:var(--font-syne)] text-[36px] font-extrabold gradient-text-blue"
              >
                {s.val}
              </div>
              <div className="text-[13px] font-medium text-[#6B8AAD] tracking-[.04em] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
      <path d="M22.5 19.87c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H12c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.05 2.85 1.2 3.05c.15.2 2.07 3.16 5.01 4.43.7.3 1.25.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z" fill="white"/>
    </svg>
  )
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  )
}
