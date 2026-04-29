import { splitByFormat } from "@/lib/recommendations";
import { demoFlavors } from "@/data/demo-flavors";

export function FormatSection() {
  const { liquids, powders } = splitByFormat(demoFlavors);

  return (
    <section className="section" style={{ paddingTop: 8 }}>
      <div className="container banner-grid">
        <div className="banner-card">
          <h3>Available in liquid</h3>
          <p>Built for beverage, dairy, confectionery, syrup, and other process-sensitive applications.</p>
        </div>
        <div className="banner-card">
          <h3>Available in powder</h3>
          <p>Built for dry blends, nutraceuticals, pharmaceutical formats, and shelf-stable systems.</p>
        </div>
        <div className="banner-card">
          <h3>Custom & matching support</h3>
          <p>Classic profiles, benchmark matching, and net-new development tailored to your application.</p>
        </div>
        <div className="banner-card">
          <h3>Fast, practical execution</h3>
          <p>Low minimums, responsive support, and a straightforward path from sample to scale.</p>
        </div>
      </div>
    </section>
  );
}
