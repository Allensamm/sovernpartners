import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    id: "consumer",
    name: "Consumer Markets",
    desc: "From FMCG to luxury retail, we help consumer-facing organizations find and develop leaders who connect authentically with evolving customers — across digital and physical channels.",
    focus: ["Retail & E-Commerce","FMCG & CPG","Luxury & Lifestyle","Hospitality & Travel"],
  },
  {
    id: "frontier",
    name: "Frontier Tech",
    desc: "AI, robotics, quantum computing, synthetic biology — we specialize in identifying executive talent for organizations operating at the cutting edge of human possibility.",
    focus: ["Artificial Intelligence","Robotics & Automation","Quantum Computing","Biotechnology"],
  },
  {
    id: "financial",
    name: "Financial Services",
    desc: "Banking, insurance, asset management, and fintech — we understand the regulatory, risk, and growth imperatives that define leadership in financial services at every stage.",
    focus: ["Investment Banking","Asset & Wealth Management","Insurance","Fintech & Digital Banking"],
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    desc: "From hospital systems to pharmaceutical giants, we serve leaders navigating the intersection of science, regulation, patient care, and commercial performance.",
    focus: ["Hospital Systems & IDNs","Pharmaceutical & Biotech","Medical Devices & Diagnostics","Healthcare Technology"],
  },
  {
    id: "industrial",
    name: "Industrial",
    desc: "Manufacturing, energy, engineering, and logistics — we help industrial organizations find leaders equipped to manage complexity, drive efficiency, and lead the energy transition.",
    focus: ["Advanced Manufacturing","Energy & Utilities","Engineering & Infrastructure","Supply Chain & Logistics"],
  },
  {
    id: "pe",
    name: "Private Equity",
    desc: "We are a trusted partner to the world's leading PE firms — supporting portfolio companies with executive search and leadership advisory across the deal lifecycle.",
    focus: ["Portfolio Company Leadership","Deal Team Talent","Fund Leadership","Value Creation Consulting"],
  },
  {
    id: "professional",
    name: "Professional & Technology Services",
    desc: "Management consulting, IT services, and outsourcing — we help professional services firms find the leaders who drive client value, build high-performance cultures, and win.",
    focus: ["Management Consulting","IT Services & Outsourcing","Advisory Firms","BPO & Shared Services"],
  },
  {
    id: "social",
    name: "Social Impact",
    desc: "Nonprofits, NGOs, foundations, and public sector organizations need exceptional leaders too. We bring the same rigor to mission-driven organizations as we do to the private sector.",
    focus: ["Nonprofits & NGOs","Philanthropy & Foundations","International Development","Government & Public Sector"],
  },
  {
    id: "sustainability",
    name: "Sustainability & Climate",
    desc: "ESG, clean energy, climate tech — we help organizations leading the transition to a sustainable economy find executives who combine commercial acumen with authentic commitment.",
    focus: ["Clean Energy & Renewables","ESG Strategy","Climate Technology","Sustainable Finance"],
  },
  {
    id: "tech",
    name: "Technology",
    desc: "Enterprise software, SaaS, platforms, and hardware — we partner with technology companies from early growth stage to global enterprise, matching leaders to their exact moment.",
    focus: ["Enterprise Software & SaaS","Cloud & Infrastructure","Consumer Technology","Semiconductors & Hardware"],
  },
  {
    id: "vc",
    name: "Venture Capital",
    desc: "We help VC firms build exceptional portfolio company leadership teams and support fund-level talent strategy — from seed through IPO.",
    focus: ["Portfolio Company Executives","Founder Augmentation","Fund Leadership","Growth-Stage Scaling"],
  },
];

export default function IndustriesPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Industry Expertise</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            Integrated solutions<br /><em className="text-[#C9A84C]">across industries.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            We serve clients across virtually every industry and sector — bringing both deep specialization and broad cross-sector perspective to every engagement.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <div key={ind.id} id={ind.id} className="group border border-[#E8E4DE] p-8 hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300 rounded-sm">
                <div className="w-8 h-px bg-[#C9A84C] mb-5" />
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0A1628] mb-3 group-hover:text-[#C9A84C] transition-colors">{ind.name}</h3>
                <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed mb-5">{ind.desc}</p>
                <div className="space-y-1.5">
                  {ind.focus.map(f => (
                    <p key={f} className="font-['DM_Sans'] text-xs text-[#9BA8B8] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />{f}
                    </p>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-[#E8E4DE]">
                  <Link href="/contact" className="inline-flex items-center gap-1.5 font-['Jost'] uppercase tracking-widest text-xs text-[#C9A84C] hover:gap-2.5 transition-all">
                    Engage a Specialist <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1628] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mb-6">Don&apos;t see your sector?</h2>
          <p className="font-['DM_Sans'] text-[#9BA8B8] mb-8 leading-relaxed">Our consultants cover virtually every industry. Reach out and we&apos;ll connect you with the right specialist.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#b8973e] transition-colors rounded-sm">
            Talk to an Advisor <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
