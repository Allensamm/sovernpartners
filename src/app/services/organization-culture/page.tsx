import Link from "next/link";
import { ArrowRight } from "lucide-react";

const offerings = [
  { title: "Culture Shaping", desc: "Defining and embedding a high-performance culture throughout the organization. We help leaders articulate what they stand for, translate it into daily behaviors, and build systems that sustain it." },
  { title: "Organization Acceleration", desc: "Redesigning structure and ways of working to drive speed and impact. We help organizations move from hierarchical structures to more agile, networked ways of operating — without losing accountability." },
  { title: "Organizational Simplicity", desc: "Cutting complexity so your people can focus on what matters. Complexity is the hidden tax on performance. We help leaders identify, reduce, and prevent the accumulation of process, structural, and decision-making complexity." },
  { title: "Purpose-Driven Change", desc: "Aligning transformation with the organization's deeper why. When change is rooted in genuine purpose — not just strategy or efficiency — it creates momentum that sustains itself through uncertainty." },
];

export default function OrganizationCulturePage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Organization & Culture</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            Position your organization<br /><em className="text-[#C9A84C]">to outperform.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            We help clients embed the mindset, behaviors, and operational changes needed to turn culture into a true competitive advantage.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((o) => (
              <div key={o.title} className="bg-[#F5F2ED] p-10 border border-[#E8E4DE] hover:border-[#C9A84C] transition-colors rounded-sm group">
                <div className="w-8 h-px bg-[#C9A84C] mb-5" />
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0A1628] mb-4 group-hover:text-[#C9A84C] transition-colors">{o.title}</h3>
                <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2ED] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628] mb-6">Culture isn&apos;t a soft issue. It&apos;s a performance issue.</h2>
          <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-10">Organizations with high-performance cultures outperform their peers on revenue growth, employee engagement, and shareholder returns — consistently. We help you build one.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm">
            Talk to an Advisor <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
