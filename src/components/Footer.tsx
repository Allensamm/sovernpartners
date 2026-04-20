import Link from "next/link";
import Image from "next/image";
import { Mail, ExternalLink } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Executive Search", href: "/services/executive-search" },
    { label: "Leadership Advisory", href: "/services/leadership" },
    { label: "On-Demand Talent", href: "/services/on-demand-talent" },
    { label: "Corporate Transformation", href: "/services/corporate-transformation" },
    { label: "Organization & Culture", href: "/services/organization-culture" },
  ],
  Industries: [
    { label: "Consumer Markets", href: "/industries" },
    { label: "Financial Services", href: "/industries" },
    { label: "Healthcare & Life Sciences", href: "/industries" },
    { label: "Private Equity", href: "/industries" },
    { label: "Technology", href: "/industries" },
    { label: "View All", href: "/industries" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Heritage", href: "/about/heritage" },
    { label: "Purpose & Values", href: "/about/purpose-vision-values" },
    { label: "Inclusion & Belonging", href: "/about/inclusion-belonging" },
    { label: "Sustainability", href: "/about/sustainability" },
    { label: "Newsroom", href: "/newsroom" },
  ],
  Resources: [
    { label: "Insights", href: "/insights" },
    { label: "Podcast", href: "/insights/podcast" },
    { label: "Our People", href: "/people" },
    { label: "Global Offices", href: "/offices" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const legalLinks = [
  { label: "Privacy Notice", href: "/privacy" },
  { label: "Legal Notice", href: "/legal" },
  { label: "Ethics Line", href: "/legal/ethics-line" },
  { label: "Information Security", href: "/privacy/information-security" },
  { label: "Modern Slavery Statement", href: "/legal" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      {/* CTA Banner */}
      <div className="border-b border-[#1e3050]">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs mb-3">
              Start the Conversation
            </p>
            <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-light leading-tight">
              Ready to build a leadership team<br className="hidden md:block" />
              that moves the world forward?
            </h3>
          </div>
          <Link
            href="/contact"
            className="shrink-0 font-['Jost'] uppercase tracking-widest text-xs font-medium px-8 py-4 bg-[#C9A84C] text-[#0A1628] hover:bg-[#b8973e] transition-colors duration-250 rounded-sm"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      {/* Main footer links */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs font-medium mb-5">
                {category}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#9BA8B8] text-sm font-['DM_Sans'] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-[#1e3050] pt-12 mb-12">
          <div className="max-w-md">
            <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs mb-3">
              Leadership Agenda
            </p>
            <p className="text-[#9BA8B8] text-sm font-['DM_Sans'] mb-4">
              Monthly insights for senior executives — research, trends, and perspectives that matter.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-[#0f2040] border border-[#1e3050] text-white placeholder:text-[#4a5568] px-4 py-2.5 text-sm font-['DM_Sans'] focus:outline-none focus:border-[#C9A84C] rounded-sm transition-colors"
              />
              <button className="px-5 py-2.5 bg-[#C9A84C] text-[#0A1628] font-['Jost'] uppercase tracking-widest text-xs font-medium hover:bg-[#b8973e] transition-colors rounded-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e3050] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.svg"
              alt="Sovern Partners"
              width={160}
              height={32}
              className="h-8 w-auto brightness-0 invert opacity-70"
            />
            <p className="text-[#4a5568] text-xs font-['DM_Sans']">
              © {new Date().getFullYear()} Sovern Partners. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Social */}
            <div className="flex items-center gap-4">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "X / Twitter", href: "#" },
                { label: "YouTube", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="text-[#4a5568] hover:text-[#C9A84C] transition-colors font-['Jost'] uppercase tracking-widest text-[10px]">
                  {s.label}
                </a>
              ))}
              <a href="mailto:info@sovernpartners.com" aria-label="Email" className="text-[#4a5568] hover:text-[#C9A84C] transition-colors">
                <Mail size={18} />
              </a>
            </div>
            {/* Legal links */}
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#4a5568] text-xs font-['DM_Sans'] hover:text-[#9BA8B8] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
