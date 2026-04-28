import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={`strength-card ${className}`.trim()}>{children}</article>;
}
