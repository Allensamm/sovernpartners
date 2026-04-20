"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, ArrowRight } from "lucide-react";

const consultants = [
  { name: "Alexandra Thornton", title: "Managing Partner, Global CEO Practice", office: "New York", region: "Americas", specialty: "CEO & Board", initials: "AT" },
  { name: "Marcus Webb", title: "Senior Partner, Financial Services", office: "London", region: "EMEA", specialty: "Financial Services", initials: "MW" },
  { name: "Priya Sharma", title: "Partner, Technology & Digital", office: "Singapore", region: "Asia Pacific", specialty: "Technology", initials: "PS" },
  { name: "James Harrington", title: "Managing Partner, Private Equity", office: "New York", region: "Americas", specialty: "Private Equity", initials: "JH" },
  { name: "Catherine Blake", title: "Partner, Leadership Advisory", office: "Chicago", region: "Americas", specialty: "Leadership Advisory", initials: "CB" },
  { name: "Dr. Amara Okafor", title: "Partner, Human Capital & Culture", office: "London", region: "EMEA", specialty: "Culture & Organization", initials: "AO" },
  { name: "Ethan Müller", title: "Senior Partner, Industrial", office: "Frankfurt", region: "EMEA", specialty: "Industrial", initials: "EM" },
  { name: "Yuki Tanaka", title: "Partner, Consumer Markets", office: "Tokyo", region: "Asia Pacific", specialty: "Consumer Markets", initials: "YT" },
  { name: "Sarah Chen", title: "Managing Partner, Healthcare", office: "San Francisco", region: "Americas", specialty: "Healthcare & Life Sciences", initials: "SC" },
  { name: "Robert Sinclair", title: "Senior Partner, Sustainability & ESG", office: "London", region: "EMEA", specialty: "Sustainability", initials: "RS" },
  { name: "Fatoumata Diallo", title: "Partner, Social Impact", office: "Paris", region: "EMEA", specialty: "Social Impact", initials: "FD" },
  { name: "David Kim", title: "Partner, Venture Capital", office: "San Francisco", region: "Americas", specialty: "Venture Capital", initials: "DK" },
];

const leadership = [
  { name: "Alexandra Thornton", title: "Chief Executive Officer", initials: "AT", bio: "Alexandra leads Sovern Partners' global strategy and client relationships with over 25 years in executive search." },
  { name: "James Harrington", title: "President & Chief Operating Officer", initials: "JH", bio: "James drives operational excellence and oversees the firm's private equity and financial services practices globally." },
  { name: "Catherine Blake", title: "Chief Human Resources Officer", initials: "CB", bio: "Catherine leads our internal people strategy and our Leadership Advisory practice serving CHROs worldwide." },
];

const regions = ["All Regions", "Americas", "EMEA", "Asia Pacific"];
const specialties = ["All Specialties", "CEO & Board", "Financial Services", "Technology", "Private Equity", "Leadership Advisory", "Healthcare & Life Sciences", "Industrial", "Consumer Markets", "Sustainability", "Social Impact", "Venture Capital", "Culture & Organization"];

export default function PeoplePage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All Regions");
  const [specialty, setSpecialty] = useState("All Specialties");

  const filtered = consultants.filter(c =>
    (c.name.toLowerCase().includes(search.toLowerCase()) || c.office.toLowerCase().includes(search.toLowerCase()) || c.specialty.toLowerCase().includes(search.toLowerCase())) &&
    (region === "All Regions" || c.region === region) &&
    (specialty === "All Specialties" || c.specialty === specialty)
  );

  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Our People</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            Meet the people<br /><em className="text-[#C9A84C]">who drive performance.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            Our consultants bring decades of cross-industry experience and an unmatched global network. Find a specialist by name, function, or region.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#F5F2ED] py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">Firm Leadership</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628]">Guided by experienced hands</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((l) => (
              <div key={l.name} className="bg-white border border-[#E8E4DE] p-8 rounded-sm">
                <div className="w-16 h-16 rounded-full bg-[#0A1628] flex items-center justify-center mb-5">
                  <span className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#C9A84C]">{l.initials}</span>
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0A1628] mb-1">{l.name}</h3>
                <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs mb-4">{l.title}</p>
                <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & filter */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-10">
            <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">Find a Consultant</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628]">Our consultant directory</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" />
              <input
                type="text"
                placeholder="Search by name, specialty, or office..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#E8E4DE] font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm"
              />
            </div>
            <select value={region} onChange={e => setRegion(e.target.value)}
              className="px-4 py-3 border border-[#E8E4DE] font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm bg-white text-[#1C1C1E]">
              {regions.map(r => <option key={r}>{r}</option>)}
            </select>
            <select value={specialty} onChange={e => setSpecialty(e.target.value)}
              className="px-4 py-3 border border-[#E8E4DE] font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm bg-white text-[#1C1C1E]">
              {specialties.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-['Cormorant_Garamond'] text-3xl text-[#6B6B6B]">No consultants match your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((c) => (
                <div key={c.name} className="group border border-[#E8E4DE] p-6 hover:border-[#C9A84C] hover:shadow-md transition-all duration-300 rounded-sm cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#0A1628] flex items-center justify-center shrink-0">
                      <span className="font-['Cormorant_Garamond'] text-base font-semibold text-[#C9A84C]">{c.initials}</span>
                    </div>
                    <div>
                      <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] group-hover:text-[#C9A84C] transition-colors leading-snug">{c.name}</h3>
                      <p className="font-['DM_Sans'] text-xs text-[#6B6B6B]">{c.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={12} className="text-[#C9A84C]" />
                    <p className="font-['DM_Sans'] text-xs text-[#6B6B6B]">{c.office}</p>
                  </div>
                  <span className="inline-block px-2.5 py-1 bg-[#F5F2ED] font-['Jost'] uppercase tracking-widest text-[10px] text-[#6B6B6B] rounded-sm">
                    {c.specialty}
                  </span>
                  <div className="mt-4 pt-4 border-t border-[#F0EDE8]">
                    <Link href="/contact" className="inline-flex items-center gap-1.5 font-['Jost'] uppercase tracking-widest text-xs text-[#C9A84C] hover:gap-2.5 transition-all">
                      Contact <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
