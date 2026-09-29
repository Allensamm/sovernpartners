import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
const title = "Sovern Partners — Good people. Great possibilities.";
const description =
  "Executive search, leadership advisory and on-demand talent. A thoughtful, personal approach to connecting ambitious organisations with exceptional people.";
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Sovern Partners" },
  description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Sovern Partners",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 907,
        alt: "Sovern Partners — Good people. Great possibilities.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
