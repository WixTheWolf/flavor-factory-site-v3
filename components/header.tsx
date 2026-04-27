"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "./site-data";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="logo serif" aria-label="The Flavor Factory home">
          <div className="small">The</div>
          <div className="large">FlavorFactory</div>
        </Link>

        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className="mobile-toggle" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a href="/contact" className="cta-btn">Start a Project</a>
        </div>
      </div>

      <div className={`mobile-panel ${mobileOpen ? "open" : ""}`}>
        <div className="container mobile-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
          ))}
          <a href="/contact" className="cta-btn" onClick={() => setMobileOpen(false)} style={{ marginTop: 16, width: "fit-content" }}>
            Start a Project
          </a>
        </div>
      </div>
    </header>
  );
}
