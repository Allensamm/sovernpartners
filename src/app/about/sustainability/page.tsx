import { EditorialPage } from "@/components/PageSections";
import { aboutContent } from "@/lib/site-content";
import { pageMetadata } from "@/lib/metadata";
const content = aboutContent["sustainability"];
export const metadata = pageMetadata(
  content.eyebrow,
  content.intro,
  "/about/sustainability",
);
export default function Page() {
  return <EditorialPage content={content} />;
}
