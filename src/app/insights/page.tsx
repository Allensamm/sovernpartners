import { PageHero } from "@/components/PageSections";
import InsightExplorer from "@/components/InsightExplorer";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our thinking",
  "Practical perspectives on leadership, executive search, culture and the people behind better business decisions.",
  "/insights",
);
export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Our thinking"
        title="Stay curious."
        accent="See things differently."
        intro="Ideas, useful questions and practical perspectives on people, leadership and the world of work. A little space to think about what comes next."
        color="peach"
      />
      <section className="section container">
        <InsightExplorer />
      </section>
      <div className="container editorial-note">
        <p>
          These articles share general perspectives and practical prompts. They
          do not present commissioned research, client results or individual
          professional advice.
        </p>
      </div>
    </>
  );
}
