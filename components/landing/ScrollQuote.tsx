"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import s from "./ScrollQuote.module.css";

const QUOTE = "Most flavor houses develop for the tasting strip. We develop for the finished product.";
const HIGHLIGHT_FROM = QUOTE.split(" ").indexOf("We");

export function ScrollQuote() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = QUOTE.split(" ");

  return (
    <section className={s.section}>
      <p ref={ref} className={s.quote} aria-label={QUOTE}>
        {words.map((word, index) => (
          <Word
            key={`${word}-${index}`}
            progress={scrollYProgress}
            range={[index / words.length, (index + 1) / words.length]}
            highlight={index >= HIGHLIGHT_FROM}
            still={!!reduced}
          >
            {word}
          </Word>
        ))}
      </p>
    </section>
  );
}

type WordProps = {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlight: boolean;
  still: boolean;
};

function Word({ children, progress, range, highlight, still }: WordProps) {
  const opacity = useTransform(progress, range, [0.14, 1]);

  return (
    <span className={`${s.word} ${highlight ? s.highlight : ""}`} aria-hidden="true">
      <motion.span style={{ opacity: still ? 1 : opacity }}>{children}</motion.span>{" "}
    </span>
  );
}
