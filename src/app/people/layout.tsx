import type { Metadata } from "next";

const BASE = "https://sovernpartners.com";

export const metadata: Metadata = {
  title: "Our People | Meet the Headhunters | Sovern Partners",
  description:
    "Meet the Sovern Partners team — world-class executive headhunters, talent acquisition specialists, and leadership advisors operating across Europe, Americas, and Asia Pacific.",
  keywords: [
    "headhunter team",
    "executive headhunters europe",
    "talent acquisition specialists",
    "leadership advisors",
    "headhunter profiles",
    "independent headhunter global",
    "Venkat G headhunter",
    "executive search team",
  ],
  alternates: { canonical: `${BASE}/people` },
  openGraph: {
    title: "Our Headhunters & Advisors | Sovern Partners",
    description: "Meet the executive headhunters and talent acquisition specialists at Sovern Partners.",
    url: `${BASE}/people`,
    type: "website",
  },
};

export default function PeopleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
