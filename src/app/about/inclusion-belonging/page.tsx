import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InclusionBelongingPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Inclusion & Belonging</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-4xl mb-8">
            Inclusion is a choice.<br /><em className="text-[#C9A84C]">Belonging is our ambition.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            We believe the best leadership advice comes from the most diverse and inclusive teams — internally and for our clients. This is not a statement about values. It is a statement about performance.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">Our Commitment</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628] mb-8">Built from the inside out.</h2>
            <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-5">
              Our inclusion agenda starts internally. We have built intentional systems to attract, develop, and advance diverse talent within our own firm — because we cannot credibly advise clients on inclusive leadership without embodying it ourselves.
            </p>
            <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-5">
              For our clients, we bring the same rigor. Every executive search begins with a commitment to a diverse slate. Our Inclusive Leadership advisory practice helps organizations move beyond representation to genuine belonging — where every voice is valued, and every leader can perform at their best.
            </p>
            <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-8">
              Inclusion is not a one-time initiative. It is a daily practice — and one we take seriously in every search, every assessment, and every client conversation.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 font-['Jost'] uppercase tracking-widest text-xs font-medium text-[#0A1628] border-b border-[#C9A84C] pb-1 hover:text-[#C9A84C] transition-colors">
              Talk to an Inclusion Advisor <ArrowRight size={12} />
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { title: "Diverse Slates, Always", desc: "Every Sovern Partners search presents a slate that reflects genuine diversity — of background, experience, identity, and thought. No exceptions." },
              { title: "Inclusive Leadership Advisory", desc: "Our specialized advisory helps organizations assess, develop, and advance diverse leaders — with data-backed rigor and human insight." },
              { title: "Pay Equity Commitment", desc: "We are committed to pay equity within our own firm and support our clients in building compensation systems that are fair, transparent, and equitable." },
              { title: "Belonging Assessments", desc: "We offer proprietary cultural assessments that measure not just diversity metrics, but the lived experience of inclusion within your organization." },
            ].map((item) => (
              <div key={item.title} className="bg-[#F5F2ED] p-6 border border-[#E8E4DE] rounded-sm">
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] mb-2">{item.title}</h3>
                <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1628] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mb-6">Ready to build a more inclusive organization?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#b8973e] transition-colors rounded-sm">
            Talk to an Advisor <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
