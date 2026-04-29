import Link from "next/link";
import { industries } from "@/data/industries";
<<<<<<< HEAD
=======
import { AppImage } from "@/components/ui/AppImage";
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33

export function IndustriesSection() {
  return (
    <section className="section" style={{ paddingTop: 8 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Industries</div>
<<<<<<< HEAD
            <h2 className="section-title">Built for real production categories.</h2>
            <p className="section-subtext" style={{ marginTop: 12, maxWidth: 720 }}>
              From high-volume food programs to regulated wellness and pharma formats, we shape profiles for how products are actually processed and consumed.
=======
            <h2 className="section-title">Flavor solutions across categories.</h2>
            <p className="section-subtext" style={{ marginTop: 12, maxWidth: 720 }}>
              Every application has different demands. We build flavors with the end product in mind.
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
            </p>
          </div>
          <Link className="light-btn" href="/industries">View all industries</Link>
        </div>

        <div className="path-grid">
          {industries.map((item) => (
            <article className="path-card" key={item.key}>
<<<<<<< HEAD
              <img src={item.heroImage} alt={item.name} />
              <div className="path-overlay" />
              <div className="path-content">
                <div className="path-tag">{item.applications[0]}</div>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
=======
              <AppImage src={item.heroImage} alt={item.name} />
              <div className="path-overlay" />
              <div className="path-content">
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <div className="mini-link">{item.applications.slice(0, 2).join(" • ")}</div>
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
