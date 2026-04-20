import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/profile/", "/api/"],
      },
    ],
    sitemap: "https://sovernpartners.com/sitemap.xml",
    host: "https://sovernpartners.com",
  };
}
