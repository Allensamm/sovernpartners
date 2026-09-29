import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { PageHero } from "@/components/PageSections";
import { contactEmail } from "@/lib/site-content";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Newsroom",
  "Company updates, editorial perspectives and media enquiries for Sovern Partners.",
  "/newsroom",
);
export default function Newsroom() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="From our world"
        accent="to yours."
        intro="The latest from Sovern Partners, along with the people and ideas behind our work."
        color="lime"
      />
      <section className="section container intro-section">
        <div>
          <p className="eyebrow">Company news</p>
          <h2>
            Meaningful updates.
            <br />
            <em>When there’s news to share.</em>
          </h2>
        </div>
        <div className="content-stack">
          <p>
            There are no company announcements published here yet. This is where
            we’ll share confirmed developments, new initiatives and updates from
            the team.
          </p>
          <p>
            For a closer look at what we’re thinking about now, explore our
            perspectives on leadership, search and culture.
          </p>
          <Link href="/insights" className="text-link">
            Read our latest thinking
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container intro-section">
          <div>
            <p className="eyebrow">For journalists & editors</p>
            <h2>
              A useful
              <br />
              <em>point of contact.</em>
            </h2>
          </div>
          <div className="content-stack">
            <p>
              For interview requests, company information or an editorial
              enquiry, tell us your publication, topic, deadline and the best
              way to reach you.
            </p>
            <p>
              Please contact us before attributing a comment to Sovern Partners
              or using team biographies or brand materials.
            </p>
            <a
              className="text-link"
              href={`mailto:${contactEmail}?subject=Media%20enquiry`}
            >
              <Mail size={17} />
              Email a media enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
