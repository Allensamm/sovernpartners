import { EditorialPage } from "@/components/PageSections";
import { serviceContent } from "@/lib/site-content";
import { pageMetadata } from "@/lib/metadata";
const content = serviceContent["corporate-transformation"];
export const metadata = pageMetadata(
  content.eyebrow,
  content.intro,
  "/services/corporate-transformation",
);
export default function Page() {
  return <EditorialPage content={content} />;
}
