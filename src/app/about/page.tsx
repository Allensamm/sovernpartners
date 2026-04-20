import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const subPages = [
  { title: "Our Heritage", href: "/about/heritage", desc: "How Sovern Partners grew from a bold idea into one of the world's most trusted leadership advisory firms." },
  { title: "Purpose, Vision & Values", href: "/about/purpose-vision-values", desc: "The beliefs that guide every decision, every engagement, and every relationship we build." },
  { title: "Inclusion & Belonging", href: "/about/inclusion-belonging", desc: "Our commitment to building a firm — and helping clients build organizations — where everyone can do their best work." },
  { title: "Sustainability", href: "/about/sustainability", desc: "Our responsibility to operate with integrity — for our people, our clients, and the planet." },
];

const values = [
  { name: "Integrity", desc: "We do what we say. We say what we believe. We never compromise on our principles for commercial gain." },
  { name: "Inclusion", desc: "The best leadership advice comes from the most diverse and inclusive teams — internally and externally." },
  { name: "Collaboration", desc: "We bring the full weight of our global firm to every client engagement — never siloed, always connected." },
  { name: "Excellence", desc: "We hold ourselves to the highest standard in every interaction, every recommendation, every outcome." },
  { name: "Impact", desc: "We measure ourselves not by inputs, but by the lasting difference we make in organizations and the lives of the leaders within them." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">About Us</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            An industry leader<br /><em className="text-[#C9A84C]">serving industry leaders.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            Sovern Partners is a premier provider of global leadership advisory and on-demand talent solutions. We have worked with leading organizations across virtually every sector and industry around the world.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">Our Mission</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628] mb-8">We help our clients change the world, one leadership team at a time.</h2>
            <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-5">
              For over 35 years, we have operated on one foundational belief: that exceptional leadership is the defining variable in organizational success. When leaders are right — not just talented, but right for the moment, the culture, and the mission — everything else follows.
            </p>
            <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-5">
              Our clients include some of the world&apos;s most ambitious companies, most storied institutions, and most mission-driven organizations. They come to us because they trust us — with their most confidential challenges, their boldest growth plans, and their most consequential leadership decisions.
            </p>
            <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed">
              That trust is our most precious asset. We protect it every day.
            </p>
          </div>

          <div className="space-y-4">
            {/* About image */}
            <div className="relative h-56 rounded-sm overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop&q=80"
                alt="Sovern Partners leadership advisory"
                fill
                sizes="50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#0A1628]/40" />
            </div>
            <div className="bg-[#0A1628] p-8 rounded-sm">
              <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs mb-3">Our Purpose</p>
              <p className="font-['Cormorant_Garamond'] text-2xl text-white italic font-light">&ldquo;We help our clients change the world, one leadership team at a time.&rdquo;</p>
            </div>
            <div className="bg-[#F5F2ED] p-8 rounded-sm border border-[#E8E4DE]">
              <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs mb-3">Our Vision</p>
              <p className="font-['Cormorant_Garamond'] text-2xl text-[#0A1628] italic font-light">&ldquo;To be the world&apos;s most trusted leadership advisory firm.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F5F2ED] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-14">
            <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">What We Stand For</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628]">Our values</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {values.map((v) => (
              <div key={v.name} className="bg-white p-8 border border-[#E8E4DE] rounded-sm">
                <div className="w-6 h-px bg-[#C9A84C] mb-5" />
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] mb-3">{v.name}</h3>
                <p className="font-['DM_Sans'] text-xs text-[#6B6B6B] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">Learn More</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628]">More about Sovern Partners</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {subPages.map((page) => (
              <Link key={page.title} href={page.href}
                className="group flex flex-col p-8 border border-[#E8E4DE] hover:border-[#C9A84C] hover:shadow-md transition-all duration-300 rounded-sm"
              >
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0A1628] group-hover:text-[#C9A84C] transition-colors mb-3">{page.title}</h3>
                <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed flex-1 mb-4">{page.desc}</p>
                <span className="inline-flex items-center gap-1.5 font-['Jost'] uppercase tracking-widest text-xs text-[#C9A84C]">
                  Explore <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
