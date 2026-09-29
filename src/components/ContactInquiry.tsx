"use client";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";
export default function ContactInquiry() {
  const params = useSearchParams();
  const interest = (params.get("interest") || "").slice(0, 120);
  return <ContactForm key={interest} initialInterest={interest} />;
}
