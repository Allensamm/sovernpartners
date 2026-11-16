"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const clients = [
  {
    name: "Sacramento Municipal Utility District (SMUD)",
    logo: "/clients/smud.png",
    className: "client-logo-smud",
  },
  {
    name: "Relyion Energy",
    logo: "/clients/relyion.png",
    className: "client-logo-relyion",
  },
  {
    name: "Tesla",
    logo: "/clients/tesla.svg",
    className: "client-logo-tesla",
  },
  {
    name: "Arcadis",
    logo: "/clients/arcadis.svg",
    className: "client-logo-arcadis",
  },
];

export default function ClientCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>(".client-card");
    const distance = firstCard ? firstCard.offsetWidth + 18 : track.clientWidth;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    track.scrollBy({ left: direction * distance, behavior });
  }

  return (
    <section className="client-section" aria-labelledby="client-heading">
      <div className="container">
        <div className="client-heading-row">
          <div>
            <p className="eyebrow">Good company</p>
            <h2 id="client-heading">
              Organisations we work <em>with.</em>
            </h2>
          </div>
          <div className="client-controls" aria-label="Carousel controls">
            <button
              className="client-control"
              type="button"
              aria-label="Show previous companies"
              onClick={() => scroll(-1)}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              className="client-control"
              type="button"
              aria-label="Show next companies"
              onClick={() => scroll(1)}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div
          className="client-carousel"
          ref={trackRef}
          role="group"
          aria-label="Companies that work with Sovern Partners"
          tabIndex={0}
        >
          {clients.map((client) => (
            <div className="client-card" key={client.name}>
              <div className="client-logo-frame">
                <Image
                  className={`client-logo ${client.className}`}
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(max-width: 760px) 70vw, 27vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
