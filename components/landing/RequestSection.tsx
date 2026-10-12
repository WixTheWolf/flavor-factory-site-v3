import { Phone } from "lucide-react";
import { QuickSampleRequest } from "@/components/QuickSampleRequest";
import { EmailFallbacks } from "@/components/EmailSamples";
import { CONTACT } from "@/lib/contact";
import s from "./RequestSection.module.css";
import { RevealWords } from "@/components/RevealWords";

const STEPS = [
  { title: "Send the quick request", copy: "Four fields. It goes straight to our sample team." },
  { title: "We build it for your base", copy: "Developed in our Norco lab around your product and label." },
  { title: "Samples ship", copy: "Typically in 3-5 business days once your brief is confirmed." },
] as const;

/** Homepage sample request, directly under the hero. Header and hero buttons scroll here. */
export function RequestSection() {
  return (
    <section id="request" className={s.section} aria-labelledby="request-title">
      <div className={s.shell}>
        <div className={s.head}>
          <div className="new-eyebrow">Request Samples</div>
          <h2 id="request-title" className={s.heading}>
            <RevealWords text="Tell us what you're making." accent="We'll send samples built for it." />
          </h2>
        </div>

        <div className={s.form}>
          <QuickSampleRequest location="homepage" title="Quick sample request" />
        </div>

        <div className={s.info}>
          <ol className={s.steps}>
            {STEPS.map((step, index) => (
              <li key={step.title}>
                <span className={s.num} aria-hidden="true">{index + 1}</span>
                <span>
                  <strong>{step.title}</strong>
                  <span>{step.copy}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className={s.alt}>
            <strong>Prefer email or phone?</strong>
            <EmailFallbacks location="homepage request" tone="light" />
            <a className={s.phone} href={CONTACT.phoneHref}>
              <Phone size={15} aria-hidden="true" />
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
