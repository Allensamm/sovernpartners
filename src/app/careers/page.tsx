"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, MapPin, Briefcase, Users, TrendingUp,
  Globe, BookOpen, Star, ChevronDown, ChevronUp,
  ExternalLink, Mail, Award, Lightbulb, Heart, Shield,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

const stats = [
  { value: "92%", label: "Partner Retention", sub: "of our Partners have built their entire career within Sovern" },
  { value: "28", label: "Global Markets", sub: "offices spanning six continents and every major economy" },
  { value: "500+", label: "Annual Placements", sub: "C-suite and board-level leaders placed every year" },
  { value: "35+", label: "Years of Excellence", sub: "decades of leadership advisory heritage and deep expertise" },
];

const values = [
  {
    icon: Star,
    title: "Excellence Without Compromise",
    desc: "We set the standard in our industry. Every engagement, every interaction, every outcome is held to an exceptional level of quality. We don't settle — and neither do our clients.",
  },
  {
    icon: Heart,
    title: "People-First Culture",
    desc: "Our people are our greatest asset. We invest deeply in your growth, wellbeing, and career trajectory — because when you thrive, our clients thrive.",
  },
  {
    icon: Lightbulb,
    title: "Intellectual Curiosity",
    desc: "We are students of leadership. Every engagement is an opportunity to learn, to challenge assumptions, and to bring new insight to the most complex organizational questions.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    desc: "Leadership knows no borders. Our global platform gives you exposure to diverse industries, cultures, and leadership models that broaden your perspective and sharpen your thinking.",
  },
  {
    icon: Shield,
    title: "Integrity in Everything",
    desc: "Trust is the foundation of everything we do. We operate with radical transparency — with clients, with candidates, and with one another.",
  },
  {
    icon: Award,
    title: "Impact that Lasts",
    desc: "The leaders we place shape entire organizations for years to come. Your work here will have a ripple effect that extends far beyond a single search engagement.",
  },
];

const programs = [
  {
    title: "Summer Associate Program",
    audience: "MBA Students",
    duration: "10 weeks",
    desc: "An immersive introduction to executive search and leadership advisory. Work directly with Partners on live client engagements, attend leadership forums, and present research findings to senior leaders.",
    badge: "Summer",
  },
  {
    title: "Analyst Development Program",
    audience: "Recent Undergraduates",
    duration: "2 years",
    desc: "A structured rotational program spanning research, candidate management, and client development. Designed to build the analytical and relationship skills that define a successful career in executive search.",
    badge: "Entry Level",
  },
  {
    title: "Leadership Advisory Rotation",
    audience: "Graduate / Post-MBA",
    duration: "18 months",
    desc: "A deep dive into our advisory practices — from organizational assessment and leadership development to culture transformation. For those who want to advise at the intersection of strategy and people.",
    badge: "Graduate",
  },
  {
    title: "Research Fellowship",
    audience: "Doctoral Candidates",
    duration: "12 months",
    desc: "Partner with our Knowledge & Insights team to produce original leadership research that influences the decisions of boards and executives globally. Publish, present, and shape the conversation.",
    badge: "Research",
  },
];

const openings = [
  { title: "Senior Partner – Technology Practice", location: "San Francisco, CA", dept: "Executive Search", level: "Senior Partner" },
  { title: "Partner – Healthcare & Life Sciences", location: "Chicago, IL / Remote", dept: "Executive Search", level: "Partner" },
  { title: "Principal – Leadership Advisory", location: "London, UK", dept: "Leadership Advisory", level: "Principal" },
  { title: "Associate – Private Equity Practice", location: "New York, NY", dept: "Executive Search", level: "Associate" },
  { title: "Research Analyst – Consumer Markets", location: "Chicago, IL", dept: "Research", level: "Analyst" },
  { title: "On-Demand Talent Specialist", location: "Remote", dept: "On-Demand Talent", level: "Specialist" },
  { title: "Director – Organization & Culture", location: "Dubai, UAE", dept: "Advisory", level: "Director" },
  { title: "Partner – Financial Services Practice", location: "New York, NY", dept: "Executive Search", level: "Partner" },
];

const offices = [
  { city: "New York", country: "USA", x: "20%", y: "38%" },
  { city: "Chicago", country: "USA", x: "17%", y: "35%" },
  { city: "San Francisco", country: "USA", x: "9%", y: "38%" },
  { city: "London", country: "UK", x: "45%", y: "28%" },
  { city: "Paris", country: "France", x: "47%", y: "30%" },
  { city: "Frankfurt", country: "Germany", x: "49%", y: "27%" },
  { city: "Dubai", country: "UAE", x: "60%", y: "42%" },
  { city: "Singapore", country: "Singapore", x: "77%", y: "55%" },
  { city: "Hong Kong", country: "China", x: "80%", y: "44%" },
  { city: "Tokyo", country: "Japan", x: "85%", y: "36%" },
  { city: "Sydney", country: "Australia", x: "84%", y: "72%" },
  { city: "São Paulo", country: "Brazil", x: "28%", y: "65%" },
  { city: "Toronto", country: "Canada", x: "19%", y: "32%" },
  { city: "Madrid", country: "Spain", x: "44%", y: "33%" },
  { city: "Mumbai", country: "India", x: "67%", y: "48%" },
];

const team = [
  {
    name: "Venkat G",
    title: "Senior Talent Acquisition & Independent Headhunter",
    region: "Global",
    img: "/team/venkat.jpg",
    email: "officialvenkatg@gmail.com",
  },
  {
    name: "Victoria Hartwell",
    title: "Global Head of Talent Acquisition",
    region: "Americas",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    email: "v.hartwell@sovernpartners.com",
  },
  {
    name: "James Okoro",
    title: "Director, Talent Acquisition",
    region: "Europe & Africa",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    email: "j.okoro@sovernpartners.com",
  },
  {
    name: "Sophie Marchetti",
    title: "Senior Talent Acquisition Partner",
    region: "Europe & Middle East",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
    email: "s.marchetti@sovernpartners.com",
  },
];

const depts = ["All", "Executive Search", "Leadership Advisory", "Research", "On-Demand Talent", "Advisory"];

/* ── Page ─────────────────────────────────────────────── */
export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const filtered = activeDept === "All"
    ? openings
    : openings.filter((j) => j.dept === activeDept);

  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#0A1628] pt-40 pb-0 overflow-hidden">
        {/* Gold left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-end">

            {/* Text */}
            <div className="pb-20">
              <p className="font-['Jost'] uppercase tracking-[0.25em] text-[#C9A84C] text-xs font-medium mb-6">
                Join Our Team
              </p>
              <h1
                className="font-['Cormorant_Garamond'] font-light text-white leading-[1.05] mb-8"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                We help our clients change the world,{" "}
                <em className="text-[#C9A84C] not-italic italic">one leadership team at a time.</em>
              </h1>
              <div className="w-14 h-px bg-[#C9A84C] mb-8" />
              <p className="font-['DM_Sans'] text-[#9BA8B8] leading-relaxed mb-10 max-w-lg" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}>
                An equal passion for people and problem-solving drives everything at Sovern Partners. We provide global executive search, corporate culture, leadership advisory, and on-demand talent solutions across virtually every industry and sector around the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#b8973e] transition-colors rounded-sm"
                >
                  Explore Openings <ArrowRight size={14} />
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/25 text-white font-['Jost'] uppercase tracking-widest text-xs font-medium hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all rounded-sm"
                >
                  Graduate Programs
                </a>
              </div>
            </div>

            {/* Hero image — flush to bottom */}
            <div className="relative h-[520px] lg:h-[580px] rounded-t-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=900&h=800&fit=crop&q=85"
                alt="Sovern Partners team"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A1628]/30" />
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          BY THE NUMBERS
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#0f2040] py-24 border-t border-[#1e3050]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-3">Why Top Talent Chooses Us</p>
              <h2
                className="font-['Cormorant_Garamond'] font-light text-white leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                By the numbers
              </h2>
            </div>
            <p className="font-['DM_Sans'] text-[#9BA8B8] text-sm max-w-sm leading-relaxed">
              Our track record speaks for itself. These numbers represent decades of dedication to exceptional people.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#1e3050]">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="p-8 lg:p-12 border-r border-b lg:border-b-0 border-[#1e3050] last:border-r-0 group"
              >
                <div className="w-8 h-px bg-[#C9A84C] mb-6" />
                <p
                  className="font-['Cormorant_Garamond'] font-light text-[#C9A84C] leading-none mb-3"
                  style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
                >
                  {s.value}
                </p>
                <p className="font-['Jost'] uppercase tracking-widest text-white text-xs font-medium mb-3">
                  {s.label}
                </p>
                <p className="font-['DM_Sans'] text-[#9BA8B8] text-xs leading-relaxed">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          VALUES / CULTURE
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left — sticky text */}
            <div className="lg:sticky lg:top-28">
              <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">Our Culture</p>
              <div className="w-10 h-px bg-[#C9A84C] mb-6" />
              <h2
                className="font-['Cormorant_Garamond'] font-light text-[#0A1628] leading-[1.1] mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              >
                A place where exceptional people do their best work.
              </h2>
              <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed text-sm mb-8">
                Sovern Partners was built on the belief that people are the ultimate driver of organizational success. That same belief shapes how we run our own firm — we are deeply invested in the growth, wellbeing, and long-term career success of every member of our team.
              </p>
              <div className="relative h-[260px] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=400&fit=crop&q=85"
                  alt="Sovern Partners culture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#0A1628]/20" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C]" />
              </div>
            </div>

            {/* Right — value cards */}
            <div className="space-y-5">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="group flex gap-5 p-6 border border-[#E8E4DE] hover:border-[#C9A84C] hover:shadow-md transition-all duration-300 rounded-sm"
                  >
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#F5F2ED] group-hover:bg-[#C9A84C]/10 rounded-sm transition-colors">
                      <Icon size={18} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#0A1628] mb-2 group-hover:text-[#C9A84C] transition-colors">
                        {v.title}
                      </h3>
                      <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          LIFE AT SOVERN — image mosaic
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#F5F2ED] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-14">
            <div>
              <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">Life at Sovern</p>
              <h2
                className="font-['Cormorant_Garamond'] font-light text-[#0A1628]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                More than a career. A community.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=500&fit=crop&q=80", tall: true, label: "Team Offsites" },
              { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=350&fit=crop&q=80", tall: false, label: "Leadership Forums" },
              { src: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&h=350&fit=crop&q=80", tall: false, label: "Global Collaboration" },
              { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=350&fit=crop&q=80", tall: false, label: "Client Events" },
              { src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=500&fit=crop&q=80", tall: true, label: "Executive Retreats" },
              { src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=350&fit=crop&q=80", tall: false, label: "Learning & Development" },
            ].map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-sm group cursor-pointer ${img.tall ? "row-span-2" : ""}`}
                style={{ height: img.tall ? "480px" : "228px" }}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0A1628]/40 group-hover:bg-[#0A1628]/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4">
                  <span className="font-['Jost'] uppercase tracking-widest text-white text-[10px] font-medium">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          OPEN POSITIONS
      ══════════════════════════════════════════════════ */}
      <section id="openings" className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
            <div>
              <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">Opportunities</p>
              <h2
                className="font-['Cormorant_Garamond'] font-light text-[#0A1628]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                Current openings
              </h2>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 font-['Jost'] uppercase tracking-widest text-xs font-medium text-[#0A1628] border-b border-[#C9A84C] pb-0.5 hover:text-[#C9A84C] transition-colors"
            >
              Don&apos;t see your role? Reach out <ArrowRight size={12} />
            </Link>
          </div>

          {/* Dept filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {depts.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                className={`px-4 py-2 font-['Jost'] uppercase tracking-widest text-xs rounded-sm transition-all duration-200 ${
                  activeDept === d
                    ? "bg-[#0A1628] text-white"
                    : "bg-[#F5F2ED] text-[#6B6B6B] hover:bg-[#E8E4DE]"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Job list */}
          <div className="space-y-2">
            {filtered.map((job) => (
              <div
                key={job.title}
                className="group border border-[#E8E4DE] hover:border-[#C9A84C] rounded-sm transition-all duration-250 overflow-hidden"
              >
                <button
                  className="w-full flex flex-col md:flex-row md:items-center gap-4 p-6 text-left"
                  onClick={() => setExpandedJob(expandedJob === job.title ? null : job.title)}
                >
                  <div className="flex-1">
                    <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] group-hover:text-[#C9A84C] transition-colors mb-1">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      <span className="font-['DM_Sans'] text-xs text-[#6B6B6B] flex items-center gap-1.5">
                        <MapPin size={10} className="text-[#C9A84C]" /> {job.location}
                      </span>
                      <span className="font-['DM_Sans'] text-xs text-[#6B6B6B]">{job.dept}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-3 py-1 bg-[#F5F2ED] font-['Jost'] uppercase tracking-widest text-[10px] text-[#6B6B6B] rounded-sm">
                      {job.level}
                    </span>
                    {expandedJob === job.title
                      ? <ChevronUp size={16} className="text-[#C9A84C]" />
                      : <ChevronDown size={16} className="text-[#9BA8B8] group-hover:text-[#C9A84C] transition-colors" />
                    }
                  </div>
                </button>
                {expandedJob === job.title && (
                  <div className="px-6 pb-6 border-t border-[#F0EDE8]">
                    <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed mt-4 mb-5">
                      Sovern Partners is seeking a distinguished {job.level} to join our{" "}
                      {job.dept} practice. The successful candidate will bring a proven track record of building
                      trusted relationships with senior executives, delivering exceptional search outcomes, and
                      contributing to the growth of a world-class firm. You will work with a team of highly
                      accomplished professionals across a global platform.
                    </p>
                    <div className="flex gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm"
                      >
                        Apply Now <ArrowRight size={12} />
                      </Link>
                      <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#E8E4DE] text-[#6B6B6B] font-['Jost'] uppercase tracking-widest text-xs hover:border-[#0A1628] hover:text-[#0A1628] transition-all rounded-sm">
                        Save Role
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          GRADUATE PROGRAMS
      ══════════════════════════════════════════════════ */}
      <section id="programs" className="bg-[#0A1628] py-28 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=900&fit=crop&q=70"
          alt="Graduate programs"
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.05 }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-40" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">Early Career</p>
            <h2
              className="font-['Cormorant_Garamond'] font-light text-white leading-tight mb-6"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Internship &amp; Graduate Programs
            </h2>
            <p className="font-['DM_Sans'] text-[#9BA8B8] leading-relaxed text-sm max-w-2xl mx-auto">
              We invest in the next generation of leadership advisors. Our programs give ambitious early-career professionals
              an unmatched window into the world of executive search and leadership advisory — with real responsibility from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {programs.map((p) => (
              <div
                key={p.title}
                className="group p-8 bg-[#0f2040] border border-[#1e3050] hover:border-[#C9A84C] rounded-sm transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/30 font-['Jost'] uppercase tracking-widest text-[10px] text-[#C9A84C] rounded-sm">
                    {p.badge}
                  </span>
                  <span className="font-['DM_Sans'] text-xs text-[#9BA8B8]">{p.duration}</span>
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-white group-hover:text-[#C9A84C] transition-colors mb-1">
                  {p.title}
                </h3>
                <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-[10px] mb-4">{p.audience}</p>
                <p className="font-['DM_Sans'] text-[#9BA8B8] text-sm leading-relaxed mb-6">{p.desc}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-['Jost'] uppercase tracking-widest text-xs font-medium text-[#C9A84C] hover:gap-3 transition-all duration-200"
                >
                  Learn More <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          GLOBAL OFFICES — map
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#0A1628] py-24 border-t border-[#1e3050]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
            <div>
              <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">Where We Work</p>
              <h2
                className="font-['Cormorant_Garamond'] font-light text-white"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                Global Offices
              </h2>
              <p className="font-['DM_Sans'] text-[#9BA8B8] text-sm mt-3">
                Select a region to see our offices
              </p>
            </div>
            <Link
              href="/offices"
              className="shrink-0 inline-flex items-center gap-2 font-['Jost'] uppercase tracking-widest text-xs font-medium text-[#C9A84C] border-b border-[#C9A84C]/40 pb-0.5 hover:border-[#C9A84C] transition-colors"
            >
              View All Offices <ArrowRight size={12} />
            </Link>
          </div>

          {/* World map with pins */}
          <div className="relative w-full bg-[#0f2040] border border-[#1e3050] rounded-sm overflow-hidden" style={{ height: "420px" }}>
            {/* World map background */}
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&h=700&fit=crop&q=60"
              alt="World map"
              fill
              sizes="100vw"
              className="object-cover object-center"
              style={{ opacity: 0.2, mixBlendMode: "luminosity" }}
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/60 via-transparent to-[#0A1628]/60" />

            {/* City pins */}
            {offices.map((office) => (
              <div
                key={office.city}
                className="absolute group cursor-pointer"
                style={{ left: office.x, top: office.y, transform: "translate(-50%, -50%)" }}
              >
                {/* Ripple */}
                <span className="absolute inset-0 rounded-full bg-[#C9A84C]/20 animate-ping" style={{ animationDuration: "3s" }} />
                {/* Pin */}
                <div className="relative w-2.5 h-2.5 rounded-full bg-[#C9A84C] border-2 border-[#C9A84C]/50 group-hover:scale-150 transition-transform duration-200" />
                {/* Label */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  <div className="bg-[#0A1628] border border-[#C9A84C]/30 px-3 py-1.5 rounded-sm shadow-xl">
                    <p className="font-['Jost'] uppercase tracking-widest text-[10px] text-white font-medium">{office.city}</p>
                    <p className="font-['DM_Sans'] text-[9px] text-[#9BA8B8]">{office.country}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats overlay */}
            <div className="absolute bottom-5 left-5 flex gap-6">
              <div>
                <p className="font-['Cormorant_Garamond'] text-3xl font-light text-[#C9A84C]">28</p>
                <p className="font-['Jost'] uppercase tracking-widest text-[#9BA8B8] text-[9px]">Markets</p>
              </div>
              <div className="w-px bg-[#1e3050]" />
              <div>
                <p className="font-['Cormorant_Garamond'] text-3xl font-light text-[#C9A84C]">6</p>
                <p className="font-['Jost'] uppercase tracking-widest text-[#9BA8B8] text-[9px]">Continents</p>
              </div>
              <div className="w-px bg-[#1e3050]" />
              <div>
                <p className="font-['Cormorant_Garamond'] text-3xl font-light text-[#C9A84C]">15+</p>
                <p className="font-['Jost'] uppercase tracking-widest text-[#9BA8B8] text-[9px]">Offices</p>
              </div>
            </div>
          </div>

          {/* Office city grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-5">
            {offices.map((o) => (
              <div
                key={o.city}
                className="flex items-center gap-2 px-4 py-3 bg-[#0f2040] border border-[#1e3050] hover:border-[#C9A84C] rounded-sm transition-colors group cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                <div>
                  <p className="font-['DM_Sans'] text-xs text-white group-hover:text-[#C9A84C] transition-colors">{o.city}</p>
                  <p className="font-['DM_Sans'] text-[10px] text-[#9BA8B8]">{o.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          TALENT ACQUISITION TEAM
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-14">
            <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">Get In Touch</p>
            <h2
              className="font-['Cormorant_Garamond'] font-light text-[#0A1628] mb-5"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
            >
              Meet our Talent Acquisition Team
            </h2>
            <p className="font-['DM_Sans'] text-[#6B6B6B] text-sm leading-relaxed max-w-xl">
              Our recruiters are here to guide you through your Sovern Partners journey — from your first conversation to your first day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group border border-[#E8E4DE] hover:border-[#C9A84C] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* Photo */}
                <div className="relative h-56 overflow-hidden bg-[#F5F2ED]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C] translate-y-px group-hover:translate-y-0 transition-transform" />
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] mb-0.5">{member.name}</h3>
                  <p className="font-['DM_Sans'] text-xs text-[#6B6B6B] mb-1">{member.title}</p>
                  <p className="font-['Jost'] uppercase tracking-widest text-[10px] text-[#C9A84C] mb-5">{member.region}</p>

                  <div className="flex gap-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 text-center font-['Jost'] uppercase tracking-widest text-[10px] font-medium py-2.5 bg-[#0A1628] text-white hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm flex items-center justify-center gap-1.5"
                    >
                      <Mail size={10} /> Contact
                    </a>
                    <button className="flex-1 text-center font-['Jost'] uppercase tracking-widest text-[10px] font-medium py-2.5 border border-[#E8E4DE] text-[#6B6B6B] hover:border-[#0A1628] hover:text-[#0A1628] transition-all rounded-sm flex items-center justify-center gap-1.5">
                      <ExternalLink size={10} /> Connect
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          RECRUITMENT INTEGRITY
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#F5F2ED] py-16 border-t border-[#E8E4DE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-center gap-6 p-8 bg-white border border-[#E8E4DE] rounded-sm">
            <Shield size={28} className="text-[#C9A84C] shrink-0" />
            <div className="flex-1">
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] mb-1">
                Employment & Recruitment Integrity
              </h3>
              <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed">
                Sovern Partners does not charge fees to candidates. We will never request payment, gift cards, or personal financial information as part of our recruitment process. All legitimate opportunities are posted on this page. If you receive a suspicious communication claiming to be from Sovern Partners, please report it to us immediately.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-[#C9A84C] text-[#C9A84C] font-['Jost'] uppercase tracking-widest text-xs font-medium hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm"
            >
              Report Fraud <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#0A1628] py-24 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="font-['Jost'] uppercase tracking-[0.25em] text-[#C9A84C] text-xs font-medium mb-5">Ready to Begin?</p>
          <h2
            className="font-['Cormorant_Garamond'] font-light text-white leading-tight mb-8 mx-auto"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", maxWidth: "700px" }}
          >
            Make Sovern Partners an impactful part of your career journey.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#b8973e] transition-colors rounded-sm"
            >
              See Open Roles <ArrowRight size={14} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/25 text-white font-['Jost'] uppercase tracking-widest text-xs font-medium hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all rounded-sm"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
