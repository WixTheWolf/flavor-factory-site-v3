"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/site-copy";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="logo serif" aria-label="The Flavor Factory home">
          <div className="small">The</div>
          <div className="large">FlavorFactory</div>
        </Link>

        <nav className="nav" aria-label="Primary">
          {navigation.slice(0, 7).map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link href="/request-samples" className="cta-btn">Request Samples</Link>
        </div>
      </div>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <div className="container mobile-links">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </div>
      </div>
    </header>
  );
}
