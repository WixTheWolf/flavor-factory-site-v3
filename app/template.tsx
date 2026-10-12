"use client";

import { useEffect, useState, type ReactNode } from "react";

// True once the first page has rendered, so only client-side navigations fade in.
let hasNavigated = false;

/** Fades each new page in after a navigation. The first load renders without it, so it never delays the first paint. */
export default function Template({ children }: { children: ReactNode }) {
  const [animate] = useState(() => hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return <div className={animate ? "page-enter" : undefined}>{children}</div>;
}
