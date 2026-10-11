"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { CONTACT, sampleMailto, webmailLinks, type SampleEmailContext } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

type FallbackProps = {
  location: string;
  context?: SampleEmailContext;
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Secondary to the on-site request forms: our sample address in plain sight. The address opens a
 * pre-written request in the visitor's email app; copy, Gmail, and Outlook cover computers with no
 * email app set up (a mailto link does nothing for them).
 */
export function EmailFallbacks({ location, context, tone = "dark", className = "" }: FallbackProps) {
  const [copied, setCopied] = useState(false);
  const web = webmailLinks(context);

  async function copy() {
    trackEvent("email_click", { location, method: "copy" });
    try {
      await navigator.clipboard.writeText(CONTACT.email);
    } catch {
      const field = document.createElement("textarea");
      field.value = CONTACT.email;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <div className={`email-fallbacks email-fallbacks--${tone} ${className}`.trim()}>
      <a
        className="email-fallbacks-address"
        href={sampleMailto(context)}
        onClick={() => trackEvent("email_click", { location, method: "mailto" })}
      >
        {CONTACT.email}
      </a>
      <button type="button" onClick={copy} aria-live="polite">
        {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
        {copied ? "Copied" : "Copy"}
      </button>
      <a
        href={web.gmail}
        target="_blank"
        rel="noopener"
        onClick={() => trackEvent("email_click", { location, method: "gmail" })}
      >
        Gmail
      </a>
      <a
        href={web.outlook}
        target="_blank"
        rel="noopener"
        onClick={() => trackEvent("email_click", { location, method: "outlook" })}
      >
        Outlook
      </a>
    </div>
  );
}
