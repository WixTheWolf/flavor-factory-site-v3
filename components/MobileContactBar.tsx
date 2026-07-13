"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function MobileContactBar() {
  return (
    <div className="mobile-contact-bar" aria-label="Quick contact">
      <Link
        href="/request-samples"
        aria-label="Request a Custom Sample"
        onClick={() => trackEvent("request_sample_click", { location: "mobile sticky bar" })}
      >
        Request Sample
      </Link>
      <a href="tel:+19512739877" onClick={() => trackEvent("phone_click", { location: "mobile sticky bar" })}>
        <Phone size={16} aria-hidden="true" />
        Call
      </a>
    </div>
  );
}
