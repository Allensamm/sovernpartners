import PolicyPage from "@/components/PolicyPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Privacy notice",
  "How this website handles enquiry details, email drafts and technical information.",
  "/privacy",
);
export default function Privacy() {
  return (
    <PolicyPage
      eyebrow="Privacy notice"
      title="Your information."
      accent="Handled thoughtfully."
      intro="A straightforward explanation of how information moves through this website and how to contact us with a question."
      draft
      sections={[
        {
          title: "Information you choose to share",
          body: "The contact and candidate forms ask for your name, email address, professional context and message. Enter only the information you are comfortable including in an email. A CV can be attached separately in your email app; this website does not offer a CV upload or candidate account.",
        },
        {
          title: "How the forms work",
          body: "Selecting ‘Prepare my email’ creates a mailto link and opens a draft in your email application. Form details remain in the current page’s memory and are not submitted to a form-processing service by this website. You must send the email yourself. If you use the copy button, the prepared text is placed on your device’s clipboard.",
        },
        {
          title: "After you send an email",
          body: "Messages you send are processed by your email provider and the recipient’s email service. The information may be used to understand your enquiry, respond and discuss a relevant next step. Contact us before sending confidential business information, sensitive personal information or identity documents.",
        },
        {
          title: "Website delivery and technical data",
          body: "Loading the website requires the hosting service to process technical request information, such as an IP address, browser details and the pages requested. The current website does not include advertising trackers, a newsletter subscription service or an analytics integration. Hosting access controls may use their own authentication cookies.",
        },
        {
          title: "External services and links",
          body: "Links to other websites or the use of your email application take you to services operated separately from this website. Their own privacy information applies. Website imagery is served from the site’s local assets.",
        },
        {
          title: "Questions, corrections and removal requests",
          body: "Contact us to ask about information you have shared by email, request a correction or discuss its removal. Describe the original interaction so the request can be located. Applicable requirements and any reasons information needs to be retained will depend on the nature of that interaction.",
        },
        {
          title: "Before a formal engagement",
          body: "Any recruitment or advisory engagement involving additional personal data should be accompanied by appropriate information about the responsible business, purpose, recipients, retention and applicable rights. This website notice describes the current site experience and does not replace engagement-specific documentation.",
        },
      ]}
    />
  );
}
