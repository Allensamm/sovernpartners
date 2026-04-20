"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const offices = [
  { city: "New York", country: "United States", region: "Americas", address: "399 Park Avenue, 27th Floor, New York, NY 10022", phone: "+1 212 555 0100", email: "newyork@sovernpartners.com", focus: "CEO & Board, Financial Services, Private Equity" },
  { city: "Chicago", country: "United States", region: "Americas", address: "227 W Monroe Street, Suite 3800, Chicago, IL 60606", phone: "+1 312 555 0200", email: "chicago@sovernpartners.com", focus: "Industrial, Healthcare, On-Demand Talent" },
  { city: "San Francisco", country: "United States", region: "Americas", address: "101 California Street, Suite 2400, San Francisco, CA 94111", phone: "+1 415 555 0300", email: "sf@sovernpartners.com", focus: "Technology, Venture Capital, Consumer" },
  { city: "Toronto", country: "Canada", region: "Americas", address: "100 King Street West, Suite 5600, Toronto, ON M5X 1C9", phone: "+1 416 555 0400", email: "toronto@sovernpartners.com", focus: "Financial Services, Energy, Board Practice" },
  { city: "São Paulo", country: "Brazil", region: "Americas", address: "Av. Brigadeiro Faria Lima, 4440, 05426-000 São Paulo", phone: "+55 11 5555 0500", email: "saopaulo@sovernpartners.com", focus: "Consumer Markets, Private Equity, Industrial" },
  { city: "London", country: "United Kingdom", region: "EMEA", address: "1 St Martin's Le Grand, London EC1A 4AS", phone: "+44 20 5555 0100", email: "london@sovernpartners.com", focus: "Financial Services, Boards, Sustainability" },
  { city: "Paris", country: "France", region: "EMEA", address: "18 Place Vendôme, 75001 Paris", phone: "+33 1 5555 0100", email: "paris@sovernpartners.com", focus: "Consumer, Luxury, Social Impact" },
  { city: "Frankfurt", country: "Germany", region: "EMEA", address: "Neue Mainzer Str. 52-58, 60311 Frankfurt am Main", phone: "+49 69 5555 0100", email: "frankfurt@sovernpartners.com", focus: "Industrial, Automotive, Financial Services" },
  { city: "Dubai", country: "UAE", region: "EMEA", address: "Gate Village 7, DIFC, Dubai, UAE", phone: "+971 4 555 0100", email: "dubai@sovernpartners.com", focus: "Financial Services, Private Equity, Government" },
  { city: "Singapore", country: "Singapore", region: "Asia Pacific", address: "Marina Bay Financial Centre, Tower 3, 12 Marina Boulevard, Singapore 018982", phone: "+65 6555 0100", email: "singapore@sovernpartners.com", focus: "Technology, Financial Services, CEO Practice" },
  { city: "Tokyo", country: "Japan", region: "Asia Pacific", address: "Marunouchi Trust Tower North, 1-8-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005", phone: "+81 3 5555 0100", email: "tokyo@sovernpartners.com", focus: "Consumer, Industrial, Board Practice" },
  { city: "Sydney", country: "Australia", region: "Asia Pacific", address: "1 Macquarie Place, Sydney NSW 2000", phone: "+61 2 5555 0100", email: "sydney@sovernpartners.com", focus: "Resources, Financial Services, Healthcare" },
];

const regions = ["All Regions", "Americas", "EMEA", "Asia Pacific"];

export default function OfficesPage() {
  const [activeRegion, setActiveRegion] = useState("All Regions");
  const filtered = offices.filter(o => activeRegion === "All Regions" || o.region === activeRegion);

  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Global Presence</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            A global presence,<br /><em className="text-[#C9A84C]">a local touch.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            With offices across 28 cities and 18 countries, we deliver globally consistent, locally informed leadership advice wherever you need it.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#C9A84C] py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 divide-x divide-[#b8973e]">
          {[["28", "Global Markets"], ["18", "Countries"], ["12", "Listed Offices"]].map(([n, l]) => (
            <div key={l} className="text-center py-2">
              <p className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628] mb-1">{n}</p>
              <p className="font-['Jost'] uppercase tracking-widest text-[#0A1628]/70 text-xs">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 border-b border-[#E8E4DE]">
        <div className="max-w-7xl mx-auto px-6 flex gap-3 flex-wrap">
          {regions.map(r => (
            <button key={r} onClick={() => setActiveRegion(r)}
              className={`px-5 py-2.5 font-['Jost'] uppercase tracking-widest text-xs font-medium rounded-sm transition-all ${
                activeRegion === r ? "bg-[#0A1628] text-white" : "bg-[#F5F2ED] text-[#6B6B6B] hover:bg-[#E8E4DE]"
              }`}>
              {r}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((o) => (
              <div key={o.city} className="bg-white border border-[#E8E4DE] p-8 rounded-sm hover:border-[#C9A84C] hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0A1628]">{o.city}</h3>
                    <p className="font-['DM_Sans'] text-sm text-[#6B6B6B]">{o.country}</p>
                  </div>
                  <span className="font-['Jost'] uppercase tracking-widest text-[10px] text-[#C9A84C] px-2.5 py-1 bg-[#F5F2ED] rounded-sm">{o.region}</span>
                </div>
                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                    <p className="font-['DM_Sans'] text-xs text-[#6B6B6B] leading-relaxed">{o.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-[#C9A84C] shrink-0" />
                    <p className="font-['DM_Sans'] text-xs text-[#6B6B6B]">{o.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-[#C9A84C] shrink-0" />
                    <a href={`mailto:${o.email}`} className="font-['DM_Sans'] text-xs text-[#C9A84C] hover:underline">{o.email}</a>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#F0EDE8]">
                  <p className="font-['Jost'] uppercase tracking-widest text-[#6B6B6B] text-[10px] mb-1">Areas of Focus</p>
                  <p className="font-['DM_Sans'] text-xs text-[#1C1C1E]">{o.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
