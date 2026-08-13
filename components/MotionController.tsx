"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const REVEAL_SELECTOR = [
  "[data-reveal]",
  ".section-heading",
  ".service-row",
  ".principles__statement",
  ".principles__list > li",
  ".process-grid > li",
  ".founder__portrait",
  ".founder__copy",
  ".faq__grid > div",
  ".faq details",
  ".contact-band__inner",
  ".inner-grid > *",
  ".case-story > *",
  ".contact-option",
  ".about-portrait",
  ".full-page-showcase__devices",
].join(",")
const PROJECT_SELECTOR = "[data-project-motion]"

export default function MotionController() {
  const pathname = usePathname()
  const [paused, setPaused] = useState(false)
  const [hasActiveProject, setHasActiveProject] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
    const projectItems = Array.from(document.querySelectorAll<HTMLElement>(PROJECT_SELECTOR))
    const visibility = new Map<HTMLElement, number>()

    revealItems.forEach((item) => item.classList.add("motion-reveal"))
    root.classList.toggle("motion-reduced", media.matches)
    root.classList.add("motion-ready")
    queueMicrotask(() => setHasActiveProject(false))

    if (media.matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"))
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          revealObserver.unobserve(entry.target)
        })
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0.12 },
    )

    const selectActiveProject = () => {
      let active: HTMLElement | null = null
      let bestRatio = 0

      visibility.forEach((ratio, item) => {
        if (ratio > bestRatio) {
          bestRatio = ratio
          active = item
        }
      })

      projectItems.forEach((item) => item.classList.toggle("is-motion-active", item === active && bestRatio >= 0.16))
      setHasActiveProject(Boolean(active && bestRatio >= 0.16))
    }

    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visibility.set(entry.target as HTMLElement, entry.intersectionRatio))
        selectActiveProject()
      },
      { threshold: [0, 0.16, 0.3, 0.5, 0.7] },
    )

    revealItems.forEach((item) => revealObserver.observe(item))
    projectItems.forEach((item) => {
      visibility.set(item, 0)
      projectObserver.observe(item)
    })

    const hero = document.querySelector<HTMLElement>(".hero-home")
    let pointerFrame = 0
    const resetPointer = () => {
      hero?.style.setProperty("--pointer-x", "0px")
      hero?.style.setProperty("--pointer-y", "0px")
    }
    const handlePointer = (event: PointerEvent) => {
      if (!hero || event.pointerType === "touch") return
      window.cancelAnimationFrame(pointerFrame)
      pointerFrame = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect()
        const x = Math.max(-0.5, Math.min(0.5, (event.clientX - rect.left) / rect.width - 0.5))
        const y = Math.max(-0.5, Math.min(0.5, (event.clientY - rect.top) / rect.height - 0.5))
        hero.style.setProperty("--pointer-x", `${(-x * 18).toFixed(2)}px`)
        hero.style.setProperty("--pointer-y", `${(-y * 12).toFixed(2)}px`)
      })
    }

    const handleVisibility = () => root.classList.toggle("motion-page-hidden", document.hidden)
    const handleMediaChange = (event: MediaQueryListEvent) => {
      root.classList.toggle("motion-reduced", event.matches)
      if (event.matches) revealItems.forEach((item) => item.classList.add("is-visible"))
    }

    hero?.addEventListener("pointermove", handlePointer, { passive: true })
    hero?.addEventListener("pointerleave", resetPointer)
    document.addEventListener("visibilitychange", handleVisibility)
    media.addEventListener("change", handleMediaChange)

    return () => {
      revealObserver.disconnect()
      projectObserver.disconnect()
      hero?.removeEventListener("pointermove", handlePointer)
      hero?.removeEventListener("pointerleave", resetPointer)
      document.removeEventListener("visibilitychange", handleVisibility)
      media.removeEventListener("change", handleMediaChange)
      window.cancelAnimationFrame(pointerFrame)
      root.classList.remove("motion-ready", "motion-page-hidden")
      projectItems.forEach((item) => item.classList.remove("is-motion-active"))
    }
  }, [pathname])

  useEffect(() => {
    document.documentElement.classList.toggle("motion-paused", paused)
    return () => document.documentElement.classList.remove("motion-paused")
  }, [paused])

  return (
    <button
      className={`motion-toggle${hasActiveProject ? " motion-toggle--project" : ""}`}
      type="button"
      aria-pressed={paused}
      onClick={() => setPaused((current) => !current)}
    >
      <span className="motion-toggle__icon" aria-hidden="true" />
      {paused ? "Retomar movimento" : "Pausar movimento"}
    </button>
  )
}
