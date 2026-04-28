"use client";

import { ArrowRight, ChevronRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  applications,
  applicationOptions,
  flavorTiles,
  formatOptions,
  goalOptions,
  pathways,
  qualityBadges,
  strengths,
} from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function HomePage() {
  const [selectedFormat, setSelectedFormat] = useState("Liquid");
  const [selectedGoal, setSelectedGoal] = useState("Top Notes");
  const [selectedApplication, setSelectedApplication] = useState("RTD Beverages");
  const [sampleForm, setSampleForm] = useState({
    industry: "",
    format: "",
    flavor: "",
    application: "",
    timeline: "",
    message: "",
  });

  const finderResult = useMemo(() => {
    const lines: Record<string, Record<string, string>> = {
      Liquid: {
        "Top Notes": "Bright liquid flavor systems that open quickly and stay clean through shelf life.",
        "Sweetness Support": "Rounded flavor support to improve sweetness perception without a heavy finish.",
        Cooling: "Cooling systems for mint and freshness-focused products, including oral care and confectionery.",
        Masking: "Practical masking options for challenging actives and off-notes in liquid formats.",
        "Creamy Body": "Fuller mouthfeel support for dairy-style beverages, sauces, and dessert profiles.",
        "Fruit Profiles": "Fruit-forward systems with clear top notes and stable character.",
      },
      Powder: {
        "Top Notes": "Powder systems tuned for dry blending, so aroma remains present in finished products.",
        "Sweetness Support": "Dry-format flavor balancing to smooth edges and improve finish.",
        Cooling: "Powder cooling systems for mints, chewables, and dry functional products.",
        Masking: "Targeted masking support for nutraceutical and pharmaceutical powder formats.",
        "Creamy Body": "Creamy profile support for shake bases, bakery mixes, and powdered nutrition.",
        "Fruit Profiles": "Impactful fruit profiles for stick packs, powders, and functional blends.",
      },
    };

    return {
      title: `${selectedFormat} + ${selectedApplication}`,
      body: lines[selectedFormat][selectedGoal],
      next: `Recommended next step: request a ${selectedFormat.toLowerCase()} sample for ${selectedApplication.toLowerCase()}.`,
    };
  }, [selectedApplication, selectedFormat, selectedGoal]);

  const updateField = (key: keyof typeof sampleForm, value: string) => {
    setSampleForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="hero-kicker">
                <span className="hero-dot" /> Family-Owned Flavor Manufacturing • Norco, California
              </div>
              <h1 className="hero-title">
                Custom Liquid &amp; Powder Flavors
                <span className="accent serif">Built for Real Products.</span>
              </h1>
              <p className="hero-text">
                We help brands and manufacturers develop flavor systems that taste right, work in the application, and are ready for
                production.
              </p>
              <div className="hero-actions">
                <a href="/contact" className="dark-btn">Request Samples</a>
                <a href="/industries" className="light-btn">View Markets</a>
              </div>
              <div className="stat-grid">
                {[
                  { value: "3-5", label: "business days for samples" },
                  { value: "Low", label: "minimum order options" },
                  { value: "2", label: "formats: liquid + powder" },
                  { value: "100%", label: "family-owned operation" },
                ].map((item) => (
                  <div key={item.label} className="stat-card">
                    <div className="stat-value">{item.value}</div>
                    <div className="stat-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-media">
              <img src="/images/flavor-factory/hero-main.jpg" alt="Flavor development and manufacturing workspace" />
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 20 }}>
          <div className="container banner-grid">
            {[
              ["Liquid & Powder Capabilities", "Built for both liquid and powder systems with development support for each format."],
              ["Application Support", "Flavor recommendations are matched to your product format, process, and use case."],
              ["Fast Sample Support", "Short sample timelines help your team test and decide quickly."],
              ["Low Minimums & Scale Support", "Start with lower quantities, then scale with the same team as demand grows."],
            ].map(([title, text]) => (
              <div key={title} className="banner-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pathways" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <SectionEyebrow>Markets</SectionEyebrow>
                <SectionHeading>Markets We Serve</SectionHeading>
              </div>
              <p className="section-subtext">Choose your market to see how we support different product types, timelines, and production needs.</p>
            </div>

            <div className="path-grid">
              {pathways.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.title} href={item.href} className="path-card">
                    <img src={item.image} alt={item.title} />
                    <div className="path-overlay" />
                    <div className="path-tag"><Icon size={14} /> {item.tag}</div>
                    <div className="path-content">
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                      <div className="mini-link">View Market <ChevronRight size={14} /></div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="finder" className="section">
          <div className="container finder">
            <div className="finder-grid">
              <div>
                <SectionEyebrow>Flavor Finder</SectionEyebrow>
                <h2 className="section-title" style={{ color: "white", marginTop: 16 }}>Find a Starting Direction</h2>
                <p className="section-subtext" style={{ color: "rgba(255,255,255,.75)", marginTop: 20 }}>
                  Choose a format, goal, and application to get a practical sample direction.
                </p>
                <div className="finder-card" style={{ marginTop: 24 }}>
                  <div className="filter-group-title" style={{ display: "flex", alignItems: "center", gap: 8 }}><Search size={14} /> Quick setup</div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>Set your needs, review the suggested direction, then contact our team.</div>
                </div>
              </div>

              <div className="finder-card">
                <div className="filter-grid">
                  <div>
                    <div className="filter-group-title">Format</div>
                    <div className="filter-pills">
                      {formatOptions.map((item) => (
                        <button key={item} className={`filter-pill ${selectedFormat === item ? "active" : ""}`} onClick={() => setSelectedFormat(item)}>{item}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="filter-group-title">Goal</div>
                    <div className="filter-pills">
                      {goalOptions.map((item) => (
                        <button key={item} className={`filter-pill ${selectedGoal === item ? "active" : ""}`} onClick={() => setSelectedGoal(item)}>{item}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="filter-group-title">Application</div>
                    <div className="filter-pills">
                      {applicationOptions.map((item) => (
                        <button key={item} className={`filter-pill ${selectedApplication === item ? "active" : ""}`} onClick={() => setSelectedApplication(item)}>{item}</button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="result-card">
                  <div className="result-title">Result Preview</div>
                  <div className="result-main">Suggested path: {finderResult.title}</div>
                  <p className="result-text">{finderResult.body}</p>
                  <div className="result-next">{finderResult.next} <ArrowRight size={16} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="strengths" className="section">
          <div className="container">
            <div className="section-head" style={{ marginBottom: 24 }}>
              <div>
                <SectionEyebrow>Why customers stay</SectionEyebrow>
                <SectionHeading>Built around quality, speed, and follow-through.</SectionHeading>
              </div>
            </div>

            <div className="strength-grid">
              {strengths.map((item, idx) => {
                const Icon = item.icon;
                const background = idx % 2 === 0 ? "#fef2f2" : "#fff7ed";
                const ring = idx % 2 === 0 ? "rgba(213,43,30,.15)" : "rgba(245,158,11,.20)";
                return (
                  <div key={item.title} className="strength-card">
                    <div className="strength-icon" style={{ background, boxShadow: `0 0 0 1px ${ring} inset` }}>
                      <Icon size={22} color="#0f172a" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="flavors" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <SectionEyebrow>Flavor Library</SectionEyebrow>
                <SectionHeading>Popular flavor families.</SectionHeading>
              </div>
              <p className="section-subtext">Browse by family, then visit the full library for filtering, search, and sample requests.</p>
            </div>

            <div className="flavor-grid">
              {flavorTiles.map((tile) => (
                <a key={tile.name} href="/flavors" className="flavor-card">
                  <img src={tile.image} alt={tile.name} />
                  <div className="flavor-overlay" />
                  <div className="flavor-family">
                    <div className="flavor-badge">{tile.family}</div>
                  </div>
                  <div className="flavor-content">
                    <h3>{tile.name}</h3>
                    <div className="mini-link">View Library <ChevronRight size={14} /></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container showcase">
            <div className="showcase-grid">
              <div>
                <SectionEyebrow>Applications</SectionEyebrow>
                <SectionHeading>Applications &amp; Formats</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16 }}>
                  Start with the product format. We can help with liquid, powder, beverage, gummy, bakery, dairy, oral care,
                  pharmaceutical, savory, and more.
                </p>
                <div className="showcase-pills">
                  {applicationOptions.map((item) => (
                    <span key={item} className="soft-pill">{item}</span>
                  ))}
                </div>
                <a href="/applications" className="cta-btn" style={{ marginTop: 22 }}>View Applications</a>
              </div>

              <div className="application-grid">
                {applications.map((item) => (
                  <div key={item.name} className="application-card">
                    <img src={item.image} alt={item.name} />
                    <div>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="quality" className="section">
          <div className="container quality">
            <div className="quality-top">
              <div>
                <SectionEyebrow>Quality standards</SectionEyebrow>
                <h2 className="section-title" style={{ color: "white" }}>Quality systems built for dependable production.</h2>
                <p className="section-subtext" style={{ color: "rgba(255,255,255,.72)", marginTop: 16, maxWidth: 760 }}>
                  We keep documentation, process controls, and manufacturing discipline in place so flavors stay consistent from batch to batch.
                </p>
              </div>
              <a href="/contact" className="light-btn">Ask About Documentation</a>
            </div>
            <div className="quality-grid">
              {qualityBadges.map((item) => (
                <div key={item} className="quality-badge">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="samples" className="section" style={{ paddingBottom: 80 }}>
          <div className="container sample-panel">
            <div className="sample-grid">
              <div className="sample-left">
                <SectionEyebrow>Request Samples</SectionEyebrow>
                <SectionHeading>Tell us what you’re making.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16, maxWidth: 560 }}>
                  Send your product type, target flavor, format, and timeline. We’ll review the project and help with next steps.
                </p>
                <div className="form-grid">
                  <input value={sampleForm.industry} onChange={(e) => updateField("industry", e.target.value)} aria-label="Market" className="input" />
                  <input value={sampleForm.format} onChange={(e) => updateField("format", e.target.value)} aria-label="Liquid or powder" className="input" />
                  <input value={sampleForm.flavor} onChange={(e) => updateField("flavor", e.target.value)} aria-label="Target flavor" className="input" />
                  <input value={sampleForm.application} onChange={(e) => updateField("application", e.target.value)} aria-label="Product format" className="input" />
                  <input value={sampleForm.timeline} onChange={(e) => updateField("timeline", e.target.value)} aria-label="Timeline" className="input" />
                  <textarea value={sampleForm.message} onChange={(e) => updateField("message", e.target.value)} aria-label="Project notes" className="textarea" />
                </div>
                <div className="sample-utility">
                  <button className="cta-btn">Send Sample Request</button>
                  <div style={{ fontSize: 14, color: "rgba(17,17,17,.5)" }}>Fast response from a real team.</div>
                </div>
              </div>

              <div className="sample-right">
                <img src="/images/flavor-factory/cta-background.jpg" alt="Flavor ingredients and formulation background" />
                <div className="sample-overlay" />
                <div className="top-tags">
                  {["Low minimums", "Custom flavor matching", "Production-ready quality"].map((tag) => (
                    <div key={tag} className="flavor-badge">{tag}</div>
                  ))}
                </div>
                <div className="bottom-copy">
                  <div className="eyebrow" style={{ color: "#f59e0b" }}>Start your sample request</div>
                  <h3>Let’s build your next flavor profile.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
