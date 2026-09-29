import Link from "next/link";
import { ArrowUpRight, Mic } from "lucide-react";
import { PageHero, FeatureGrid } from "@/components/PageSections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Conversations",
  "A space for thoughtful conversations about people, leadership and the decisions that shape our working lives.",
  "/insights/podcast",
);
export default function Podcast() {
  return (
    <>
      <PageHero
        eyebrow="Sovern conversations"
        title="Good questions."
        accent="Real conversations."
        intro="A space to explore the people, experiences and ideas shaping the way we lead and work."
        color="lavender"
      />
      <section className="section container podcast-intro">
        <div className="podcast-cover">
          <Mic size={65} strokeWidth={1} />
          <span>
            Sovern
            <br />
            <em>conversations.</em>
          </span>
          <small>People. Leadership. Possibility.</small>
        </div>
        <div className="content-stack">
          <p className="eyebrow">In the making</p>
          <h2>
            Worth listening to.
            <br />
            <em>Worth thinking about.</em>
          </h2>
          <p>
            We’re shaping a series of conversations about the human side of
            leadership. The moments that change a career. The lessons that stay
            with us. The questions that make us see things differently.
          </p>
          <p>
            No episodes are available yet. In the meantime, explore our written
            perspectives or suggest a topic you would like to hear discussed.
          </p>
          <div className="button-row">
            <Link href="/insights" className="button button-dark">
              Explore our thinking
              <ArrowUpRight size={17} />
            </Link>
            <Link
              href="/contact?interest=Conversation%20idea"
              className="text-link"
            >
              Suggest a conversation
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Ideas on our minds</p>
          <h2 className="section-title">
            The human side
            <br />
            <em>of the big questions.</em>
          </h2>
          <FeatureGrid
            features={[
              {
                title: "Turning points",
                text: "What helps a leader decide it is time for a different challenge, and how do they approach what comes next?",
              },
              {
                title: "Leading through change",
                text: "What does it take to give people clarity when the answers are still taking shape?",
              },
              {
                title: "A place to do good work",
                text: "How do everyday decisions shape culture, belonging and the experience of being part of a team?",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
