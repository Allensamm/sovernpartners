"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
const services = [
  ["All services", "/services"],
  ["Executive search", "/services/executive-search"],
  ["Leadership advisory", "/services/leadership"],
  ["On-demand talent", "/services/on-demand-talent"],
  ["Corporate transformation", "/services/corporate-transformation"],
  ["Organisation & culture", "/services/organization-culture"],
];
const links = [
  ["Our world", "/about"],
  ["Industries", "/industries"],
  ["Your next chapter", "/careers"],
  ["Our thinking", "/insights"],
];
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setDropdown(false);
        setOpen(false);
      }
    };
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdown(false);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  const closeMenus = () => {
    setOpen(false);
    setDropdown(false);
  };
  return (
    <header className="site-header" ref={ref}>
      <div className="nav-container">
        <Link
          href="/"
          className="wordmark"
          aria-label="Sovern Partners home"
          onClick={closeMenus}
        >
          <span>
            sovern<span className="logo-dot">.</span>
          </span>
          <small>PARTNERS</small>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <div className="nav-dropdown">
            <button
              aria-expanded={dropdown}
              aria-controls="service-menu"
              className={pathname.startsWith("/services") ? "active" : ""}
              onClick={() => setDropdown(!dropdown)}
            >
              What we do <ChevronDown size={13} />
            </button>
            {dropdown && (
              <div className="dropdown-panel" id="service-menu">
                {services.map(([label, href]) => (
                  <Link onClick={closeMenus} key={href} href={href}>
                    {label}
                    <ArrowUpRight size={14} />
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.map(([label, href]) => (
            <Link
              className={pathname.startsWith(href) ? "active" : ""}
              aria-current={pathname === href ? "page" : undefined}
              onClick={closeMenus}
              key={href}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button button-dark nav-cta">
          Let’s talk <ArrowUpRight size={17} />
        </Link>
        <button
          className="mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[
            ["What we do", "/services"],
            ...links,
            ["Our people", "/people"],
            ["Let’s talk", "/contact"],
          ].map(([label, href]) => (
            <Link onClick={closeMenus} key={href} href={href}>
              {label}
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
