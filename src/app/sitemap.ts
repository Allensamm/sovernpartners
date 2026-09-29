import { SITE_URL } from "@/lib/site-url";
import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/services/executive-search",
    "/services/leadership",
    "/services/on-demand-talent",
    "/services/corporate-transformation",
    "/services/organization-culture",
    "/industries",
    "/about",
    "/about/heritage",
    "/about/purpose-vision-values",
    "/about/inclusion-belonging",
    "/about/sustainability",
    "/people",
    "/careers",
    "/profile",
    "/contact",
    "/insights",
    "/insights/podcast",
    "/newsroom",
    "/offices",
    "/privacy",
    "/privacy/information-security",
    "/legal",
    "/legal/ethics-line",
    ...articles.map((a) => `/insights/${a.slug}`),
  ];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-09-29"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
