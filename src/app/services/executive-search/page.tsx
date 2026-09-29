import { EditorialPage } from "@/components/PageSections";
import { serviceContent } from "@/lib/site-content";
import { pageMetadata } from "@/lib/metadata";
const content = serviceContent["executive-search"];
export const metadata = pageMetadata(
  content.eyebrow,
  content.intro,
  "/services/executive-search",
);
export default function Page() {
  return <EditorialPage content={content} />;
}
