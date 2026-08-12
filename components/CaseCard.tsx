import Link from "next/link"
import type { CaseStudy } from "@/data/site"
import ArrowIcon from "./ArrowIcon"
import DeviceScene from "./DeviceScene"

export default function CaseCard({ item, priority = false }: { item: CaseStudy; priority?: boolean }) {
  return (
    <article
      className="case-card"
      style={
        {
          "--case-accent": item.accent,
          "--case-accent-rgb": item.accentRgb,
        } as React.CSSProperties
      }
    >
      <div className="case-card__copy">
        <div className="case-card__meta">
          <span>{item.number}</span>
          <p>{item.category}</p>
        </div>
        <h3>{item.name}</h3>
        <p className="case-card__headline">{item.headline}</p>
        <ul aria-label={`Atuação no projeto ${item.name}`}>
          {item.scope.map((scope) => (
            <li key={scope}>{scope}</li>
          ))}
        </ul>
        <div className="case-card__actions">
          <Link className="text-link" href={`/projetos/${item.slug}`}>
            Ver case <ArrowIcon />
          </Link>
          <a className="text-link text-link--muted" href={item.liveUrl} target="_blank" rel="noopener noreferrer">
            Projeto ao vivo <ArrowIcon diagonal />
          </a>
        </div>
      </div>
      <div className="case-card__visual">
        <DeviceScene
          desktop={item.desktopPreview}
          mobile={item.mobilePreview}
          alt={`Landing page ${item.name}`}
          priority={priority}
        />
      </div>
    </article>
  )
}
