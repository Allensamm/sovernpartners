import type { Metadata } from "next";

const BASE = "https://sovernpartners.com";

export const metadata: Metadata = {
  title: "Services | Executive Search, Headhunter & Advisory | Sovern Partners",
  description:
    "Sovern Partners offers executive headhunter services, leadership advisory, on-demand talent, and corporate transformation across Europe, Germany, UK, and globally. Our headhunters find leaders who shape organizations.",
  keywords: [
    "executive headhunter services",
    "headhunter services europe",
    "executive search services",
    "leadership advisory services",
    "on-demand talent",
    "corporate transformation",
    "organization culture",
    "headhunter firm services",
    "headhunter germany services",
  ],
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    title: "Headhunter & Executive Search Services | Sovern Partners",
    description:
      "Executive headhunter, leadership advisory, and corporate transformation services across Europe and globally.",
    url: `${BASE}/services`,
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
