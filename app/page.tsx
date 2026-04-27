"use client";

import { ArrowRight, ChevronRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { applications, applicationOptions, flavorTiles, formatOptions, goalOptions, pathways, qualityBadges, strengths } from "@/components/site-data";
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
        "Top Notes": "Bright aromatic liquid systems for immediate flavor impact.",
        "Sweetness Support": "Liquid profiles that round edges and support cleaner sweetness.",
        Cooling: "Cooling liquid systems for mint-forward and freshness-driven products.",
        Masking: "Practical liquid masking support for challenging active ingredients.",
        "Creamy Body": "Smooth liquid body notes for dairy and dessert-style products.",
        "Fruit Profiles": "Juicy fruit systems tuned for beverages and syrups.",
      },
      Powder: {
        "Top Notes": "Powder systems that hold character through blending and shelf life.",
        "Sweetness Support": "Dry flavor support to improve perceived sweetness and finish.",
        Cooling: "Cooling powder systems for chewables, oral care, and novelty formats.",
        Masking: "Powder masking support for nutraceutical and pharmaceutical formats.",
        "Creamy Body": "Full-bodied powder profiles for shakes, gummies, and bakery mixes.",
        "Fruit Profiles": "Impactful fruit profiles for drink mixes and dry applications.",
      },
    };

    return {
      title: `${selectedFormat} + ${selectedApplication}`,
      body: lines[selectedFormat][selectedGoal],
      next: `Recommended next step: request a ${selectedFormat.toLowerCase()} sample direction for ${selectedApplication.toLowerCase()}.`,
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
              <div className="hero-kicker"><span className="hero-dot" /> Family Owned. Flavor Focused.</div>
              <h1 className="hero-title">Custom flavor manufacturing <span className="accent serif">for real product teams.</span></h1>
              <p className="hero-text">
                The Flavor Factory in Norco, California develops custom liquid and powder flavors for food, beverage, oral care, nutraceutical, and pharmaceutical products.
              </p>
              <div className="hero-actions">
                <a href="/contact" className="dark-btn">Request Samples</a>
                <a href="/#pathways" className="light-btn">Explore Industries</a>
              </div>
              <div className="stat-grid">
                {[
                  { value: "3–5", label: "business day samples" },
                  { value: "Low", label: "minimums to start" },
                  { value: "2", label: "formats: liquid & powder" },
                  { value: "100%", label: "custom matching focus" },
                ].map((item) => (
                  <div key={item.label} className="stat-card">
                    <div className="stat-value">{item.value}</div>
                    <div className="stat-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-media">
              <img src="/images/flavor-factory/hero-main.jpg" alt="Flavor formulation and ingredients" />
              <div className="floating-tags">
                {["liquid flavors", "powder flavors", "fast samples", "low minimums", "custom matching", "family owned"].map((item, i) => (
                  <div key={item} className={`floating-tag ${i % 2 === 0 ? "light" : "brand"}`}>{item}</div>
                ))}
              </div>
              <div className="hero-bottom-cards">
                {["Responsive service", "Manufacturing experience", "Sample-to-production support"].map((item) => (
                  <div key={item} className="glass-card">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 20 }}>
          <div className="container banner-grid">
            {[
              ["Family-owned service", "Direct communication from a team that knows your project."],
              ["Custom development", "Flavor matching and profile tuning for your product target."],
              ["Practical lead times", "Fast samples and updates so your launch stays on track."],
              ["Liquid + powder", "Capabilities that support both wet and dry manufacturing."],
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
                <SectionEyebrow>Industries we serve</SectionEyebrow>
                <SectionHeading>Markets where our team supports active product development.</SectionHeading>
              </div>
              <p className="section-subtext">Choose your industry to see how we support flavor development, masking, and production readiness.</p>
            </div>

            <div className="path-grid">
              {pathways.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.title} href={`/industries/${item.slug}`} className="path-card">
                    <img src={item.image} alt={item.title} />
                    <div className="path-overlay" />
                    <div className="path-tag"><Icon size={14} /> {item.tag}</div>
                    <div className="path-content">
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                      <div className="mini-link">View Market Page <ChevronRight size={14} /></div>
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
                <h2 className="section-title" style={{ color: "white", marginTop: 16 }}>Find a sample direction in minutes.</h2>
                <p className="section-subtext" style={{ color: "rgba(255,255,255,.75)", marginTop: 20 }}>
                  Select format, flavor goal, and product format to preview a recommended direction for your brief.
                </p>
                <div className="finder-card" style={{ marginTop: 24 }}>
                  <div className="filter-group-title" style={{ display: "flex", alignItems: "center", gap: 8 }}><Search size={14} /> Quick setup</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>Choose your options and send us your request when you are ready.</div>
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
                <SectionHeading>Manufacturing support built around your deadlines.</SectionHeading>
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
                <SectionEyebrow>Flavor families</SectionEyebrow>
                <SectionHeading>Start with a profile, then request custom matching.</SectionHeading>
              </div>
              <p className="section-subtext">Browse core flavor families and continue to our full library for more options.</p>
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
                <SectionHeading>Product formats we build flavors for every day.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16 }}>
                  These are practical end-product formats our customers bring to us for custom liquid and powder flavor development.
                </p>
                <a href="/applications" className="cta-btn" style={{ marginTop: 24 }}>View All Applications</a>
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
                <h2 className="section-title" style={{ color: "white" }}>Built for consistent production and reliable documentation.</h2>
                <p className="section-subtext" style={{ color: "rgba(255,255,255,.72)", marginTop: 16, maxWidth: 760 }}>
                  Our quality programs support repeatable flavor performance and manufacturing confidence.
                </p>
              </div>
              <a href="/contact" className="light-btn">Request Documentation</a>
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
                <SectionHeading>Tell us what you are making and what flavor you need.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16, maxWidth: 560 }}>
                  Share your target profile, application, and timeline. Our team will follow up with practical sample recommendations.
                </p>
                <div className="form-grid">
                  <input aria-label="Industry" value={sampleForm.industry} onChange={(e) => updateField("industry", e.target.value)} className="input" />
                  <input aria-label="Liquid or Powder" value={sampleForm.format} onChange={(e) => updateField("format", e.target.value)} className="input" />
                  <input aria-label="Target Flavor" value={sampleForm.flavor} onChange={(e) => updateField("flavor", e.target.value)} className="input" />
                  <input aria-label="Product Format" value={sampleForm.application} onChange={(e) => updateField("application", e.target.value)} className="input" />
                  <input aria-label="Timeline" value={sampleForm.timeline} onChange={(e) => updateField("timeline", e.target.value)} className="input" />
                  <textarea aria-label="Project Details" value={sampleForm.message} onChange={(e) => updateField("message", e.target.value)} className="textarea" />
                </div>
                <div className="sample-utility">
                  <button className="cta-btn">Send Sample Request</button>
                  <div style={{ fontSize: 14, color: "rgba(17,17,17,.5)" }}>Fast response from our Norco team.</div>
                </div>
              </div>

              <div className="sample-right">
                <img src="/images/flavor-factory/cta-background.jpg" alt="Flavor samples and raw ingredients" />
                <div className="sample-overlay" />
                <div className="top-tags">
                  {["Family-owned", "Fast samples", "Low minimums"].map((tag) => (
                    <div key={tag} className="flavor-badge">{tag}</div>
                  ))}
                </div>
                <div className="bottom-copy">
                  <div className="eyebrow" style={{ color: "#f59e0b" }}>Start your project</div>
                  <h3>Custom flavors made for your product and process.</h3>
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
