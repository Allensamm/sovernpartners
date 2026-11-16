import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero, FeatureGrid } from "@/components/PageSections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our world",
  "Get to know Sovern Partners: a personal, thoughtful approach to executive search, leadership and the world of work.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our world"
        title="People are the point."
        accent="Always have been."
        intro="We’re here for the people making things happen. The ambitious businesses. The thoughtful leaders. The teams ready for their next chapter."
        color="peach"
        image="/images/leadership-conversation.jpg"
      />
      <section className="section container intro-section">
        <h2>
          Big on possibility.
          <br />
          <em>Personal by nature.</em>
        </h2>
        <div className="intro-copy">
          <p className="large-copy">
            Sovern Partners connects people, leadership and business ambition.
          </p>
          <p>
            Our work spans executive search, leadership advisory, on-demand
            talent, transformation and culture. What connects it all is a belief
            that understanding people is fundamental to building a better
            business.
          </p>
          <p>
            We start with questions. We listen to the answers. We explore what a
            business needs and what a person wants to contribute, then work
            carefully to bring the two together.
          </p>
          <Link href="/people" className="text-link">
            The people behind the partnership <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <div className="container full-photo">
        <Image
          src="/images/leadership-boardroom.jpg"
          alt="A collaborative conversation between colleagues"
          fill
          sizes="90vw"
        />
      </div>
      <section className="section container">
        <p className="eyebrow">What makes us, us</p>
        <h2 className="section-title">
          Expertise matters.
          <br />
          <em>So does how you work.</em>
        </h2>
        <FeatureGrid
          features={[
            {
              title: "Curiosity first",
              text: "We want to understand your business as it is, your ambition for what it could be and the realities in between.",
            },
            {
              title: "A considered perspective",
              text: "We look beyond a familiar title or impressive CV to explore context, capability and the contribution a person can make.",
            },
            {
              title: "A human connection",
              text: "Straightforward communication, respectful conversations and a personal relationship at every stage.",
            },
          ]}
        />
      </section>
      <section className="about-manifesto">
        <div className="container">
          <p className="eyebrow">Our belief</p>
          <h2>
            When good people find
            <br />
            the right possibility,
            <br />
            <em>remarkable things can happen.</em>
          </h2>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <h2>
            Get to know
            <br />
            <em>our world.</em>
          </h2>
        </div>
        <div className="about-links">
          {[
            [
              "Our story",
              "A simple idea that shapes how we work.",
              "/about/heritage",
              "peach",
            ],
            [
              "Our purpose & values",
              "The principles behind our everyday choices.",
              "/about/purpose-vision-values",
              "lime",
            ],
            [
              "Inclusion & belonging",
              "A broader perspective on people and potential.",
              "/about/inclusion-belonging",
              "lavender",
            ],
            [
              "Our responsibilities",
              "A thoughtful approach to the longer term.",
              "/about/sustainability",
              "peach",
            ],
          ].map(([t, d, h, c]) => (
            <Link key={h} href={h} className={`about-link ${c}`}>
              <h3>{t}</h3>
              <p>{d}</p>
              <ArrowUpRight size={23} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
