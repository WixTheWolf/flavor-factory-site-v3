"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { k9sPhotos } from "@/data/k9s-for-warriors";

export function K9sPhotoCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  // Slides are positioned inside the track (see .k9s-carousel-track), so
  // offsetLeft is measured against the track's own scrollable box.
  const goTo = useCallback((next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(k9sPhotos.length - 1, next));
    const slide = track.children[clamped] as HTMLElement | undefined;
    if (!slide) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: slide.offsetLeft, behavior: reduced ? "auto" : "smooth" });
    setIndex(clamped);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;

    const syncIndex = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const slides = Array.from(track.children) as HTMLElement[];
        const center = track.scrollLeft + track.clientWidth / 2;
        let nearest = 0;
        let shortest = Number.POSITIVE_INFINITY;
        slides.forEach((slide, i) => {
          const distance = Math.abs(slide.offsetLeft + slide.clientWidth / 2 - center);
          if (distance < shortest) {
            shortest = distance;
            nearest = i;
          }
        });
        setIndex(nearest);
      });
    };

    track.addEventListener("scroll", syncIndex, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", syncIndex);
    };
  }, []);

  return (
    <div className="k9s-carousel" role="group" aria-roledescription="carousel" aria-label="Photos from K9s For Warriors">
      <div className="k9s-carousel-track" ref={trackRef}>
        {k9sPhotos.map((photo, i) => (
          <figure
            className="k9s-slide"
            key={photo.src}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${k9sPhotos.length}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1600}
              height={1067}
              quality={85}
              sizes="(max-width: 940px) calc(100vw - 32px), 900px"
              loading={i === 0 ? undefined : "lazy"}
            />
          </figure>
        ))}
      </div>

      <div className="k9s-carousel-controls">
        <button
          type="button"
          className="k9s-carousel-arrow"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous photo"
        >
          ←
        </button>
        <div className="k9s-carousel-dots">
          {k9sPhotos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              className={i === index ? "k9s-dot is-active" : "k9s-dot"}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
        <button
          type="button"
          className="k9s-carousel-arrow"
          onClick={() => goTo(index + 1)}
          disabled={index === k9sPhotos.length - 1}
          aria-label="Next photo"
        >
          →
        </button>
      </div>

      <p className="k9s-carousel-credit">Photos courtesy of K9s For Warriors.</p>
    </div>
  );
}
