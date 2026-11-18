"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowDown, ArrowRight, Pause, Play } from "lucide-react";

const drawers = [
  { name: "Citrus", color: "#f4ce20", notes: ["Fresh tangerine", "Grapefruit zest", "Candied lemon"], copy: "From the first burst of juice to the bitter edge of the peel." },
  { name: "Berry", color: "#ed514f", notes: ["Wild strawberry", "Blackberry jam", "Tart raspberry"], copy: "Choose the green edge of fresh fruit or the depth of a slow-cooked preserve." },
  { name: "Savory", color: "#62ac53", notes: ["Dill pickle", "Roasted garlic", "Garden herb"], copy: "A bright pickle tang, a warm roasted note, or herbs fresh from the garden." },
  { name: "Tropical", color: "#f48932", notes: ["Golden pineapple", "Ripe mango", "Tart passion fruit"], copy: "Start with juicy pineapple, a soft mango finish, or a sharper tropical bite." },
  { name: "Botanical", color: "#8e5da8", notes: ["Elderflower", "Sweet basil", "Lavender"], copy: "Find the balance between a fragrant floral lift and a fresh green leaf." },
];

export function FlavorStudio() {
  const [active, setActive] = useState(0);
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [playing, setPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(true);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const video = useRef<HTMLVideoElement>(null);
  const drawer = drawers[active];
  const selected = choices[drawer.name] || drawer.notes[0];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (media.matches) video.current?.pause();
    };
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  async function toggleFilm() {
    if (playing) video.current?.pause();
    else {
      try { await video.current?.play(); }
      catch { setPlaying(false); }
    }
  }

  return (
    <>
      <section className="ff-opening" aria-labelledby="ff-title">
        <div className="ff-copy">
          <p className="ff-overline">Family-owned · Norco, California</p>
          <h1 id="ff-title"><span>What are</span><span>you <i>making?</i></span></h1>
          <p className="ff-lead">Custom liquid and powder flavors, developed for the way your finished product should taste.</p>
          <div className="ff-links"><a className="ff-primary" href="#sample-cabinet">Open the cabinet <ArrowDown size={17}/></a><Link href="/request-samples">Request a sample</Link></div>
        </div>
        <div className="ff-screen" onPointerMove={event => {
          if (event.pointerType !== "mouse" || playing) return;
          const stage = event.currentTarget;
          const rect = stage.getBoundingClientRect();
          stage.style.setProperty("--tilt-x", String((event.clientX - rect.left) / rect.width - 0.5));
          stage.style.setProperty("--tilt-y", String((event.clientY - rect.top) / rect.height - 0.5));
        }} onPointerLeave={event => {
          event.currentTarget.style.setProperty("--tilt-x", "0");
          event.currentTarget.style.setProperty("--tilt-y", "0");
        }}>
          <Image src="/studio/flavor-study.webp" fill priority sizes="(max-width: 760px) 100vw, 56vw" alt="Amber concentrate suspended around a sample bottle, fruit and herbs" className="ff-art"/>
          <div className="ff-droplets" aria-hidden="true">{drawers.map((item, i) => <b key={item.name} style={{"--drop":item.color,"--n":i} as CSSProperties}/>)}</div>
          <video ref={video} className={playing ? "ff-film is-playing" : "ff-film"} muted playsInline preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onError={() => setCanPlay(false)} aria-label="Flavor development film"><source src="/hero/hero.h264.mp4" type="video/mp4"/></video>
          {canPlay && <button className="ff-play" type="button" onClick={toggleFilm}>{playing ? <Pause size={16}/> : <Play size={16}/>} {playing ? "Pause film" : "Play the film"}</button>}
        </div>
      </section>
      <section className="ff-cabinet" id="sample-cabinet" aria-labelledby="cabinet-heading">
        <div className="ff-cab-head"><div><p className="ff-overline">The sample cabinet</p><h2 id="cabinet-heading">Find your flavor.</h2></div><Link href="/flavors">Browse the full library <ArrowRight size={17}/></Link></div>
        <div className="ff-case">
          <div className="ff-handles" role="group" aria-label="Choose a flavor drawer">{drawers.map((item, i) =>
            <button key={item.name} aria-pressed={active === i} onClick={() => setActive(i)} style={{"--pull":item.color} as CSSProperties}><b aria-hidden="true"/>{item.name}</button>)}</div>
          <div className="ff-open-drawer">
            <div className="ff-world" key={drawer.name}
              onPointerDown={event => {
                if (!event.isPrimary || event.button !== 0) return;
                swipeStart.current = { x: event.clientX, y: event.clientY };
                event.currentTarget.setPointerCapture(event.pointerId);
              }}
              onPointerCancel={() => { swipeStart.current = null; }}
              onPointerUp={event => {
                const start = swipeStart.current;
                swipeStart.current = null;
                if (!start) return;
                const dx = event.clientX - start.x;
                if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(event.clientY - start.y)) return;
                setActive((active + (dx < 0 ? 1 : -1) + drawers.length) % drawers.length);
              }}><Image src={'/studio/'+drawer.name.toLowerCase()+'.webp'} alt={drawer.name+" sample drawer"} draggable={false} fill sizes="(max-width: 760px) 90vw, 42vw"/><div className="ff-front" aria-hidden="true"><span>{drawer.name}</span></div></div>
            <div className="ff-note" key={active}><p className="ff-overline">Tasting card</p><h3>{drawer.name}</h3><p>{drawer.copy}</p><fieldset><legend>Pick a direction</legend>{drawer.notes.map(note => <label key={note}><input type="radio" name="flavor-direction" checked={selected === note} onChange={() => setChoices({...choices,[drawer.name]:note})}/>{note}</label>)}</fieldset><Link className="ff-primary" href={{pathname:"/request-samples",query:{flavor:selected}}}>Request this sample <ArrowRight size={16}/></Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
