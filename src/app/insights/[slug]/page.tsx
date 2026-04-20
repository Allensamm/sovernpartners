import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { getArticle, articles } from "@/lib/articles";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return articles
    .filter((a) => a.type !== "Podcast" && a.type !== "Webinar")
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, type: "article" },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== slug && a.type !== "Podcast" && a.type !== "Webinar")
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[#0A1628] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-['Jost'] uppercase tracking-widest text-xs text-[#C9A84C] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={13} /> Back to Insights
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className={`font-['Jost'] uppercase tracking-widest text-xs font-medium px-2.5 py-1 rounded-sm ${
              article.type === "Report"
                ? "bg-white text-[#0A1628]"
                : "bg-[#F5F2ED] text-[#0A1628]"
            }`}>
              {article.type}
            </span>
            <span className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs">
              {article.tag}
            </span>
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.08] mb-8">
            {article.title}
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg leading-relaxed max-w-2xl mb-10">
            {article.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm font-['DM_Sans']">
            <span className="flex items-center gap-2 text-[#9BA8B8]">
              <User size={14} className="text-[#C9A84C]" />
              {article.author} &mdash; {article.authorTitle}
            </span>
            <span className="flex items-center gap-2 text-[#9BA8B8]">
              <Calendar size={14} className="text-[#C9A84C]" />
              {article.date}
            </span>
            <span className="flex items-center gap-2 text-[#9BA8B8]">
              <Clock size={14} className="text-[#C9A84C]" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          {article.sections.map((section, i) => {
            if (section.type === "paragraph") {
              return (
                <p
                  key={i}
                  className="font-['DM_Sans'] text-[#1C1C1E] text-lg leading-[1.85] mb-7"
                >
                  {section.text}
                </p>
              );
            }
            if (section.type === "heading") {
              return (
                <h2
                  key={i}
                  className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#0A1628] mt-14 mb-6 leading-snug"
                >
                  {section.text}
                </h2>
              );
            }
            if (section.type === "subheading") {
              return (
                <h3
                  key={i}
                  className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0A1628] mt-10 mb-4"
                >
                  {section.text}
                </h3>
              );
            }
            if (section.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="my-12 pl-8 border-l-4 border-[#C9A84C]"
                >
                  <p className="font-['Cormorant_Garamond'] text-2xl font-light italic text-[#0A1628] leading-relaxed mb-4">
                    &ldquo;{section.text}&rdquo;
                  </p>
                  {section.attribution && (
                    <footer className="font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B]">
                      — {section.attribution}
                    </footer>
                  )}
                </blockquote>
              );
            }
            if (section.type === "list" && section.items) {
              return (
                <ul key={i} className="my-8 space-y-4">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-4">
                      <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                      <p className="font-['DM_Sans'] text-[#1C1C1E] text-lg leading-[1.8]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}

          {/* Author block */}
          <div className="mt-16 pt-10 border-t border-[#E8E4DE] flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-[#0A1628] flex items-center justify-center shrink-0">
              <span className="font-['Cormorant_Garamond'] text-[#C9A84C] text-lg font-semibold">
                {article.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#0A1628]">
                {article.author}
              </p>
              <p className="font-['DM_Sans'] text-sm text-[#6B6B6B]">{article.authorTitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="bg-[#F5F2ED] py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-3">
            Continue Reading
          </p>
          <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#0A1628] mb-10">
            More from Sovern Perspectives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                className="group bg-white border border-[#E8E4DE] hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden"
              >
                <div className="h-1 bg-[#C9A84C]" />
                <div className="p-6">
                  <span className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-[10px]">
                    {a.tag}
                  </span>
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] group-hover:text-[#C9A84C] transition-colors leading-snug mt-2 mb-3">
                    {a.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed line-clamp-3">
                    {a.excerpt}
                  </p>
                  <p className="font-['DM_Sans'] text-xs text-[#6B6B6B] mt-4">{a.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-white mb-4">
            Want insights like this delivered monthly?
          </h2>
          <p className="font-['DM_Sans'] text-[#9BA8B8] mb-8">
            Subscribe to the Leadership Agenda — our monthly briefing for senior executives.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-white transition-all rounded-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
