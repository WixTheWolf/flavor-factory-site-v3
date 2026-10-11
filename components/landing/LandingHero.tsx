"use client";

import { Fragment, useRef, type CSSProperties, type PointerEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { HeroVideo } from "@/components/HeroVideo";
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
  { title: "Request in", copy: "Your product, base, and label goals.", when: "Day 0" },
  { title: "Built for your base", copy: "Developed in our Norco lab.", when: "In the lab" },
  { title: "Samples ship", copy: "Ready to test in your product.", when: "Day 3-5" },
] as const;

export function LandingHero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  // Chips drift toward the mouse. CSS variables keep this off React's render path.
  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || !stageRef.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      stageRef.current?.style.setProperty("--px", x.toFixed(3));
      stageRef.current?.style.setProperty("--py", y.toFixed(3));
    });
  }

  let wordIndex = 0;

  return (
    <section className={s.hero} onPointerMove={onPointerMove} aria-labelledby="hero-title">
      <HeroVideo
        src={{ type: "local", prefix: "/hero/hero-v4" }}
        poster="/hero/hero-v4-poster.jpg"
        mobile={{ src: { type: "local", prefix: "/hero/hero-v4-mobile" }, poster: "/hero/hero-v4-poster-mobile.jpg" }}
        overlayStrength="light"
      />
      <div className={s.scrim} aria-hidden="true" />
      <div className={s.glow} aria-hidden="true" />
      <div className={s.grain} aria-hidden="true" />

      <div className={s.inner}>
        <div className={s.copy}>
          <p className={s.kicker}>
            <span className={s.kickerDot} aria-hidden="true" />
            Family-owned flavor manufacturer, Norco, CA
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
            Tell us what you&apos;re making and we&apos;ll send custom liquid or powder flavor samples built for your base, process, and label.
          </p>

          <div className={s.actions}>
            <a
              href="#request"
              className="btn-gold btn-lg"
              onClick={() => trackEvent("request_sample_click", { location: "hero" })}
            >
              Request Samples
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#what-we-do" className={s.ghost}>
              See what we do
            </a>
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

        <div className={s.stage} ref={stageRef}>
          {CHIPS.map((chip) => (
            <span
              key={chip.name}
              className={s.chip}
              style={{
                left: chip.left,
                top: chip.top,
                "--depth": chip.depth,
                "--accent": accentFor(chip.family),
                "--float": `${5 + chip.depth * 2}s`,
              } as CSSProperties}
              aria-hidden="true"
            >
              <i />
              {chip.name}
            </span>
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
      </div>

      <div className={s.scrollCue} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
