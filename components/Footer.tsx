"use client"

import { motion } from "motion/react"
import NuvionLogo from "./NuvionLogo"
import { Mail, Phone, MapPin } from "lucide-react"

const WA = "https://wa.me/5527997498818"

const QUICK_LINKS = [
  { label: "Início",        href: "#hero" },
  { label: "Serviços",      href: "#services" },
  { label: "Sobre Mim",     href: "#about" },
  { label: "Portfólio",     href: "#portfolio" },
  { label: "Clientes",      href: "#testimonials" },
  { label: "💬 WhatsApp",   href: WA, external: true },
]

const CONTACT = [
  { Icon: Mail,    label: "Email",       value: "mottaschmitelg@gmail.com", href: "mailto:mottaschmitelg@gmail.com" },
  { Icon: Phone,   label: "WhatsApp",    value: "+55 (27) 99749-8818",      href: WA },
  { Icon: MapPin,  label: "Localização", value: "Espírito Santo, Brasil",   href: null },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0D1F35] border-t border-[#1A3050] pt-16 pb-8 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <NuvionLogo size={32} />
              <span className="font-[family-name:var(--font-syne)] text-[18px] font-extrabold text-white">
                Nuvion<span className="font-light text-[#C8DCEF]/50"> Tech</span>
              </span>
            </motion.div>
            <p className="text-[14px] text-[#6B8AAD] leading-[1.7] max-w-[320px] mb-6">
              Tecnologia moderna, performance e visual impecável. Criamos sites, automações e sistemas que geram autoridade e resultados reais para marcas.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <SocialLink href={WA} title="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                  <path d="M22.5 19.87c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H12c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.05 2.85 1.2 3.05c.15.2 2.07 3.16 5.01 4.43.7.3 1.25.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z" fill="currentColor"/>
                </svg>
              </SocialLink>
              <SocialLink href="mailto:mottaschmitelg@gmail.com" title="Email">
                <Mail size={16} />
              </SocialLink>
              <SocialLink href="#" title="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0"/>
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-[family-name:var(--font-syne)] text-[13px] font-bold text-white uppercase tracking-[.08em] mb-5">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-3">
              {QUICK_LINKS.map((l) =>
                l.external ? (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                    className="text-[14px] text-[#25D366] font-semibold hover:opacity-80 transition-opacity">
                    {l.label}
                  </a>
                ) : (
                  <a key={l.label} href={l.href}
                    className="group flex items-center gap-2 text-[14px] text-[#6B8AAD] hover:text-[#448AFF] transition-colors">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#2979FF] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {l.label}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-syne)] text-[13px] font-bold text-white uppercase tracking-[.08em] mb-5">
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              {CONTACT.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#2979FF]/10 border border-[#2979FF]/20 flex-shrink-0 mt-0.5">
                    <Icon size={14} className="text-[#00E5FF]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#6B8AAD] mb-0.5 uppercase tracking-[.04em]">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[13px] text-[#C8DCEF] hover:text-[#448AFF] transition-colors break-all">
                        {value}
                      </a>
                    ) : (
                      <span className="text-[13px] text-[#C8DCEF]">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-[#1A3050] flex flex-wrap items-center justify-between gap-3">
          <p className="text-[13px] text-[#6B8AAD]">
            © {year} NuvionTech — Todos os direitos reservados.
          </p>
          <p className="text-[12px] text-[#6B8AAD]/50">
            Feito com ❤️ no ES
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, title, children }: { href: string; title: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      whileHover={{ y: -2, borderColor: "rgba(41,121,255,.4)", background: "rgba(41,121,255,.15)" }}
      className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[#6B8AAD] bg-white/5 border border-[#1A3050] transition-colors"
    >
      {children}
    </motion.a>
  )
}
