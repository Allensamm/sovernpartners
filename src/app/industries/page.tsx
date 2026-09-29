import { PageHero } from "@/components/PageSections";
import IndustryExplorer from "@/components/IndustryExplorer";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Industries",
  "Explore the sectors and leadership challenges Sovern Partners supports, from technology and financial services to healthcare and social impact.",
  "/industries",
);
export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Your world is unique."
        accent="We start there."
        intro="Every sector has its own language, pressures and possibilities. We connect that context with the leadership your organisation needs."
        color="lime"
      />
      <section className="section container">
        <IndustryExplorer />
      </section>
      <section className="section section-soft">
        <div className="container intro-section">
          <h2>
            Different sectors.
            <br />
            <em>Shared human questions.</em>
          </h2>
          <div className="intro-copy">
            <p>
              How do we find the right leader? What will our team need next? How
              do we turn change into progress? The context varies, but the
              quality of the conversation matters everywhere.
            </p>
            <p>
              We discuss the fit of each assignment openly, including the
              specialist understanding, geography and resources it will require.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
