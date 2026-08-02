"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Video source. Swap type to "mux" when footage moves to Mux. No consumer changes needed.
 *
 * Local: files expected at {prefix}.h264.mp4 / {prefix}.hevc.mp4 / {prefix}.av1.mp4
 * Mux: streams from https://stream.mux.com/{playbackId}/high.mp4
 */
export type HeroVideoSrc =
  | { type: "local"; prefix: string }
  | { type: "mux"; playbackId: string };

type Props = {
  src: HeroVideoSrc;
  /** Poster image path. Rendered via next/image with priority so it is the LCP element. */
  poster: string;
  posterAlt?: string;
  /** Controls the darkness of the gradient overlay. Default: "medium". */
  overlayStrength?: "light" | "medium" | "strong";
};

const OVERLAY = { light: 0.42, medium: 0.60, strong: 0.75 } as const;

export function HeroVideo({ src, poster, posterAlt = "", overlayStrength = "medium" }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [showPlayControl, setShowPlayControl] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      if (motionPreference.matches) {
        video.pause();
        setShowPlayControl(true);
        return;
      }

      video
        .play()
        .then(() => setShowPlayControl(false))
        .catch(() => setShowPlayControl(true));
    };

    syncPlayback();
    motionPreference.addEventListener("change", syncPlayback);
    return () => motionPreference.removeEventListener("change", syncPlayback);
  }, []);

  async function playVideo() {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setReady(true);
      setShowPlayControl(false);
    } catch {
      setShowPlayControl(true);
    }
  }

  const base = OVERLAY[overlayStrength];
  const gradient = `linear-gradient(105deg, rgba(13,43,37,${base + 0.18}) 0%, rgba(13,43,37,${base}) 42%, rgba(13,43,37,${base - 0.14}) 100%)`;

  return (
    <div className="hero-video-wrap">
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority
        sizes="100vw"
        className={`hero-video-poster${ready ? " hero-video-poster--out" : ""}`}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className={`hero-video-el${ready ? " hero-video-el--ready" : ""}`}
        onLoadedData={() => setReady(true)}
        onPlaying={() => {
          setReady(true);
          setShowPlayControl(false);
        }}
        onError={() => setShowPlayControl(true)}
      >
        {src.type === "local" && (
          <>
            <source src={`${src.prefix}.h264.mp4`} type="video/mp4" />
            <source src={`${src.prefix}.hevc.mp4`} type='video/mp4; codecs="hvc1"' />
            <source src={`${src.prefix}.av1.mp4`} type='video/mp4; codecs="av01.0.05M.08"' />
          </>
        )}
        {src.type === "mux" && (
          <source src={`https://stream.mux.com/${src.playbackId}/high.mp4`} type="video/mp4" />
        )}
      </video>

      <div className="hero-video-overlay" aria-hidden="true" style={{ background: gradient }} />

      {showPlayControl && (
        <button type="button" className="hero-video-play-control" onClick={playVideo}>
          Play background video
        </button>
      )}
    </div>
  );
}
