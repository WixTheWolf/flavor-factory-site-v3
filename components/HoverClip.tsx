"use client";

import { useEffect, useRef, useState } from "react";
import { canPlayDecorativeVideo, videoSources } from "@/lib/media-prefs";

type Props = {
  /** Clip prefix, e.g. /video/industries/bakery (see lib/media-prefs videoSources). */
  video: string;
  className?: string;
  playingClassName?: string;
};

/**
 * Muted clip that plays while the enclosing link is hovered or focused, then rewinds.
 * Desktop only: touch screens keep the still, so phones never download it. Nothing loads
 * until the first hover (preload="none"), and reduced motion or Data Saver skips it entirely.
 */
export function HoverClip({ video, className, playingClassName }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setAllowed(canPlayDecorativeVideo() && window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    const clip = ref.current;
    const host = clip?.closest("a");
    if (!allowed || !clip || !host) return;

    const play = () => {
      clip.play().catch(() => {});
    };
    const stop = () => {
      clip.pause();
      clip.currentTime = 0;
    };
    const enter = (event: PointerEvent) => event.pointerType === "mouse" && play();
    const leave = (event: PointerEvent) => event.pointerType === "mouse" && stop();

    host.addEventListener("pointerenter", enter);
    host.addEventListener("pointerleave", leave);
    host.addEventListener("focus", play);
    host.addEventListener("blur", stop);
    return () => {
      host.removeEventListener("pointerenter", enter);
      host.removeEventListener("pointerleave", leave);
      host.removeEventListener("focus", play);
      host.removeEventListener("blur", stop);
    };
  }, [allowed]);

  if (!allowed) return null;

  return (
    <video
      ref={ref}
      className={`${className ?? ""} ${playing ? playingClassName ?? "" : ""}`.trim()}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      onPlaying={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
    >
      {videoSources(video).map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
    </video>
  );
}
