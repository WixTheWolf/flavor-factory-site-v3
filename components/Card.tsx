import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export function Card({ children, className = "", dark = false }: CardProps) {
  const tone = dark
    ? "border-white/12 bg-white/[0.055] text-white"
    : "border-[#12382B]/10 bg-white/70 text-[#1E1E1A] shadow-[0_22px_60px_rgba(30,30,26,0.06)]";

  return (
    <article className={`rounded-[1.6rem] border p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 ${tone} ${className}`.trim()}>
      {children}
    </article>
  );
}
