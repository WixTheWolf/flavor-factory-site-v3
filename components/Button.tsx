import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  type?: "button" | "submit";
};

const baseClass =
  "inline-flex items-center justify-center rounded-[2px] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b98745]";

const variants = {
  primary: "bg-[#0d2b1b] text-white shadow-[0_14px_34px_rgba(16,34,24,0.18)] hover:bg-[#143923]",
  secondary: "border border-[#102218]/22 bg-transparent text-[#102218] hover:border-[#102218]/50 hover:bg-white/40",
  light: "border border-[#d2a45d] bg-transparent text-white hover:bg-[#d2a45d]/12",
};

export function Button({ children, href, variant = "primary", className = "", type = "button" }: ButtonProps) {
  const classes = `${baseClass} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
