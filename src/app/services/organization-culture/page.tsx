import { EditorialPage } from "@/components/PageSections";
import { serviceContent } from "@/lib/site-content";
import { pageMetadata } from "@/lib/metadata";
const content = serviceContent["organization-culture"];
export const metadata = pageMetadata(
  content.eyebrow,
  content.intro,
  "/services/organization-culture",
);
export default function Page() {
  return <EditorialPage content={content} />;
}
