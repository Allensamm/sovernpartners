export default function SustainabilityPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Sustainability</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            Operating with purpose —<br /><em className="text-[#C9A84C]">for people and planet.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            We are committed to operating responsibly — for our people, our clients, and the planet. Our sustainability agenda covers environmental responsibility, social equity, and governance integrity.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                pillar: "Environmental",
                headline: "Reducing our footprint.",
                points: ["Carbon neutrality commitment by 2030","Virtual-first engagement model where appropriate","Sustainable office standards across all locations","Green vendor and supply chain policy"],
              },
              {
                pillar: "Social",
                headline: "Investing in people.",
                points: ["Leadership development for underserved communities","Pro bono advisory for nonprofits and social impact orgs","Employee volunteering and giving programs","Equitable pay and advancement for all staff"],
              },
              {
                pillar: "Governance",
                headline: "Holding ourselves accountable.",
                points: ["Annual ESG disclosure and reporting","Ethics Line for confidential reporting","Board-level oversight of ESG commitments","Third-party audits of key sustainability metrics"],
              },
            ].map((p) => (
              <div key={p.pillar} className="bg-[#F5F2ED] p-10 border border-[#E8E4DE] rounded-sm">
                <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs mb-4">{p.pillar}</p>
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#0A1628] mb-6">{p.headline}</h3>
                <ul className="space-y-3">
                  {p.points.map(pt => (
                    <li key={pt} className="flex items-start gap-3 font-['DM_Sans'] text-sm text-[#6B6B6B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-1.5" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2ED] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628] mb-6">Our sustainability report</h2>
          <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-8">Read our latest annual sustainability disclosure — a transparent account of our progress, our commitments, and where we still have work to do.</p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm">
            Download Report (PDF)
          </button>
        </div>
      </section>
    </div>
  );
}
