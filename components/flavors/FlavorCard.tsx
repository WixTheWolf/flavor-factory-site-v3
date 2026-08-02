"use client";

import Link from "next/link";
import type { Flavor } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { useShortlist } from "@/lib/shortlist";
import { trackEvent } from "@/lib/analytics";

function industryLabel(value: string) {
  return value
    .replace("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function uniqueLabels(items: string[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = item.toLowerCase().replace(/[^a-z0-9]+/g, "");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function FlavorCard({ flavor }: { flavor: Flavor }) {
  const { add, remove, has, mounted } = useShortlist();
  const inList = mounted && has(flavor.id);

  const fit = uniqueLabels([...flavor.applications, ...flavor.industries.map(industryLabel)]).slice(0, 3);
  const productTypes = flavor.productTypes.filter((item) => item !== "Blend" && item !== flavor.format);
  const metadata = Array.from(new Set([flavor.format, flavor.declarationType, ...productTypes])).slice(0, 3);

  function toggleShortlist() {
    if (inList) {
      remove(flavor.id);
      return;
    }

    add({ id: flavor.id, name: flavor.name, family: flavor.family, format: flavor.format });
    trackEvent("flavor_add_to_request", { flavor: flavor.name, family: flavor.family });
  }

  return (
    <Card className={`flavor-result-card finder-card-polish${inList ? " is-shortlisted" : ""}`}>
      <div className="finder-card-top" />
      <div className="flavor-card-head">
        <div>
          <div className="eyebrow">{flavor.family}</div>
          <h3>{flavor.name}</h3>
        </div>
        {flavor.variantCount > 1 && (
          <span className="flavor-variant-count">{flavor.variantCount} options</span>
        )}
      </div>

      <p className="flavor-card-note">{flavor.notes}</p>

      <div className="flavor-card-section">
        <div className="flavor-card-label">Common applications</div>
        <div className="showcase-pills">
          {fit.map((item) => <span className="soft-pill" key={item}>{item}</span>)}
        </div>
      </div>

      <div className="flavor-card-section">
        <div className="flavor-card-label">Format and declaration</div>
        <div className="flavor-meta-row">
          {metadata.map((item) => <span className="flavor-meta-chip" key={item}>{item}</span>)}
        </div>
      </div>

      <div className="flavor-card-actions">
        <button
          type="button"
          className={`shortlist-btn${inList ? " is-active" : ""}`}
          onClick={toggleShortlist}
          aria-label={inList ? `Remove ${flavor.name} from sample request` : `Add ${flavor.name} to sample request`}
        >
          {inList ? "Added to request" : "Add to sample request"}
        </button>
        <Link className="flavor-card-question-link" href="/contact">Ask a question</Link>
      </div>
    </Card>
  );
}
