import { splitByFormat } from "@/lib/recommendations";
import { demoFlavors } from "@/data/demo-flavors";

export function FormatSection() {
  const { liquids, powders } = splitByFormat(demoFlavors);

  return (
    <section className="section" style={{ paddingTop: 8 }}>
      <div className="container banner-grid">
        <div className="banner-card">
<<<<<<< HEAD
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
=======
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
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
        </div>
      </div>
    </section>
  );
}
