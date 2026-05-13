"use client";

import Link from "next/link";
import { useShortlist } from "@/lib/shortlist";

export function ShortlistWidget() {
  const { count, mounted } = useShortlist();

  if (!mounted || count === 0) return null;

  return (
    <Link href="/request-samples" className="shortlist-widget" aria-label={`View shortlist: ${count} flavor${count === 1 ? "" : "s"} selected`}>
      <span className="shortlist-widget-count">{count}</span>
      <span className="shortlist-widget-label">
        {count === 1 ? "flavor" : "flavors"} in your request
      </span>
      <span className="shortlist-widget-arrow" aria-hidden="true">→</span>
    </Link>
  );
}
