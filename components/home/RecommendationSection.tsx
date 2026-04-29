import Link from "next/link";
import { demoFlavors } from "@/data/demo-flavors";
import { recommendedByIndustry } from "@/lib/recommendations";
import { Card } from "@/components/ui/Card";

export function RecommendationSection() {
  const picks = recommendedByIndustry(demoFlavors, "bakery");

  return (
    <section className="section" style={{ paddingTop: 8 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Flavor Finder</div>
            <h2 className="section-title">Find a flavor. Or start with an idea.</h2>
            <p className="section-subtext" style={{ marginTop: 10, maxWidth: 760 }}>
              Browse flavor families, explore by industry, or search for something specific.
            </p>
          </div>
          <Link href="/flavors" className="light-btn">Open Flavor Finder</Link>
        </div>

        <div className="strength-grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {picks.map((item) => (
            <Card key={item.id}>
              <div className="eyebrow">{item.format}</div>
              <h3>{item.name}</h3>
              <p>{item.notes}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
