import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NuvionTech",
    short_name: "NuvionTech",
    description: "Estratégia, design e engenharia para produtos digitais.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111c",
    theme_color: "#07111c",
    icons: [{ src: "/brand/nuvion-symbol.png", sizes: "512x512", type: "image/png" }],
  }
}
