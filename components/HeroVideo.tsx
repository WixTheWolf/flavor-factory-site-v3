"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Video source. Swap type to "mux" when footage moves to Mux — no consumer changes needed.
 *
 *  Local:  files expected at {prefix}.av1.mp4 / {prefix}.hevc.mp4 / {prefix}.h264.mp4
 *  Mux:    streams from https://stream.mux.com/{playbackId}/high.mp4
 */
export type HeroVideoSrc =
  | { type: "local"; prefix: string }
  | { type: "mux"; playbackId: string };

type Props = {
  src: HeroVideoSrc;
  /** Poster image path — rendered via next/image with priority so it is the LCP element. */
  poster: string;
  posterAlt?: string;
  /** Controls the darkness of the gradient overlay. Default: "medium". */
  overlayStrength?: "light" | "medium" | "strong";
};

const OVERLAY = { light: 0.42, medium: 0.60, strong: 0.75 } as const;

export function HeroVideo({ src, poster, posterAlt = "", overlayStrength = "medium" }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  // Respect prefers-reduced-motion: pause the video, keep the poster.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => (mq.matches ? video.pause() : video.play().catch(() => {}));
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const base = OVERLAY[overlayStrength];
  const gradient = `linear-gradient(105deg, rgba(13,43,37,${base + 0.18}) 0%, rgba(13,43,37,${base}) 42%, rgba(13,43,37,${base - 0.14}) 100%)`;

  return (
    <div className="hero-video-wrap" aria-hidden="true">
      {/* Poster — LCP element, optimised by next/image, visible immediately. */}
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority
        sizes="100vw"
        className={`hero-video-poster${ready ? " hero-video-poster--out" : ""}`}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Video — fades in once canplay fires. aria-hidden on wrapper. */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={`hero-video-el${ready ? " hero-video-el--ready" : ""}`}
        onCanPlay={() => setReady(true)}
      >
        {src.type === "local" && (
          <>
            <source src={`${src.prefix}.av1.mp4`} type='video/mp4; codecs="av01.0.05M.08"' />
            <source src={`${src.prefix}.hevc.mp4`} type='video/mp4; codecs="hvc1"' />
            <source src={`${src.prefix}.h264.mp4`} type="video/mp4" />
          </>
        )}
        {src.type === "mux" && (
          <source src={`https://stream.mux.com/${src.playbackId}/high.mp4`} type="video/mp4" />
        )}
      </video>

      {/* Dark overlay — keeps hero copy AA-compliant against any footage. */}
      <div className="hero-video-overlay" style={{ background: gradient }} />
    </div>
  );
}
