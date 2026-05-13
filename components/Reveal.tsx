"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

// Sitewide constants — one easing curve and duration everywhere.
const DURATION = 0.55;
const EASE = [0.22, 1, 0.36, 1] as const;
const STAGGER = 0.08;
const OFFSET_Y = 20; // px

const itemVariants = {
  hidden: { opacity: 0, y: OFFSET_Y },
  visible: { opacity: 1, y: 0 },
} as const;

const containerVariants = (stagger: number) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
});

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Fades + slides a single element up when it enters the viewport.
 * Renders immediately (no animation) when prefers-reduced-motion is set.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={itemVariants}
      initial={reduced ? "visible" : "hidden"}
      animate={inView || reduced ? "visible" : "hidden"}
      transition={{ duration: DURATION, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

type GroupProps = {
  children: ReactNode;
  stagger?: number;
  className?: string;
};

/**
 * Stagger-reveals a group of children. Pair with <RevealItem> for each child.
 * The container triggers when it enters the viewport; children cascade in.
 */
export function RevealGroup({ children, stagger = STAGGER, className }: GroupProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants(stagger)}
      initial={reduced ? "visible" : "hidden"}
      animate={inView || reduced ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

type ItemProps = { children: ReactNode; className?: string };

/**
 * An individual item inside a <RevealGroup>. Inherits stagger timing from the parent.
 */
export function RevealItem({ children, className }: ItemProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reduced ? {} : itemVariants}
      transition={{ duration: DURATION, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
