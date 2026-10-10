"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import s from "./FinalCta.module.css";

const AUDIENCE = [
  "Food & beverage brands",
  "Co-packers & manufacturers",
  "R&D teams matching a profile",
  "Startups heading to first production",
  "Brands that need faster samples",
];

export function FinalCta() {
  const reduced = useReducedMotion();

  return (
    <section className={s.section} aria-labelledby="final-cta-title">
      <div className={s.orbs} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <motion.div
        className={s.inner}
        initial={reduced ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
      >
        <div className={s.eyebrow}>Have a flavor problem to solve?</div>
        <h2 id="final-cta-title">
          Tell us what you&apos;re making.
          <em> We&apos;ll build around it.</em>
        </h2>
        <p>
          Share the application, base, target profile, format, and label goals. A real person on our Norco team reviews every request.
        </p>
        <div className={s.actions}>
          <Link
            href="/request-samples"
            className="btn-gold btn-lg"
            onClick={() => trackEvent("request_sample_click", { location: "final cta" })}
          >
            Request Samples
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a className={s.contact} href="tel:+19512739877" onClick={() => trackEvent("phone_click", { location: "final cta" })}>
            <Phone size={16} aria-hidden="true" />
            (951) 273-9877
          </a>
          <a className={s.contact} href="mailto:samples@flavorfactory.net">
            <Mail size={16} aria-hidden="true" />
            samples@flavorfactory.net
          </a>
        </div>
        <ul className={s.audience} aria-label="Who we work with">
          {AUDIENCE.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </motion.div>
    </section>
  );
}
