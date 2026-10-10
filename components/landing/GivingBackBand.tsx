import Image from "next/image";
import Link from "next/link";
import { k9sBadge, k9sLinks } from "@/data/k9s-for-warriors";
import s from "./GivingBackBand.module.css";

export function GivingBackBand() {
  return (
    <section className={s.band} aria-label="Giving back">
      <div className={s.inner}>
        <Image
          className={s.badge}
          src={k9sBadge.src}
          alt={k9sBadge.alt}
          width={k9sBadge.width}
          height={k9sBadge.height}
          sizes="88px"
        />
        <p>
          <strong>Proud supporter of K9s For Warriors.</strong>{" "}
          We donate to help pair Veterans with life-saving Service Dogs.
        </p>
        <div className={s.links}>
          <Link href="/about">Our story</Link>
          <a href={k9sLinks.donate} target="_blank" rel="noopener">
            Donate ↗
          </a>
        </div>
      </div>
    </section>
  );
}
