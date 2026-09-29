import { EditorialPage } from "@/components/PageSections";
import { aboutContent } from "@/lib/site-content";
import { pageMetadata } from "@/lib/metadata";
const content = aboutContent["purpose-vision-values"];
export const metadata = pageMetadata(
  content.eyebrow,
  content.intro,
  "/about/purpose-vision-values",
);
export default function Page() {
  return <EditorialPage content={content} />;
}
