import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Good people. Great possibilities.",
  "Executive search, leadership advisory and on-demand talent. A thoughtful, personal approach to connecting ambitious organisations with exceptional people.",
  "/",
);
import Link from "next/link";
import Image from "next/image";
import ClientCarousel from "@/components/ClientCarousel";
import {
  ArrowUpRight,
  ArrowDown,
  Asterisk,
  Check,
  MoveUpRight,
} from "lucide-react";
const services = [
  [
    "01",
    "Executive search",
    "Exceptional people. The right connection.",
    "/services/executive-search",
    "peach",
  ],
  [
    "02",
    "Leadership advisory",
    "Bring out the best in the leaders you have.",
    "/services/leadership",
    "lavender",
  ],
  [
    "03",
    "On-demand talent",
    "The experience you need. When it matters.",
    "/services/on-demand-talent",
    "lime",
  ],
];
export default function HomePage() {
  return (
    <>
      <section className="home-hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Executive search. Human connection.
          </p>
          <h1>
            Good people.
            <br />
            Great <em>possibilities.</em>
          </h1>
          <p className="hero-description">
            Behind every business moving forward, there are people making it
            happen. We help you find them, develop them, and build what comes
            next.
          </p>
          <div className="button-row">
            <Link
              className="button button-dark"
              href="/contact?interest=Hiring"
            >
              Find your next leader <ArrowUpRight size={19} />
            </Link>
            <Link className="text-link" href="/careers">
              Find your next chapter <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="mini-line" />
            People first. Possibilities always.
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-photo">
            <Image
              src="/images/leadership-boardroom.jpg"
              alt="Colleagues sharing ideas around a table"
              fill
              priority
              sizes="(max-width: 760px) 90vw, 48vw"
            />
          </div>
          <div className="sunburst" aria-hidden="true">
            <Asterisk strokeWidth={1.1} />
          </div>
          <div className="hero-note">
            <span className="note-dot" />
            <span>
              Great things start
              <br />
              <strong>with the right people.</strong>
            </span>
            <MoveUpRight size={30} strokeWidth={1.2} />
          </div>
          <span className="image-caption">
            A little ambition. A lot of human connection.
          </span>
        </div>
        <a
          href="#welcome"
          className="scroll-cue"
          aria-label="Explore the website"
        >
          <ArrowDown size={17} />
        </a>
      </section>
      <div className="word-strip">
        <div className="container">
          <span>People over profiles</span>
          <Asterisk />
          <span>Connection with purpose</span>
          <Asterisk />
          <span>Progress, together</span>
          <Asterisk />
          <span>A personal approach</span>
          <Asterisk />
        </div>
      </div>
      <section className="section container intro-section" id="welcome">
        <div>
          <p className="eyebrow">Hello. We’re Sovern Partners.</p>
          <h2>
            Business is personal.
            <br />
            We work <em>that way.</em>
          </h2>
        </div>
        <div className="intro-copy">
          <p className="large-copy">
            A great appointment is more than a name on an organisation chart.
            It’s a turning point.
          </p>
          <p>
            We connect ambitious organisations with thoughtful leaders. From
            executive search to leadership development and culture, we take the
            time to understand the people, the challenge, and the bigger
            picture.
          </p>
          <p>
            Curious minds. Honest conversations. A partnership that goes beyond
            the brief.
          </p>
          <Link className="text-link" href="/about">
            Get to know us <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What brings you here?</p>
              <h2>
                Your next move.
                <br />
                <em>Our shared ambition.</em>
              </h2>
            </div>
            <Link className="text-link" href="/services">
              Explore all our services <ArrowUpRight size={19} />
            </Link>
          </div>
          <div className="service-grid">
            {services.map(([n, title, description, href, color]) => (
              <Link href={href} className={`service-card ${color}`} key={n}>
                <span className="card-number">{n} /</span>
                <span className="service-symbol" aria-hidden="true">
                  {n === "01" ? (
                    <Asterisk />
                  ) : n === "02" ? (
                    <span className="orbit-shape" />
                  ) : (
                    <MoveUpRight />
                  )}
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="circle-arrow">
                  <ArrowUpRight size={23} />
                </span>
              </Link>
            ))}
          </div>
          <p className="services-after">
            Navigating a bigger change?{" "}
            <Link href="/services/corporate-transformation">
              Corporate transformation <ArrowUpRight size={14} />
            </Link>
            <Link href="/services/organization-culture">
              Organisation & culture <ArrowUpRight size={14} />
            </Link>
          </p>
        </div>
      </section>
      <section className="section container split-section">
        <div className="editorial-photo">
          <Image
            src="/images/leadership-conversation.jpg"
            alt="People connecting and collaborating in a bright workspace"
            fill
            sizes="(max-width: 760px) 90vw, 45vw"
          />
          <div className="photo-sticker">
            Less transactional.
            <br />
            <em>More human.</em>
            <Asterisk />
          </div>
        </div>
        <div>
          <p className="eyebrow">The Sovern way</p>
          <h2>
            We listen closely.
            <br />
            Think deeply.
            <br />
            <em>Care personally.</em>
          </h2>
          <p>
            People decisions shape businesses and lives. They deserve more than
            a quick introduction. Here’s what you can expect from a partnership
            with us.
          </p>
          <ul className="check-list">
            {[
              "A clear brief before we begin.",
              "Honest advice, even when it challenges the brief.",
              "Thoughtful communication at every stage.",
              "A focus on the person behind the experience.",
            ].map((t) => (
              <li key={t}>
                <Check />
                {t}
              </li>
            ))}
          </ul>
          <Link className="text-link" href="/about/purpose-vision-values">
            What we stand for <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <ClientCarousel />
      <section className="candidate-band">
        <div className="container">
          <Asterisk className="band-star" strokeWidth={1} />
          <div>
            <p className="eyebrow">For people ready for what’s next</p>
            <h2>
              Your career.
              <br />
              <em>Full of possibility.</em>
            </h2>
            <p>
              A fresh challenge. A different direction. A bigger impact.
              <br />
              Let’s talk about where you want to go.
            </p>
            <Link href="/careers" className="button button-light">
              Let’s find your next chapter <ArrowUpRight size={19} />
            </Link>
          </div>
          <div className="candidate-words" aria-hidden="true">
            <span>Be curious.</span>
            <span>Be ambitious.</span>
            <span>
              Be <em>you.</em>
            </span>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Ideas worth sharing</p>
            <h2>
              A fresh <em>perspective.</em>
            </h2>
          </div>
          <Link href="/insights" className="text-link">
            More from our thinking <ArrowUpRight size={19} />
          </Link>
        </div>
        <div className="insight-grid">
          <Link className="insight-card" href="/insights/ceo-agenda-2025">
            <div className="insight-art photo-card">
              <Image
                src="/images/leadership-conversation.jpg"
                alt="Two senior leaders sharing a thoughtful conversation"
                fill
                sizes="(max-width: 760px) 90vw, 30vw"
              />
              <span>
                The next
                <br />
                <em>good question.</em>
              </span>
              <ArrowUpRight />
            </div>
            <p className="eyebrow">Leadership · Perspective</p>
            <h3>Good leadership starts with better questions.</h3>
            <p>Finding clarity when the path ahead isn’t obvious.</p>
            <span className="text-link">
              Read the perspective <ArrowUpRight size={16} />
            </span>
          </Link>
          <Link className="insight-card" href="/insights/board-diversity">
            <div className="insight-image">
              <Image
                src="/images/leadership-boardroom.jpg"
                alt="Different perspectives coming together in a team discussion"
                fill
                sizes="(max-width: 760px) 90vw, 30vw"
              />
            </div>
            <p className="eyebrow">Executive search · Practical guide</p>
            <h3>Look beyond the familiar. Find the exceptional.</h3>
            <p>How to build a broader, more thoughtful shortlist.</p>
            <span className="text-link">
              Read the guide <ArrowUpRight size={16} />
            </span>
          </Link>
          <Link className="insight-card" href="/insights/culture-eats-strategy">
            <div className="insight-art photo-card">
              <Image
                src="/images/leadership-workshop.jpg"
                alt="A diverse team working through a strategic change"
                fill
                sizes="(max-width: 760px) 90vw, 30vw"
              />
              <span>
                Culture is
                <br />
                <em>what we do.</em>
              </span>
              <Asterisk />
            </div>
            <p className="eyebrow">Culture · Perspective</p>
            <h3>Your culture lives in the everyday.</h3>
            <p>Small behaviours that shape the bigger picture.</p>
            <span className="text-link">
              Read the perspective <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
