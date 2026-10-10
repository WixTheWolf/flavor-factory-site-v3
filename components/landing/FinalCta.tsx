"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { AppImage } from "@/components/ui/AppImage";
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

const SWIRL_POSTER = "/images/flavor-factory/v4/cta-swirl.jpg";
const SWIRL_VIDEO = "/video/flavor-swirl";

export function FinalCta() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  // Only fetch the background clip once the section is close to the viewport.
  const near = useInView(ref, { once: true, margin: "600px 0px" });
  const [saveData, setSaveData] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    setSaveData(Boolean(connection?.saveData));
  }, []);

  const showVideo = near && !reduced && !saveData;

  return (
    <section ref={ref} className={s.section} aria-labelledby="final-cta-title">
      <div className={s.media} aria-hidden="true">
        <AppImage src={SWIRL_POSTER} alt="" sizes="100vw" />
        {showVideo && (
          <video
            className={`${s.video} ${playing ? s.videoOn : ""}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onPlaying={() => setPlaying(true)}
          >
            <source src={`${SWIRL_VIDEO}.av1.mp4`} type='video/mp4; codecs="av01.0.05M.08"' />
            <source src={`${SWIRL_VIDEO}.hevc.mp4`} type='video/mp4; codecs="hvc1"' />
            <source src={`${SWIRL_VIDEO}.h264.mp4`} type="video/mp4" />
          </video>
        )}
      </div>
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
