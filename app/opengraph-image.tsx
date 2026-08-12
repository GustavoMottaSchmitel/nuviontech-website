import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "NuvionTech — Complexo por dentro. Claro para quem usa."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpenGraphImage() {
  const symbol = await readFile(join(process.cwd(), "public", "brand", "nuvion-symbol.png"))
  const symbolData = `data:image/png;base64,${symbol.toString("base64")}`
  return new ImageResponse(
    <div style={{ position: "relative", display: "flex", width: "100%", height: "100%", padding: "72px", flexDirection: "column", justifyContent: "space-between", overflow: "hidden", background: "#07111c", color: "white" }}>
      <div style={{ position: "absolute", right: -120, top: -100, width: 570, height: 570, border: "2px solid rgba(35,213,234,.28)", borderRadius: "50%", boxShadow: "0 0 120px rgba(50,117,255,.28)" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, fontWeight: 700, letterSpacing: 4 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse requires a plain image element. */}
        <img src={symbolData} width={48} height={48} alt="" />
        NUVIONTECH
      </div>
      <div style={{ display: "flex", maxWidth: 940, flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 74, fontWeight: 760, letterSpacing: -5, lineHeight: .95 }}>
          <span>Complexo por dentro.</span>
          <span><span style={{ color: "#23d5ea" }}>Claro</span> para quem usa.</span>
        </div>
        <div style={{ marginTop: 32, color: "rgba(255,255,255,.58)", fontSize: 22 }}>Estratégia · Design · Engenharia</div>
      </div>
    </div>,
    size,
  )
}
