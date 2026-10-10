"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { AppImage } from "@/components/ui/AppImage";
import { collections, type Collection } from "@/data/flavor-collections";
import { accentFor } from "@/data/flavor-palette";
import { SITE_STATS } from "@/data/site-stats";
import { trackEvent } from "@/lib/analytics";
import { canPlayDecorativeVideo, videoSources } from "@/lib/media-prefs";
import s from "./FlavorFamilies.module.css";

function tilt(event: PointerEvent<HTMLAnchorElement>) {
  if (event.pointerType !== "mouse") return;
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  el.style.setProperty("--mx", `${x * 100}%`);
  el.style.setProperty("--my", `${y * 100}%`);
  el.style.setProperty("--ry", `${(x - 0.5) * 8}deg`);
  el.style.setProperty("--rx", `${(0.5 - y) * 8}deg`);
}

function resetTilt(event: PointerEvent<HTMLAnchorElement>) {
  const el = event.currentTarget;
  el.style.setProperty("--ry", "0deg");
  el.style.setProperty("--rx", "0deg");
}

export function FlavorFamilies() {
  return (
    <section className={s.section} aria-labelledby="flavor-families-title">
      <div className={s.orbs} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className={s.shell}>
        <div className={s.head}>
          <div>
            <div className={s.eyebrow}>The Flavor Library</div>
            <h2 id="flavor-families-title">
              {SITE_STATS.flavorProfileCount}+ starting points.
              <em> Built out for your product.</em>
            </h2>
          </div>
          <div className={s.headSide}>
            <p>
              Pick a direction across {SITE_STATS.flavorFamilyCount} flavor families, add it to your sample request, and we tune it for your base. Not in the library? We can likely develop it.
            </p>
            <form className={s.search} action="/flavors" method="get" role="search" onSubmit={(event) => {
              const query = new FormData(event.currentTarget).get("q");
              trackEvent("homepage_flavor_search", { query: String(query || "") });
            }}>
              <Search size={18} aria-hidden="true" />
              <label className="sr-only" htmlFor="home-flavor-search">Search the flavor library</label>
              <input id="home-flavor-search" name="q" type="search" placeholder="Try strawberry, cold brew, mint..." maxLength={80} />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>

        <div className={s.grid}>
          {collections.map((collection, index) => (
            <FamilyCard key={collection.name} collection={collection} index={index} />
          ))}
        </div>

        <div className={s.foot}>
          <Link href="/flavors" className={s.all}>
            Explore all {SITE_STATS.flavorFamilyCount} families
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FamilyCard({ collection, index }: { collection: Collection; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoAllowed, setVideoAllowed] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setVideoAllowed(Boolean(collection.video) && canPlayDecorativeVideo());
  }, [collection.video]);

  // Touch screens have no hover, so play while the card is mostly on screen.
  useEffect(() => {
    const card = cardRef.current;
    if (!videoAllowed || !card || window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.6 },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, [videoAllowed]);

  function play() {
    videoRef.current?.play().catch(() => {});
  }

  function stop() {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }

  return (
    <Link
      ref={cardRef}
      href={`/flavors/${collection.familySlug}`}
      className={s.card}
      style={{ "--accent": accentFor(collection.familySlug), "--i": index } as CSSProperties}
      onPointerMove={tilt}
      onPointerEnter={(event) => event.pointerType === "mouse" && play()}
      onPointerLeave={(event) => {
        resetTilt(event);
        if (event.pointerType === "mouse") stop();
      }}
      onFocus={play}
      onBlur={stop}
    >
      <span className={s.media} aria-hidden="true">
        <AppImage
          src={collection.image}
          alt=""
          sizes="(max-width: 640px) 80vw, (max-width: 1100px) 45vw, 25vw"
          style={{ objectPosition: collection.imagePosition }}
        />
        {videoAllowed && collection.video && (
          <video
            ref={videoRef}
            className={`${s.video} ${playing ? s.videoOn : ""}`}
            muted
            loop
            playsInline
            preload="none"
            onPlaying={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            {videoSources(collection.video).map((source) => (
              <source key={source.src} src={source.src} type={source.type} />
            ))}
          </video>
        )}
      </span>
      <span className={s.shine} aria-hidden="true" />
      <span className={s.body}>
        <span className={s.dot} aria-hidden="true" />
        <span className={s.name}>{collection.name}</span>
        <span className={s.examples}>{collection.examples.slice(0, 4).join(" · ")}</span>
      </span>
      <span className={s.arrow} aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  );
}
