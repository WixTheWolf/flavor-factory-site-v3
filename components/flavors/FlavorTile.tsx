"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { Check, Plus } from "lucide-react";
import { useShortlist } from "@/lib/shortlist";
import { trackEvent } from "@/lib/analytics";
import { DECLARATION_LABELS, type LibraryItem } from "@/lib/flavor-labels";
import s from "./FlavorTile.module.css";

type Props = {
  flavor: LibraryItem;
  /** Hide the family line where the whole grid is one family. */
  showFamily?: boolean;
  headingLevel?: "h2" | "h3";
};

/** One flavor as a color chip: its swatch, name, formats and label, with a button to add it to the sample tray. */
export function FlavorTile({ flavor, showFamily = true, headingLevel = "h3" }: Props) {
  const { add, remove, has, mounted } = useShortlist();
  const inTray = mounted && has(flavor.id);
  const Heading = headingLevel;
  const style = { "--c1": flavor.swatch[0], "--c2": flavor.swatch[1] } as CSSProperties;

  function toggle() {
    if (inTray) {
      remove(flavor.id);
      return;
    }
    const added = add({
      id: flavor.id,
      name: flavor.name,
      family: flavor.family,
      format: flavor.formats.join(" or "),
      color: flavor.swatch[0],
      href: flavor.href,
    });
    if (added) trackEvent("flavor_add_to_request", { flavor: flavor.name, family: flavor.family });
  }

  return (
    <article className={`${s.tile}${inTray ? ` ${s.inTray}` : ""}`} style={style}>
      <div className={s.swatch} aria-hidden="true" />
      <div className={s.body}>
        <Heading className={s.name}>
          <Link href={flavor.href} className={s.link}>
            {flavor.name}
          </Link>
        </Heading>
        {showFamily && <p className={s.family}>{flavor.family}</p>}
        <ul className={s.tags} aria-label="Formats and label">
          {flavor.formats.map((format) => (
            <li key={format}>{format}</li>
          ))}
          {flavor.declarations.map((declaration) => (
            <li key={declaration} className={s.label} title={declaration}>
              {DECLARATION_LABELS[declaration]}
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className={s.add}
        onClick={toggle}
        aria-pressed={inTray}
        aria-label={inTray ? `Remove ${flavor.name} from your sample tray` : `Add ${flavor.name} to your sample tray`}
        title={inTray ? "In your sample tray" : "Add to sample tray"}
      >
        {inTray ? <Check size={16} strokeWidth={2.6} aria-hidden="true" /> : <Plus size={17} strokeWidth={2.4} aria-hidden="true" />}
      </button>
    </article>
  );
}

export function FlavorTileGrid({ flavors, showFamily = true, className }: { flavors: LibraryItem[]; showFamily?: boolean; className?: string }) {
  return (
    <ul className={`${s.grid}${className ? ` ${className}` : ""}`}>
      {flavors.map((flavor) => (
        <li key={flavor.id}>
          <FlavorTile flavor={flavor} showFamily={showFamily} />
        </li>
      ))}
    </ul>
  );
}
