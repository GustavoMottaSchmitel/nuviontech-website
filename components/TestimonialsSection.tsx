"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Wanessa Teixeira",
    role: "Corretora de Imóveis",
    text: "Meu site ficou excelente! Superou todas as minhas expectativas. Profissionalismo e qualidade do início ao fim. Recomendo muito a NuvionTech!",
    image: "/testimonials/wanessatexeira.png",
    initials: "WT",
    rating: 5,
  },
  {
    name: "Vitor Assistência",
    role: "Assistência Técnica & Venda de Celulares",
    text: "Ficou top! Show. Atendimento rápido, entrega no prazo e resultado muito acima do esperado. Parceria feita para durar.",
    image: "/testimonials/logo-vitorcell.png",
    initials: "VA",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 px-5 overflow-hidden bg-[#050D1A]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#2979FF] mb-3">
            Prova social
          </p>
          <h2
            className="font-[family-name:var(--font-syne)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white mb-4"
            style={{ fontSize: "clamp(32px,5vw,56px)" }}
          >
            O que nossos{" "}
            <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="text-[17px] text-[#6B8AAD] max-w-[480px] mx-auto leading-[1.7]">
            Depoimentos reais de quem já confiou na NuvionTech.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto mb-14">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3, borderColor: "rgba(41,121,255,.3)" }}
              className="relative bg-[#0D1F35] border border-[#1A3050] rounded-[20px] p-8 transition-all"
            >
              {/* big quote mark */}
              <span className="absolute top-6 right-7 font-[family-name:var(--font-syne)] text-[56px] leading-[0] font-extrabold text-[#2979FF]/20">
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} className="text-[#FFD600] fill-[#FFD600]" />
                ))}
              </div>

              <p className="text-[15px] text-[#C8DCEF] leading-[1.7] mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#1A3050] flex-shrink-0 relative bg-gradient-to-br from-[#2979FF] to-[#7C4DFF] flex items-center justify-center">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-white">{t.name}</div>
                  <div className="text-[12px] text-[#6B8AAD]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex flex-wrap items-center gap-5 bg-[#0D1F35] border border-[#1A3050] rounded-[16px] px-8 py-5 justify-center">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} className="text-[#FFD600] fill-[#FFD600]" />
              ))}
            </div>
            <div className="text-center">
              <span className="font-[family-name:var(--font-syne)] text-[28px] font-extrabold text-white">5.0</span>
              <span className="text-[#6B8AAD] text-[14px]"> / 5.0</span>
              <div className="text-[12px] text-[#6B8AAD] mt-0.5">Baseado em {TESTIMONIALS.length} avaliações</div>
            </div>
            <div className="w-px h-10 bg-[#1A3050]" />
            <div className="text-[14px] text-[#6B8AAD] max-w-[200px] leading-[1.5]">
              100% dos clientes recomendariam a NuvionTech
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
