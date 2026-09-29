import { SITE_URL } from "@/lib/site-url";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { articles, getArticle } from "@/lib/articles";
import type { Metadata } from "next";
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Perspective not found" };
  const url = `${SITE_URL}/insights/${a.slug}`;
  const image = `${SITE_URL}${a.image}`;
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: a.title,
      description: a.excerpt,
      url,
      type: "article",
      images: [{ url: image, alt: a.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: a.title,
      description: a.excerpt,
      images: [image],
    },
  };
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  return (
    <>
      <section className={`article-hero ${a.color}`}>
        <div className="article-container">
          <Link className="text-link" href="/insights">
            <ArrowLeft size={15} />
            Back to our thinking
          </Link>
          <p className="eyebrow">
            {a.tag} · {a.type}
          </p>
          <h1>{a.title}</h1>
          <p className="article-standfirst">{a.excerpt}</p>
          <div className="article-meta">
            <span>{a.author}</span>
            <time dateTime="2026-09-29">{a.date}</time>
            <span>{a.readTime}</span>
          </div>
        </div>
      </section>
      <article className="article-container article-body">
        <div className="article-photo">
          <Image
            src={a.image}
            alt={
              a.tag === "Culture"
                ? "Colleagues exchanging perspectives at work"
                : "An environment for thoughtful work and conversation"
            }
            fill
            sizes="(max-width:760px) 90vw, 800px"
          />
        </div>
        {a.sections.map((s, i) =>
          s.type === "heading" ? (
            <h2 key={i}>{s.text}</h2>
          ) : s.type === "list" ? (
            <ul key={i}>
              {s.items?.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ) : (
            <p key={i}>{s.text}</p>
          ),
        )}
        <aside className="article-author">
          <span className="author-mark">s.</span>
          <div>
            <strong>{a.author}</strong>
            <p>{a.authorTitle}</p>
          </div>
        </aside>
        <p className="article-disclaimer">
          An editorial perspective for general discussion. This article does not
          report a client engagement or commissioned research.
        </p>
      </article>
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Keep the conversation going</p>
          <h2 className="section-title">
            Another <em>perspective.</em>
          </h2>
          <div className="feature-grid">
            {articles
              .filter((r) => r.slug !== a.slug)
              .slice(0, 3)
              .map((r) => (
                <Link
                  className="feature-card"
                  key={r.slug}
                  href={`/insights/${r.slug}`}
                >
                  <p className="eyebrow">{r.tag}</p>
                  <h3>{r.title}</h3>
                  <p>{r.excerpt}</p>
                  <span className="text-link">
                    Read more
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
