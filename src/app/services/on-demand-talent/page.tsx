import { EditorialPage } from "@/components/PageSections";
import { serviceContent } from "@/lib/site-content";
import { pageMetadata } from "@/lib/metadata";
const content = serviceContent["on-demand-talent"];
export const metadata = pageMetadata(
  content.eyebrow,
  content.intro,
  "/services/on-demand-talent",
);
export default function Page() {
  return <EditorialPage content={content} />;
}
