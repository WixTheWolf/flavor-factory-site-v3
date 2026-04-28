import type { Flavor } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function FlavorCard({ flavor }: { flavor: Flavor }) {
  return (
    <Card className="finder-card-polish">
      <div className="finder-card-top" />
      <div className="eyebrow">{flavor.format} • {flavor.declarationType}</div>
      <h3>{flavor.name}</h3>
      <p>{flavor.notes}</p>
      <div className="showcase-pills" style={{ marginTop: 12 }}>
        <span className="soft-pill">{flavor.family}</span>
        {flavor.productTypes.slice(0, 2).map((item) => (
          <span className="soft-pill" key={item}>
            {item}
          </span>
        ))}
        {flavor.profile.slice(0, 2).map((item) => (
          <span className="soft-pill" key={item}>
            {item}
          </span>
        ))}
      </div>
      <p style={{ marginTop: 10, opacity: 0.75, fontSize: 13 }}>Recommended industries: {flavor.industries.join(", ")}</p>
      <p style={{ marginTop: 6, opacity: 0.75, fontSize: 13 }}>Suggested applications: {flavor.applications.join(", ")}</p>
      {flavor.strengths.length > 0 && <p style={{ marginTop: 6, opacity: 0.75, fontSize: 13 }}>Strengths: {flavor.strengths.join(", ")}</p>}
      <details style={{ marginTop: 10 }}>
        <summary style={{ cursor: "pointer", fontSize: 13 }}>Technical details ({flavor.variantCount} variants)</summary>
        <ul style={{ marginTop: 8, paddingLeft: 18, fontSize: 13, opacity: 0.75 }}>
          {flavor.rawNames.slice(0, 6).map((raw) => (
            <li key={raw}>{raw}</li>
          ))}
          {flavor.rawNames.length > 6 && <li>+{flavor.rawNames.length - 6} more raw variants</li>}
        </ul>
      </details>
      <Button href="/request-samples" variant="secondary" className="mt-24">
        Request sample for this profile
      </Button>
    </Card>
  );
}
