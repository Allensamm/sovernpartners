import Link from "next/link";
import { ArrowRight, Zap, Clock, CheckCircle } from "lucide-react";

export default function OnDemandTalentPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">On-Demand Talent</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            In-demand talent,<br /><em className="text-[#C9A84C]">on demand.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            We give clients seamless access to a marketplace of top independent talent and interim leaders with deep industry and functional expertise — available when you need them, for as long as you need them.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="border border-[#E8E4DE] p-10 rounded-sm hover:border-[#C9A84C] transition-colors group">
            <Zap size={28} className="text-[#C9A84C] mb-6" />
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#0A1628] mb-4 group-hover:text-[#C9A84C] transition-colors">Interim Executives</h2>
            <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-6">Experienced C-suite and senior leaders for transitions, vacancies, and transformation. Our interim executives integrate quickly and deliver results from day one — no learning curve, no ramp-up period.</p>
            <ul className="space-y-3 mb-8">
              {["Immediate impact — senior-ready on day one","Deep industry and functional expertise","Flexible engagement terms","Available globally across 28 markets"].map(item => (
                <li key={item} className="flex items-start gap-3 font-['DM_Sans'] text-sm text-[#1C1C1E]">
                  <CheckCircle size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 font-['Jost'] uppercase tracking-widest text-xs font-medium text-[#C9A84C] border-b border-[#C9A84C] pb-1 hover:text-[#0A1628] hover:border-[#0A1628] transition-colors">
              Find an Interim Leader <ArrowRight size={12} />
            </Link>
          </div>

          <div className="border border-[#E8E4DE] p-10 rounded-sm hover:border-[#C9A84C] transition-colors group">
            <Clock size={28} className="text-[#C9A84C] mb-6" />
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#0A1628] mb-4 group-hover:text-[#C9A84C] transition-colors">On-Demand Project Leaders, Consultants & Experts</h2>
            <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-6">Specialized talent for time-bound initiatives and critical projects. Access the exact expertise you need — from digital transformation specialists to M&A advisors — without long-term commitments.</p>
            <ul className="space-y-3 mb-8">
              {["Specialized functional and sector expertise","Project-based or retainer engagements","Access to 2,000+ pre-vetted independents","Rapid deployment — typically within 5 business days"].map(item => (
                <li key={item} className="flex items-start gap-3 font-['DM_Sans'] text-sm text-[#1C1C1E]">
                  <CheckCircle size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 font-['Jost'] uppercase tracking-widest text-xs font-medium text-[#C9A84C] border-b border-[#C9A84C] pb-1 hover:text-[#0A1628] hover:border-[#0A1628] transition-colors">
              Access Expert Talent <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0A1628] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mb-6">Need the right talent, right now?</h2>
          <p className="font-['DM_Sans'] text-[#9BA8B8] mb-8 leading-relaxed">Tell us what you need. We'll match you with the right leader or specialist within days.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#b8973e] transition-colors rounded-sm">
            Talk to an Advisor <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
