import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Sovern Partners | Executive Search & Leadership Advisory",
  description:
    "Sovern Partners is a premier executive search and leadership advisory firm. We build the leadership teams that build the future.",
  keywords:
    "executive search, leadership advisory, board directors, CEO search, CHRO, leadership consulting",
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
      <body className="min-h-screen flex flex-col bg-white text-[#1C1C1E]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
