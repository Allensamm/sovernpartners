"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { contactEmail } from "@/lib/site-content";
type Props = {
  kind?: "contact" | "candidate" | "ethics";
  initialInterest?: string;
};
export default function ContactForm({
  kind = "contact",
  initialInterest = "",
}: Props) {
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [message, setMessage] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      `Organisation / current role: ${d.get("company") || "Not provided"}`,
      `Interest: ${d.get("interest") || initialInterest || kind}`,
      `Location / preferred market: ${d.get("location") || "Not provided"}`,
      "",
      String(d.get("message")),
      "",
      kind === "candidate"
        ? "Please attach your CV before sending if you wish to share it."
        : "",
    ]
      .filter(Boolean)
      .join("\n");
    setMessage(body);
    setPrepared(true);
    setCopied(false);
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(`Sovern Partners — ${kind === "candidate" ? "Candidate introduction" : kind === "ethics" ? "Concern for review" : d.get("interest") || "New enquiry"}`)}&body=${encodeURIComponent(body)}`;
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <div className="form-panel">
      <p className="eyebrow">
        {kind === "candidate"
          ? "Your next chapter starts here"
          : kind === "ethics"
            ? "Share a concern"
            : "Tell us a little about you"}
      </p>
      <h2>
        {kind === "candidate"
          ? "Let’s get acquainted."
          : kind === "ethics"
            ? "We’re listening."
            : "A good place to start."}
      </h2>
      <p className="form-explainer">
        This form prepares an email in your email app. Review it and press send
        there. Your details are not submitted to this website.
      </p>
      <form onSubmit={submit}>
        <div className="form-grid">
          <label htmlFor={`${kind}-name`}>
            Your name <span>*</span>
            <input
              id={`${kind}-name`}
              name="name"
              autoComplete="name"
              required
              maxLength={120}
              placeholder="First and last name"
            />
          </label>
          <label htmlFor={`${kind}-email`}>
            Email address <span>*</span>
            <input
              id={`${kind}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={160}
              placeholder="you@example.com"
            />
          </label>
          <label htmlFor={`${kind}-company`}>
            {kind === "candidate"
              ? "Current role / organisation"
              : "Organisation"}
            <input
              id={`${kind}-company`}
              name="company"
              autoComplete="organization"
              maxLength={180}
              placeholder={
                kind === "candidate"
                  ? "A little about what you do"
                  : "Your company name"
              }
            />
          </label>
          <label htmlFor={`${kind}-interest`}>
            {kind === "candidate"
              ? "What’s on your mind?"
              : "I’d like to talk about"}
            <select
              id={`${kind}-interest`}
              name="interest"
              defaultValue={initialInterest || ""}
            >
              <option value="">Choose a topic</option>
              {[
                ...new Set([
                  ...(initialInterest ? [initialInterest] : []),
                  ...(kind === "candidate"
                    ? [
                        "My next leadership role",
                        "Interim or fractional opportunities",
                        "Joining the Sovern team",
                        "An exploratory conversation",
                      ]
                    : kind === "ethics"
                      ? [
                          "Conduct or communication",
                          "Privacy or data",
                          "A recruitment concern",
                          "Another concern",
                        ]
                      : [
                          "Hiring",
                          "Executive search",
                          "Leadership advisory",
                          "On-demand talent",
                          "Corporate transformation",
                          "Organisation & culture",
                          "Something else",
                        ]),
                ]),
              ].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
        </div>
        {kind === "candidate" && (
          <label htmlFor="candidate-location">
            Location & working preferences
            <input
              id="candidate-location"
              name="location"
              maxLength={180}
              placeholder="Where you’re based and where you’d like to work"
            />
          </label>
        )}
        <label htmlFor={`${kind}-message`}>
          {kind === "candidate"
            ? "Tell us about your experience and ambitions"
            : "How can we help?"}{" "}
          <span>*</span>
          <textarea
            id={`${kind}-message`}
            name="message"
            required
            minLength={10}
            maxLength={3000}
            rows={5}
            placeholder={
              kind === "candidate"
                ? "What you enjoy doing, the impact you’ve made, and what you’re looking for next…"
                : "A little context helps us start a useful conversation…"
            }
          />
        </label>
        <label className="consent-label">
          <input type="checkbox" required />
          <span>
            I have read the <Link href="/privacy">privacy notice</Link> and
            understand this will open my email app.
          </span>
        </label>
        <button className="button button-dark" type="submit">
          Prepare my email <ArrowUpRight size={18} />
        </button>
        {kind === "candidate" && (
          <p className="field-help">
            You can attach your CV in your email app before sending. Please
            leave out identification documents and sensitive personal
            information.
          </p>
        )}
      </form>
      {prepared && (
        <div className="form-result" role="status">
          <strong>Your email draft is ready.</strong>
          <p>
            Nothing has been sent yet. Finish sending in your email app. If it
            did not open, copy your message and email{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
          <button className="text-link" type="button" onClick={copy}>
            {copied ? <Check size={15} /> : <Copy size={15} />}{" "}
            {copied ? "Message copied" : "Copy my message"}
          </button>
          {copyError && (
            <>
              <p>Copy the text below manually:</p>
              <textarea
                readOnly
                aria-label="Prepared email text"
                value={message}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
