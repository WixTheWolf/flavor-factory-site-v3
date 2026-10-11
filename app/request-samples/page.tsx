import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Request Flavor Samples",
  description:
    "Request custom liquid or powder flavor samples from The Flavor Factory in Norco, CA. A quick request takes about a minute, every request is reviewed by a real person, and first samples typically ship in 3-5 business days.",
  alternates: { canonical: "/request-samples" },
  openGraph: {
    url: "/request-samples",
    title: "Request Flavor Samples | The Flavor Factory",
    description:
      "Tell us what you're making in about a minute. Custom liquid and powder flavor samples from Norco, CA, typically shipping in 3-5 business days.",
    images: [
      {
        url: "/og?title=Request+Flavor+Samples&description=Complete+sample+briefs+from+Norco%2C+CA",
        width: 1200,
        height: 630,
        alt: "Request flavor samples from The Flavor Factory",
      },
    ],
  },
  twitter: {
    title: "Request Flavor Samples | The Flavor Factory",
    description:
      "Tell us what you're making in about a minute. Custom liquid and powder flavor samples from Norco, CA, typically shipping in 3-5 business days.",
    images: ["/og?title=Request+Flavor+Samples&description=Complete+sample+briefs+from+Norco%2C+CA"],
  },
};
import Link from "next/link";
import { Check, Mail, Phone } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { RequestOptions } from "@/components/RequestOptions";
import { AppImage } from "@/components/ui/AppImage";
import { BackgroundLoop } from "@/components/BackgroundLoop";
import { siteCopy } from "@/data/site-copy";
import { CONTACT } from "@/lib/contact";
import { normalizeIndustryKey } from "@/lib/industry-utils";
import s from "./request-page.module.css";

const BC_REQUEST_SAMPLES = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.flavorfactory.net"},{"@type":"ListItem","position":2,"name":"Request Samples","item":"https://www.flavorfactory.net/request-samples"}]};

const PROMISES = ["Quick request in about a minute", "Reviewed by a real person", "Liquid & powder formats"];

const NEXT_STEPS = [
  { title: "We review your brief", copy: "A real person confirms the company and project details." },
  { title: "R&D builds your sample", copy: "Developed for your base, process, and label goals in Norco." },
  { title: "Samples ship to you", copy: "Typically 3-5 business days once the brief is confirmed." },
];

export default function RequestSamplesPage({
  searchParams,
}: {
  searchParams?: { industry?: string; details?: string };
}) {
  const industry = normalizeIndustryKey(searchParams?.industry ?? "") || searchParams?.industry || "";
  const initialMode = searchParams?.details ? "detailed" : "quick";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BC_REQUEST_SAMPLES) }} />
      <Header />
      <main className={s.page}>
        <section className={s.top}>
          <BackgroundLoop
            video="/video/request-header"
            poster="/images/flavor-factory/v4/request-header.jpg"
            className={s.topMedia}
            videoClassName={s.topVideo}
            playingClassName={s.topVideoOn}
            media="(min-width: 700px)"
          />
          <div className={s.glow} aria-hidden="true" />
          <div className={s.topInner}>
            <div className={s.eyebrow}>Request Samples</div>
            <h1 className={s.title}>
              Get custom flavor samples, <em>built for your product.</em>
            </h1>
            <p className={s.intro}>
              Send a quick request in about a minute, or a detailed brief with specs and shipping. Our Norco team reviews every request, and first samples typically ship in 3-5 business days once your brief is confirmed.
            </p>
            <ul className={s.promises}>
              {PROMISES.map((item) => (
                <li key={item}>
                  <Check size={14} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={s.body}>
          <div className={s.grid}>
            <div className={s.formCol}>
              <RequestOptions initialMode={initialMode} initialIndustry={industry} />
            </div>

            <aside className={s.side} aria-label="What happens after you send your request">
              <div className={s.photo}>
                <AppImage
                  src="/images/flavor-factory/inhouse-photos/lab-sample-scale.png"
                  alt="A flavor sample being weighed on a lab scale at The Flavor Factory"
                  sizes="(max-width: 1080px) calc(100vw - 32px), 420px"
                  priority
                />
                <span className={s.photoTag}>Sample prep in our Norco lab</span>
              </div>

              <div className={s.panel}>
                <div className={s.panelEyebrow}>What happens next</div>
                <ol className={s.next}>
                  {NEXT_STEPS.map((item, index) => (
                    <li key={item.title}>
                      <span className={s.nextNum} aria-hidden="true">{index + 1}</span>
                      <span>
                        <strong>{item.title}</strong>
                        <span>{item.copy}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className={s.talk}>
                <strong>Prefer to talk first?</strong>
                <a href={CONTACT.phoneHref}>
                  <Phone size={16} aria-hidden="true" />
                  {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`}>
                  <Mail size={16} aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </div>

              <p className={s.quality}>
                {siteCopy.qualityLine}. <Link href="/certifications">Documentation support</Link>
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
