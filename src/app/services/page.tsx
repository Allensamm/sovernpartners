import Link from "next/link";
import { ArrowRight, Search, Users, Zap, RefreshCw, Building2 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Executive Search",
    href: "/services/executive-search",
    eyebrow: "Find the Right Leader",
    desc: "Our legacy is grounded in executive search. We help you recruit the best executive talent from around the world — leaders who don't just fill roles, but redefine them.",
    subs: ["CEO & Board of Directors","Digital Officers (CDO, CIO, CTO)","Financial Officers (CFO, Treasurer)","Human Resources Officers (CHRO)","Marketing, Sales & Strategy Officers","Technology Officers (CTO, CIO, CISO)"],
  },
  {
    icon: Users,
    title: "Leadership Advisory",
    href: "/services/leadership",
    eyebrow: "Build Future-Ready Leaders",
    desc: "Our leadership advisory services help assess, develop, coach, and accelerate leaders, teams, and entire organizations.",
    subs: ["CEO Succession Planning","Executive Coaching","Leadership Assessment","Board Effectiveness","Team Acceleration","Inclusive Leadership"],
  },
  {
    icon: Zap,
    title: "On-Demand Talent",
    href: "/services/on-demand-talent",
    eyebrow: "Agile Talent Access",
    desc: "We give clients seamless access to a marketplace of top independent talent and interim leaders with deep industry and functional expertise.",
    subs: ["Interim Executives","On-Demand Project Leaders","Consultants & Experts"],
  },
  {
    icon: RefreshCw,
    title: "Corporate Transformation",
    href: "/services/corporate-transformation",
    eyebrow: "Navigate What's Next",
    desc: "We help organizations not just adapt, but emerge sharper, more resilient, and poised to lead in a fundamentally changed world.",
    subs: ["Carve-Outs","Cost Advantage","Distress Response & Restructuring"],
  },
  {
    icon: Building2,
    title: "Organization & Culture",
    href: "/services/organization-culture",
    eyebrow: "Culture as Competitive Advantage",
    desc: "We help clients embed the mindset, behaviors, and operational changes needed to turn culture into a true competitive advantage.",
    subs: ["Culture Shaping","Organization Acceleration","Organizational Simplicity","Purpose-Driven Change"],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">What We Do</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            Reinvent for<br /><em className="text-[#C9A84C]">resilience.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            To thrive in a disruptive age, organizations must become more agile and resilient. Our integrated services — informed by in-depth research and decades of experience — help clients unlock the power of transformational leadership.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F5F2ED] py-6">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <div key={svc.title} className={`${i % 2 === 0 ? "bg-white" : "bg-[#F5F2ED]"} py-20 border-b border-[#E8E4DE]`}>
              <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <Icon size={20} className="text-[#C9A84C]" />
                    <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium">{svc.eyebrow}</p>
                  </div>
                  <div className="w-10 h-px bg-[#C9A84C] mb-6" />
                  <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#0A1628] leading-[1.1] mb-6">{svc.title}</h2>
                  <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-8 text-base">{svc.desc}</p>
                  <Link href={svc.href} className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-medium hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-250 rounded-sm">
                    Learn More <ArrowRight size={13} />
                  </Link>
                </div>
                <div>
                  <p className="font-['Jost'] uppercase tracking-widest text-[#6B6B6B] text-xs mb-5">Capabilities</p>
                  <ul className="space-y-0">
                    {svc.subs.map((sub) => (
                      <li key={sub} className="flex items-center gap-3 py-4 border-b border-[#E8E4DE] font-['DM_Sans'] text-sm text-[#1C1C1E] hover:text-[#C9A84C] transition-colors cursor-pointer group">
                        <span className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
                        {sub}
                        <ChevronRight size={14} className="ml-auto text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mb-6">Ready to transform your leadership?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#b8973e] transition-colors rounded-sm">
            Talk to an Advisor <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ChevronRight({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
