import Link from "next/link";

export default function LegalPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">Legal</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl font-light text-white">Legal Notice</h1>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Legal Notice", href: "#legal", desc: "Terms governing your use of sovernpartners.com and our digital properties." },
              { title: "Ethics Line", href: "/legal/ethics-line", desc: "Report a concern confidentially through our independent ethics reporting channel." },
              { title: "Code of Ethics", href: "#ethics", desc: "Our standards of professional conduct governing all consultants and staff worldwide." },
              { title: "Supplier Code of Conduct", href: "#supplier", desc: "Standards we require of all vendors and suppliers who work with Sovern Partners." },
              { title: "Global Human Rights Policy", href: "#humanrights", desc: "Our commitment to respecting human rights across our operations and value chain." },
              { title: "Modern Slavery Statement", href: "#slavery", desc: "Our annual statement on steps taken to prevent modern slavery and human trafficking." },
            ].map((item) => (
              <Link key={item.title} href={item.href}
                className="block p-8 border border-[#E8E4DE] hover:border-[#C9A84C] hover:shadow-md transition-all rounded-sm group">
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] group-hover:text-[#C9A84C] transition-colors mb-2">{item.title}</h3>
                <p className="font-['DM_Sans'] text-sm text-[#6B6B6B]">{item.desc}</p>
              </Link>
            ))}
          </div>
          <div className="bg-[#F5F2ED] p-8 border border-[#E8E4DE] rounded-sm" id="legal">
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0A1628] mb-4">Legal Notice</h2>
            <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed">
              The content on this website is provided for general information purposes only. While we make every effort to ensure accuracy, Sovern Partners makes no warranties, express or implied, regarding the completeness, accuracy, or suitability of the information provided. This website is operated by Sovern Partners LLC, registered in Delaware, USA. All intellectual property rights remain with Sovern Partners.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
