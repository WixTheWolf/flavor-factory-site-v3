import type { CSSProperties } from "react";
import { accentFor, tickerFlavors } from "@/data/flavor-palette";
import s from "./FlavorMarquee.module.css";

const half = Math.ceil(tickerFlavors.length / 2);
const rows = [tickerFlavors.slice(0, half), tickerFlavors.slice(half)];

export function FlavorMarquee() {
  return (
    <section className={s.band} aria-label="A few of the flavor profiles in our library">
      <div className={s.rows}>
        {rows.map((row, rowIndex) => (
          <div className={`${s.row} ${rowIndex === 1 ? s.reverse : ""}`} key={rowIndex}>
            {/* The list is rendered twice so the loop is seamless. */}
            {[0, 1].map((copy) => (
              <ul className={s.track} key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
                {row.map((flavor) => (
                  <li key={flavor.name} style={{ "--accent": accentFor(flavor.family) } as CSSProperties}>
                    <i aria-hidden="true" />
                    {flavor.name}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
