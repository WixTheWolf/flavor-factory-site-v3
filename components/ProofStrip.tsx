"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type StatItem =
  | { kind: "count"; value: number; suffix: string; label: string }
  | { kind: "range"; display: string; label: string }
  | { kind: "text"; display: string; label: string };

const stats: StatItem[] = [
  { kind: "count", value: 60, suffix: "+", label: "Years of combined flavor industry experience" },
  { kind: "range", display: "3-5", label: "Business days from brief to first sample" },
  { kind: "count", value: 180, suffix: "+", label: "Flavor profiles in the library — can't find yours? We'll build it." },
  { kind: "text", display: "Family-Owned", label: "Norco, CA, since day one" },
];

function useCountUp(target: number, active: boolean, duration = 1.3) {
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduced) { setValue(target); return; }

    let start: number | null = null;
    let frame: number;

    const tick = (now: number) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration, reduced]);

  return value;
}

function CountStat({ item }: { item: Extract<StatItem, { kind: "count" }> }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(item.value, inView);

  return (
    <div className="new-proof-item" ref={ref}>
      <strong>
        {count}{item.suffix}
      </strong>
      <span>{item.label}</span>
    </div>
  );
}

function StaticStat({ display, label }: { display: string; label: string }) {
  return (
    <div className="new-proof-item">
      <strong>{display}</strong>
      <span>{label}</span>
    </div>
  );
}

export function ProofStrip() {
  return (
    <section className="new-proof">
      <div className="home-shell new-proof-grid">
        {stats.map((stat) => {
          if (stat.kind === "count") return <CountStat key={stat.label} item={stat} />;
          return <StaticStat key={stat.label} display={(stat as { display: string }).display} label={stat.label} />;
        })}
      </div>
    </section>
  );
}
