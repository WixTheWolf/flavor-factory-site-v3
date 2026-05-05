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
  "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b98745]";

const variants = {
  primary: "bg-[#102218] text-white shadow-[0_18px_42px_rgba(16,34,24,0.22)] hover:bg-[#183428] hover:-translate-y-0.5",
  secondary: "border border-[#102218]/15 bg-white/35 text-[#102218] hover:border-[#102218]/35 hover:bg-white/70 hover:-translate-y-0.5",
  light: "bg-white text-[#102218] shadow-[0_18px_42px_rgba(16,34,24,0.16)] hover:bg-[#f7f4ee] hover:-translate-y-0.5",
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
