import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { AppImage } from "@/components/ui/AppImage";
import s from "./FactoryGallery.module.css";
import { RevealWords } from "@/components/RevealWords";

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
  return (
    <section className={`${s.section} glow-zone grain`} aria-labelledby="factory-title">
      <div className={s.shell}>
        <div className={s.head}>
          <div>
            <div className={s.eyebrow}>One Team, One Facility</div>
            <h2 id="factory-title"><RevealWords text="Step inside the factory." /></h2>
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

        <div className={s.bento}>
          {PHOTOS.map((photo) => (
            <Tile key={photo.src} {...photo} />
          ))}
        </div>
      </div>
    </section>
  );
}

type TileProps = (typeof PHOTOS)[number];

/** Clip-path reveal and parallax run on CSS scroll timelines (see the module CSS), so no JS ships for them. */
function Tile({ src, alt, caption, area, speed }: TileProps) {
  return (
    <figure className={s.tile} style={{ gridArea: area, "--speed": speed } as CSSProperties}>
      <div className={s.media}>
        <AppImage src={src} alt={alt} sizes={area === "a" ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 100vw, 33vw"} />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
