import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return (
    <section className="section container error-page">
      <p className="eyebrow">404 · A small detour</p>
      <h1>
        This page has
        <br />
        <em>moved on.</em>
      </h1>
      <p>
        Let’s find you somewhere useful. Explore our services, read a fresh
        perspective or head back to the beginning.
      </p>
      <div className="button-row">
        <Link href="/" className="button button-dark">
          Back to our world
          <ArrowUpRight size={18} />
        </Link>
        <Link href="/services" className="text-link">
          Explore our services
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
