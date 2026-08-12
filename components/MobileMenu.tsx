"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Brand from "./Brand"
import { whatsappUrl } from "@/data/site"

const links = [
  { href: "/projetos", label: "Projetos" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const closeButton = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)

  const closeMenu = () => {
    trigger.current?.focus()
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu()
        return
      }
      if (event.key !== "Tab" || !panel.current) return
      const focusable = [...panel.current.querySelectorAll<HTMLElement>("a, button:not([disabled])")]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    closeButton.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  useEffect(() => {
    const media = window.matchMedia("(min-width: 861px)")
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  return (
    <div className={`mobile-menu${open ? " mobile-menu--open" : ""}`}>
      <button
        ref={trigger}
        className="mobile-menu__trigger"
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
      </button>
      {open && (
        <div ref={panel} className="mobile-menu__panel" id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Menu principal">
          <div className="mobile-menu__head">
            <Brand compact />
            <button ref={closeButton} type="button" onClick={closeMenu} aria-label="Fechar menu">Fechar</button>
          </div>
          <nav aria-label="Navegação mobile">
            {links.map((link, index) => (
              <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{link.label}
              </Link>
            ))}
            <a href={whatsappUrl("site")} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              <span>04</span>Contato
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
