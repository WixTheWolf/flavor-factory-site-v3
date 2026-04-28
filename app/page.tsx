"use client";

import { useMemo, useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { applicationOptions, formatOptions, goalOptions, pathways, qualityBadges, strengths } from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function HomePage() {
  const [selectedFormat, setSelectedFormat] = useState("Liquid");
  const [selectedGoal, setSelectedGoal] = useState("Flavor Match");
  const [selectedApplication, setSelectedApplication] = useState("Beverage");

  const direction = useMemo(
    () => `${selectedFormat} flavor samples for ${selectedApplication.toLowerCase()} with focus on ${selectedGoal.toLowerCase()}.`,
    [selectedApplication, selectedFormat, selectedGoal],
  );

  return (
    <>
      <Header />
      <main>
        <section className="section hero-simple">
          <div className="container">
            <SectionEyebrow>Family-Owned Flavor Manufacturing • Norco, California</SectionEyebrow>
            <h1 className="hero-simple-title">Custom Liquid &amp; Powder Flavors for Real Products</h1>
            <p className="section-subtext hero-simple-copy">
              The Flavor Factory is a custom manufacturer of high quality liquid and powder flavor solutions for all industries.
              We support food &amp; beverage, confectionery, nutraceutical, oral care, bakery, popcorn, dairy, syrup, and more.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="cta-btn">Request Samples</a>
              <a href="/industries" className="light-btn">View Markets</a>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 16 }}>
          <div className="container strength-grid">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="strength-card">
                  <div className="strength-icon"><Icon size={18} color="#d52b1e" /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <SectionEyebrow>Markets</SectionEyebrow>
                <SectionHeading>Industries We Serve</SectionHeading>
              </div>
              <p className="section-subtext">Choose your market and we will recommend a practical flavor path.</p>
            </div>
            <div className="path-grid simple-grid">
              {pathways.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.title} href={item.href} className="simple-card">
                    <div className="simple-top"><Icon size={16} /> {item.tag}</div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="finder" className="section">
          <div className="container simple-panel">
            <SectionEyebrow>Find a Starting Direction</SectionEyebrow>
            <p className="section-subtext" style={{ marginTop: 12 }}>
              Choose format, goal, and application to get a sample starting direction.
            </p>
            <div className="filter-grid" style={{ marginTop: 20 }}>
              <div>
                <div className="filter-group-title" style={{ color: "rgba(17,17,17,.55)" }}>Format</div>
                <div className="filter-pills">
                  {formatOptions.map((item) => (
                    <button key={item} className={`filter-pill plain ${selectedFormat === item ? "active" : ""}`} onClick={() => setSelectedFormat(item)}>{item}</button>
                  ))}
                </div>
              </div>
              <div>
                <div className="filter-group-title" style={{ color: "rgba(17,17,17,.55)" }}>Goal</div>
                <div className="filter-pills">
                  {goalOptions.map((item) => (
                    <button key={item} className={`filter-pill plain ${selectedGoal === item ? "active" : ""}`} onClick={() => setSelectedGoal(item)}>{item}</button>
                  ))}
                </div>
              </div>
              <div>
                <div className="filter-group-title" style={{ color: "rgba(17,17,17,.55)" }}>Application</div>
                <div className="filter-pills">
                  {applicationOptions.map((item) => (
                    <button key={item} className={`filter-pill plain ${selectedApplication === item ? "active" : ""}`} onClick={() => setSelectedApplication(item)}>{item}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="result-card plain" style={{ marginTop: 18 }}>
              <div className="result-title" style={{ color: "rgba(17,17,17,.55)" }}>Suggested Direction</div>
              <p className="section-subtext" style={{ marginTop: 8 }}>{direction}</p>
            </div>
          </div>
        </section>

        <section id="quality" className="section">
          <div className="container simple-panel">
            <SectionEyebrow>Quality</SectionEyebrow>
            <SectionHeading>Consistent flavor support from sample to production</SectionHeading>
            <div className="quality-grid" style={{ marginTop: 22 }}>
              {qualityBadges.map((badge) => (
                <div key={badge} className="quality-badge plain">{badge}</div>
              ))}
            </div>
            <a href="/contact" className="cta-btn" style={{ marginTop: 20 }}>Ask About Documentation</a>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: 80 }}>
          <div className="container simple-panel">
            <SectionEyebrow>Contact</SectionEyebrow>
            <SectionHeading>Tell us what you&apos;re making</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 12 }}>
              Send your product type, target flavor, format, and timeline. We&apos;ll review the project and help with next steps.
            </p>
            <a href="/contact" className="dark-btn" style={{ marginTop: 20 }}>Contact Us Today</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
