import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="section-title">{children}</h2>;
}
