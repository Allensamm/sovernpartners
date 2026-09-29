import PolicyPage from "@/components/PolicyPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Legal notice",
  "Information about website content, editorial perspectives, draft profiles and commercial enquiries.",
  "/legal",
);
export default function Legal() {
  return (
    <PolicyPage
      eyebrow="Legal notice"
      title="Clear information."
      accent="Better understanding."
      intro="How to interpret the information on this website and where to direct questions about it."
      draft
      sections={[
        {
          title: "About this website",
          body: "This website presents the Sovern Partners brand and its proposed executive search and leadership advisory services. Confirmed legal entity, registration and registered-office details should be supplied by the business owner before a public launch or commercial engagement.",
        },
        {
          title: "General information",
          body: "Service descriptions and editorial articles are intended to introduce the approach and encourage a conversation. They are not an offer of employment, a guarantee of an appointment or an individual professional recommendation.",
        },
        {
          title: "Draft and illustrative content",
          body: "The team page identifies illustrative profiles and draft biographies. These are design and copy examples, not verified representations of additional employees. The website does not present sample testimonials as genuine client feedback, claim unverified performance results or list speculative vacancies as live opportunities.",
        },
        {
          title: "Working with Sovern Partners",
          body: "Any engagement should be subject to a separately agreed written scope and terms, including the responsible contracting business, fees, responsibilities, timing and handling of information. Making an enquiry through the website does not by itself create an engagement.",
        },
        {
          title: "Editorial and brand materials",
          body: "Articles are general perspectives prepared for this website. They do not represent commissioned research unless expressly stated with a source. Contact the business before reproducing brand materials or attributing a statement to a named person.",
        },
        {
          title: "Third-party photography",
          body: "People and workplace photographs are used as illustrative stock imagery, except for the existing named profile photograph on the team page. Stock images are not presented as photographs of Sovern Partners employees, clients or offices.",
        },
        {
          title: "Reporting a concern",
          body: "If you notice an inaccurate statement, a broken link or a concern about the website, contact the team with the page address and a brief description. Use the Speak up page for conduct or recruitment concerns.",
        },
      ]}
    />
  );
}
