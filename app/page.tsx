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
  const [selectedApplication, setSelectedApplication] = useState("Beverages");
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
        "Top Notes": "Bright, aromatic liquid systems that open fast and stay expressive.",
        "Sweetness Support": "Balanced liquid flavor support that rounds edges without muddying the profile.",
        Cooling: "Refreshing liquid systems for mint, oral care, and cooling beverage applications.",
        Masking: "Clean-label liquid support to help difficult actives land smoother.",
        "Creamy Body": "Smooth, rounded profiles for dairy-inspired and indulgent applications.",
        "Fruit Profiles": "Juicy, vibrant fruit systems with freshness and lift.",
      },
      Powder: {
        "Top Notes": "Powder flavor systems built to stay expressive in dry applications.",
        "Sweetness Support": "Dry systems that improve perceived sweetness and round out the finish.",
        Cooling: "Powder cooling support for mints, oral care, and novelty concepts.",
        Masking: "Practical masking support for challenging nutraceutical and pharmaceutical formats.",
        "Creamy Body": "Fuller-bodied powder systems for shakes, gummies, and bakery.",
        "Fruit Profiles": "Impactful fruit systems designed for powdered and functional formats.",
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
              <h1 className="hero-title">Flavor <span className="accent serif">in motion.</span> Manufacturing <span>you can trust.</span></h1>
              <p className="hero-text">
                Custom liquid and powder flavor solutions for beverages, confections, nutraceuticals, and more—crafted to move from concept to production fast.
              </p>
              <div className="hero-actions">
                <a href="/contact" className="dark-btn">Request Samples</a>
                <a href="/#pathways" className="light-btn">Explore Flavor Worlds</a>
              </div>
              <div className="stat-grid">
                {[
                  { value: "3–5", label: "day lead times" },
                  { value: "Low", label: "minimum orders" },
                  { value: "2", label: "formats: liquid & powder" },
                  { value: "∞", label: "custom flavor possibilities" },
                ].map((item) => (
                  <div key={item.label} className="stat-card">
                    <div className="stat-value">{item.value}</div>
                    <div className="stat-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-media">
              <img src="/images/flavor-factory/hero-main.jpg" alt="Modern flavor manufacturing still life" />
              <div className="floating-tags">
                {[
                  "citrus oil",
                  "creamy body",
                  "berry top notes",
                  "cooling mint",
                  "caramel depth",
                  "vanilla warmth",
                ].map((item, i) => (
                  <div key={item} className={`floating-tag ${i % 2 === 0 ? "light" : "brand"}`}>{item}</div>
                ))}
              </div>
              <div className="hero-bottom-cards">
                {[
                  "Interactive pathways",
                  "Mouthwatering imagery",
                  "Manufacturing credibility",
                ].map((item) => (
                  <div key={item} className="glass-card">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 20 }}>
          <div className="container banner-grid">
            {[
              ["Flavor Worlds", "Explore flavor families by application, profile, and format."],
              ["Sensory Navigation", "Visuals guide people to the exact application they care about."],
              ["Fast Comprehension", "Users understand what you do in seconds, not minutes."],
              ["Built to Convert", "Every section points naturally toward contact and samples."],
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
                <SectionEyebrow>Choose your path</SectionEyebrow>
                <SectionHeading>Explore each category as <span className="serif" style={{ fontStyle: "italic", color: "#d52b1e" }}>its own flavor universe.</span></SectionHeading>
              </div>
              <p className="section-subtext">Browse tailored flavor directions for beverage, confection, bakery, and functional product applications.</p>
            </div>

            <div className="path-grid">
              {pathways.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.title} href="/contact" className="path-card">
                    <img src={item.image} alt={item.title} />
                    <div className="path-overlay" />
                    <div className="path-tag"><Icon size={14} /> {item.tag}</div>
                    <div className="path-content">
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                      <div className="mini-link">Enter This World <ChevronRight size={14} /></div>
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
                <h2 className="section-title" style={{ color: "white", marginTop: 16 }}>Find the right flavor direction faster.</h2>
                <p className="section-subtext" style={{ color: "rgba(255,255,255,.75)", marginTop: 20 }}>
                  Filter by format, goal, and application to preview a recommended flavor path for your team.
                </p>
                <div className="finder-card" style={{ marginTop: 24 }}>
                  <div className="filter-group-title" style={{ display: "flex", alignItems: "center", gap: 8 }}><Search size={14} /> Concept</div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>Pick a format, a goal, and a category—then reveal the smartest route.</div>
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
                <SectionEyebrow>Why brands stay</SectionEyebrow>
                <SectionHeading>Why teams trust The Flavor Factory.</SectionHeading>
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
                <SectionHeading>Flavor tiles built for <span className="serif" style={{ fontStyle: "italic", color: "#d52b1e" }}>quick exploration.</span></SectionHeading>
              </div>
              <p className="section-subtext">Explore flavor families, then jump straight into requesting samples for your next concept.</p>
            </div>

            <div className="flavor-grid">
              {flavorTiles.map((tile, idx) => (
                <a key={tile.name} href="/contact" className="flavor-card">
                  <img src={tile.image} alt={tile.name} />
                  <div className="flavor-overlay" />
                  <div className="flavor-family" style={{ justifyContent: idx % 2 === 0 ? "flex-end" : "flex-start" }}>
                    <div className="flavor-badge">{tile.family}</div>
                  </div>
                  <div className="flavor-content">
                    <h3>{tile.name}</h3>
                    <div className="mini-link">Explore <ChevronRight size={14} /></div>
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
                <SectionEyebrow>Built for real products</SectionEyebrow>
                <SectionHeading>Show the customer their own future product.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16 }}>
                  Don’t stop at ingredients. Show beverages, gummies, popcorn, syrups, baked goods, and more so buyers instantly see where they fit.
                </p>
                <div className="showcase-pills">
                  {applicationOptions.map((item) => (
                    <span key={item} className="soft-pill">{item}</span>
                  ))}
                </div>
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
                <h2 className="section-title" style={{ color: "white" }}>Quality standards, presented like a brand people remember.</h2>
                <p className="section-subtext" style={{ color: "rgba(255,255,255,.72)", marginTop: 16, maxWidth: 760 }}>
                  From documentation to manufacturing consistency, our process is built for dependable scale and repeatable flavor performance.
                </p>
              </div>
              <a href="/contact" className="light-btn">View Certifications</a>
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
                <SectionHeading>Tell us what you’re making. <span className="serif" style={{ fontStyle: "italic", color: "#d52b1e" }}>We’ll make the next step feel easy.</span></SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16, maxWidth: 560 }}>
                  Share your goals and timeline, and our team will follow up with sample recommendations tailored to your application.
                </p>
                <div className="form-grid">
                  <input value={sampleForm.industry} onChange={(e) => updateField("industry", e.target.value)} placeholder="Industry" className="input" />
                  <input value={sampleForm.format} onChange={(e) => updateField("format", e.target.value)} placeholder="Liquid or Powder" className="input" />
                  <input value={sampleForm.flavor} onChange={(e) => updateField("flavor", e.target.value)} placeholder="Target Flavor" className="input" />
                  <input value={sampleForm.application} onChange={(e) => updateField("application", e.target.value)} placeholder="Application" className="input" />
                  <input value={sampleForm.timeline} onChange={(e) => updateField("timeline", e.target.value)} placeholder="Timeline" className="input" />
                  <textarea value={sampleForm.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Message" className="textarea" />
                </div>
                <div className="sample-utility">
                  <button className="cta-btn">Send Sample Request</button>
                  <div style={{ fontSize: 14, color: "rgba(17,17,17,.5)" }}>Fast response from a real team.</div>
                </div>
              </div>

              <div className="sample-right">
                <img src="/images/flavor-factory/cta-background.jpg" alt="Flavor still life background" />
                <div className="sample-overlay" />
                <div className="top-tags">
                  {['Fast response', 'Human support', 'Tailored samples'].map((tag) => (
                    <div key={tag} className="flavor-badge">{tag}</div>
                  ))}
                </div>
                <div className="bottom-copy">
                  <div className="eyebrow" style={{ color: "#f59e0b" }}>Start your sample request</div>
                  <h3>Let’s build your next flavor together.</h3>
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
