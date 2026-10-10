import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AppImage } from "@/components/ui/AppImage";
import s from "./CertStrip.module.css";

const NOTES = ["SQF facility", "GMP practices", "FDA registered", "Kosher & Halal options", "Organic-compliant options", "COAs & allergen docs"];

export function CertStrip() {
  return (
    <section className={s.section} aria-labelledby="cert-strip-title">
      <div className={s.inner}>
        <div className={s.copy}>
          <div className="new-eyebrow">Quality & Documentation</div>
          <h2 id="cert-strip-title">Your label sets the rules. We work within them.</h2>
          <ul className={s.notes}>
            {NOTES.map((note) => <li key={note}>{note}</li>)}
          </ul>
          <p className={s.fine}>Certification and documentation needs are reviewed by project. Not every option applies to every product.</p>
          <Link href="/certifications" className={s.link}>
            Review documentation support
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className={s.badges}>
          <AppImage
            src="/images/flavor-factory/certifications-transparent.png"
            alt="Facility, quality, kosher, halal, organic-compliant, and FDA registration program badges"
            fill={false}
            width={2172}
            height={724}
            sizes="(max-width: 900px) calc(100vw - 32px), 620px"
          />
        </div>
      </div>
    </section>
  );
}
