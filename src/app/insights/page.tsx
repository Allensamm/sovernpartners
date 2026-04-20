"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Headphones, FileText, Video, BookOpen, ExternalLink, Loader2 } from "lucide-react";
import { articles as inHouseArticles, getArticleHref } from "@/lib/articles";

const topics = ["All","Boards & Governance","CEO & C-Suite","Human Resources","Cybersecurity","Leadership Development","Digital & AI","Culture & Organization","Financial Services","Private Equity","On-Demand Talent"];

const contentTypes = [
  { label: "All", icon: BookOpen },
  { label: "Articles", icon: FileText },
  { label: "Reports", icon: BookOpen },
  { label: "Podcasts", icon: Headphones },
  { label: "Webinars", icon: Video },
];

const typeColors: Record<string, string> = {
  Report: "bg-[#0A1628] text-white",
  Article: "bg-[#F5F2ED] text-[#0A1628]",
  Podcast: "bg-[#C9A84C] text-[#0A1628]",
  Webinar: "bg-[#E8E4DE] text-[#0A1628]",
};

interface NewsItem {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: { name: string };
}

const NEWS_QUERIES = [
  "executive search leadership",
  "headhunter CEO hiring",
  "CHRO talent strategy",
  "board governance diversity",
];

export default function InsightsPage() {
  const [activeTopic, setActiveTopic] = useState("All");
  const [activeType, setActiveType] = useState("All");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);

  useEffect(() => {
    const query = NEWS_QUERIES[Math.floor(Math.random() * NEWS_QUERIES.length)];
    fetch(`/api/news?q=${encodeURIComponent(query)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.articles) setNews(data.articles.slice(0, 6));
      })
      .catch(() => {})
      .finally(() => setNewsLoading(false));
  }, []);

  const filtered = inHouseArticles.filter(
    (a) =>
      (activeTopic === "All" || a.tag === activeTopic) &&
      (activeType === "All" || a.type === activeType)
  );

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
    } catch {
      return "";
    }
  };

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

      {/* Filters */}
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

      {/* Sovern Perspectives — in-house articles */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-3">Sovern Perspectives</p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628] mb-10">Our research & thinking</h2>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-['Cormorant_Garamond'] text-3xl text-[#6B6B6B]">No results for this filter combination.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((article) => {
                const href = getArticleHref(article);
                const isExternal = article.type === "Webinar";
                return (
                  <Link
                    key={article.title}
                    href={href}
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
                          {article.type === "Podcast" ? "Listen" : article.type === "Webinar" ? "Watch" : "Read"} {isExternal ? <ExternalLink size={11} /> : <ArrowRight size={11} />}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Live Industry News */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-3">From the Industry</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628]">Latest in leadership & executive search</h2>
            </div>
            <span className="font-['DM_Sans'] text-xs text-[#6B6B6B] hidden md:block">Updated daily · Sourced from global publications</span>
          </div>

          {newsLoading ? (
            <div className="flex items-center justify-center py-24">
              <Loader2 size={28} className="text-[#C9A84C] animate-spin" />
            </div>
          ) : news.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-['DM_Sans'] text-[#6B6B6B]">
                Add a <span className="font-medium text-[#0A1628]">NEWSAPI_KEY</span> to <code className="bg-[#F5F2ED] px-1.5 py-0.5 rounded text-sm">.env.local</code> to load live industry articles.
              </p>
              <p className="font-['DM_Sans'] text-sm text-[#9BA8B8] mt-2">Get a free key at newsapi.org</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#F5F2ED] border border-[#E8E4DE] hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden flex flex-col"
                >
                  {item.urlToImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.urlToImage}
                      alt={item.title}
                      className="w-full h-44 object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-[10px]">{item.source.name}</span>
                      <ExternalLink size={11} className="text-[#9BA8B8] group-hover:text-[#C9A84C] transition-colors" />
                    </div>
                    <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#0A1628] group-hover:text-[#C9A84C] transition-colors leading-snug mb-3 flex-1 line-clamp-3">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed line-clamp-2 mb-4">{item.description}</p>
                    )}
                    <p className="font-['DM_Sans'] text-xs text-[#9BA8B8]">{formatDate(item.publishedAt)}</p>
                  </div>
                </a>
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
