import { AppImage } from "@/components/ui/AppImage";

const industries = [
  {
    title: "Beverages",
    image: "/images/flavor-factory/industry-syrup-premium.jpg",
    points: ["Off-note masking", "Sweetener interaction", "Heat / pH stability", "Shelf-life consistency"],
  },
  {
    title: "Nutraceuticals",
    image: "/images/flavor-factory/industry-nutraceutical-v2.jpg",
    points: ["Protein and active masking", "Sweetener systems", "Aftertaste control", "Functional compatibility"],
  },
  {
    title: "Confectionery",
    image: "/images/flavor-factory/industry-confectionery-v2.jpg",
    points: ["Flavor impact vs sweetness", "Top-note retention", "Heat processing performance"],
  },
  {
    title: "Dairy & Alternatives",
    image: "/images/flavor-factory/industry-dairy-v2.jpg",
    points: ["Fat interaction", "Cream profile balance", "Stability across processing"],
  },
  {
    title: "Savory",
    image: "/images/flavor-factory/industry-savory-v2.jpg",
    points: ["Depth and roundness", "Salt interaction", "Cook / process stability"],
  },
] as const;

export function Industries() {
  return (
    <section className="new-section">
      <div className="home-shell">
        <div className="new-section-head">
          <div className="new-eyebrow">Industries</div>
          <h2>Multi-category production without losing control.</h2>
        </div>
        <div className="new-industry-grid">
          {industries.map((industry) => (
            <article className="new-industry-card" key={industry.title}>
              <div className="new-industry-image">
                <AppImage
                  src={industry.image}
                  alt={`${industry.title} application detail`}
                  sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1180px) 45vw, 25vw"
                />
              </div>
              <div className="new-industry-copy">
                <h3>{industry.title}</h3>
                <ul>
                  {industry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
