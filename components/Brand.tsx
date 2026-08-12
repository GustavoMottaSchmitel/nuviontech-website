import Image from "next/image"

export default function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-lockup${compact ? " brand-lockup--compact" : ""}`}>
      <Image
        className="brand-symbol"
        src="/brand/nuvion-symbol.png"
        width={512}
        height={512}
        alt=""
        aria-hidden="true"
        priority
      />
      <span className="brand-wordmark" aria-label="NuvionTech">
        <strong>NUVION</strong>
        <small>TECH</small>
      </span>
    </span>
  )
}
