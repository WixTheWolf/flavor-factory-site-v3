import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const baseClass =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6843A] disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary: "bg-[#12382B] text-white shadow-[0_16px_38px_rgba(18,56,43,0.18)] hover:bg-[#0d2b21]",
  secondary: "border border-[#12382B]/22 bg-transparent text-[#12382B] hover:border-[#12382B]/50 hover:bg-white/45",
  light: "border border-white/35 bg-white text-[#12382B] hover:bg-[#F4EFE5]",
};

export function Button({ children, href, variant = "primary", className = "", type = "button", disabled = false }: ButtonProps) {
  const classes = `${baseClass} ${variants[variant]} ${className}`.trim();

  if (href) {
    if (!href.startsWith("/")) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
