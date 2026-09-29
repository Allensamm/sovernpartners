import Link from "next/link";
import { ArrowUpRight, Compass, Users, MoveUpRight } from "lucide-react";
import { PageHero, FeatureGrid, FAQSection } from "@/components/PageSections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Your next chapter",
  "Explore your next leadership move, interim work or a career in executive search with Sovern Partners.",
  "/careers",
);
export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Your next chapter"
        title="Ambition looks"
        accent="good on you."
        intro="A new challenge. A change of pace. Work that means more. Whatever your next chapter looks like, it starts with a conversation."
        color="lavender"
        image="/images/people-at-work.jpg"
      />
      <section className="section container">
        <div className="section-heading">
          <h2>
            Where would you
            <br />
            <em>like to go?</em>
          </h2>
          <p className="section-description">
            There’s more than one way to move forward. Let’s explore what fits
            you.
          </p>
        </div>
        <div className="opportunity-grid">
          {[
            {
              icon: Compass,
              title: "Your next leadership role",
              text: "For executives and senior professionals considering a permanent move. Share the challenges, culture and scope that would make your next role meaningful.",
              topic: "Leadership opportunity",
              color: "peach",
            },
            {
              icon: MoveUpRight,
              title: "Interim & fractional work",
              text: "For experienced leaders who enjoy a defined challenge, a different environment and the opportunity to make a focused contribution.",
              topic: "Interim opportunities",
              color: "lime",
            },
            {
              icon: Users,
              title: "A career with Sovern",
              text: "For curious researchers, thoughtful advisers and people who enjoy connecting talent with possibility. Introduce yourself and tell us what you would bring.",
              topic: "Joining Sovern",
              color: "lavender",
            },
          ].map((o) => (
            <article className={`opportunity-card ${o.color}`} key={o.title}>
              <o.icon size={34} strokeWidth={1.2} />
              <h3>{o.title}</h3>
              <p>{o.text}</p>
              <Link
                href={
                  o.topic === "Joining Sovern"
                    ? "/contact?interest=Joining%20Sovern"
                    : "/profile"
                }
                className="text-link"
              >
                Start a conversation <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">The candidate experience</p>
          <h2 className="section-title">
            Your career matters.
            <br />
            <em>So does your experience.</em>
          </h2>
          <FeatureGrid
            features={[
              {
                title: "You’re a person, not a profile",
                text: "We want to understand your motivation, preferences and the contribution you want to make.",
              },
              {
                title: "Clarity from the beginning",
                text: "When there is a relevant opportunity, we discuss the context, process and expectations with you.",
              },
              {
                title: "A considered introduction",
                text: "We talk with you about an opportunity before presenting you for it. A good connection works for both sides.",
              },
            ]}
          />
        </div>
      </section>
      <section className="section container intro-section">
        <div>
          <p className="eyebrow">Current opportunities</p>
          <h2>
            Stay curious.
            <br />
            <em>Stay connected.</em>
          </h2>
        </div>
        <div className="content-stack">
          <p>
            There are no publicly listed vacancies on the site at the moment.
            Some leadership conversations begin before a role is advertised.
          </p>
          <p>
            You can still introduce yourself and share what you would like to
            explore. We cannot promise a role, but your ambitions are a useful
            place to start.
          </p>
          <Link href="/profile" className="button button-dark">
            Introduce yourself <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <FAQSection
        items={[
          {
            question: "Can I get in touch if I’m not actively looking?",
            answer:
              "Yes. Tell us that you are exploring rather than actively applying, along with what would make a future conversation worthwhile.",
          },
          {
            question: "Can I share my CV?",
            answer:
              "Yes. The introduction form prepares an email. Attach your CV in your email app before sending; there is no upload or account registration on this website.",
          },
          {
            question:
              "Will you share my details with an employer straight away?",
            answer:
              "Our intended process is to discuss the specific opportunity and your interest before making an introduction. If you have particular confidentiality needs, tell us at the start.",
          },
        ]}
      />
    </>
  );
}
