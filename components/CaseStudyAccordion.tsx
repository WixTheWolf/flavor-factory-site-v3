"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyAccordion({ studies }: { studies: CaseStudy[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  function toggle(slug: string) {
    const next = openSlug === slug ? null : slug;
    setOpenSlug(next);
    if (next) {
      trackEvent("case_study_expand", { slug });
    }
  }

  return (
    <div className="cs-accordion">
      {studies.map((study) => {
        const isOpen = openSlug === study.slug;
        return (
          <article key={study.slug} className={`cs-item${isOpen ? " cs-item--open" : ""}`}>
            <button
              type="button"
              className="cs-trigger"
              aria-expanded={isOpen ? "true" : "false"}
              aria-controls={`cs-panel-${study.slug}`}
              onClick={() => toggle(study.slug)}
            >
              <div className="cs-trigger-left">
                <span className="new-eyebrow">{study.industry}</span>
                <h2>{study.title}</h2>
                <p className="cs-trigger-problem">{study.problem}</p>
                <dl className="cs-preview">
                  <div>
                    <dt>Application</dt>
                    <dd>{study.application}</dd>
                  </div>
                  <div>
                    <dt>Approach</dt>
                    <dd>{study.approach}</dd>
                  </div>
                  <div>
                    <dt>Capability</dt>
                    <dd>{study.capability}</dd>
                  </div>
                </dl>
              </div>
              <span className="cs-trigger-icon" aria-hidden="true">{isOpen ? "-" : "+"}</span>
            </button>

            {!isOpen && (
              <div className="cs-preview-footer">
                <div className="cs-preview-links">
                  <Link href={study.industryHref}>{study.industry}</Link>
                  <Link href={study.serviceHref}>Related service</Link>
                </div>
                <Link
                  href={study.ctaHref}
                  className="cta-btn cs-preview-cta"
                  onClick={() => trackEvent("case_study_cta_click", { slug: study.slug, location: "preview" })}
                >
                  {study.cta}
                </Link>
              </div>
            )}

            {isOpen && (
              <div
                className="cs-panel"
                id={`cs-panel-${study.slug}`}
                role="region"
                aria-label={study.title}
              >
                <div className="cs-panel-grid">
                  <div className="cs-panel-main">
                    <div className="cs-block">
                      <h3>Application</h3>
                      <p>{study.application}</p>
                    </div>
                    <div className="cs-block">
                      <h3>Problem</h3>
                      <p>{study.problem}</p>
                    </div>
                    <div className="cs-block">
                      <h3>Technical issue</h3>
                      <p>{study.technicalIssue}</p>
                    </div>
                    <div className="cs-block">
                      <h3>Approach</h3>
                      <p>{study.approach}</p>
                    </div>
                    <div className="cs-block cs-outcome">
                      <h3>Outcome note</h3>
                      <p>{study.outcome}</p>
                    </div>
                  </div>
                  <div className="cs-panel-meta">
                    <div className="cs-meta-item">
                      <span>Format</span>
                      <strong>{study.format}</strong>
                    </div>
                    <div className="cs-meta-item">
                      <span>Relevant capability</span>
                      <strong>{study.capability}</strong>
                    </div>
                    <div className="cs-meta-links">
                      <Link href={study.industryHref}>View {study.industry} applications</Link>
                      <Link href={study.serviceHref}>View related service</Link>
                    </div>
                    <div className="cs-meta-profiles">
                      {study.relatedProfiles.map((p) => (
                        <span key={p} className="flavor-meta-chip">{p}</span>
                      ))}
                    </div>
                    <Link
                      href={study.ctaHref}
                      className="cta-btn cs-cta"
                      onClick={() => trackEvent("case_study_cta_click", { slug: study.slug, location: "panel" })}
                    >
                      {study.cta}
                    </Link>
                  </div>
                </div>
                <p className="cs-disclaimer">Representative application. Not a named customer claim.</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}