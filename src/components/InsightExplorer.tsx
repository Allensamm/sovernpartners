"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Asterisk, Search } from "lucide-react";
import { articles } from "@/lib/articles";
export default function InsightExplorer() {
  const [filter, setFilter] = useState("All ideas");
  const [query, setQuery] = useState("");
  const visible = articles.filter(
    (a) =>
      (filter === "All ideas" || a.tag === filter) &&
      `${a.title} ${a.excerpt} ${a.tag}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <>
      <div className="filter-toolbar">
        <div className="filter-tabs" aria-label="Filter insights">
          {[
            "All ideas",
            "Leadership",
            "Executive search",
            "Culture",
            "On-demand talent",
          ].map((t) => (
            <button
              className={filter === t ? "selected" : ""}
              aria-pressed={filter === t}
              onClick={() => setFilter(t)}
              key={t}
            >
              {t}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={17} />
          <input
            placeholder="Find a fresh perspective"
            aria-label="Search insights"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <p className="results-count" aria-live="polite">
        {visible.length} {visible.length === 1 ? "perspective" : "perspectives"}{" "}
        to explore
      </p>
      <div className="insight-grid insight-library">
        {visible.map((a) => (
          <Link
            href={`/insights/${a.slug}`}
            className="insight-card"
            key={a.slug}
          >
            <div className={`insight-art ${a.color}`}>
              <span>{a.cover}</span>
              <Asterisk />
            </div>
            <p className="eyebrow">
              {a.tag} · {a.type}
            </p>
            <h3>{a.title}</h3>
            <p>{a.excerpt}</p>
            <span className="text-link">
              {a.readTime}
              <ArrowUpRight size={16} />
            </span>
          </Link>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="empty-state">
          <h3>No matching perspectives.</h3>
          <p>Try a different keyword or explore all our thinking.</p>
          <button
            className="button button-dark"
            onClick={() => {
              setFilter("All ideas");
              setQuery("");
            }}
          >
            Show all ideas
          </button>
        </div>
      )}
    </>
  );
}
