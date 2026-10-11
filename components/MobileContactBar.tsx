"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CONTACT } from "@/lib/contact";

export function MobileContactBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [formInView, setFormInView] = useState(false);

  // On the homepage, step aside while the sample request form is on screen so it never covers a field.
  useEffect(() => {
    const section = isHome ? document.getElementById("request") : null;
    if (!section) {
      setFormInView(false);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setFormInView(entry.isIntersecting), { threshold: 0.12 });
    observer.observe(section);
    return () => observer.disconnect();
  }, [isHome]);

  // The request page has its own forms and submit buttons; the bar would cover them.
  if (pathname.startsWith("/request-samples")) return null;

  return (
    <div className={`mobile-contact-bar${formInView ? " is-tucked" : ""}`} aria-label="Quick contact">
      <Link
        href={isHome ? "#request" : "/request-samples"}
        aria-label="Request flavor samples"
        onClick={() => trackEvent("request_sample_click", { location: "mobile sticky bar" })}
      >
        Request Samples
      </Link>
      <a href={CONTACT.phoneHref} onClick={() => trackEvent("phone_click", { location: "mobile sticky bar" })}>
        <Phone size={16} aria-hidden="true" />
        Call
      </a>
    </div>
  );
}
