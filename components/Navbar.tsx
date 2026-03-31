"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import NuvionLogo from "./NuvionLogo"

const WA_LINK = "https://wa.me/5527997498818?text=Ol%C3%A1%21+Vim+pelo+site+da+NuvionTech+e+gostaria+de+um+or%C3%A7amento."

const links = [
  { label: "Serviços",    href: "#services" },
  { label: "Sobre",       href: "#about" },
  { label: "Portfólio",   href: "#portfolio" },
  { label: "Clientes",    href: "#testimonials" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-6 md:px-10 transition-all duration-400 ${
          scrolled
            ? "bg-[#050D1A]/90 backdrop-blur-xl border-b border-[#1A3050]"
            : "bg-transparent"
        }`}
      >
        <a href="#hero" className="flex items-center gap-3">
          <NuvionLogo size={32} />
          <span className="font-[family-name:var(--font-syne)] text-[18px] font-extrabold text-white">
            Nuvion<span className="font-light text-[#C8DCEF]/50"> Tech</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[14px] font-medium text-[#6B8AAD] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg text-[14px] font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(41,121,255,.4)]"
            style={{ background: "linear-gradient(135deg,#2979FF,#7C4DFF)" }}
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden p-2 text-[#C8DCEF]" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-[#050D1A]/98 backdrop-blur-xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 text-[#C8DCEF]"
            >
              <X size={26} />
            </button>

            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white hover:text-[#00E5FF] transition-colors"
              >
                {l.label}
              </motion.a>
            ))}

            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
              className="text-2xl font-bold text-[#25D366]"
            >
              💬 WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
