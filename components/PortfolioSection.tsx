"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, ChevronLeft, ChevronRight, Star } from "lucide-react"

const WA = "https://wa.me/5527997498818?text=Ol%C3%A1%21+Quero+ser+o+pr%C3%B3ximo+case+da+NuvionTech."

type Project = {
  id: string
  title: string
  desc: string
  cover: string
  images: string[]
  tags: string[]
  category: string
}

const PROJECTS: Project[] = [
  {
    id: "vitorcell",
    title: "Vitor Assistência — Assistência Técnica",
    desc: "Site institucional para assistência técnica especializada em celulares, venda de smartphones novos, seminovos e acessórios.",
    cover: "/portfolio/vitorcell/vitorcell-1.png",
    images: [
      "/portfolio/vitorcell/vitorcell-1.png",
      "/portfolio/vitorcell/vitorcell-2.png",
      "/portfolio/vitorcell/vitorcell-3.png",
      "/portfolio/vitorcell/vitorcell-4.png",
      "/portfolio/vitorcell/vitorcell-5.png",
      "/portfolio/vitorcell/vitorcell-6.png",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Website",
  },
  {
    id: "wanessa",
    title: "Wanessa Teixeira — Corretora de Imóveis",
    desc: "Site profissional para corretora de imóveis transmitindo credibilidade e confiança em negócios imobiliários.",
    cover: "/portfolio/wanessatexeira/1.png",
    images: [
      "/portfolio/wanessatexeira/1.png",
      "/portfolio/wanessatexeira/2.png",
      "/portfolio/wanessatexeira/3.png",
      "/portfolio/wanessatexeira/4.png",
      "/portfolio/wanessatexeira/5.png",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Website",
  },
]

export default function PortfolioSection() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [imgIndex, setImgIndex] = useState(0)

  const openProject = (p: Project) => { setSelected(p); setImgIndex(0) }
  const close = () => setSelected(null)
  const prev = () => selected && setImgIndex(i => (i === 0 ? selected.images.length - 1 : i - 1))
  const next = () => selected && setImgIndex(i => (i === selected.images.length - 1 ? 0 : i + 1))

  return (
    <section id="portfolio" className="relative py-24 px-5 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#091526 0%,#050D1A 100%)" }}>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#2979FF] mb-3">
            Trabalhos realizados
          </p>
          <h2
            className="font-[family-name:var(--font-syne)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white mb-4"
            style={{ fontSize: "clamp(32px,5vw,56px)" }}
          >
            Portfólio
          </h2>
          <p className="text-[17px] text-[#6B8AAD] max-w-[480px] mx-auto leading-[1.7]">
            Projetos reais entregues com qualidade, performance e resultado.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => openProject(p)}
              className="bg-[#0D1F35] border border-[#1A3050] rounded-[20px] overflow-hidden cursor-pointer group transition-all"
              style={{ boxShadow: "none" }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 24px 80px rgba(41,121,255,.18)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
            >
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-[1.08] transition-transform duration-500"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/15 backdrop-blur-sm border border-white/30 text-white px-5 py-2 rounded-lg font-bold text-[14px]">
                    Ver Projeto
                  </span>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[11px] font-bold text-[#00E5FF] uppercase tracking-[.06em]">
                  <Star size={10} fill="currentColor" /> Destaque
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-syne)] text-[17px] font-bold text-white mb-2 leading-[1.3]">
                  {p.title}
                </h3>
                <p className="text-[13px] text-[#6B8AAD] leading-[1.6] mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 rounded bg-white/5 border border-[#1A3050] text-[11px] text-[#6B8AAD] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="flex items-center justify-center rounded-[20px] border border-[#2979FF]/30 min-h-[300px] p-10 text-center"
            style={{ background: "linear-gradient(135deg,rgba(41,121,255,.08),rgba(124,77,255,.08))" }}
          >
            <div>
              <div className="text-[48px] mb-4">✦</div>
              <h3 className="font-[family-name:var(--font-syne)] text-[22px] font-extrabold text-white mb-3">
                Seu projeto aqui
              </h3>
              <p className="text-[14px] text-[#6B8AAD] mb-6 leading-[1.6]">
                Vamos construir algo incrível juntos. Entre em contato e receba uma proposta.
              </p>
              <motion.a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(41,121,255,.4)" }}
                whileTap={{ scale: .97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-bold text-white"
                style={{ background: "linear-gradient(135deg,#2979FF,#7C4DFF)" }}
              >
                Falar agora →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: .9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: .9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#0D1F35] border border-[#1A3050] rounded-[24px] overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            >
              {/* Image */}
              <div className="relative bg-black flex-1 min-h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                  src={selected.images[imgIndex]}
                  alt={selected.title}
                  fill
                  className="object-contain p-4"
                />
                <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition border border-white/20">
                  <ChevronLeft size={20} className="text-white" />
                </button>
                <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition border border-white/20">
                  <ChevronRight size={20} className="text-white" />
                </button>
                <button onClick={close} className="absolute top-4 right-4 p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition border border-white/20">
                  <X size={18} className="text-white" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  {selected.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={e => { e.stopPropagation(); setImgIndex(idx) }}
                      className={`rounded-full transition-all ${idx === imgIndex ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/60"}`}
                    />
                  ))}
                </div>
                <div className="absolute top-4 left-4 bg-black/60 text-white text-[12px] px-3 py-1 rounded-full">
                  {imgIndex + 1} / {selected.images.length}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 border-t border-[#1A3050]">
                <h3 className="font-[family-name:var(--font-syne)] text-[20px] font-bold text-white mb-2">
                  {selected.title}
                </h3>
                <p className="text-[14px] text-[#6B8AAD] mb-4">{selected.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map(t => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-[#091526] border border-[#1A3050] text-[12px] text-[#6B8AAD] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
