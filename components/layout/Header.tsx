"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site-copy";
import { Logo } from "@/components/ui/Logo";
import { trackEvent } from "@/lib/analytics";
import { CONTACT } from "@/lib/contact";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    return href === "/" ? pathname === href : pathname.startsWith(href);
  }

  return (
    <header
      className={[
        "site-header",
        isHome ? "is-home" : "",
        scrolled ? "is-scrolled" : "is-top",
        open ? "is-open" : "",
      ].filter(Boolean).join(" ")}
    >
      <div className="container header-row">
        <Link href="/" className="logo-link" aria-label="The Flavor Factory home">
          <Logo className="logo-svg" variant="inline" />
        </Link>

        <nav className="nav" aria-label="Primary">
          {navigation.filter((item) => item.nav).map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                href={item.href}
                key={item.href}
                className={`nav-link ${active ? "active" : ""}`.trim()}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <button
            className="mobile-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link
            href={isHome ? "#request" : "/request-samples"}
            className="btn-gold"
            onClick={() => trackEvent("request_sample_click", { location: "header" })}
          >
            Request Samples
          </Link>
        </div>
      </div>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <div className="container mobile-links">
          {navigation.filter((item) => item.nav || item.href === "/request-samples" || item.href === "/faq" || item.href === "/resources").map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={isActive(item.href) ? "active" : ""}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={`mailto:${CONTACT.email}`} onClick={() => trackEvent("email_click", { location: "mobile menu" })}>
            Email {CONTACT.email}
          </a>
          <a href={CONTACT.phoneHref} onClick={() => trackEvent("phone_click", { location: "mobile menu" })}>Call {CONTACT.phone}</a>
        </div>
      </div>
    </header>
  );
}
