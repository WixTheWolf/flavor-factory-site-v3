"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { AppImage } from "@/components/ui/AppImage";
import s from "./FactoryGallery.module.css";

const PHOTOS = [
  { src: "/images/flavor-factory/inhouse-photos/lab-new.png", alt: "Flavor development lab at The Flavor Factory in Norco", caption: "R&D lab", area: "a", speed: 1 },
  { src: "/images/flavor-factory/inhouse-photos/production-workers.png", alt: "Production team mixing flavor batches on the production floor", caption: "Production floor", area: "b", speed: 0.6 },
  { src: "/images/flavor-factory/inhouse-photos/qc-lab.png", alt: "Quality control lab", caption: "Quality control", area: "c", speed: 1.3 },
  { src: "/images/flavor-factory/inhouse-photos/powder-room.png", alt: "Powder ribbon blender in the powder room", caption: "Powder blending", area: "d", speed: 0.9 },
] as const;

const PROOFS = [
  "In-house development and production",
  "Direct communication with the team",
  "Cleaner handoff from sample to scale",
];

export function FactoryGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section className={s.section} aria-labelledby="factory-title">
      <div className={s.shell}>
        <div className={s.head}>
          <div>
            <div className={s.eyebrow}>One Team, One Facility</div>
            <h2 id="factory-title">Step inside the factory.</h2>
          </div>
          <div>
            <p>
              Development, production, quality, and customer communication happen under one roof in Norco, California. The people who build your sample also understand how it gets made.
            </p>
            <ul className={s.proofs}>
              {PROOFS.map((proof) => (
                <li key={proof}>
                  <Check size={14} aria-hidden="true" />
                  {proof}
                </li>
              ))}
            </ul>
            <Link href="/about" className={s.link}>
              Meet the team
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className={s.bento} ref={ref}>
          {PHOTOS.map((photo, index) => (
            <Tile key={photo.src} {...photo} index={index} progress={scrollYProgress} still={!!reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

type TileProps = (typeof PHOTOS)[number] & {
  index: number;
  progress: MotionValue<number>;
  still: boolean;
};

function Tile({ src, alt, caption, area, speed, index, progress, still }: TileProps) {
  const y = useTransform(progress, [0, 1], still ? ["0%", "0%"] : [`${-6 * speed}%`, `${6 * speed}%`]);

  return (
    <motion.figure
      className={s.tile}
      style={{ gridArea: area }}
      initial={still ? false : { clipPath: "inset(14% 10% 14% 10% round 28px)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)", opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay: index * 0.1, ease: [0.2, 0.9, 0.2, 1] }}
    >
      <motion.div className={s.media} style={{ y }}>
        <AppImage src={src} alt={alt} sizes={area === "a" ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 100vw, 33vw"} />
      </motion.div>
      <figcaption>{caption}</figcaption>
    </motion.figure>
  );
}
