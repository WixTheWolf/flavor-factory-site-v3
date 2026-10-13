"use client";

import Link from "next/link";
import { ArrowRight, Check, Plus } from "lucide-react";
import { useShortlist, type ShortlistItem } from "@/lib/shortlist";
import { trackEvent } from "@/lib/analytics";

/** The flavor page's actions: keep it in the sample tray, or go straight to the request with it. */
export function AddToTrayButton({ item }: { item: ShortlistItem }) {
  const { add, remove, has, mounted } = useShortlist();
  const inTray = mounted && has(item.id);

  function addItem() {
    const added = add(item);
    if (added) trackEvent("flavor_add_to_request", { flavor: item.name, family: item.family, location: "flavor page" });
  }

  return (
    <div className="flavor-page-actions">
      <button
        type="button"
        className={inTray ? "flavor-tray-btn is-in" : "btn-gold btn-lg"}
        aria-pressed={inTray}
        onClick={() => (inTray ? remove(item.id) : addItem())}
      >
        {inTray ? <Check size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
        {inTray ? "In your sample tray" : "Add to sample tray"}
      </button>
      <Link
        href="/request-samples"
        className="flavor-request-link"
        onClick={() => {
          if (!inTray) addItem();
          trackEvent("request_sample_click", { location: "flavor page", flavor: item.name });
        }}
      >
        Request this sample
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  );
}
