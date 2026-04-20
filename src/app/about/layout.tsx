import type { Metadata } from "next";

const BASE = "https://sovernpartners.com";

export const metadata: Metadata = {
  title: "About Us | Europe's Top Executive Headhunter Firm | Sovern Partners",
  description:
    "Learn about Sovern Partners — Europe's leading executive headhunter and leadership advisory firm with 35+ years of excellence, 28 global offices, and 500+ C-suite placements annually across Germany, UK, France, and worldwide.",
  keywords: [
    "about sovern partners",
    "executive headhunter firm europe",
    "headhunter history",
    "headhunter firm germany",
    "headhunter europe history",
    "executive search firm about",
    "leadership advisory firm",
    "top headhunter firm",
    "best executive search europe",
  ],
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: "About Sovern Partners | Executive Headhunter Firm Europe",
    description:
      "35+ years of executive headhunter excellence. 28 global markets. 500+ annual C-suite placements.",
    url: `${BASE}/about`,
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
