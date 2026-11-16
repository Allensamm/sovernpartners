import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import type { EditorialContent, FAQ, Feature } from "@/lib/site-content";
export function PageHero({
  eyebrow,
  title,
  accent,
  intro,
  color = "peach",
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  color?: string;
  image?: string;
  imageAlt?: string;
}) {
  const heroImage = image || "/images/leadership-boardroom.jpg";
  const heroImageAlt = imageAlt ||
    (heroImage.includes("conversation")
      ? "Two senior leaders in a focused conversation"
      : heroImage.includes("workshop")
        ? "Colleagues discussing a strategic plan together"
        : "Senior leaders sharing a considered discussion in a boardroom");

  return (
    <section className={`page-hero ${color}`}>
      <div className="container with-image">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>
            {title}
            <br />
            <em>{accent}</em>
          </h1>
          <p className="page-intro">{intro}</p>
        </div>
        <div className="page-hero-image">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            priority
            sizes="(max-width:760px) 90vw, 42vw"
          />
        </div>
      </div>
    </section>
  );
}
export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className={`feature-grid ${features.length === 4 ? "four" : ""}`}>
      {features.map((f, i) => (
        <article className="feature-card" key={f.title}>
          <span className="eyebrow">0{i + 1} /</span>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </article>
      ))}
    </div>
  );
}
export function FAQSection({ items }: { items: FAQ[] }) {
  return (
    <section className="section container faq-layout">
      <div>
        <p className="eyebrow">Good questions</p>
        <h2>
          A little more
          <br />
          <em>clarity.</em>
        </h2>
      </div>
      <div className="faq-list">
        {items.map((f) => (
          <details key={f.question}>
            <summary>
              {f.question}
              <Plus size={20} />
            </summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function EditorialPage({ content }: { content: EditorialContent }) {
  return (
    <>
      <PageHero {...content} />
      <section className="section container intro-section">
        <h2>{content.introTitle}</h2>
        <div className="intro-copy">
          {content.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <Link
            href={`/contact?interest=${encodeURIComponent(content.eyebrow)}`}
            className="text-link"
          >
            Let’s explore the possibilities <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Where we can help</p>
          <h2 className="section-title">{content.featuresTitle}</h2>
          <FeatureGrid features={content.features} />
        </div>
      </section>
      {content.steps && (
        <section className="section container">
          <p className="eyebrow">A clear process. A personal approach.</p>
          <h2 className="section-title">
            From first conversation
            <br />
            <em>to what comes next.</em>
          </h2>
          <div className="process-grid">
            {content.steps.map((s, i) => (
              <article key={s.title}>
                <span className="process-number">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}
      {content.faqs && <FAQSection items={content.faqs} />}
      {content.related && (
        <section className="container related-links">
          {content.related.map((r) => (
            <Link className="text-link" key={r.href} href={r.href}>
              {r.label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </section>
      )}
    </>
  );
}
