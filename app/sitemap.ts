import type { MetadataRoute } from "next"
import { cases, services, SITE_URL } from "@/data/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projetos", "/sobre", "/contato", "/privacidade"]
  return [
    ...routes.map((route) => ({ url: `${SITE_URL}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : .7 })),
    ...services.map((service) => ({ url: `${SITE_URL}/servicos/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 })),
    ...cases.map((item) => ({ url: `${SITE_URL}/projetos/${item.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 })),
  ]
}
