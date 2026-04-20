"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search, Users, Zap, RefreshCw, Building2,
  ArrowRight, Headphones, Play, ChevronRight,
} from "lucide-react";

/* ── Intersection observer hook ──────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Data ─────────────────────────────────────────────────── */
const services = [
  { icon: Search,     label: "Executive Search",         href: "/services/executive-search",       desc: "C-suite and board-level placements across every industry." },
  { icon: Users,      label: "Leadership Advisory",      href: "/services/leadership",             desc: "Develop, assess, and accelerate leaders at every level." },
  { icon: Zap,        label: "On-Demand Talent",         href: "/services/on-demand-talent",       desc: "Interim executives and project leaders when you need them." },
  { icon: RefreshCw,  label: "Corporate Transformation", href: "/services/corporate-transformation", desc: "Navigate complexity and emerge stronger." },
  { icon: Building2,  label: "Organization & Culture",   href: "/services/organization-culture",   desc: "Shape culture into your greatest competitive advantage." },
];

const stats = [
  { value: "500+", label: "Placements Annually" },
  { value: "28",   label: "Global Markets" },
  { value: "92%",  label: "Retention at 2 Years" },
  { value: "35+",  label: "Years of Excellence" },
];

const insights = [
  { tag: "Report",  title: "The CEO Agenda 2025: Leading Through Uncertainty",             excerpt: "Our annual survey of 800+ CEOs reveals the five forces reshaping executive priorities in an era of disruption.", date: "March 2025",    readTime: "12 min read", href: "/insights", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=340&fit=crop&q=80" },
  { tag: "Article", title: "Why Board Diversity Still Falls Short — and What to Do About It", excerpt: "Despite progress, boards remain homogeneous at the top. We examine the structural barriers and who's breaking through.", date: "February 2025", readTime: "8 min read",  href: "/insights", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=340&fit=crop&q=80" },
  { tag: "Podcast", title: "The CHRO Revolution: HR as the New Strategic Heartbeat",       excerpt: "A conversation with three Chief People Officers on how the role has fundamentally shifted since 2020.",  date: "January 2025",  readTime: "42 min",      href: "/insights/podcast", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=340&fit=crop&q=80" },
];

const industries = [
  "Financial Services","Technology","Healthcare & Life Sciences","Private Equity",
  "Industrial","Consumer Markets","Professional Services","Social Impact",
];

/* ── Page ─────────────────────────────────────────────────── */
export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const about    = useInView();
  const svcSect  = useInView();
  const statSect = useInView();
  const insSect  = useInView();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay = 0, extra = "") =>
    `transition-all duration-700 ${extra} ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <div className="overflow-x-hidden">

      {/* ════════════════════════════════════════════════
          HERO — full-viewport with cinematic image
      ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]">

        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop&q=85"
          alt="Executive leadership team"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ mixBlendMode: "luminosity", opacity: 0.18 }}
        />

        {/* Deep navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/92 to-[#0A1628]/60" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A1628] to-transparent" />
        {/* Gold left accent */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-70" />

        {/* Content */}
        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-28">
            <div className="max-w-3xl">

              <p
                className="font-['Jost'] uppercase tracking-[0.25em] text-[#C9A84C] text-xs font-medium mb-7"
                style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 0.8s ease 0.1s" }}
              >
                Executive Search &amp; Leadership Advisory
              </p>

              <h1
                className="font-['Cormorant_Garamond'] font-light text-white leading-[1.05] mb-7"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(28px)",
                  transition: "opacity 1s ease 0.25s, transform 1s ease 0.25s",
                }}
              >
                The right leader<br />
                <em className="text-[#C9A84C] not-italic italic">changes everything.</em>
              </h1>

              <div
                className="w-14 h-px bg-[#C9A84C] mb-8"
                style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 0.7s ease 0.5s" }}
              />

              <p
                className="font-['DM_Sans'] text-[#9BA8B8] leading-relaxed mb-12 max-w-xl"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s",
                }}
              >
                We partner with the world&apos;s most ambitious organizations to identify,
                develop, and retain exceptional leaders — at every level, across every industry.
              </p>

              <div
                className="flex flex-wrap gap-4"
                style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 0.8s ease 0.65s" }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#b8973e] transition-colors rounded-sm"
                >
                  Explore Our Services <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/25 text-white font-['Jost'] uppercase tracking-widest text-xs font-medium hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all rounded-sm"
                >
                  Talk to an Advisor
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
          <span className="font-['Jost'] uppercase tracking-[0.2em] text-white text-[9px]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>


      {/* ════════════════════════════════════════════════
          SERVICES STRIP
      ════════════════════════════════════════════════ */}
      <section ref={svcSect.ref} className="bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border border-[#E0DDD8]">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.label}
                  href={svc.href}
                  className="group flex flex-col items-start p-7 border-r border-b lg:border-b-0 border-[#E0DDD8] last:border-r-0 hover:bg-[#0A1628] transition-colors duration-300"
                  style={{
                    opacity: svcSect.inView ? 1 : 0,
                    transform: svcSect.inView ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.55s ease ${i * 0.08}s`,
                  }}
                >
                  <Icon size={20} className="text-[#C9A84C] mb-4 shrink-0" />
                  <h3 className="font-['Cormorant_Garamond'] text-base font-semibold text-[#0A1628] group-hover:text-white mb-2 leading-snug">{svc.label}</h3>
                  <p  className="font-['DM_Sans'] text-[11px] text-[#6B6B6B] group-hover:text-[#9BA8B8] leading-relaxed">{svc.desc}</p>
                  <ChevronRight size={14} className="mt-4 text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════
          ABOUT TEASER — split: text + image
      ════════════════════════════════════════════════ */}
      <section ref={about.ref} className="bg-white py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div
              style={{
                opacity: about.inView ? 1 : 0,
                transform: about.inView ? "translateX(0)" : "translateX(-32px)",
                transition: "all 0.75s ease",
              }}
            >
              <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">Who We Are</p>
              <div className="w-10 h-px bg-[#C9A84C] mb-6" />
              <h2
                className="font-['Cormorant_Garamond'] font-light text-[#0A1628] leading-[1.1] mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              >
                Leadership is the single greatest driver of organizational performance.
              </h2>
              <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-5 text-sm">
                Sovern Partners has helped boards, CEOs, and senior teams navigate complex leadership challenges — from hiring transformational executives to building cultures built for the long run.
              </p>
              <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-10 text-sm">
                We believe that when the right leader steps into the right role, the ripple effect transforms entire organizations — and the communities they serve.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-['Jost'] uppercase tracking-widest text-xs font-medium text-[#0A1628] border-b border-[#C9A84C] pb-0.5 hover:text-[#C9A84C] transition-colors"
              >
                About Sovern Partners <ArrowRight size={12} />
              </Link>
            </div>

            {/* Image */}
            <div
              className="relative"
              style={{
                opacity: about.inView ? 1 : 0,
                transform: about.inView ? "translateX(0)" : "translateX(32px)",
                transition: "all 0.75s ease 0.2s",
              }}
            >
              <div className="relative h-[480px] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&h=700&fit=crop&q=85"
                  alt="Executive partnership and leadership"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                {/* Gold overlay strip */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A84C]" />
              </div>
              {/* Float stat card */}
              <div className="absolute -bottom-6 -left-6 bg-[#0A1628] px-8 py-6 shadow-2xl">
                <p className="font-['Cormorant_Garamond'] text-4xl font-light text-[#C9A84C] mb-1">92%</p>
                <p className="font-['Jost'] uppercase tracking-widest text-white text-[10px]">2-Year Retention Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════════════ */}
      <section ref={statSect.ref} className="bg-[#0A1628] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1e3050]">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="text-center px-6 py-6"
                style={{
                  opacity: statSect.inView ? 1 : 0,
                  transform: statSect.inView ? "translateY(0)" : "translateY(16px)",
                  transition: `all 0.55s ease ${i * 0.15}s`,
                }}
              >
                <p className="font-['Cormorant_Garamond'] text-5xl font-light text-[#C9A84C] mb-2">{s.value}</p>
                <p className="font-['Jost'] uppercase tracking-widest text-[#9BA8B8] text-[11px]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════
          WHAT WE DO — image left, text right
      ════════════════════════════════════════════════ */}
      <section className="bg-[#F5F2ED] py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div className="relative h-[420px] rounded-sm overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=600&fit=crop&q=85"
                alt="Leadership strategy board meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/20 to-transparent" />
              {/* Stat float */}
              <div className="absolute top-6 right-6 bg-white px-6 py-4 shadow-xl">
                <p className="font-['Cormorant_Garamond'] text-3xl font-light text-[#0A1628] mb-0.5">500+</p>
                <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-[10px]">Annual Placements</p>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">Our Services</p>
              <div className="w-10 h-px bg-[#C9A84C] mb-6" />
              <h2
                className="font-['Cormorant_Garamond'] font-light text-[#0A1628] leading-[1.1] mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              >
                Integrated leadership solutions — built for every stage of your journey.
              </h2>
              <div className="space-y-4 mb-10">
                {services.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.label}
                      href={svc.href}
                      className="flex items-center gap-4 group py-3 border-b border-[#E0DDD8] hover:border-[#C9A84C] transition-colors"
                    >
                      <Icon size={16} className="text-[#C9A84C] shrink-0" />
                      <span className="font-['DM_Sans'] text-sm text-[#1C1C1E] group-hover:text-[#C9A84C] transition-colors flex-1">{svc.label}</span>
                      <ArrowRight size={13} className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm"
              >
                View All Services <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════
          INDUSTRIES
      ════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
            <div>
              <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">Industry Expertise</p>
              <h2
                className="font-['Cormorant_Garamond'] font-light text-[#0A1628]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                Integrated solutions across industries
              </h2>
            </div>
            <Link
              href="/industries"
              className="shrink-0 inline-flex items-center gap-2 font-['Jost'] uppercase tracking-widest text-xs font-medium text-[#0A1628] border-b border-[#C9A84C] pb-0.5 hover:text-[#C9A84C] transition-colors"
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {industries.map((ind) => (
              <Link
                key={ind}
                href="/industries"
                className="px-5 py-2.5 bg-[#F5F2ED] border border-[#E0DDD8] font-['DM_Sans'] text-sm text-[#1C1C1E] hover:bg-[#0A1628] hover:text-white hover:border-[#0A1628] transition-all duration-250 rounded-sm"
              >
                {ind}
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════
          INSIGHTS — cards with images
      ════════════════════════════════════════════════ */}
      <section ref={insSect.ref} className="bg-[#F5F2ED] py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-14">
            <div>
              <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">Latest Thinking</p>
              <h2
                className="font-['Cormorant_Garamond'] font-light text-[#0A1628]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                Award-winning insight. Executive impact.
              </h2>
            </div>
            <Link
              href="/insights"
              className="shrink-0 inline-flex items-center gap-2 font-['Jost'] uppercase tracking-widest text-xs font-medium text-[#0A1628] border-b border-[#C9A84C] pb-0.5 hover:text-[#C9A84C] transition-colors"
            >
              View All Insights <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((article, i) => (
              <Link
                key={article.title}
                href={article.href}
                className="group bg-white border border-[#E0DDD8] hover:border-[#C9A84C] hover:shadow-xl transition-all duration-350 rounded-sm overflow-hidden flex flex-col"
                style={{
                  opacity: insSect.inView ? 1 : 0,
                  transform: insSect.inView ? "translateY(0)" : "translateY(28px)",
                  transition: `all 0.6s ease ${i * 0.15}s`,
                }}
              >
                {/* Card image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0A1628]/30 group-hover:bg-[#0A1628]/10 transition-colors" />
                  <span className="absolute top-4 left-4 font-['Jost'] uppercase tracking-widest text-xs font-medium px-3 py-1 bg-[#C9A84C] text-[#0A1628] rounded-sm">
                    {article.tag}
                  </span>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed flex-1 mb-5">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#F0EDE8]">
                    <span className="font-['DM_Sans'] text-xs text-[#6B6B6B]">{article.date} · {article.readTime}</span>
                    <span className="font-['Jost'] uppercase tracking-widest text-[10px] text-[#C9A84C] flex items-center gap-1">
                      {article.tag === "Podcast" ? "Listen" : "Read"} <ArrowRight size={10} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════
          PODCAST
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0A1628] py-24 relative overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1920&h=800&fit=crop&q=75"
          alt="Podcast studio"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-8"
          style={{ opacity: 0.06 }}
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">The Sovern Partners Podcast</p>
              <h2
                className="font-['Cormorant_Garamond'] font-light text-white leading-[1.1] mb-6"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                Conversations with the executives shaping tomorrow.
              </h2>
              <p className="font-['DM_Sans'] text-[#9BA8B8] leading-relaxed text-sm mb-8">
                Each week, our consultants sit down with board directors, CEOs, CHROs, and emerging leaders to explore the challenges — and opportunities — defining modern leadership.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/insights/podcast"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#b8973e] transition-colors rounded-sm"
                >
                  <Play size={12} fill="currentColor" /> Listen Now
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-['Jost'] uppercase tracking-widest text-xs font-medium hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all rounded-sm"
                >
                  <Headphones size={14} /> Subscribe
                </a>
              </div>
            </div>

            <div className="bg-[#0f2040] border border-[#1e3050] rounded-sm overflow-hidden">
              {/* Episode image */}
              <div className="relative h-44">
                <Image
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=400&fit=crop&q=80"
                  alt="Podcast episode"
                  fill
                  sizes="50vw"
                  className="object-cover object-center opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f2040]" />
                <div className="absolute bottom-4 left-6">
                  <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs">Latest Episode · Ep. 84</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-white leading-snug mb-2">
                  From Operator to Visionary: How CEOs Navigate Radical Change
                </h3>
                <p className="font-['DM_Sans'] text-sm text-[#9BA8B8] mb-5 leading-relaxed">
                  With Sarah Chen, CEO of Meridian Health Systems — on digital transformation, board dynamics, and leading through disruption.
                </p>
                <div className="flex items-center justify-between border-t border-[#1e3050] pt-4">
                  <p className="font-['DM_Sans'] text-xs text-[#4a5568]">58 min · April 2025</p>
                  <button className="flex items-center gap-2 text-[#C9A84C] font-['Jost'] uppercase tracking-widest text-xs">
                    <Play size={13} fill="currentColor" /> Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════
          GLOBAL PRESENCE — image banner
      ════════════════════════════════════════════════ */}
      <section className="relative h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&h=600&fit=crop&q=80"
          alt="Global cities — Sovern Partners offices worldwide"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0A1628]/75" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-3">Global Reach</p>
              <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light text-white">28 markets. One unwavering mission.</h2>
            </div>
            <Link
              href="/offices"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 border border-[#C9A84C] text-[#C9A84C] font-['Jost'] uppercase tracking-widest text-xs font-medium hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm"
            >
              View Our Offices <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════
          CLOSING CTA
      ════════════════════════════════════════════════ */}
      <section className="bg-[#F5F2ED] py-28 text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="w-10 h-px bg-[#C9A84C] mx-auto mb-8" />
          <h2
            className="font-['Cormorant_Garamond'] font-light text-[#0A1628] leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            We build the leadership teams<br className="hidden sm:block" />
            <em className="text-[#C9A84C] not-italic italic"> that build the future.</em>
          </h2>
          <p className="font-['DM_Sans'] text-[#6B6B6B] text-base leading-relaxed max-w-lg mx-auto mb-10">
            Over 500 executive placements annually. 28 markets. One unwavering commitment: to match exceptional leaders with organizations that deserve them.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-10 py-4 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm"
          >
            Start the Conversation <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}
