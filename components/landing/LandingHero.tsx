"use client";

import { Fragment, useRef, type CSSProperties, type PointerEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { HeroFilm } from "./HeroFilm";
import s from "./LandingHero.module.css";

const TITLE_LEAD = ["Custom", "flavors", "built", "for", "your"];
const TITLE_ACCENT = ["finished", "product."];

const TRUST = [
  "First samples in 3-5 business days",
  "Low minimums",
  "Kosher, Halal & organic-compliant options",
];


export function LandingHero() {
  const frame = useRef(0);

  // The film drifts a little against the mouse. CSS variables keep this off React's render path.
  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      target.style.setProperty("--px", x.toFixed(3));
      target.style.setProperty("--py", y.toFixed(3));
    });
  }

  let wordIndex = 0;

  return (
    <section className={`${s.hero} grain`} onPointerMove={onPointerMove} aria-labelledby="hero-title">
      <HeroFilm />
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
      </div>
    </section>
  );
}
