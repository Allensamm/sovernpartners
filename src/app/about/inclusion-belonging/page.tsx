import { EditorialPage } from "@/components/PageSections";
import { aboutContent } from "@/lib/site-content";
import { pageMetadata } from "@/lib/metadata";
const content = aboutContent["inclusion-belonging"];
export const metadata = pageMetadata(
  content.eyebrow,
  content.intro,
  "/about/inclusion-belonging",
);
export default function Page() {
  return <EditorialPage content={content} />;
}
