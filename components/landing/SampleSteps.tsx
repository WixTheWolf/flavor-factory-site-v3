"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ClipboardList, FlaskConical, PackageCheck, Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import s from "./SampleSteps.module.css";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Tell us what you're making",
    copy: "Share the application, base, flavor target, format, and label goals. It takes a few minutes.",
    detail: "Online brief or a quick call",
  },
  {
    icon: FlaskConical,
    title: "We build it for your base",
    copy: "Our Norco team develops the sample around your process and label, not a tasting strip.",
    detail: "Liquid or powder",
  },
  {
    icon: PackageCheck,
    title: "Samples arrive, ready to test",
    copy: "First samples typically ship in 3-5 business days after your brief is confirmed. Then we refine together.",
    detail: "Low minimums when you scale",
  },
] as const;

export function SampleSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section className={s.section} aria-labelledby="sample-steps-title">
      <div className={s.shell}>
        <div className={s.head}>
          <div className="new-eyebrow">How Samples Work</div>
          <h2 id="sample-steps-title">From brief to bench-ready sample in three steps.</h2>
          <p>No long sales cycle. Tell us about the product and the people who will build your flavor take it from there.</p>
        </div>

        <div className={s.grid} ref={ref}>
          <div className={s.line} aria-hidden="true">
            <motion.span style={{ scaleX: reduced ? 1 : progress }} />
          </div>

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                className={s.card}
                initial={reduced ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.2, 0.9, 0.2, 1] }}
              >
                <div className={s.cardTop}>
                  <span className={s.icon}>
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <span className={s.num} aria-hidden="true">0{index + 1}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <span className={s.detail}>{step.detail}</span>
              </motion.article>
            );
          })}
        </div>

        <div className={s.cta}>
          <Link
            href="/request-samples"
            className="btn-gold btn-lg"
            onClick={() => trackEvent("request_sample_click", { location: "how samples work" })}
          >
            Start your sample request
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a className={s.phone} href="tel:+19512739877" onClick={() => trackEvent("phone_click", { location: "how samples work" })}>
            <Phone size={16} aria-hidden="true" />
            Or call (951) 273-9877
          </a>
        </div>
      </div>
    </section>
  );
}
