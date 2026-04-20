import type { Metadata } from "next";

const BASE = "https://sovernpartners.com";

export const metadata: Metadata = {
  title: "Headhunter Jobs & Executive Careers in Europe | Sovern Partners",
  description:
    "Join Sovern Partners — Europe's top executive headhunter firm. Explore headhunter jobs, remote jobs, and executive career opportunities in London, Frankfurt, Berlin, Dubai, and 28 global markets. Job vacancies in executive search, leadership advisory, and talent acquisition.",
  keywords: [
    "headhunter jobs",
    "headhunter job",
    "job headhunter",
    "headhunter karriere",
    "headhunter career",
    "executive search jobs",
    "talent acquisition jobs europe",
    "jobs london",
    "jobs frankfurt",
    "job berlin",
    "job hamburg",
    "remote job",
    "online job europe",
    "teilzeit job",
    "executive jobs",
    "leadership advisory jobs",
    "stellenangebote",
    "jobs germany",
    "job center europe",
    "independent headhunter",
    "headhunter global",
    "careers executive search firm",
  ],
  alternates: {
    canonical: `${BASE}/careers`,
    languages: {
      "en-GB": `${BASE}/careers`,
      "de-DE": `${BASE}/careers`,
      "x-default": `${BASE}/careers`,
    },
  },
  openGraph: {
    title: "Headhunter Jobs & Executive Careers | Sovern Partners Europe",
    description:
      "Explore headhunter jobs, remote executive roles, and career opportunities across Europe and globally at Sovern Partners.",
    url: `${BASE}/careers`,
    type: "website",
  },
};

const today = new Date().toISOString().split("T")[0];
const validThrough = "2026-12-31";

const jobPostings = [
  {
    "@type": "JobPosting",
    title: "Senior Partner – Technology Practice",
    description:
      "Lead executive search mandates for technology companies. Source and assess C-suite and board-level leaders including CTOs, CIOs, and CEOs. Partner with Fortune 500 and high-growth technology clients across the Americas and Europe.",
    datePosted: today,
    validThrough,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Sovern Partners",
      sameAs: BASE,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: { "@type": "QuantitativeValue", minValue: 250000, maxValue: 500000, unitText: "YEAR" },
    },
    jobBenefits: "Competitive compensation, global travel, leadership development programs",
    occupationalCategory: "Executive Search, Headhunting",
    industry: "Executive Search & Headhunting",
  },
  {
    "@type": "JobPosting",
    title: "Partner – Healthcare & Life Sciences",
    description:
      "Drive executive search and leadership advisory for healthcare, biotech, and life sciences clients. Source C-suite talent including CEOs, CHROs, CMOs, and board directors. Remote-friendly with Chicago base.",
    datePosted: today,
    validThrough,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Sovern Partners",
      sameAs: BASE,
    },
    jobLocation: [
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chicago",
          addressRegion: "IL",
          addressCountry: "US",
        },
      },
    ],
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "United States" },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: { "@type": "QuantitativeValue", minValue: 200000, maxValue: 400000, unitText: "YEAR" },
    },
    occupationalCategory: "Executive Search, Headhunting",
    industry: "Executive Search & Headhunting",
  },
  {
    "@type": "JobPosting",
    title: "Principal – Leadership Advisory",
    description:
      "Deliver high-impact leadership advisory engagements for FTSE 100 and European clients. Advise boards and executive teams on succession planning, leadership assessment, and organizational transformation. Based in London.",
    datePosted: today,
    validThrough,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Sovern Partners",
      sameAs: BASE,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "GBP",
      value: { "@type": "QuantitativeValue", minValue: 120000, maxValue: 200000, unitText: "YEAR" },
    },
    occupationalCategory: "Leadership Advisory, Executive Consulting",
    industry: "Executive Search & Headhunting",
  },
  {
    "@type": "JobPosting",
    title: "On-Demand Talent Specialist",
    description:
      "Place senior interim executives and on-demand leaders for clients across Europe and globally. Remote position — work from anywhere. Ideal for experienced headhunters and talent acquisition professionals.",
    datePosted: today,
    validThrough,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Sovern Partners",
      sameAs: BASE,
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "United States" },
    ],
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: { "@type": "QuantitativeValue", minValue: 80000, maxValue: 150000, unitText: "YEAR" },
    },
    occupationalCategory: "Talent Acquisition, Headhunting",
    industry: "Executive Search & Headhunting",
  },
  {
    "@type": "JobPosting",
    title: "Director – Organization & Culture",
    description:
      "Lead organizational design and culture transformation engagements for international clients in the Middle East. Based in Dubai with global travel.",
    datePosted: today,
    validThrough,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Sovern Partners",
      sameAs: BASE,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    occupationalCategory: "Organizational Development, Advisory",
    industry: "Executive Search & Headhunting",
  },
];

const careersSchema = {
  "@context": "https://schema.org",
  "@graph": jobPostings,
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
      />
      {children}
    </>
  );
}
