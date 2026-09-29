import { PageHero, FeatureGrid } from "@/components/PageSections";
import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Introduce yourself",
  "Introduce yourself to Sovern Partners and share your experience, ambitions and preferred next step.",
  "/profile",
);
export default function Profile() {
  return (
    <>
      <PageHero
        eyebrow="For candidates"
        title="More than a CV."
        accent="A whole lot of potential."
        intro="Tell us about the work you love, the impact you’ve made and where you would like to go next. We’d like to get to know the person behind the profile."
        color="lavender"
      />
      <section className="section container contact-layout">
        <div>
          <h2>
            Your next chapter
            <br />
            <em>starts with you.</em>
          </h2>
          <p className="spaced-copy">
            Whether you’re actively exploring a move or simply thinking ahead,
            an introduction is a useful first step.
          </p>
          <FeatureGrid
            features={[
              {
                title: "Share your direction",
                text: "Tell us the roles, sectors and locations that interest you, alongside what matters in your next working environment.",
              },
              {
                title: "Add your experience",
                text: "Give us a concise picture of your recent responsibilities and achievements. You can attach your CV when you send the email.",
              },
              {
                title: "Keep expectations clear",
                text: "An introduction is not an application to a specific vacancy or a guarantee of an opportunity. We will discuss relevant next steps when there is a fit.",
              },
            ]}
          />
        </div>
        <ContactForm kind="candidate" />
      </section>
    </>
  );
}
