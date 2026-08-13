import Image from "next/image"

type Props = {
  desktop: string
  mobile: string
  desktopFull?: string
  mobileFull?: string
  desktopHeader?: string
  mobileHeader?: string
  alt: string
  priority?: boolean
}

export default function DeviceScene({
  desktop,
  mobile,
  desktopFull,
  mobileFull,
  desktopHeader,
  mobileHeader,
  alt,
  priority = false,
}: Props) {
  return (
    <div className="device-scene" data-project-motion={desktopFull ? "" : undefined} aria-label={`${alt}, em desktop e celular`}>
      <div className="device-glow" aria-hidden="true" />
      <div className="laptop-device">
        <div className="laptop-lid">
          <div className="laptop-camera" aria-hidden="true" />
          <div className="laptop-screen">
            <Image
              className="project-poster"
              src={desktop}
              alt={`${alt} — versão desktop`}
              fill
              priority={priority}
              sizes="(max-width: 760px) 84vw, (max-width: 1100px) 62vw, 760px"
            />
            {desktopFull ? (
              <Image
                className="project-scroll project-scroll--desktop"
                src={desktopFull}
                alt=""
                fill
                sizes="(max-width: 760px) 84vw, (max-width: 1100px) 62vw, 760px"
                aria-hidden="true"
              />
            ) : null}
            {desktopHeader ? (
              <Image
                className="project-fixed-header project-fixed-header--desktop"
                src={desktopHeader}
                alt=""
                width={1440}
                height={86}
                sizes="(max-width: 760px) 84vw, (max-width: 1100px) 62vw, 760px"
                aria-hidden="true"
              />
            ) : null}
          </div>
        </div>
        <div className="laptop-base" aria-hidden="true"><span /></div>
      </div>
      <div className="phone-device">
        <div className="phone-side phone-side--left" aria-hidden="true" />
        <div className="phone-side phone-side--right" aria-hidden="true" />
        <div className="phone-screen">
          <Image
            className="project-poster"
            src={mobile}
            alt={`${alt} — versão mobile`}
            fill
            priority={priority}
            sizes="(max-width: 760px) 25vw, 190px"
          />
          {mobileFull ? (
            <Image
              className="project-scroll project-scroll--mobile"
              src={mobileFull}
              alt=""
              fill
              sizes="(max-width: 760px) 25vw, 190px"
              aria-hidden="true"
            />
          ) : null}
          {mobileHeader ? (
            <Image
              className="project-fixed-header project-fixed-header--mobile"
              src={mobileHeader}
              alt=""
              width={390}
              height={74}
              sizes="(max-width: 760px) 25vw, 190px"
              aria-hidden="true"
            />
          ) : null}
          <span className="phone-island" aria-hidden="true" />
          <span className="phone-gloss" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
