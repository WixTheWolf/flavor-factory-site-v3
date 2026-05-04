import type { Flavor } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

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
  const fit = uniqueLabels([...flavor.applications, ...flavor.industries.map(industryLabel)]).slice(0, 4);
  const metadata = Array.from(new Set([flavor.format, flavor.declarationType, ...flavor.productTypes])).slice(0, 4);

  return (
    <Card className="flavor-result-card finder-card-polish">
      <div className="finder-card-top" />
      <div className="flavor-card-head">
        <div>
          <div className="eyebrow">{flavor.family}</div>
          <h3>{flavor.name}</h3>
        </div>
        <span className="flavor-variant-count">{flavor.variantCount} option{flavor.variantCount === 1 ? "" : "s"}</span>
      </div>
      <p className="flavor-card-note">{flavor.notes}</p>

      <div className="flavor-card-section">
        <div className="flavor-card-label">Best fit</div>
        <div className="showcase-pills">
          {fit.map((item) => (
            <span className="soft-pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flavor-card-section">
        <div className="flavor-card-label">Format / declaration</div>
        <div className="flavor-meta-row">
          {metadata.map((item) => (
            <span className="flavor-meta-chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <details className="flavor-card-details">
        <summary>View technical names</summary>
        <ul>
          {flavor.rawNames.slice(0, 5).map((raw) => (
            <li key={raw}>{raw}</li>
          ))}
          {flavor.rawNames.length > 5 && <li>+{flavor.rawNames.length - 5} more variants</li>}
        </ul>
      </details>

      <div className="flavor-card-actions">
        <Button href="/request-samples" variant="secondary">
          Request sample
        </Button>
        <Button href="/contact">
          Ask about this profile
        </Button>
      </div>
    </Card>
  );
}
