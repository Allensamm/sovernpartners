import { PageHero } from "@/components/PageSections";
import Link from "next/link";
import { contactEmail } from "@/lib/site-content";
export type PolicySection = { title: string; body: string };
export default function PolicyPage({
  eyebrow,
  title,
  accent,
  intro,
  sections,
  draft = false,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  sections: PolicySection[];
  draft?: boolean;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        accent={accent}
        intro={intro}
        color="lavender"
      />
      <section className="section container policy-layout">
        <aside>
          <p className="eyebrow">On this page</p>
          {sections.map((s, i) => (
            <a key={s.title} href={`#section-${i + 1}`}>
              {s.title}
            </a>
          ))}
          <Link href="/contact">Contact us</Link>
          <p className="policy-date">Updated 29 September 2026</p>
        </aside>
        <div>
          {draft && (
            <p className="draft-note">
              Draft notice for this website concept. Business identity and
              operational details need owner review before public launch.
            </p>
          )}
          {sections.map((s, i) => (
            <section id={`section-${i + 1}`} key={s.title}>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
            </section>
          ))}
          <div className="note-box">
            <strong>Need to ask a question?</strong>
            <p>
              Email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> with
              enough context to help us understand your request. Please do not
              include passwords, identity documents or other sensitive
              information in an initial enquiry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
