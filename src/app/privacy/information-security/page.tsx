import PolicyPage from "@/components/PolicyPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Information security",
  "How to share information thoughtfully, recognise the limits of the website forms and report a security concern.",
  "/privacy/information-security",
);
export default function Security() {
  return (
    <PolicyPage
      eyebrow="Information security"
      title="Share with care."
      accent="Ask when in doubt."
      intro="Practical information about using the website and raising concerns about sensitive information."
      sections={[
        {
          title: "The current website",
          body: "The site provides public information and forms that prepare an email in your own email app. It does not provide a candidate login, password storage, payment collection or document-upload service.",
        },
        {
          title: "Sending sensitive information",
          body: "Keep an initial enquiry high level. Do not include passwords, financial account details, identity documents, health information or confidential employer documents. Discuss an appropriate way to share any necessary sensitive material before sending it.",
        },
        {
          title: "Check who you are speaking with",
          body: "If a message claims to represent Sovern Partners and you are unsure about it, contact the address published on the contact page using a fresh email. Do not rely only on links or contact details included in the message you are checking.",
        },
        {
          title: "Reporting a possible issue",
          body: "Email a concise description of the concern, the affected page and when you noticed it. Avoid including other people’s personal information or sensitive technical material in an initial report. Ask for a suitable way to share further details.",
        },
        {
          title: "Security claims",
          body: "No security certification or independent audit is claimed by this website. Any requirements for a formal engagement should be discussed and documented as part of that engagement.",
        },
      ]}
    />
  );
}
