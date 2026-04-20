import type { Metadata } from "next";

const BASE = "https://sovernpartners.com";

export const metadata: Metadata = {
  title: "Executive Headhunter Services | C-Suite Search Europe | Sovern Partners",
  description:
    "What is a headhunter? Sovern Partners are expert executive headhunters placing CEOs, CFOs, CHROs, and board directors across Europe, Germany, UK, and globally. Headhunter meaning: we find extraordinary leaders that change organizations.",
  keywords: [
    "executive headhunter",
    "headhunter meaning",
    "what is a headhunter",
    "was ist ein headhunter",
    "was ist headhunter",
    "headhunter definition",
    "IT headhunter",
    "headhunter IT",
    "headhunter deutschland",
    "C-suite headhunter",
    "CEO headhunter",
    "CFO headhunter",
    "CHRO headhunter",
    "board director search",
    "executive search europe",
    "executive search germany",
    "the headhunter",
    "top headhunter",
    "best headhunter europe",
    "headhunter firm",
    "independent headhunter global",
  ],
  alternates: {
    canonical: `${BASE}/services/executive-search`,
    languages: {
      "en-GB": `${BASE}/services/executive-search`,
      "de-DE": `${BASE}/services/executive-search`,
    },
  },
  openGraph: {
    title: "Executive Headhunter & C-Suite Search | Sovern Partners Europe",
    description:
      "Expert executive headhunters placing CEOs, CFOs, and board directors across Europe and globally. The headhunter firm trusted by world-class organizations.",
    url: `${BASE}/services/executive-search`,
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Executive Headhunter & C-Suite Search",
  description:
    "Sovern Partners provides elite executive headhunter services, placing CEOs, CFOs, CHROs, CIOs, COOs, board directors, and other C-suite leaders for the world's most admired organizations across Europe, Americas, and Asia Pacific.",
  provider: {
    "@type": "Organization",
    name: "Sovern Partners",
    url: BASE,
  },
  areaServed: ["Europe", "Americas", "Asia Pacific", "Middle East"],
  serviceType: "Executive Headhunter, Executive Search, C-Suite Recruitment",
  keywords:
    "headhunter, executive headhunter, headhunter deutschland, CEO search, CHRO search, CFO search, board director search",
  url: `${BASE}/services/executive-search`,
};

export default function ExecutiveSearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
