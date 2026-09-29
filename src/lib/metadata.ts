import type { Metadata } from "next";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Sovern Partners`,
      description,
      url: path,
      type: "website",
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
      title: `${title} | Sovern Partners`,
      description,
      images: ["/og.png"],
    },
  };
}
