import type { Metadata } from "next";

const BASE = "https://sovernpartners.com";

export const metadata: Metadata = {
  title: "Industries | Executive Headhunter by Sector | Sovern Partners",
  description:
    "Sovern Partners provides specialist executive headhunter and C-suite search services across Financial Services, Technology, Healthcare, Consumer Markets, and Private Equity in Europe and globally.",
  keywords: [
    "industry headhunter",
    "IT headhunter",
    "headhunter IT",
    "financial services headhunter",
    "technology headhunter",
    "healthcare headhunter",
    "private equity headhunter",
    "consumer markets executive search",
    "sector headhunter europe",
    "industry executive search germany",
  ],
  alternates: { canonical: `${BASE}/industries` },
  openGraph: {
    title: "Industries | Expert Headhunter by Sector | Sovern Partners",
    description:
      "Specialist executive headhunter services across Technology, Financial Services, Healthcare, and more.",
    url: `${BASE}/industries`,
    type: "website",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
