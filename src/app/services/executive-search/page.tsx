import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const roles = [
  { title: "CEO & Board of Directors", desc: "The most consequential leadership appointments. We bring extraordinary rigor to the most critical positions in any organization." },
  { title: "Digital Officers (CDO, CIO, CTO)", desc: "Technology leadership that bridges vision and execution — building digital capabilities that create sustainable advantage." },
  { title: "Financial Officers (CFO, Treasurer)", desc: "Financial stewards who balance capital discipline with bold strategic thinking, ready for both stability and transformation." },
  { title: "Government & Corporate Affairs", desc: "Leaders who navigate complexity at the intersection of business, policy, and public accountability." },
  { title: "Human Resources Officers (CHRO)", desc: "Chief People Officers who see talent as the ultimate competitive advantage and who can build the organization of the future." },
  { title: "Legal, Risk & Compliance (CLO, CCO)", desc: "Counsel and compliance executives who protect the enterprise while enabling the bold moves that drive growth." },
  { title: "Marketing, Sales & Strategy (CMO, CSO)", desc: "Commercial leaders who connect brand, revenue, and customer experience into a unified engine for growth." },
  { title: "Supply Chain & Operations (COO)", desc: "Operational architects who translate strategy into execution — building supply chains and processes that scale." },
  { title: "Technology Officers (CTO, CIO, CISO)", desc: "Technology executives who bridge the business and technical worlds — turning infrastructure into innovation." },
];

export default function ExecutiveSearchPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=700&fit=crop&q=75"
          alt="Executive leadership search"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.12, mixBlendMode: "luminosity" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-[#0A1628]/60" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Executive Search</p>
          <h1 className="font-['Cormorant_Garamond'] font-light text-white leading-[1.05] max-w-3xl mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            A pioneer in executive search —<br /><em className="text-[#C9A84C]">and still leading the way.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            Our legacy is grounded in executive search. We help you recruit the best executive talent from around the world — leaders who don&apos;t just fill roles, but redefine them.
          </p>
        </div>
      </section>

      <section className="bg-white py-24" style={{ position: "relative" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="group border border-[#E8E4DE] p-8 hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300 rounded-sm cursor-pointer">
                <div className="w-8 h-px bg-[#C9A84C] mb-5" />
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] mb-3 group-hover:text-[#C9A84C] transition-colors leading-snug">{role.title}</h3>
                <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2ED] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">Our Approach</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628] mb-6">More than a search. A partnership.</h2>
            <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-5">Every search begins with deep organizational listening. We immerse ourselves in your culture, strategy, and the specific leadership context before we ever begin the market assessment.</p>
            <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-8">Our proprietary network spans 28 markets and three decades of relationship-building. We surface candidates your competitors can&apos;t reach — and evaluate them with data-backed rigor.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-medium hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm">
              Start a Search <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "92%", label: "Retention Rate at 2 Years" },
              { num: "500+", label: "Placements Per Year" },
              { num: "28", label: "Global Markets" },
              { num: "35+", label: "Years of Excellence" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0A1628] p-8 text-center rounded-sm">
                <p className="font-['Cormorant_Garamond'] text-4xl font-light text-[#C9A84C] mb-2">{stat.num}</p>
                <p className="font-['Jost'] uppercase tracking-widest text-[#9BA8B8] text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1628] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mb-6">Looking for your next transformational leader?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#b8973e] transition-colors rounded-sm">
            Talk to an Advisor <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
