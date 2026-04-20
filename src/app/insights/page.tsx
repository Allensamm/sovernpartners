"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Headphones, FileText, Video, BookOpen } from "lucide-react";

const topics = ["All","Boards & Governance","CEO & C-Suite","Human Resources","Cybersecurity","Leadership Development","Digital & AI","Culture & Organization","Financial Services","Private Equity","On-Demand Talent"];

const contentTypes = [
  { label: "All", icon: BookOpen },
  { label: "Articles", icon: FileText },
  { label: "Reports", icon: BookOpen },
  { label: "Podcasts", icon: Headphones },
  { label: "Webinars", icon: Video },
];

const articles = [
  { type: "Report", tag: "CEO & C-Suite", title: "The CEO Agenda 2025: Leading Through Uncertainty", excerpt: "Our annual survey of 800+ CEOs reveals the five forces reshaping executive priorities — from AI disruption to geopolitical volatility.", date: "March 2025", readTime: "12 min read" },
  { type: "Article", tag: "Boards & Governance", title: "Why Board Diversity Still Falls Short — and What to Do About It", excerpt: "Despite years of progress, boards remain homogeneous at the top. We examine the structural barriers — and how leading firms are breaking through them.", date: "February 2025", readTime: "8 min read" },
  { type: "Podcast", tag: "Human Resources", title: "The CHRO Revolution: HR as the New Strategic Heartbeat", excerpt: "A conversation with three Chief People Officers on how the role has fundamentally shifted — and what it means for talent strategy.", date: "January 2025", readTime: "42 min" },
  { type: "Report", tag: "Digital & AI", title: "The AI-Ready Leader: A New Profile for the Digital Age", excerpt: "Our research across 600 senior leaders identifies the five cognitive traits that distinguish AI-ready executives from those who will be left behind.", date: "December 2024", readTime: "18 min read" },
  { type: "Article", tag: "Culture & Organization", title: "Culture Eats Strategy — But Only If You Let It", excerpt: "The real barrier to transformation isn't strategy. It's the invisible cultural forces that resist change. Here's how exceptional leaders address them.", date: "November 2024", readTime: "6 min read" },
  { type: "Webinar", tag: "Private Equity", title: "The 100-Day Blueprint: PE-Backed CEO Success", excerpt: "Our senior partners share the leadership playbook that helps PE-backed CEOs navigate the first 100 days — and set the stage for value creation.", date: "October 2024", readTime: "60 min" },
  { type: "Article", tag: "Leadership Development", title: "The Hidden Cost of Underdeveloping Your Top 50", excerpt: "Most organizations invest heavily in frontline training but underinvest in the 50 leaders who drive 80% of organizational performance.", date: "September 2024", readTime: "7 min read" },
  { type: "Report", tag: "On-Demand Talent", title: "The Rise of the Interim Executive: A New Leadership Model", excerpt: "Our comprehensive study of 400+ interim engagements reveals why this talent model is growing — and how to make it work for your organization.", date: "August 2024", readTime: "14 min read" },
];

const typeColors: Record<string, string> = {
  Report: "bg-[#0A1628] text-white",
  Article: "bg-[#F5F2ED] text-[#0A1628]",
  Podcast: "bg-[#C9A84C] text-[#0A1628]",
  Webinar: "bg-[#E8E4DE] text-[#0A1628]",
};

export default function InsightsPage() {
  const [activeTopic, setActiveTopic] = useState("All");
  const [activeType, setActiveType] = useState("All");

  const filtered = articles.filter(a =>
    (activeTopic === "All" || a.tag === activeTopic) &&
    (activeType === "All" || a.type === activeType)
  );

  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Research & Perspectives</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            Award-winning insight.<br /><em className="text-[#C9A84C]">Executive impact.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            Our research and thinking has guided boards and C-suites through the issues that matter most — from AI-driven transformation to the future of inclusive leadership.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-[#E8E4DE] py-6 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-wrap gap-2 mb-4">
            {contentTypes.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setActiveType(label)}
                className={`flex items-center gap-1.5 px-4 py-2 font-['Jost'] uppercase tracking-widest text-xs font-medium rounded-sm transition-all ${
                  activeType === label
                    ? "bg-[#0A1628] text-white"
                    : "bg-[#F5F2ED] text-[#6B6B6B] hover:bg-[#E8E4DE]"
                }`}
              >
                <Icon size={12} /> {label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={`px-3 py-1.5 font-['DM_Sans'] text-xs rounded-sm transition-all ${
                  activeTopic === topic
                    ? "bg-[#C9A84C] text-[#0A1628] font-medium"
                    : "text-[#6B6B6B] hover:text-[#0A1628]"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-['Cormorant_Garamond'] text-3xl text-[#6B6B6B]">No results for this filter combination.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((article) => (
                <Link
                  key={article.title}
                  href="/insights"
                  className="group bg-white border border-[#E8E4DE] hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden flex flex-col"
                >
                  <div className="h-1 bg-[#C9A84C]" />
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-5">
                      <span className={`font-['Jost'] uppercase tracking-widest text-xs font-medium px-2.5 py-1 rounded-sm ${typeColors[article.type]}`}>
                        {article.type}
                      </span>
                      <span className="font-['DM_Sans'] text-xs text-[#6B6B6B]">{article.readTime}</span>
                    </div>
                    <span className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-[10px] mb-3">{article.tag}</span>
                    <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] leading-snug mb-4 group-hover:text-[#C9A84C] transition-colors flex-1">
                      {article.title}
                    </h3>
                    <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed mb-6">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#F0EDE8]">
                      <span className="font-['DM_Sans'] text-xs text-[#6B6B6B]">{article.date}</span>
                      <span className="font-['Jost'] uppercase tracking-widest text-xs text-[#0A1628] group-hover:text-[#C9A84C] transition-colors flex items-center gap-1">
                        {article.type === "Podcast" ? "Listen" : article.type === "Webinar" ? "Watch" : "Read"} <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Podcast CTA */}
      <section className="bg-[#0A1628] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-3">The Sovern Partners Podcast</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-white">Conversations with the executives shaping tomorrow.</h2>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/insights/podcast" className="flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#b8973e] transition-colors rounded-sm">
              <Headphones size={14} /> Listen
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#F5F2ED] py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-4">Leadership Agenda</p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628] mb-4">Monthly insights for senior executives.</h2>
          <p className="font-['DM_Sans'] text-[#6B6B6B] mb-8">Research, trends, and perspectives that matter — delivered to your inbox every month.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email address" className="flex-1 border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm bg-white" />
            <button className="px-6 py-3 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-medium hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
