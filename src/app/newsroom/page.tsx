import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const pressReleases = [
  { date: "April 2, 2025", title: "Sovern Partners Expands Asia Pacific Presence with New Offices in Bangkok and Mumbai", type: "Press Release" },
  { date: "March 15, 2025", title: "Sovern Partners Named to Forbes Global Executive Search Firms List for 10th Consecutive Year", type: "Award" },
  { date: "February 28, 2025", title: "Sovern Partners Launches Sustainability Leadership Practice to Meet Growing Client Demand", type: "Press Release" },
  { date: "January 20, 2025", title: "Sovern Partners Completes Record Year with 540 Executive Placements Across 28 Markets", type: "Press Release" },
];

const inTheNews = [
  { outlet: "Financial Times", date: "March 2025", headline: "How Executive Search Firms Are Adapting to the AI Leadership Revolution", href: "#" },
  { outlet: "Harvard Business Review", date: "February 2025", headline: "The New CEO Succession Playbook", href: "#" },
  { outlet: "Bloomberg", date: "January 2025", headline: "Board Directors in Short Supply as Governance Scrutiny Intensifies", href: "#" },
  { outlet: "The Wall Street Journal", date: "December 2024", headline: "Private Equity Firms Prioritize Leadership Before the Deal", href: "#" },
];

const awards = [
  { award: "Forbes Top Executive Search Firms", year: "2025" },
  { award: "Vault Top 25 Executive Recruiters", year: "2025" },
  { award: "Hunt Scanlon Leadership Advisory Power 65", year: "2024" },
  { award: "AESC Membership Excellence Award", year: "2024" },
];

export default function NewsroomPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Newsroom</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            Latest news from<br /><em className="text-[#C9A84C]">Sovern Partners.</em>
          </h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
          {/* Press releases */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">Press Releases</p>
              <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#0A1628]">Official announcements</h2>
            </div>
            <div className="space-y-0">
              {pressReleases.map((pr) => (
                <div key={pr.title} className="group py-6 border-b border-[#E8E4DE] cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs">{pr.type}</span>
                    <span className="text-[#E8E4DE]">·</span>
                    <span className="font-['DM_Sans'] text-xs text-[#6B6B6B]">{pr.date}</span>
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] group-hover:text-[#C9A84C] transition-colors leading-snug mb-3">{pr.title}</h3>
                  <span className="inline-flex items-center gap-1.5 font-['Jost'] uppercase tracking-widest text-xs text-[#C9A84C]">Read Release <ArrowRight size={11} /></span>
                </div>
              ))}
            </div>

            {/* In the News */}
            <div className="mt-16 mb-10">
              <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">Media Coverage</p>
              <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#0A1628]">In the news</h2>
            </div>
            <div className="space-y-0">
              {inTheNews.map((item) => (
                <a key={item.headline} href={item.href}
                  className="group flex items-start gap-5 py-5 border-b border-[#E8E4DE] hover:no-underline"
                >
                  <div className="shrink-0 w-24 pt-0.5">
                    <p className="font-['Cormorant_Garamond'] text-sm font-semibold text-[#0A1628]">{item.outlet}</p>
                    <p className="font-['DM_Sans'] text-xs text-[#6B6B6B]">{item.date}</p>
                  </div>
                  <p className="font-['DM_Sans'] text-sm text-[#1C1C1E] group-hover:text-[#C9A84C] transition-colors leading-snug">{item.headline}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="mb-10">
              <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">Recognition</p>
              <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#0A1628]">Awards & rankings</h2>
            </div>
            <div className="space-y-3 mb-12">
              {awards.map((a) => (
                <div key={a.award} className="flex items-start gap-3 py-4 border-b border-[#F0EDE8]">
                  <span className="font-['Cormorant_Garamond'] text-2xl font-light text-[#C9A84C] shrink-0 w-14">{a.year}</span>
                  <p className="font-['DM_Sans'] text-sm text-[#1C1C1E] leading-snug">{a.award}</p>
                </div>
              ))}
            </div>

            {/* Media Contact */}
            <div className="bg-[#F5F2ED] p-8 border border-[#E8E4DE] rounded-sm">
              <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs mb-4">Media Contact</p>
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] mb-2">Press Inquiries</h3>
              <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] mb-5">For interview requests, press releases, or media inquiries, please contact our communications team.</p>
              <a href="mailto:press@sovernpartners.com" className="flex items-center gap-2 font-['DM_Sans'] text-sm text-[#C9A84C] hover:underline mb-1">
                <Mail size={14} /> press@sovernpartners.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
