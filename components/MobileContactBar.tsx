"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function MobileContactBar() {
  const pathname = usePathname();

  // The request page has its own form and submit button; the bar would cover it.
  if (pathname.startsWith("/request-samples")) return null;

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
