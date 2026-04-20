import Link from "next/link";
import { ArrowRight } from "lucide-react";

const offerings = [
  {
    title: "Carve-Outs",
    desc: "Leadership and talent strategy for separations and spin-offs. We help organizations navigate the complexity of divestiture — identifying the leaders who will define the new entity from day one and building the organizational structure to make it thrive.",
    outcomes: ["Rapid leadership team assembly","Culture-setting for new entities","Talent retention during transition","Post-separation organizational design"],
  },
  {
    title: "Cost Advantage",
    desc: "Building leaner, more efficient organizations without sacrificing performance. We help leaders make the hard decisions — reducing complexity, right-sizing structures, and redirecting resources to where they create the most value.",
    outcomes: ["Organizational redesign for efficiency","Identifying high-impact cost reduction","Preserving critical talent during restructuring","Performance management frameworks"],
  },
  {
    title: "Distress Response & Restructuring",
    desc: "Rapid-response leadership for organizations in crisis. When the pressure is highest and time is shortest, we deploy experienced transformation leaders who have navigated complex restructurings and can drive recovery with speed and conviction.",
    outcomes: ["Crisis leadership deployment","Turnaround strategy support","Stakeholder confidence management","Path to stability and growth"],
  },
];

export default function CorporateTransformationPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Corporate Transformation</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            Navigating transformation<br /><em className="text-[#C9A84C]">when it matters most.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            We help organizations not just adapt, but emerge sharper, more resilient, and poised to lead in a fundamentally changed world. Every transformation starts and ends with leadership.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {offerings.map((o, i) => (
            <div key={o.title} className={`grid lg:grid-cols-2 gap-12 items-start py-12 border-b border-[#E8E4DE] ${i === offerings.length - 1 ? "border-b-0" : ""}`}>
              <div>
                <div className="w-10 h-px bg-[#C9A84C] mb-6" />
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628] mb-5">{o.title}</h2>
                <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed">{o.desc}</p>
              </div>
              <div>
                <p className="font-['Jost'] uppercase tracking-widest text-[#6B6B6B] text-xs mb-5">Key Outcomes</p>
                <ul className="space-y-3">
                  {o.outcomes.map(out => (
                    <li key={out} className="flex items-center gap-3 font-['DM_Sans'] text-sm text-[#1C1C1E] py-3 border-b border-[#F0EDE8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                      {out}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0A1628] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mb-6">Facing a transformation challenge?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#b8973e] transition-colors rounded-sm">
            Talk to an Advisor <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
