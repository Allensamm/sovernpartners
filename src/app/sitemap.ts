import { MetadataRoute } from "next";

const BASE = "https://sovernpartners.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "",                                    priority: 1.0, freq: "weekly"  },
    { path: "/careers",                            priority: 0.95, freq: "weekly" },
    { path: "/services",                           priority: 0.9,  freq: "monthly"},
    { path: "/services/executive-search",          priority: 0.9,  freq: "monthly"},
    { path: "/services/leadership",                priority: 0.85, freq: "monthly"},
    { path: "/services/on-demand-talent",          priority: 0.85, freq: "monthly"},
    { path: "/services/corporate-transformation",  priority: 0.8,  freq: "monthly"},
    { path: "/services/organization-culture",      priority: 0.8,  freq: "monthly"},
    { path: "/industries",                         priority: 0.85, freq: "monthly"},
    { path: "/about",                              priority: 0.8,  freq: "monthly"},
    { path: "/about/heritage",                     priority: 0.7,  freq: "monthly"},
    { path: "/about/purpose-vision-values",        priority: 0.7,  freq: "monthly"},
    { path: "/about/inclusion-belonging",          priority: 0.7,  freq: "monthly"},
    { path: "/about/sustainability",               priority: 0.7,  freq: "monthly"},
    { path: "/people",                             priority: 0.8,  freq: "monthly"},
    { path: "/insights",                           priority: 0.8,  freq: "weekly" },
    { path: "/insights/podcast",                   priority: 0.75, freq: "weekly" },
    { path: "/contact",                            priority: 0.85, freq: "monthly"},
    { path: "/offices",                            priority: 0.75, freq: "monthly"},
    { path: "/newsroom",                           priority: 0.75, freq: "weekly" },
  ];

  return routes.map(({ path, priority, freq }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));
}
