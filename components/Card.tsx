import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export function Card({ children, className = "", dark = false }: CardProps) {
  const tone = dark
    ? "border-white/10 bg-white/[0.055] text-white"
    : "border-[#14251c]/10 bg-white/60 text-[#14251c] shadow-[0_24px_70px_rgba(20,37,28,0.06)]";

  return (
    <article className={`rounded-[2px] border p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 ${tone} ${className}`.trim()}>
      {children}
    </article>
  );
}
