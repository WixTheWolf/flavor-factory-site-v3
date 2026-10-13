"use client";

import { getImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { prefersLightMedia } from "@/lib/media-prefs";

/**
 * Video source. Swap type to "mux" when footage moves to Mux. No consumer changes needed.
 *
 *  Local:  files expected at {prefix}.av1.mp4 / {prefix}.hevc.mp4 / {prefix}.h264.mp4
 *  Mux:    streams from https://stream.mux.com/{playbackId}/high.mp4
 */
export type HeroVideoSrc =
  | { type: "local"; prefix: string }
  | { type: "mux"; playbackId: string };

type Props = {
  src: HeroVideoSrc;
  /** Poster image path. Rendered with fetchpriority high so it is the LCP element. */
  poster: string;
  posterAlt?: string;
  /** Optional vertical clip and poster for small screens. */
  mobile?: { src: HeroVideoSrc; poster: string };
  /** Media query that selects the mobile clip. */
  mobileQuery?: string;
  /** Controls the darkness of the gradient overlay. Default: "medium". */
  overlayStrength?: "light" | "medium" | "strong";
};

const OVERLAY = { light: 0.42, medium: 0.60, strong: 0.75 } as const;
const DEFAULT_MOBILE_QUERY = "(max-width: 699px)";

type Variant = "desktop" | "mobile";

export function HeroVideo({
  src,
  poster,
  posterAlt = "",
  mobile,
  mobileQuery = DEFAULT_MOBILE_QUERY,
  overlayStrength = "medium",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  // The clip is chosen after mount so phones never download the desktop file.
  const [variant, setVariant] = useState<Variant | null>(null);
  const hasMobile = Boolean(mobile);

  useEffect(() => {
    // Data Saver or a slow connection: keep the poster and skip the video entirely.
    if (prefersLightMedia()) return;

    const mq = window.matchMedia(mobileQuery);
    const pick = () => setVariant(hasMobile && mq.matches ? "mobile" : "desktop");
    pick();
    mq.addEventListener("change", pick);
    return () => mq.removeEventListener("change", pick);
  }, [hasMobile, mobileQuery]);

  // A new clip fades in over the poster again once it can play.
  useEffect(() => setReady(false), [variant]);

  // Respect prefers-reduced-motion: pause the video, keep the poster.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => (mq.matches ? video.pause() : video.play().catch(() => {}));
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [variant]);

  const base = OVERLAY[overlayStrength];
  const gradient = `linear-gradient(105deg, rgba(13,43,37,${base + 0.18}) 0%, rgba(13,43,37,${base}) 42%, rgba(13,43,37,${base - 0.14}) 100%)`;

  const active = variant === "mobile" && mobile ? mobile.src : src;
  const posterClass = `hero-video-poster${ready ? " hero-video-poster--out" : ""}`;
  const shared = { alt: posterAlt, fill: true, priority: true, sizes: "100vw", className: posterClass } as const;
  const { props: desktopPoster } = getImageProps({ ...shared, src: poster });
  const mobilePoster = mobile ? getImageProps({ ...shared, src: mobile.poster }).props : null;

  return (
    <div className="hero-video-wrap" aria-hidden="true">
      {/* Poster. LCP element, optimised by next/image, visible immediately. */}
      <picture>
        {mobilePoster && <source media={mobileQuery} srcSet={mobilePoster.srcSet} sizes={mobilePoster.sizes} />}
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img {...desktopPoster} style={{ ...desktopPoster.style, objectFit: "cover", objectPosition: "center" }} />
      </picture>

      {/* Video. Fades in once canplay fires. Aria-hidden on wrapper. */}
      {variant && (
        <video
          key={variant}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`hero-video-el${ready ? " hero-video-el--ready" : ""}`}
          onCanPlay={() => setReady(true)}
        >
          {active.type === "local" && (
            <>
              <source src={`${active.prefix}.av1.mp4`} type='video/mp4; codecs="av01.0.05M.08"' />
              <source src={`${active.prefix}.hevc.mp4`} type='video/mp4; codecs="hvc1"' />
              <source src={`${active.prefix}.h264.mp4`} type="video/mp4" />
            </>
          )}
          {active.type === "mux" && (
            <source src={`https://stream.mux.com/${active.playbackId}/high.mp4`} type="video/mp4" />
          )}
        </video>
      )}

      {/* Dark overlay. Keeps hero copy AA-compliant against any footage. */}
      <div className="hero-video-overlay" style={{ background: gradient }} />
    </div>
  );
}
