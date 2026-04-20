import Link from "next/link";
import { ArrowRight } from "lucide-react";

const milestones = [
  { year: "1989", event: "Founded in New York", desc: "Sovern Partners was founded by a small team of former executives and advisors with one belief: great organizations are built by great leaders." },
  { year: "1995", event: "International Expansion", desc: "Opened our first international office in London, marking the beginning of a global practice built on cross-cultural leadership insight." },
  { year: "2003", event: "Leadership Advisory Launch", desc: "Extended beyond executive search to launch our first Leadership Advisory practice — pioneering integrated talent and leadership solutions." },
  { year: "2010", event: "Asia Pacific Presence", desc: "Established offices in Singapore and Hong Kong, cementing our commitment to serving global clients with truly local expertise." },
  { year: "2016", event: "On-Demand Talent Platform", desc: "Launched our On-Demand Talent marketplace, connecting organizations with elite independent executives and project specialists." },
  { year: "2020", event: "Global Resilience Initiative", desc: "Helped hundreds of organizations navigate the leadership challenges of the pandemic — accelerating crisis leadership and remote organization design." },
  { year: "2025", event: "28 Markets, One Mission", desc: "Today, Sovern Partners operates in 28 markets across the Americas, EMEA, and Asia Pacific — with 500+ placements annually and a 92% two-year retention rate." },
];

export default function HeritagePage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Our Heritage</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            35 years of building<br /><em className="text-[#C9A84C]">exceptional leaders.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            Sovern Partners was founded on the belief that great organizations are built by great leaders. Since our founding, we have expanded across the globe and worked with leading organizations in every major industry.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">Our Journey</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628]">Milestones that define us</h2>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-[#E8E4DE]" />
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex gap-8 pb-12">
                  <div className="relative shrink-0 w-16 flex justify-end">
                    <div className="absolute right-0 top-2 w-2 h-2 rounded-full bg-[#C9A84C] ring-4 ring-white translate-x-[calc(50%+1px)]" />
                    <p className="font-['Cormorant_Garamond'] text-2xl font-light text-[#C9A84C] pr-4">{m.year}</p>
                  </div>
                  <div className="pt-0 pl-8">
                    <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] mb-2">{m.event}</h3>
                    <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2ED] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628] mb-6">The next chapter starts with you.</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm">
            Start the Conversation <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
