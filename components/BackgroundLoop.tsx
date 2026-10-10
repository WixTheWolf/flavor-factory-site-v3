"use client";

import { useEffect, useState } from "react";
import { AppImage } from "@/components/ui/AppImage";
import { canPlayDecorativeVideo, videoSources } from "@/lib/media-prefs";

type Props = {
  /** Clip prefix, e.g. /video/request-header (see lib/media-prefs videoSources). */
  video: string;
  poster: string;
  className?: string;
  videoClassName?: string;
  playingClassName?: string;
};

/**
 * Decorative looping background. Shows the poster first and swaps in the clip
 * after mount, unless the visitor prefers reduced motion or has Data Saver on.
 */
export function BackgroundLoop({ video, poster, className, videoClassName, playingClassName }: Props) {
  const [allowed, setAllowed] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setAllowed(canPlayDecorativeVideo());
  }, []);

  return (
    <div className={className} aria-hidden="true">
      <AppImage src={poster} alt="" sizes="100vw" priority />
      {allowed && (
        <video
          className={`${videoClassName ?? ""} ${playing ? playingClassName ?? "" : ""}`.trim()}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlaying={() => setPlaying(true)}
        >
          {videoSources(video).map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      )}
    </div>
  );
}
