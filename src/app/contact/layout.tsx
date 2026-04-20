import type { Metadata } from "next";

const BASE = "https://sovernpartners.com";

export const metadata: Metadata = {
  title: "Contact a Headhunter | Talk to an Executive Search Advisor | Sovern Partners",
  description:
    "Contact Sovern Partners — Europe's premier executive headhunter firm. Speak with a leadership advisory expert about your C-suite search, headhunter needs, or executive job inquiry. Offices in London, Frankfurt, New York, Dubai and 28 global markets.",
  keywords: [
    "contact headhunter",
    "headhunter kontakt",
    "contact executive search firm europe",
    "talk to headhunter",
    "executive search inquiry",
    "headhunter germany contact",
    "headhunter london contact",
    "headhunter frankfurt contact",
    "executive jobs inquiry",
    "contact sovern partners",
  ],
  alternates: { canonical: `${BASE}/contact` },
  openGraph: {
    title: "Contact a Headhunter | Sovern Partners Europe",
    description:
      "Get in touch with Europe's leading executive headhunter team. Offices in London, Frankfurt, New York, Dubai, and 28 global markets.",
    url: `${BASE}/contact`,
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
