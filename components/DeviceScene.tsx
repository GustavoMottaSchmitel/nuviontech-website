import Image from "next/image"

type Props = {
  desktop: string
  mobile: string
  alt: string
  priority?: boolean
}

export default function DeviceScene({ desktop, mobile, alt, priority = false }: Props) {
  return (
    <div className="device-scene" aria-label={`${alt}, em desktop e celular`}>
      <div className="device-glow" aria-hidden="true" />
      <div className="laptop-device">
        <div className="laptop-lid">
          <div className="laptop-camera" aria-hidden="true" />
          <div className="laptop-screen">
            <Image
              src={desktop}
              alt={`${alt} — versão desktop`}
              fill
              priority={priority}
              sizes="(max-width: 760px) 84vw, (max-width: 1100px) 62vw, 760px"
            />
          </div>
        </div>
        <div className="laptop-base" aria-hidden="true"><span /></div>
      </div>
      <div className="phone-device">
        <div className="phone-side phone-side--left" aria-hidden="true" />
        <div className="phone-side phone-side--right" aria-hidden="true" />
        <div className="phone-screen">
          <Image
            src={mobile}
            alt={`${alt} — versão mobile`}
            fill
            priority={priority}
            sizes="(max-width: 760px) 25vw, 190px"
          />
          <span className="phone-island" aria-hidden="true" />
          <span className="phone-gloss" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
