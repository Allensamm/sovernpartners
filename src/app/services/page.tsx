import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero, FAQSection, FeatureGrid } from "@/components/PageSections";
import { serviceContent } from "@/lib/site-content";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "What we do",
  "Executive search, leadership advisory, on-demand talent, transformation and culture. Find the right support for your next move.",
  "/services",
);
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="People decisions."
        accent="Business possibilities."
        intro="Find the right leader. Strengthen your team. Navigate a new chapter. Wherever you’re heading, we begin with understanding what matters to you."
        color="lavender"
      />
      <section className="section container">
        <div className="section-heading">
          <h2>
            The right support.
            <br />
            <em>At the right moment.</em>
          </h2>
          <p className="section-description">
            Five connected services. One thoughtful approach to the people
            behind your business.
          </p>
        </div>
        <div className="service-list">
          {Object.entries(serviceContent).map(([slug, s], i) => (
            <Link key={slug} href={`/services/${slug}`} className="service-row">
              <span>0{i + 1} /</span>
              <h3>{s.eyebrow}</h3>
              <p>{s.intro}</p>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Working together</p>
          <h2 className="section-title">
            A partnership you
            <br />
            <em>can make sense of.</em>
          </h2>
          <FeatureGrid
            features={[
              {
                title: "A thoughtful start",
                text: "We listen to the business challenge and help you decide which support makes sense. You do not need a perfectly finished brief.",
              },
              {
                title: "Clear expectations",
                text: "Before starting, we agree the scope, responsibilities, communication, timing and commercial terms in writing.",
              },
              {
                title: "A personal connection",
                text: "You know who you are working with, how to reach them and what to expect as the engagement progresses.",
              },
            ]}
          />
        </div>
      </section>
      <FAQSection
        items={[
          {
            question:
              "I’m not sure which service I need. Where should I start?",
            answer:
              "Tell us what is happening in your organisation and what you would like to change. An initial conversation can help identify whether search, advisory, interim support or a combination is relevant.",
          },
          {
            question:
              "Do you work with growing businesses as well as established organisations?",
            answer:
              "The starting point is the leadership challenge and the support required. Share your business context so we can discuss whether the engagement is a good fit.",
          },
        ]}
      />
    </>
  );
}
