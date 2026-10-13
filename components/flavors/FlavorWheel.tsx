"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { FamilySummary, LibraryItem } from "@/lib/flavor-labels";
import s from "./FlavorWheel.module.css";

type Props = {
  items: LibraryItem[];
  families: FamilySummary[];
  /** Family slug picked in the library, or "All". */
  activeFamily: string;
  /** Ids the current search and filters leave; null when nothing narrows the library. */
  matches: Set<string> | null;
  hoverFamily: string | null;
  onHoverFamily: (slug: string | null) => void;
  onPickFamily: (slug: string) => void;
};

const GAP = 1.4; // degrees between families
const FAMILY_RING = [128, 194];
const FLAVOR_RING = [200, 284];

function hueOf(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  if (d < 0.08) return 400 + (1 - max) * 40; // near-neutrals (cream, coconut, garlic) gather at one end
  const h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return ((h * 60) + 360 + 30) % 360; // start the sweep at warm reds
}

function point(r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return `${(r * Math.cos(a)).toFixed(2)} ${(r * Math.sin(a)).toFixed(2)}`;
}

/** An annular slice from a0 to a1 degrees (0 at the top, clockwise). */
function slice(r0: number, r1: number, a0: number, a1: number) {
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M ${point(r1, a0)} A ${r1} ${r1} 0 ${large} 1 ${point(r1, a1)} L ${point(r0, a1)} A ${r0} ${r0} 0 ${large} 0 ${point(r0, a0)} Z`;
}

/**
 * The library as a color wheel: the inner ring is the 17 families, the outer ring every flavor's swatch,
 * grouped by family and swept by hue. It lights up what the search and filters match; a family segment
 * filters the library, a flavor opens its page. The grid below lists the same flavors as plain links.
 */
export function FlavorWheel({ items, families, activeFamily, matches, hoverFamily, onHoverFamily, onPickFamily }: Props) {
  const router = useRouter();
  const [hoverFlavor, setHoverFlavor] = useState<LibraryItem | null>(null);

  const layout = useMemo(() => {
    const per = (360 - GAP * families.length) / items.length;
    let angle = GAP / 2;
    return families.map((family) => {
      const members = items
        .filter((item) => item.familySlug === family.slug)
        .sort((a, b) => hueOf(a.swatch[0]) - hueOf(b.swatch[0]));
      const start = angle;
      const flavors = members.map((item, index) => {
        const a0 = start + index * per;
        return {
          item,
          path: slice(FLAVOR_RING[0], FLAVOR_RING[1], a0, a0 + per),
          // A search's matches stand out past the rim; the hovered flavor lifts wider still.
          pop: slice(FLAVOR_RING[0], FLAVOR_RING[1] + 9, a0, a0 + per),
          lift: slice(FLAVOR_RING[0], FLAVOR_RING[1] + 12, a0 - per * 0.6, a0 + per * 1.6),
        };
      });
      angle = start + members.length * per + GAP;
      return { family, path: slice(FAMILY_RING[0], FAMILY_RING[1], start, angle - GAP), flavors, count: members.length };
    });
  }, [items, families]);

  const focusFamily = hoverFamily ?? (activeFamily !== "All" ? activeFamily : null);
  const lit = (item: LibraryItem) => (matches ? matches.has(item.id) : true) && (!focusFamily || item.familySlug === focusFamily);
  const matchCount = matches ? matches.size : items.length;
  const familyHasMatch = (slug: string) => !matches || items.some((item) => item.familySlug === slug && matches.has(item.id));
  const centerFamily = families.find((family) => family.slug === focusFamily);

  return (
    <div className={s.wheel} onMouseLeave={() => { setHoverFlavor(null); onHoverFamily(null); }}>
      <svg viewBox="-300 -300 600 600" className={s.svg} role="group" aria-label="Flavor families wheel">
        <defs>
          <radialGradient id="wheel-sheen" r="0.5">
            <stop offset="0.62" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.8" stopColor="#fff" stopOpacity="0.16" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g aria-hidden="true">
          {layout.flatMap(({ flavors }) =>
            flavors.map(({ item, path, pop }) => (
              <path
                key={item.id}
                d={matches && lit(item) ? pop : path}
                fill={item.swatch[0]}
                className={`${s.flavor}${lit(item) ? "" : ` ${s.dim}`}`}
                onMouseEnter={() => { setHoverFlavor(item); onHoverFamily(item.familySlug); }}
                onClick={() => router.push(item.href)}
              />
            )),
          )}
          {hoverFlavor && (
            <path
              d={layout.flatMap((group) => group.flavors).find((entry) => entry.item.id === hoverFlavor.id)?.lift}
              fill={hoverFlavor.swatch[0]}
              className={s.lift}
            />
          )}
          <circle r={FLAVOR_RING[1]} fill="url(#wheel-sheen)" className={s.sheen} />
        </g>

        {layout.map(({ family, path, count }) => {
          const pressed = activeFamily === family.slug;
          const dim = focusFamily ? focusFamily !== family.slug : !familyHasMatch(family.slug);
          return (
            <path
              key={family.slug}
              d={path}
              fill={family.accent}
              className={`${s.family}${dim ? ` ${s.dim}` : ""}${pressed ? ` ${s.picked}` : ""}`}
              role="button"
              tabIndex={0}
              aria-pressed={pressed}
              aria-label={`${family.name}, ${count} flavors`}
              onMouseEnter={() => { setHoverFlavor(null); onHoverFamily(family.slug); }}
              onFocus={() => onHoverFamily(family.slug)}
              onBlur={() => onHoverFamily(null)}
              onClick={() => onPickFamily(family.slug)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onPickFamily(family.slug);
                }
              }}
            />
          );
        })}
      </svg>

      <div className={s.center}>
        {hoverFlavor ? (
          <>
            <span className={s.dot} style={{ background: hoverFlavor.swatch[0] }} aria-hidden="true" />
            <strong>{hoverFlavor.name}</strong>
            <small>
              {hoverFlavor.family} · {hoverFlavor.formats.join(" · ")}
            </small>
          </>
        ) : centerFamily ? (
          <>
            <span className={s.dot} style={{ background: centerFamily.accent }} aria-hidden="true" />
            <strong>{centerFamily.name}</strong>
            <small>
              {matches ? `${items.filter((item) => item.familySlug === centerFamily.slug && matches.has(item.id)).length} of ` : ""}
              {centerFamily.count} flavors
            </small>
          </>
        ) : (
          <>
            <strong className={s.big}>{matchCount}</strong>
            <small>{matches ? `of ${items.length} flavors match` : `flavors in ${families.length} families`}</small>
          </>
        )}
      </div>
    </div>
  );
}
