"use client";

import { useEffect, useRef, useState } from "react";
import { AppImage } from "@/components/ui/AppImage";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CONTACT } from "@/lib/contact";
import { canPlayDecorativeVideo, videoSources } from "@/lib/media-prefs";
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
  const ref = useRef<HTMLElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [playing, setPlaying] = useState(false);

  // Only fetch the background clip once the section is close to the viewport.
  useEffect(() => {
    const section = ref.current;
    if (!section || !canPlayDecorativeVideo()) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShowVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={s.section} aria-labelledby="final-cta-title">
      <div className={s.media} aria-hidden="true">
        <AppImage src={SWIRL_POSTER} alt="" sizes="100vw" quality={70} />
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
            {videoSources(SWIRL_VIDEO).map((source) => (
              <source key={source.src} src={source.src} type={source.type} />
            ))}
          </video>
        )}
      </div>
      <div className={s.orbs} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className={`${s.inner} reveal`}>
        <div className={s.eyebrow}>Have a flavor problem to solve?</div>
        <h2 id="final-cta-title">
          Tell us what you&apos;re making.
          <em> We&apos;ll build around it.</em>
        </h2>
        <p>
          Send a quick request in about a minute. A real person on our Norco team reviews every one.
        </p>
        <div className={s.actions}>
          <a
            href="#request"
            className="btn-gold btn-lg"
            onClick={() => trackEvent("request_sample_click", { location: "final cta" })}
          >
            Request Samples
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className={s.contact} href={CONTACT.phoneHref} onClick={() => trackEvent("phone_click", { location: "final cta" })}>
            <Phone size={16} aria-hidden="true" />
            {CONTACT.phone}
          </a>
          <a className={s.contact} href={`mailto:${CONTACT.email}`} onClick={() => trackEvent("email_click", { location: "final cta" })}>
            <Mail size={16} aria-hidden="true" />
            {CONTACT.email}
          </a>
        </div>
        <ul className={s.audience} aria-label="Who we work with">
          {AUDIENCE.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
