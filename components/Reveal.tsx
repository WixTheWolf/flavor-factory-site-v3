import type { ReactNode } from "react";

/*
 * Scroll reveals run on CSS scroll timelines (.reveal in app/redesign.css), so they ship no
 * JavaScript and content is visible before hydration. Browsers without scroll timelines, and
 * visitors who prefer reduced motion, simply see the content in place.
 */

type RevealProps = {
  children: ReactNode;
  /** Kept for existing call sites. Scroll timelines pace each element by its own position. */
  delay?: number;
  className?: string;
};

function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(" ");
}

/** Fades and slides a single element up as it enters the viewport. */
export function Reveal({ children, className }: RevealProps) {
  return <div className={classes("reveal", className)}>{children}</div>;
}

type GroupProps = {
  children: ReactNode;
  /** Kept for existing call sites. Items in a row reveal together; rows follow as they scroll in. */
  stagger?: number;
  className?: string;
};

/** Layout wrapper for a set of <RevealItem>s. */
export function RevealGroup({ children, className }: GroupProps) {
  return <div className={className}>{children}</div>;
}

type ItemProps = { children: ReactNode; className?: string };

/** An individual item inside a <RevealGroup>. */
export function RevealItem({ children, className }: ItemProps) {
  return <div className={classes("reveal", className)}>{children}</div>;
}
