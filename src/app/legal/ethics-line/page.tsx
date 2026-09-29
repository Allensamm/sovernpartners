import { PageHero } from "@/components/PageSections";
import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Speak up",
  "Raise a concern about a Sovern Partners interaction, recruitment process or the handling of information.",
  "/legal/ethics-line",
);
export default function Ethics() {
  return (
    <>
      <PageHero
        eyebrow="Speak up"
        title="Your concern matters."
        accent="Let’s hear it."
        intro="If something about an interaction, recruitment process or the handling of information does not feel right, you can raise it here."
        color="peach"
      />
      <section className="section container contact-layout">
        <div className="content-stack">
          <h2>
            A clear way
            <br />
            <em>to raise a concern.</em>
          </h2>
          <p>
            Explain what happened, when it happened and how you were involved.
            Include only the information needed to understand the concern.
          </p>
          <div className="note-box">
            <strong>About this contact route</strong>
            <p>
              This opens an email to the same business contact used for general
              enquiries. It is not an independent reporting hotline and does not
              provide anonymous reporting. Your email address will be visible
              when you send a message.
            </p>
          </div>
          <h3>What to include</h3>
          <ul className="plain-list">
            <li>A short description of the concern.</li>
            <li>The relevant dates and interaction.</li>
            <li>The best way to contact you.</li>
            <li>What you would like the team to consider.</li>
          </ul>
          <p>
            Please avoid sending identity documents, passwords or confidential
            third-party records in an initial email.
          </p>
        </div>
        <ContactForm kind="ethics" />
      </section>
    </>
  );
}
