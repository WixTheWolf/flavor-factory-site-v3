"use client";

import { useState } from "react";
import { QuickSampleRequest } from "@/components/QuickSampleRequest";
import { SampleRequestForm } from "@/components/sample-request-form";
import { trackEvent } from "@/lib/analytics";
import s from "./RequestOptions.module.css";

type Mode = "quick" | "detailed";

const TABS: { mode: Mode; label: string; hint: string }[] = [
  { mode: "quick", label: "Quick request", hint: "4 fields, about a minute" },
  { mode: "detailed", label: "Detailed brief", hint: "Specs and shipping, 2 steps" },
];

/** The request page: the quick request first, with the full brief one tap away. */
export function RequestOptions({ initialMode = "quick", initialIndustry = "" }: { initialMode?: Mode; initialIndustry?: string }) {
  const [mode, setMode] = useState<Mode>(initialMode);

  function choose(next: Mode) {
    if (next === mode) return;
    setMode(next);
    trackEvent("request_sample_mode", { mode: next });
  }

  return (
    <div>
      <div className={s.tabs} role="tablist" aria-label="How would you like to request samples?">
        {TABS.map((tab) => (
          <button
            key={tab.mode}
            type="button"
            role="tab"
            id={`request-tab-${tab.mode}`}
            aria-selected={mode === tab.mode}
            aria-controls="request-panel"
            className={s.tab}
            onClick={() => choose(tab.mode)}
          >
            <strong>{tab.label}</strong>
            <small>{tab.hint}</small>
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="request-panel"
        aria-labelledby={`request-tab-${mode}`}
        className={mode === "detailed" ? s.detailedPanel : undefined}
      >
        {mode === "quick" ? (
          <QuickSampleRequest location="request page" initialIndustry={initialIndustry} title="Send a quick sample request" />
        ) : (
          <SampleRequestForm initialIndustry={initialIndustry} />
        )}
      </div>
    </div>
  );
}
