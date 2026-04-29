import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const BASE = "https://sovernpartners.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Sovern Partners | Executive Headhunter & Leadership Advisory Europe",
    template: "%s | Sovern Partners",
  },
  description:
    "Sovern Partners is Europe's premier executive headhunter and leadership advisory firm. We place C-suite leaders, board directors, and top executives across Germany, UK, France, UAE, and 28 global markets. What is a headhunter? We are.",
  keywords: [
    "headhunter",
    "executive headhunter",
    "headhunter europe",
    "headhunter germany",
    "headhunter deutschland",
    "headhunter jobs",
    "headhunter meaning",
    "what is a headhunter",
    "was ist ein headhunter",
    "IT headhunter",
    "executive search",
    "executive search firm europe",
    "executive search germany",
    "jobs europe",
    "remote jobs europe",
    "online job",
    "job london",
    "job frankfurt",
    "job berlin",
    "C-suite jobs",
    "CEO search",
    "CHRO search",
    "CFO search",
    "board director search",
    "leadership advisory",
    "talent acquisition",
    "independent headhunter",
    "top headhunter",
    "the headhunter",
  ],
  authors: [{ name: "Sovern Partners", url: BASE }],
  creator: "Sovern Partners",
  publisher: "Sovern Partners",
  category: "Executive Search & Headhunting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: ["de_DE", "fr_FR", "en_US"],
    url: BASE,
    siteName: "Sovern Partners",
    title: "Sovern Partners | Executive Headhunter & Leadership Advisory",
    description:
      "Europe's premier executive headhunter firm. We place extraordinary C-suite leaders across Germany, UK, France, and 28 global markets.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Sovern Partners — Executive Headhunter & Leadership Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovern Partners | Executive Headhunter & Leadership Advisory",
    description:
      "Europe's premier executive headhunter firm. We place extraordinary leaders across 28 global markets.",
    images: ["/logo.svg"],
  },
  alternates: {
    canonical: BASE,
    languages: {
      "en-GB": BASE,
      "de-DE": BASE,
      "fr-FR": BASE,
      "x-default": BASE,
    },
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Sovern Partners",
      url: BASE,
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/logo.svg`,
        contentUrl: `${BASE}/logo.svg`,
      },
      description:
        "Sovern Partners is Europe's leading executive headhunter and leadership advisory firm. We specialize in C-suite executive search, board director placement, and organizational transformation across Germany, the UK, France, and 28 global markets.",
      foundingDate: "1989",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 500 },
      areaServed: ["Europe", "Americas", "Asia Pacific", "Middle East"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "399 Park Avenue, 27th Floor",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10022",
        addressCountry: "US",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-212-555-0100",
          contactType: "customer service",
          areaServed: ["US", "GB", "DE", "FR", "AE", "SG"],
          availableLanguage: ["English", "German", "French"],
          email: "info@sovernpartners.com",
        },
        {
          "@type": "ContactPoint",
          contactType: "hiring",
          email: "careers@sovernpartners.com",
          availableLanguage: ["English", "German", "French"],
        },
      ],
      knowsAbout: [
        "Executive Search",
        "Headhunting",
        "Executive Headhunter",
        "Leadership Advisory",
        "C-Suite Recruitment",
        "Board Director Search",
        "CEO Search",
        "CHRO Search",
        "CFO Search",
        "Talent Acquisition",
        "Corporate Transformation",
        "Organization Design",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Executive Search & Advisory Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Search" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leadership Advisory" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "On-Demand Talent" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Transformation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Organization & Culture" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Sovern Partners",
      description: "Premier executive headhunter and leadership advisory firm in Europe",
      publisher: { "@id": `${BASE}/#organization` },
      inLanguage: ["en-GB", "en-US", "de-DE", "fr-FR"],
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE}/insights?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${jost.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="alternate" hrefLang="de" href={BASE} />
        <link rel="alternate" hrefLang="fr" href={BASE} />
        <link rel="alternate" hrefLang="en-gb" href={BASE} />
        <link rel="alternate" hrefLang="x-default" href={BASE} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#1C1C1E]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
