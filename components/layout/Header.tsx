"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/site-copy";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return href === "/" ? pathname === href : pathname.startsWith(href);
  }

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="logo serif" aria-label="The Flavor Factory home">
          <div className="small">The</div>
          <div className="large">FlavorFactory</div>
        </Link>

        <nav className="nav" aria-label="Primary">
          {navigation.filter((item) => item.href !== "/request-samples").map((item) => {
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

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            className="mobile-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link href="/request-samples" className="cta-btn">Request Samples</Link>
        </div>
      </div>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <div className="container mobile-links">
          {navigation.map((item) => (
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
        </div>
      </div>
    </header>
  );
}
