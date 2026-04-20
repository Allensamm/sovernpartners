import Link from "next/link";
import { ArrowRight } from "lucide-react";

const capabilities = [
  { title: "Agile Leader Potential", desc: "Identifying leaders who thrive through uncertainty, ambiguity, and change — the essential currency of modern leadership." },
  { title: "Board Effectiveness", desc: "Strengthening how boards govern, collaborate, and perform through assessment, coaching, and facilitation." },
  { title: "CEO Succession Planning", desc: "Preparing for the most consequential leadership transition your organization will ever face — with rigor and care." },
  { title: "Chief Executive Acceleration", desc: "Helping new and incumbent CEOs hit their stride faster by building the mindset, relationships, and habits that define extraordinary leaders." },
  { title: "Executive Coaching", desc: "Personalized one-on-one coaching that accelerates performance, resolves blind spots, and unlocks the full potential of your senior leaders." },
  { title: "Digital Leadership", desc: "Equipping executives to lead confidently through digital transformation — from AI adoption to data-driven decision-making." },
  { title: "Inclusive Leadership", desc: "Building leaders who unite across differences, lead across divides, and create belonging at every level of the organization." },
  { title: "Leadership Assessment", desc: "Data-driven evaluations that objectively understand leadership strengths, gaps, and potential — informing decisions that matter." },
  { title: "Leadership Development", desc: "Programs that build lasting leadership capability — tailored to your context, your culture, and your ambitions." },
  { title: "M&A Talent Planning", desc: "Securing the right leadership for mergers and acquisitions — from due diligence through integration." },
  { title: "Team Acceleration", desc: "Turning senior teams into high-performing units — aligned on purpose, clear on roles, and built to deliver results." },
];

export default function LeadershipPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Leadership Advisory</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            Building a strong foundation of<br /><em className="text-[#C9A84C]">future-ready leaders.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            Our leadership advisory services help assess, develop, coach, and accelerate leaders, teams, and entire organizations — from the boardroom to the front lines.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">Our Capabilities</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628]">End-to-end leadership solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="group p-8 border border-[#E8E4DE] hover:border-[#C9A84C] hover:shadow-md transition-all duration-300 rounded-sm">
                <div className="w-6 h-px bg-[#C9A84C] mb-4" />
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] mb-3 group-hover:text-[#C9A84C] transition-colors">{cap.title}</h3>
                <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2ED] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">The Sovern Difference</p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628] mb-8">Leadership advisory grounded in science, shaped by experience.</h2>
          <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-6">We combine proprietary data from 35 years of executive placements with the latest behavioral science to give your leaders and teams an unmatched advantage.</p>
          <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-10">Every engagement is customized — because every organization, every team, and every leader is unique.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm">
            Speak with an Advisor <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
