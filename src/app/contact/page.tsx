import { Suspense } from "react";
import ContactInquiry from "@/components/ContactInquiry";
import { Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHero, FAQSection } from "@/components/PageSections";
import ContactForm from "@/components/ContactForm";
import { contactEmail } from "@/lib/site-content";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Let’s talk",
  "Tell Sovern Partners about your hiring, leadership or career ambitions. Start a personal conversation.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Let’s talk"
        title="A conversation today."
        accent="Possibilities tomorrow."
        intro="A leadership challenge, a career question, or an idea you’d like to explore. Tell us what’s on your mind."
        color="peach"
      />
      <section className="section container contact-layout">
        <div>
          <p className="eyebrow">Good people. Real conversations.</p>
          <h2>
            We’d love
            <br />
            <em>to hear from you.</em>
          </h2>
          <p>
            There’s no need for a polished brief. Share a little context and we
            can take the next step together.
          </p>
          <a href={`mailto:${contactEmail}`} className="contact-email">
            <Mail size={18} />
            {contactEmail}
          </a>
          <div className="contact-note">
            <h3>Thinking about your next role?</h3>
            <p>
              Tell us about your experience, what matters to you and the kind of
              opportunity you’d like to explore.
            </p>
            <Link href="/profile" className="text-link">
              Introduce yourself <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="contact-note">
            <h3>What happens next?</h3>
            <p>
              Once you send your email, the team can review your enquiry and
              discuss whether a conversation would be useful. Scope and next
              steps are agreed together.
            </p>
          </div>
        </div>
        <Suspense fallback={<ContactForm />}>
          <ContactInquiry />
        </Suspense>
      </section>
      <FAQSection
        items={[
          {
            question: "Do I need a finished job description?",
            answer:
              "No. A conversation about the business, the challenge and what success would look like is enough to get started.",
          },
          {
            question: "Can I send a confidential enquiry?",
            answer:
              "Begin with a high-level description. We can discuss an appropriate way to share commercially sensitive or personal details before you send them.",
          },
          {
            question: "Does filling in the form send my enquiry automatically?",
            answer:
              "No. It opens a draft in your own email app. Review the message and send it there. You can also email the displayed contact address directly.",
          },
        ]}
      />
    </>
  );
}
