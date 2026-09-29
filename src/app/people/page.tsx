import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero, FeatureGrid } from "@/components/PageSections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our people",
  "Meet the people and perspectives behind Sovern Partners’ approach to executive search and leadership.",
  "/people",
);
const people = [
  {
    name: "Venkat G",
    role: "Talent acquisition & executive search",
    bio: "A personal point of contact for conversations about talent, career ambitions and the leadership a business needs next.",
    initials: "VG",
    image: "/team/venkat.jpg",
    sample: false,
  },
  {
    name: "Victoria Hartwell",
    role: "Leadership advisory",
    bio: "A thoughtful adviser focused on helping leaders understand their strengths, navigate change and build more effective teams.",
    initials: "VH",
    sample: true,
  },
  {
    name: "James Okoro",
    role: "Search & talent research",
    bio: "A curious researcher who connects a clear understanding of the brief with a broad, considered view of the talent landscape.",
    initials: "JO",
    sample: true,
  },
];
export default function People() {
  return (
    <>
      <PageHero
        eyebrow="Our people"
        title="Thoughtful minds."
        accent="Human connections."
        intro="Different perspectives. A shared interest in people. Get to know the people behind the conversations."
        color="peach"
      />
      <section className="section container">
        <p className="draft-note">
          Draft team page: biographies are sample copy. Victoria Hartwell and
          James Okoro are illustrative profiles for review before publication.
        </p>
        <div className="team-grid">
          {people.map((p, i) => (
            <article key={p.name} className="team-card">
              <div
                className={`team-portrait ${["peach", "lavender", "lime"][i]}`}
              >
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width:760px) 90vw, 30vw"
                  />
                ) : (
                  <span aria-hidden="true">{p.initials}</span>
                )}
                {p.sample && (
                  <span className="sample-badge">Sample profile</span>
                )}
              </div>
              <p className="eyebrow">{p.role}</p>
              <h3>{p.name}</h3>
              <p>{p.bio}</p>
              <Link
                href={`/contact?interest=${encodeURIComponent(p.role)}`}
                className="text-link"
              >
                Start a conversation <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">What brings us together</p>
          <h2 className="section-title">
            Different people.
            <br />
            <em>One shared approach.</em>
          </h2>
          <FeatureGrid
            features={[
              {
                title: "We stay curious",
                text: "Every brief is an opportunity to understand a new business, a different perspective and another way of thinking.",
              },
              {
                title: "We work thoughtfully",
                text: "We bring care to research, conversations and the practical details that make a partnership work.",
              },
              {
                title: "We value connection",
                text: "The quality of a relationship matters. We aim for communication that is straightforward, respectful and useful.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
