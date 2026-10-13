"use client";

import { getImageProps } from "next/image";
import { ArrowRight, Pause, Play, RotateCcw, X } from "lucide-react";
import { useEffect, useRef, useState, type RefObject } from "react";
import { HERO_FILM, chapterAt, chapterProgress } from "@/data/hero-film";
import { trackEvent } from "@/lib/analytics";
import { prefersLightMedia, videoSources } from "@/lib/media-prefs";
import s from "./HeroFilm.module.css";

type Variant = "desktop" | "mobile";

const MOBILE_QUERY = "(max-width: 699px)";
const { chapters } = HERO_FILM;
const RUNTIME = `0:${String(Math.round(HERO_FILM.duration)).padStart(2, "0")}`;
const pad = (n: number) => String(n).padStart(2, "0");

/** Keeps a chapter rail in step with a video: the chapter in state, its progress as --p on the container. */
function useChapterClock(videoRef: RefObject<HTMLVideoElement>, hostRef: RefObject<HTMLElement>, running: boolean) {
  const [chapter, setChapter] = useState(0);
  const current = useRef(0);

  useEffect(() => {
    if (!running) return;
    let frame = 0;
    const tick = () => {
      const video = videoRef.current;
      if (video) {
        const length = Number.isFinite(video.duration) ? video.duration : HERO_FILM.duration;
        const index = chapterAt(chapters, video.currentTime);
        if (index !== current.current) {
          current.current = index;
          setChapter(index);
        }
        hostRef.current?.style.setProperty("--p", chapterProgress(chapters, index, video.currentTime, length).toFixed(3));
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running, videoRef, hostRef]);

  return chapter;
}

function ChapterRail({ chapter, onSeek }: { chapter: number; onSeek: (index: number) => void }) {
  return (
    <ol className={s.rail} aria-label="Film chapters">
      {chapters.map((item, index) => (
        <li key={item.name} className={index < chapter ? s.done : index === chapter ? s.now : undefined}>
          <button
            type="button"
            onClick={() => onSeek(index)}
            aria-current={index === chapter ? "step" : undefined}
            aria-label={`Chapter ${index + 1}: ${item.name}`}
          >
            <span className={s.num}>{pad(index + 1)}</span>
            <span className={s.name}>{item.name}</span>
            <span className={s.bar} aria-hidden="true">
              <i />
            </span>
          </button>
        </li>
      ))}
    </ol>
  );
}

/**
 * The homepage film. It plays behind the hero copy with its chapter line and rail, opens like a curtain
 * on load, and pauses off screen. "Watch the film" plays it full screen with an end card that leads to
 * the sample request. Reduced motion and Data Saver keep the still; the full-screen film stays on offer.
 */
export function HeroFilm() {
  const frameRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [variant, setVariant] = useState<Variant | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [held, setHeld] = useState(false);
  const [inView, setInView] = useState(true);
  const [theater, setTheater] = useState(false);
  const chapter = useChapterClock(videoRef, hudRef, playing);

  useEffect(() => {
    if (prefersLightMedia() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mq = window.matchMedia(MOBILE_QUERY);
    const pick = () => setVariant(mq.matches ? "mobile" : "desktop");
    pick();
    mq.addEventListener("change", pick);
    return () => mq.removeEventListener("change", pick);
  }, []);

  useEffect(() => setReady(false), [variant]);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  // Plays only while on screen, not held by the visitor, and not behind the full-screen film.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView && !held && !theater) video.play().catch(() => {});
    else video.pause();
  }, [inView, held, theater, variant]);

  function seek(index: number) {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = chapters[index].start + 0.01;
    setHeld(false);
    trackEvent("hero_film_chapter", { chapter: chapters[index].name });
  }

  function openTheater() {
    setTheater(true);
    trackEvent("hero_film_open");
  }

  const film = variant === "mobile" ? HERO_FILM.mobile : HERO_FILM.desktop;
  const shared = { alt: "", fill: true, priority: true, sizes: "100vw" } as const;
  const { props: desktopPoster } = getImageProps({ ...shared, src: HERO_FILM.desktop.poster });
  const { props: mobilePoster } = getImageProps({ ...shared, src: HERO_FILM.mobile.poster });

  return (
    <>
      <div ref={frameRef} className={s.frame} aria-hidden="true">
        <div className={s.drift}>
          <picture>
            <source media={MOBILE_QUERY} srcSet={mobilePoster.srcSet} sizes={mobilePoster.sizes} />
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img {...desktopPoster} className={`${s.poster}${ready ? ` ${s.out}` : ""}`} />
          </picture>
          {variant && (
            <video
              key={variant}
              ref={videoRef}
              className={`${s.video}${ready ? ` ${s.ready}` : ""}`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={() => setReady(true)}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            >
              {videoSources(film.prefix).map((source) => (
                <source key={source.src} src={source.src} type={source.type} />
              ))}
            </video>
          )}
        </div>
        <div className={s.vignette} />
      </div>

      <div ref={hudRef} className={s.hud}>
        {variant && (
          <p key={chapter} className={s.line} aria-hidden="true">
            {chapters[chapter].line}
          </p>
        )}
        <div className={s.controls}>
          <button type="button" className={s.watch} onClick={openTheater}>
            <span className={s.watchIcon} aria-hidden="true">
              <Play size={16} fill="currentColor" />
            </span>
            Watch the film
            <span className={s.runtime}>{RUNTIME}</span>
          </button>
          {variant && (
            <>
              <button
                type="button"
                className={s.toggle}
                onClick={() => setHeld((value) => !value)}
                aria-label={held ? "Play the background film" : "Pause the background film"}
              >
                {held ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
              </button>
              <ChapterRail chapter={chapter} onSeek={seek} />
            </>
          )}
        </div>
      </div>

      {theater && <FilmTheater onClose={() => setTheater(false)} />}
    </>
  );
}

function FilmTheater({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const chapter = useChapterClock(videoRef, dialogRef, playing);
  // The 1080p widescreen cut on every screen: phones letterbox it, or fill the screen turned sideways.
  const film = HERO_FILM.theater;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    document.documentElement.classList.add("film-open");
    videoRef.current?.play().catch(() => {});
    return () => document.documentElement.classList.remove("film-open");
  }, []);

  const close = () => dialogRef.current?.close();

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setEnded(false);
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }

  function seek(index: number) {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = chapters[index].start + 0.01;
    setEnded(false);
    video.play().catch(() => {});
  }

  return (
    <dialog ref={dialogRef} className={s.theater} aria-label="The Flavor Factory film" onClose={onClose}>
      <div className={s.screen}>
        <video
          ref={videoRef}
          className={s.theaterVideo}
          muted
          playsInline
          preload="auto"
          poster={film.poster}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => {
            setEnded(true);
            trackEvent("hero_film_complete");
          }}
        >
          {videoSources(film.prefix).map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>

        {!ended && (
          <p key={chapter} className={s.theaterLine} aria-hidden="true">
            <span>
              {pad(chapter + 1)} · {chapters[chapter].name}
            </span>
            {chapters[chapter].line}
          </p>
        )}
        {/* One steady live region, so each chapter's line is read once as it plays. */}
        <p className="sr-only" aria-live="polite">
          {ended ? "The film has ended." : `Chapter ${chapter + 1}, ${chapters[chapter].name}: ${chapters[chapter].line}`}
        </p>

        {ended && (
          <div className={s.endCard}>
            <p className={s.endKicker}>The Flavor Factory · Norco, CA</p>
            <h2 className={s.endTitle}>Tell us what you&apos;re making.</h2>
            <p className={s.endCopy}>First custom samples in 3-5 business days.</p>
            <div className={s.endActions}>
              <a
                href="#request"
                className="btn-gold btn-lg"
                onClick={() => {
                  trackEvent("request_sample_click", { location: "film" });
                  close();
                }}
              >
                Request Samples
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <button type="button" className={s.again} onClick={() => seek(0)}>
                <RotateCcw size={16} aria-hidden="true" />
                Watch again
              </button>
            </div>
          </div>
        )}
      </div>

      <div className={s.theaterBar}>
        <button type="button" className={s.toggle} onClick={toggle} aria-label={playing ? "Pause the film" : "Play the film"}>
          {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
        </button>
        <ChapterRail chapter={chapter} onSeek={seek} />
        <button type="button" className={s.close} onClick={close} aria-label="Close the film">
          <X size={20} />
        </button>
      </div>
    </dialog>
  );
}
