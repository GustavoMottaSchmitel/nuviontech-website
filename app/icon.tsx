import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default async function Icon() {
  const symbol = await readFile(join(process.cwd(), "public", "brand", "nuvion-symbol.png"))
  const symbolData = `data:image/png;base64,${symbol.toString("base64")}`
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", padding: 8, alignItems: "center", justifyContent: "center", background: "#07111c", borderRadius: 14 }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse requires a plain image element. */}
      <img src={symbolData} width={48} height={48} alt="" />
    </div>,
    size,
  )
}
