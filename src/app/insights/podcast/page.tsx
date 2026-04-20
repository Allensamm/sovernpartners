import Link from "next/link";
import { Play, Headphones, ArrowRight } from "lucide-react";

const episodes = [
  { ep: 84, title: "From Operator to Visionary: How CEOs Navigate Radical Change", guest: "Sarah Chen, CEO of Meridian Health Systems", duration: "58 min", date: "April 2025", topics: ["CEO","Digital Transformation","Board Dynamics"] },
  { ep: 83, title: "The CHRO Revolution: People as the New Competitive Strategy", guest: "Marcus Webb, CHRO at Global Dynamics Corp", duration: "51 min", date: "March 2025", topics: ["CHRO","Talent Strategy","Culture"] },
  { ep: 82, title: "Board Effectiveness in the Age of AI: What Directors Must Know Now", guest: "Dr. Priya Sharma, Board Director at Axiom Capital", duration: "44 min", date: "February 2025", topics: ["Boards","AI","Governance"] },
  { ep: 81, title: "Private Equity Leadership: Building the Portfolio Company of Tomorrow", guest: "James Harrington, Managing Partner at Meridian Capital", duration: "47 min", date: "January 2025", topics: ["Private Equity","CEO","Value Creation"] },
  { ep: 80, title: "The Inclusive Leader: Why Belonging Drives Bottom-Line Performance", guest: "Dr. Amara Okafor, Chief Inclusion Officer at NovaTech", duration: "39 min", date: "December 2024", topics: ["Inclusion","Leadership","Culture"] },
  { ep: 79, title: "Interim Executive Mastery: How to Lead When It Matters Most", guest: "Catherine Blake, Veteran Interim CEO", duration: "52 min", date: "November 2024", topics: ["Interim Leadership","CEO","Transformation"] },
];

const platforms = [
  { name: "Apple Podcasts", href: "#" },
  { name: "Spotify", href: "#" },
  { name: "Amazon Music", href: "#" },
  { name: "Google Podcasts", href: "#" },
];

export default function PodcastPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Podcast</p>
            <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-white leading-[1.05] mb-8">
              The Sovern Partners<br /><em className="text-[#C9A84C]">Leadership Podcast</em>
            </h1>
            <div className="w-14 h-px bg-[#C9A84C] mb-8" />
            <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg leading-relaxed mb-8">
              Conversations with the executives, board members, and thinkers shaping the future of organizations. Every week, our consultants go deep with leaders on the questions that matter.
            </p>
            <div className="flex flex-wrap gap-3">
              {platforms.map(p => (
                <a key={p.name} href={p.href}
                  className="flex items-center gap-2 px-4 py-2 border border-[#1e3050] text-[#9BA8B8] font-['DM_Sans'] text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all rounded-sm"
                >
                  <Headphones size={14} /> {p.name}
                </a>
              ))}
            </div>
          </div>

          {/* Latest episode */}
          <div className="bg-[#0f2040] border border-[#1e3050] p-8 rounded-sm">
            <div className="flex items-center justify-between mb-6">
              <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs">Latest Episode · #{episodes[0].ep}</p>
              <span className="font-['DM_Sans'] text-xs text-[#4a5568]">{episodes[0].duration}</span>
            </div>
            <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-white leading-snug mb-3">{episodes[0].title}</h3>
            <p className="font-['DM_Sans'] text-sm text-[#9BA8B8] mb-2">with {episodes[0].guest}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {episodes[0].topics.map(t => (
                <span key={t} className="px-2.5 py-1 bg-[#0A1628] text-[#9BA8B8] font-['Jost'] uppercase tracking-widest text-[10px] rounded-sm">{t}</span>
              ))}
            </div>
            <button className="flex items-center gap-3 px-6 py-3 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#b8973e] transition-colors rounded-sm">
              <Play size={13} fill="currentColor" /> Play Episode
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2ED] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">All Episodes</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628]">Recent conversations</h2>
            </div>
          </div>

          <div className="space-y-4">
            {episodes.map((ep) => (
              <div key={ep.ep} className="group bg-white border border-[#E8E4DE] hover:border-[#C9A84C] p-6 rounded-sm flex items-center gap-6 transition-all duration-250 cursor-pointer">
                <button className="shrink-0 w-12 h-12 rounded-full bg-[#0A1628] flex items-center justify-center hover:bg-[#C9A84C] transition-colors">
                  <Play size={16} fill="white" className="text-white ml-0.5" />
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs">Ep. {ep.ep}</span>
                    <span className="text-[#E8E4DE]">·</span>
                    <span className="font-['DM_Sans'] text-xs text-[#6B6B6B]">{ep.date}</span>
                    <span className="text-[#E8E4DE]">·</span>
                    <span className="font-['DM_Sans'] text-xs text-[#6B6B6B]">{ep.duration}</span>
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] group-hover:text-[#C9A84C] transition-colors leading-snug truncate">{ep.title}</h3>
                  <p className="font-['DM_Sans'] text-sm text-[#6B6B6B]">with {ep.guest}</p>
                </div>
                <div className="shrink-0 hidden md:flex flex-wrap gap-2">
                  {ep.topics.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-[#F5F2ED] text-[#6B6B6B] font-['Jost'] uppercase tracking-widest text-[10px] rounded-sm">{t}</span>
                  ))}
                </div>
                <ArrowRight size={16} className="shrink-0 text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1628] py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mb-4">Never miss an episode.</h2>
          <p className="font-['DM_Sans'] text-[#9BA8B8] mb-8">Subscribe wherever you listen to podcasts.</p>
          <div className="flex justify-center flex-wrap gap-3">
            {platforms.map(p => (
              <a key={p.name} href={p.href} className="px-5 py-2.5 bg-[#0f2040] border border-[#1e3050] text-[#9BA8B8] font-['DM_Sans'] text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all rounded-sm">
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
