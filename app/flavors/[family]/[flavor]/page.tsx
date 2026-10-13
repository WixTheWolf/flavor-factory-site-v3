import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { AppImage } from "@/components/ui/AppImage";
import { AddToTrayButton } from "@/components/flavors/AddToTrayButton";
import { FlavorTileGrid } from "@/components/flavors/FlavorTile";
import { demoFlavors } from "@/data/demo-flavors";
import { familyMedia, getFamilyBySlug } from "@/data/flavor-family-details";
import { swatchFor } from "@/data/flavor-swatches";
import {
  DECLARATION_LABELS,
  INDUSTRY_LABELS,
  flavorHref,
  flavorsSharingIngredient,
  getFlavor,
  moreInFamily,
  toLibraryItem,
} from "@/lib/flavor-library";
import { breadcrumbSchema } from "@/lib/schema";
import s from "./FlavorPage.module.css";

type Params = { params: { family: string; flavor: string } };

export function generateStaticParams() {
  return demoFlavors.map((flavor) => ({ family: flavor.familySlug, flavor: flavor.id }));
}

export const dynamicParams = false;

function firstSentence(text: string) {
  const match = text.match(/^.*?[.!?](\s|$)/);
  return (match ? match[0] : text).trim();
}

export function generateMetadata({ params }: Params): Metadata {
  const flavor = getFlavor(params.family, params.flavor);
  if (!flavor) return {};
  const formats = flavor.formats.join(" and ").toLowerCase();
  const title = `${flavor.name} Flavor`;
  const description = `${firstSentence(flavor.notes)} ${flavor.name} flavor in ${formats} format${flavor.formats.length > 1 ? "s" : ""}, built for your base. Samples in 3-5 business days.`;
  const path = flavorHref(flavor);
  const og = `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(`${flavor.family} · ${flavor.formats.join(" and ")}`)}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { url: path, title: `${title} | The Flavor Factory`, description, images: [{ url: og, width: 1200, height: 630, alt: `${flavor.name} flavor` }] },
    twitter: { title: `${title} | The Flavor Factory`, description, images: [og] },
  };
}

export default function FlavorPage({ params }: Params) {
  const flavor = getFlavor(params.family, params.flavor);
  const family = getFamilyBySlug(params.family);
  if (!flavor || !family) notFound();

  const [c1, c2] = swatchFor(flavor.name, flavor.familySlug);
  const media = familyMedia(family.slug);
  const sharing = flavorsSharingIngredient(flavor);
  const more = moreInFamily(flavor, sharing.map((item) => item.id));
  const powderNote = flavor.formats.length > 1 ? flavor.formatNotes.Powder : undefined;
  // "Blend" is the default and "Powder" is already a format, so neither says anything new here.
  const forms = flavor.productTypes.filter((type) => type !== "Blend" && type !== "Powder");
  const signals = flavor.signals.map((key) => INDUSTRY_LABELS[key]);
  const declarations = flavor.declarations.length ? flavor.declarations.map((item) => (item === "Natural & Artificial" ? "Natural & Artificial (N&A)" : item)) : ["Set by project"];
  const style = { "--c1": c1, "--c2": c2 } as CSSProperties;

  const crumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Flavors", path: "/flavors" },
    { name: `${family.name} Flavors`, path: `/flavors/${family.slug}` },
    { name: flavor.name, path: flavorHref(flavor) },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Header />
      <main style={style}>
        <section className={`${s.hero} glow-zone grain`}>
          <div className={s.heroGlow} aria-hidden="true" />
          <div className={s.heroInner}>
            <div className={s.heroCopy}>
              <nav className={s.crumbs} aria-label="Breadcrumb">
                <Link href="/flavors">Flavors</Link>
                <span aria-hidden="true">/</span>
                <Link href={`/flavors/${family.slug}`}>{family.name}</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{flavor.name}</span>
              </nav>
              <p className={s.eyebrow}>{family.name} flavor</p>
              <h1 className={s.title}>{flavor.name}</h1>
              <p className={s.lede}>{flavor.notes}</p>
              <ul className={s.facts} aria-label="At a glance">
                {flavor.formats.map((format) => (
                  <li key={format}>{format}</li>
                ))}
                {flavor.declarations.map((item) => (
                  <li key={item}>{DECLARATION_LABELS[item] === "N&A" ? "Natural & Artificial" : item}</li>
                ))}
                {forms.map((form) => (
                  <li key={form}>{form}</li>
                ))}
              </ul>
              <AddToTrayButton
                item={{ id: flavor.id, name: flavor.name, family: flavor.family, format: flavor.formats.join(" or "), color: c1, href: flavorHref(flavor) }}
              />
            </div>

            <figure className={s.chip} aria-hidden="true">
              <div className={s.chipColor}>
                <AppImage src={media.image} alt="" sizes="(max-width: 900px) 70vw, 380px" quality={60} className={s.chipImage} />
              </div>
              <figcaption className={s.chipLabel}>
                <strong>{flavor.name}</strong>
                <span>
                  {family.name} · {flavor.formats.join(" · ")}
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={`section clean-page ${s.body}`}>
          <div className="container">
            <div className={s.detailGrid}>
              <div className={s.detailMain}>
                <h2 className={s.h2}>Working with {flavor.name.toLowerCase()}</h2>
                {powderNote && powderNote !== flavor.notes && (
                  <p>
                    <strong>In powder:</strong> {powderNote}
                  </p>
                )}
                <p className={s.muted}>
                  Every sample is built for your base, process and label, so treat this as the starting point we tune from, not a fixed spec.
                </p>

                <h3 className={s.h3}>Where {family.name.toLowerCase()} flavors are used</h3>
                <ul className={s.uses}>
                  {family.applications.map((application) => (
                    <li key={application}>{application}</li>
                  ))}
                </ul>
                {signals.length > 0 && (
                  <p className={s.muted}>This profile is named for {signals.join(" and ").toLowerCase()} work.</p>
                )}

                {family.formulatorNote && (
                  <aside className={s.note}>
                    <p className={s.noteLabel}>Formulator note for {family.name.toLowerCase()}</p>
                    <p>{family.formulatorNote}</p>
                  </aside>
                )}
              </div>

              <dl className={s.spec}>
                <div>
                  <dt>Formats</dt>
                  <dd>{flavor.formats.join(", ")}</dd>
                </div>
                <div>
                  <dt>Label declaration</dt>
                  <dd>{declarations.join(", ")}</dd>
                </div>
                {forms.length > 0 && (
                  <div>
                    <dt>Forms on file</dt>
                    <dd>{forms.join(", ")}</dd>
                  </div>
                )}
                {flavor.strengths.length > 0 && (
                  <div>
                    <dt>Strengths on file</dt>
                    <dd>{flavor.strengths.join(", ")}</dd>
                  </div>
                )}
                <div>
                  <dt>Family</dt>
                  <dd>
                    <Link href={`/flavors/${family.slug}`}>{family.name}</Link>
                  </dd>
                </div>
                <div>
                  <dt>Product names on file</dt>
                  <dd>
                    <ul className={s.raw}>
                      {flavor.rawNames.map((raw) => (
                        <li key={raw}>{raw}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className={s.specFoot}>
                  <dt className="sr-only">Documentation</dt>
                  <dd>Documentation is reviewed by project. COAs, ingredient statements and related paperwork can be made available. <Link href="/certifications">See documentation support</Link>.</dd>
                </div>
              </dl>
            </div>

            {sharing.length > 0 && (
              <section className={s.related} aria-labelledby="sharing-heading">
                <h2 id="sharing-heading" className={s.h2}>
                  Also in the library with {flavor.name.toLowerCase()}
                </h2>
                <FlavorTileGrid flavors={sharing.map(toLibraryItem)} />
              </section>
            )}

            {more.length > 0 && (
              <section className={s.related} aria-labelledby="more-heading">
                <div className={s.relatedHead}>
                  <h2 id="more-heading" className={s.h2}>
                    More {family.name.toLowerCase()} flavors
                  </h2>
                  <Link href={`/flavors?family=${family.slug}`} className="light-btn">
                    All {family.name.toLowerCase()} flavors
                  </Link>
                </div>
                <FlavorTileGrid flavors={more.map(toLibraryItem)} showFamily={false} />
              </section>
            )}
          </div>
        </section>

        <CTA
          eyebrow={`${flavor.name} samples`}
          title="Tell us what you're making. We'll tune it for your base."
          copy={`Add ${flavor.name} to your sample tray with anything else you want to try, then send one quick request. First samples typically ship in 3-5 business days once your brief is confirmed.`}
          href="/request-samples"
          label="Request Samples"
        />
      </main>
      <Footer />
    </>
  );
}
