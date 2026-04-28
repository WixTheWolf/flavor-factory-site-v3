import type { Flavor } from "@/lib/types";
import { Card } from "@/components/ui/Card";

export function FlavorCard({ flavor }: { flavor: Flavor }) {
  return (
    <Card className="finder-card-polish">
      <div className="finder-card-top" />
      <div className="eyebrow">{flavor.format}</div>
      <h3>{flavor.name}</h3>
      <p>{flavor.notes}</p>
      <div className="showcase-pills" style={{ marginTop: 12 }}>
        <span className="soft-pill">{flavor.family}</span>
        {flavor.profile.slice(0, 2).map((item) => <span className="soft-pill" key={item}>{item}</span>)}
      </div>
      <p style={{ marginTop: 10, opacity: 0.75, fontSize: 13 }}>Industries: {flavor.industries.join(", ")}</p>
      <p style={{ marginTop: 6, opacity: 0.75, fontSize: 13 }}>Applications: {flavor.applications.join(", ")}</p>
    </Card>
  );
}
