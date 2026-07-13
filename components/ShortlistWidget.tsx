"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useShortlist } from "@/lib/shortlist";

export function ShortlistWidget() {
  const { items, remove, clear, count, mounted } = useShortlist();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (!mounted || count === 0 || pathname.startsWith("/request-samples")) return null;

  return (
    <div className="shortlist-widget-wrap">
      {open && (
        <section className="shortlist-panel" aria-label="Selected flavor profiles">
          <div className="shortlist-panel-head">
            <div>
              <div className="shortlist-panel-kicker">Sample Shortlist</div>
              <h2>{count} selected</h2>
            </div>
            <button type="button" className="shortlist-panel-clear" onClick={clear}>
              Clear all
            </button>
          </div>
          <ul className="shortlist-panel-list">
            {items.map((item) => (
              <li key={item.id}>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.family} / {item.format}</small>
                </span>
                <button type="button" onClick={() => remove(item.id)} aria-label={`Remove ${item.name}`}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <Link href="/request-samples" className="shortlist-panel-cta" onClick={() => setOpen(false)}>
            Continue to request
          </Link>
        </section>
      )}
      <button
        type="button"
        className="shortlist-widget"
        aria-label={`View shortlist: ${count} flavor${count === 1 ? "" : "s"} selected`}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="shortlist-widget-count">{count}</span>
        <span className="shortlist-widget-label">
          {count === 1 ? "flavor" : "flavors"} in your request
        </span>
      </button>
    </div>
  );
}
