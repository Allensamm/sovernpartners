import Link from "next/link";
import { ArrowUpRight, Asterisk } from "lucide-react";
const groups = [
  {
    title: "Good things start here",
    links: [
      ["What we do", "/services"],
      ["Industries", "/industries"],
      ["Your next chapter", "/careers"],
      ["Introduce yourself", "/profile"],
    ],
  },
  {
    title: "Get to know us",
    links: [
      ["Our world", "/about"],
      ["Our people", "/people"],
      ["Our story", "/about/heritage"],
      ["Our values", "/about/purpose-vision-values"],
      ["Inclusion & belonging", "/about/inclusion-belonging"],
      ["Sustainability", "/about/sustainability"],
    ],
  },
  {
    title: "Stay curious",
    links: [
      ["Our thinking", "/insights"],
      ["Conversations", "/insights/podcast"],
      ["Newsroom", "/newsroom"],
      ["Where we work", "/offices"],
      ["Contact", "/contact"],
    ],
  },
];
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta container">
        <div>
          <p className="eyebrow">
            The next good thing starts with a conversation.
          </p>
          <h2>
            Let’s make
            <br />
            <em>great things happen.</em>
          </h2>
        </div>
        <Link href="/contact" className="footer-talk" aria-label="Let's talk">
          <ArrowUpRight strokeWidth={1.2} />
        </Link>
      </div>
      <div className="footer-main container">
        <div className="footer-brand">
          <Link className="wordmark" href="/">
            <span>
              sovern<span className="logo-dot">.</span>
            </span>
            <small>PARTNERS</small>
          </Link>
          <p>
            Good people.
            <br />
            Great possibilities.
          </p>
          <Asterisk size={34} />
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} Sovern Partners</p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/legal">Legal</Link>
          <Link href="/legal/ethics-line">Speak up</Link>
          <Link href="/privacy/information-security">Information security</Link>
        </div>
        <span>People first. Always.</span>
      </div>
    </footer>
  );
}
