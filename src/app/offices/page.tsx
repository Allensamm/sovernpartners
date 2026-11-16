import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero, FeatureGrid } from "@/components/PageSections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Where we work",
  "Start a conversation with Sovern Partners about your business, market and preferred way of working.",
  "/offices",
);
export default function Offices() {
  return (
    <>
      <PageHero
        eyebrow="Where we work"
        title="Good connections"
        accent="go beyond a postcode."
        intro="Tell us where your business operates and where your ambitions are taking you. We’ll discuss the right way to work together."
        color="peach"
        image="/images/leadership-workshop.jpg"
      />
      <section className="section container intro-section">
        <h2>
          Start with a conversation.
          <br />
          <em>Wherever you are.</em>
        </h2>
        <div className="content-stack">
          <p>
            A useful partnership starts with understanding your market, working
            environment and practical needs. We can begin with an email or a
            planned remote conversation.
          </p>
          <p>
            For an in-person meeting, please arrange the location and time
            directly with your contact. No walk-in office addresses are
            currently listed on this website.
          </p>
          <Link href="/contact" className="button button-dark">
            Arrange a conversation
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">A thoughtful start</p>
          <h2 className="section-title">
            Help us understand
            <br />
            <em>your world.</em>
          </h2>
          <FeatureGrid
            features={[
              {
                title: "Your market",
                text: "Tell us where the organisation operates and the markets relevant to the role or engagement.",
              },
              {
                title: "Your working model",
                text: "Share any location, travel, time-zone or working-arrangement requirements.",
              },
              {
                title: "Your next step",
                text: "Describe what you are trying to achieve, the timing and who should be involved in the conversation.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
