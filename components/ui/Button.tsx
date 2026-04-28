import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  const classes = `${variant === "primary" ? "cta-btn" : "light-btn"} ${className}`.trim();

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button className={classes}>{children}</button>;
}
