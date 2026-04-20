export default function PurposeVisionValuesPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Who We Are</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            Purpose, Vision<br /><em className="text-[#C9A84C]">& Values.</em>
          </h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-[#0A1628] p-10 rounded-sm sticky top-28">
              <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs mb-4">Purpose</p>
              <p className="font-['Cormorant_Garamond'] text-2xl text-white italic font-light leading-snug">
                &ldquo;We help our clients change the world, one leadership team at a time.&rdquo;
              </p>
              <div className="w-8 h-px bg-[#C9A84C] my-8" />
              <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs mb-4">Vision</p>
              <p className="font-['Cormorant_Garamond'] text-2xl text-white italic font-light leading-snug">
                &ldquo;To be the world&apos;s most trusted leadership advisory firm.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-8">Our Values</p>
            <div className="space-y-8">
              {[
                { name: "Integrity", desc: "We do what we say. We say what we believe. We are transparent, accountable, and we never compromise our principles for commercial gain. Every relationship — with clients, candidates, and colleagues — is built on this foundation.", icon: "01" },
                { name: "Inclusion", desc: "We believe the best leadership advice comes from the most diverse and inclusive teams — internally and for our clients. Inclusion is not a program. It is woven into how we think, how we search, and how we advise.", icon: "02" },
                { name: "Collaboration", desc: "We bring the full weight of our global firm to every client engagement. Our clients don't work with one consultant — they access an entire network of expertise, relationships, and perspectives, seamlessly integrated.", icon: "03" },
                { name: "Excellence", desc: "We hold ourselves to the highest standard in every interaction, every recommendation, and every outcome. Good enough is not in our vocabulary. We push ourselves — and our clients — to reach for more.", icon: "04" },
                { name: "Impact", desc: "We measure ourselves not by inputs — searches completed, projects delivered — but by the lasting difference we make in organizations and the lives of the leaders within them. Impact is our ultimate measure.", icon: "05" },
              ].map((v) => (
                <div key={v.name} className="flex gap-8 py-8 border-b border-[#E8E4DE] last:border-b-0">
                  <span className="font-['Cormorant_Garamond'] text-5xl font-light text-[#E8E4DE] shrink-0 w-14">{v.icon}</span>
                  <div>
                    <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#0A1628] mb-3">{v.name}</h3>
                    <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
