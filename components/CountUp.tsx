import type { CSSProperties } from "react";

type Props = {
  value: number;
  /** "scroll" counts as the number scrolls into view; "load" counts once on page load (for headers). */
  trigger?: "scroll" | "load";
};

/**
 * A number that counts up from zero, in CSS only (see .count-up in app/redesign.css).
 * The real value stays in the DOM for screen readers, and is all that shows in browsers
 * without scroll timelines or for visitors who prefer reduced motion.
 */
export function CountUp({ value, trigger = "scroll" }: Props) {
  const style = { "--to": value } as CSSProperties;
  return (
    <span className={`count-up${trigger === "load" ? " count-up--load" : ""}`} style={style}>
      <span className="count-up-static">{value}</span>
      <span className="count-up-anim" aria-hidden="true" />
    </span>
  );
}
