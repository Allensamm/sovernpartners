"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Executive Search", href: "/services/executive-search" },
      { label: "Leadership Advisory", href: "/services/leadership" },
      { label: "On-Demand Talent", href: "/services/on-demand-talent" },
      { label: "Corporate Transformation", href: "/services/corporate-transformation" },
      { label: "Organization & Culture", href: "/services/organization-culture" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Consumer Markets", href: "/industries#consumer" },
      { label: "Financial Services", href: "/industries#financial" },
      { label: "Healthcare & Life Sciences", href: "/industries#healthcare" },
      { label: "Private Equity", href: "/industries#pe" },
      { label: "Technology", href: "/industries#tech" },
      { label: "View All Industries", href: "/industries" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { label: "Articles & Reports", href: "/insights" },
      { label: "Podcast", href: "/insights/podcast" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "People", href: "/people" },
  { label: "Careers", href: "/careers" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navBg = scrolled
    ? "bg-white shadow-sm border-b border-[#E8E4DE]"
    : "bg-transparent";
  const navText = scrolled ? "text-[#0A1628]" : "text-white";
  const logoFilter = scrolled ? "" : "brightness-0 invert";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-20" ref={dropdownRef}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Sovern Partners"
            width={200}
            height={40}
            className={`h-10 w-auto transition-all duration-300 ${logoFilter}`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.children ? (
                <button
                  className={`flex items-center gap-1 font-['DM_Sans'] text-sm font-medium transition-colors duration-200 hover:text-[#C9A84C] ${navText}`}
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === item.label ? null : item.label
                    )
                  }
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`font-['DM_Sans'] text-sm font-medium transition-colors duration-200 hover:text-[#C9A84C] ${navText}`}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white border border-[#E8E4DE] shadow-xl rounded-sm overflow-hidden z-50">
                  <div className="h-0.5 bg-[#C9A84C]" />
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-5 py-3 text-sm text-[#1C1C1E] font-['DM_Sans'] hover:bg-[#F5F2ED] hover:text-[#C9A84C] transition-colors duration-150 border-b border-[#F0EDE8] last:border-0"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="font-['Jost'] uppercase tracking-widest text-xs font-medium px-5 py-2.5 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-250 rounded-sm"
          >
            Talk to an Advisor
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ${navText}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A1628] border-t border-[#1e3050]">
          <div className="px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-white font-['DM_Sans'] text-base border-b border-[#1e3050] hover:text-[#C9A84C] transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-1 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-[#9BA8B8] text-sm font-['DM_Sans'] hover:text-[#C9A84C] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center font-['Jost'] uppercase tracking-widest text-xs font-medium px-5 py-3 bg-[#C9A84C] text-[#0A1628] rounded-sm"
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
