"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { industries } from "@/lib/site-content";
export default function IndustryExplorer() {
  const [category, setCategory] = useState("All industries");
  const [query, setQuery] = useState("");
  const visible = industries.filter(
    (i) =>
      (category === "All industries" || category === i.category) &&
      `${i.name} ${i.text} ${i.roles}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <>
      <div className="filter-toolbar">
        <div className="filter-tabs" aria-label="Filter industries">
          {[
            "All industries",
            "Business & capital",
            "Innovation & growth",
            "People & impact",
          ].map((c) => (
            <button
              key={c}
              className={category === c ? "selected" : ""}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={17} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find your industry"
            aria-label="Search industries"
          />
        </label>
      </div>
      <p className="results-count" aria-live="polite">
        {visible.length} {visible.length === 1 ? "industry" : "industries"}
      </p>
      <div className="industry-grid">
        {visible.map((i) => (
          <article id={i.id} key={i.id} className="industry-card">
            <span className="eyebrow">{i.category}</span>
            <h3>{i.name}</h3>
            <p>{i.text}</p>
            <p className="industry-roles">{i.roles}</p>
            <Link
              href={`/contact?interest=${encodeURIComponent(i.name)}`}
              className="text-link"
            >
              Talk about your sector <ArrowUpRight size={16} />
            </Link>
          </article>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="empty-state">
          <h3>No matching industries.</h3>
          <p>Try a broader search, or tell us about your sector.</p>
          <button
            className="button button-dark"
            onClick={() => {
              setCategory("All industries");
              setQuery("");
            }}
          >
            Show all industries
          </button>
        </div>
      )}
    </>
  );
}
