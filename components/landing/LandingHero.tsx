"use client";

import Link from "next/link";
import { Fragment, useRef, type CSSProperties, type PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionStyle, type MotionValue } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { HeroVideo } from "@/components/HeroVideo";
import { SITE_STATS } from "@/data/site-stats";
import { accentFor } from "@/data/flavor-palette";
import { trackEvent } from "@/lib/analytics";
import s from "./LandingHero.module.css";

const TITLE_LEAD = ["Custom", "flavors", "built", "for", "your"];
const TITLE_ACCENT = ["finished", "product."];

const TRUST = [
  "First samples in 3-5 business days",
  "Low minimums",
  "Kosher, Halal & organic-compliant options",
];

const CHIPS = [
  { name: "Meyer Lemon", family: "citrus", left: "-2%", top: "3%", depth: 1.4 },
  { name: "Strawberry", family: "berry", left: "54%", top: "0%", depth: 0.8 },
  { name: "Peppermint", family: "mint-cooling", left: "-12%", top: "46%", depth: 1.8 },
  { name: "Vanilla Bean", family: "vanilla-cream", left: "78%", top: "7%", depth: 1.1 },
  { name: "Cold Brew", family: "coffee-beverage", left: "60%", top: "91%", depth: 1.6 },
  { name: "Mango", family: "tropical", left: "8%", top: "88%", depth: 0.9 },
] as const;

const STEPS = [
  { title: "Brief in", copy: "Your base, process, and label goals.", when: "Day 0" },
  { title: "Built for your base", copy: "Developed in our Norco lab.", when: "In the lab" },
  { title: "Samples ship", copy: "Ready to test in your product.", when: "Day 3-5" },
] as const;

export function LandingHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduced ? 1 : 0]);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 60, damping: 18, mass: 0.6 });

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    py.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  let wordIndex = 0;

  return (
    <section ref={ref} className={s.hero} onPointerMove={onPointerMove} aria-labelledby="hero-title">
      <HeroVideo
        src={{ type: "local", prefix: "/hero/hero-v4" }}
        poster="/hero/hero-v4-poster.jpg"
        mobile={{ src: { type: "local", prefix: "/hero/hero-v4-mobile" }, poster: "/hero/hero-v4-poster-mobile.jpg" }}
        overlayStrength="light"
      />
      <div className={s.scrim} aria-hidden="true" />
      <div className={s.glow} aria-hidden="true" />
      <div className={s.grain} aria-hidden="true" />

      <motion.div className={s.inner} style={{ y: contentY, opacity: contentOpacity }}>
        <div className={s.copy}>
          <p className={s.kicker}>
            <span className={s.kickerDot} aria-hidden="true" />
            Good on the bench is not good enough.
          </p>

          <h1 id="hero-title" className={s.title}>
            {TITLE_LEAD.map((word) => (
              <Fragment key={word}>
                <span className={s.word} style={{ "--i": wordIndex++ } as CSSProperties}>
                  <span>{word}</span>
                </span>{" "}
              </Fragment>
            ))}
            {TITLE_ACCENT.map((word, index) => (
              <Fragment key={word}>
                <span className={`${s.word} ${s.accent}`} style={{ "--i": wordIndex++ } as CSSProperties}>
                  <span>{word}</span>
                </span>
                {index < TITLE_ACCENT.length - 1 ? " " : null}
              </Fragment>
            ))}
          </h1>

          <p className={s.lede}>
            Liquid and powder flavors developed around your base, process, and label goals by a family-owned team in Norco, California.
          </p>

          <div className={s.actions}>
            <Link
              href="/request-samples"
              className="btn-gold btn-lg"
              onClick={() => trackEvent("request_sample_click", { location: "hero" })}
            >
              Request Samples
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/flavors" className={s.ghost}>
              Browse {SITE_STATS.flavorProfileCount}+ flavors
            </Link>
          </div>

          <ul className={s.trust} aria-label="Why teams start here">
            {TRUST.map((item) => (
              <li key={item}>
                <Check size={14} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={s.stage}>
          {CHIPS.map((chip) => (
            <Chip key={chip.name} {...chip} sx={sx} sy={sy} />
          ))}

          <aside className={s.journey} aria-label="How a sample request moves">
            <div className={s.journeyHead}>
              <span className={s.journeyLabel}>Your sample timeline</span>
              <span className={s.journeyPill}>3-5 business days</span>
            </div>
            <div className={s.track} aria-hidden="true">
              <span className={s.trackFill} />
            </div>
            <ol className={s.steps}>
              {STEPS.map((step, index) => (
                <li key={step.title} className={s.step} data-step={index + 1}>
                  <span className={s.stepDot} aria-hidden="true">{index + 1}</span>
                  <span className={s.stepBody}>
                    <strong>{step.title}</strong>
                    <span>{step.copy}</span>
                  </span>
                  <span className={s.stepWhen}>{step.when}</span>
                </li>
              ))}
            </ol>
            <div className={s.journeyFoot}>
              <span className={s.vials} aria-hidden="true">
                {["citrus", "berry", "mint-cooling", "vanilla-cream", "tropical"].map((family) => (
                  <i key={family} style={{ background: accentFor(family) }} />
                ))}
              </span>
              <span>Timing starts once your brief is confirmed.</span>
            </div>
          </aside>
        </div>
      </motion.div>

      <div className={s.scrollCue} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

type ChipProps = {
  name: string;
  family: string;
  left: string;
  top: string;
  depth: number;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
};

function Chip({ name, family, left, top, depth, sx, sy }: ChipProps) {
  const x = useTransform(sx, (v) => v * depth * 18);
  const y = useTransform(sy, (v) => v * depth * 14);
  const style = {
    left,
    top,
    x,
    y,
    "--accent": accentFor(family),
    "--float": `${5 + depth * 2}s`,
  } as unknown as MotionStyle;

  return (
    <motion.span className={s.chip} style={style} aria-hidden="true">
      <i />
      {name}
    </motion.span>
  );
}
