"use client";

import { useEffect, useState } from "react";
import { canPlayDecorativeVideo, videoSources } from "@/lib/media-prefs";

type Props = {
  /** Clip prefix, e.g. /video/industries/bakery (see lib/media-prefs videoSources). */
  video: string;
  className?: string;
  playingClassName?: string;
  /** Only play when this media query matches, e.g. "(min-width: 700px)" to keep phones on the still. */
  media?: string;
};

/**
 * Decorative muted loop that mounts after hydration, unless the visitor prefers reduced motion,
 * has Data Saver on, is on a slow connection, or the optional media query does not match.
 * Sits over a still image, which stays visible until the clip is actually playing.
 */
export function LoopVideo({ video, className, playingClassName, media }: Props) {
  const [allowed, setAllowed] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setAllowed(canPlayDecorativeVideo() && (!media || window.matchMedia(media).matches));
  }, [media]);

  if (!allowed) return null;

  return (
    <video
      className={`${className ?? ""} ${playing ? playingClassName ?? "" : ""}`.trim()}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      onPlaying={() => setPlaying(true)}
    >
      {videoSources(video).map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
    </video>
  );
}
