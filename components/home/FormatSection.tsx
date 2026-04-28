import { splitByFormat } from "@/lib/recommendations";
import { demoFlavors } from "@/data/demo-flavors";

export function FormatSection() {
  const { liquids, powders } = splitByFormat(demoFlavors);

  return (
    <section className="section" style={{ paddingTop: 8 }}>
      <div className="container banner-grid">
        <div className="banner-card">
          <h3>Liquid Flavor Systems</h3>
          <p>{liquids.length}+ demo profiles staged for beverage, dairy, confectionery, and syrup applications.</p>
        </div>
        <div className="banner-card">
          <h3>Powder Flavor Systems</h3>
          <p>{powders.length}+ demo profiles staged for nutraceutical, pharmaceutical, and dry blend needs.</p>
        </div>
        <div className="banner-card">
          <h3>Low Minimum Orders</h3>
          <p>Practical order quantities that support pilots, launches, and growing production programs.</p>
        </div>
        <div className="banner-card">
          <h3>Fast Turnaround</h3>
          <p>Responsive support from sample request through production planning.</p>
        </div>
      </div>
    </section>
  );
}
