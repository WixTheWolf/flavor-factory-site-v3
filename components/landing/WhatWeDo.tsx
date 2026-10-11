import Link from "next/link";
import { ArrowRight, Check, Droplets, Factory, Layers, Leaf, Package, Target } from "lucide-react";
import { SITE_STATS } from "@/data/site-stats";
import s from "./WhatWeDo.module.css";

const SERVICES = [
  {
    icon: Droplets,
    title: "Custom liquid flavors",
    copy: "Water- and oil-soluble flavors built for your base, use level, and process.",
    href: "/custom-liquid-flavors",
  },
  {
    icon: Package,
    title: "Custom powder flavors",
    copy: "Powder flavors for nutraceutical, bakery, snack, and dry-blend products.",
    href: "/custom-powder-flavors",
  },
  {
    icon: Target,
    title: "Flavor matching",
    copy: "Replace a discontinued, costly, or underperforming flavor in your finished product.",
    href: "/flavor-matching",
  },
  {
    icon: Layers,
    title: "Masking and modulation",
    copy: "Tame bitter proteins, vitamins, botanicals, and actives without flattening the profile.",
    href: "/masking-and-modulation",
  },
  {
    icon: Leaf,
    title: "Natural and organic-compliant",
    copy: "Natural, N&A, artificial, organic-compliant, kosher, and halal directions, set early.",
    href: "/organic-compliant-flavors",
  },
  {
    icon: Factory,
    title: "Sample to full production",
    copy: "The team that builds your sample takes it to repeatable production runs.",
    href: "/process",
  },
] as const;

const OFFER = [
  "First samples in 3-5 business days",
  "Low minimums",
  `${SITE_STATS.flavorProfileCount}+ flavor profiles to start from`,
  "SQF facility, GMP practices, FDA registered",
  "Kosher, Halal & organic-compliant options",
  `${SITE_STATS.combinedYearsExperience}+ years of combined flavor experience`,
];

/** What we do and what customers get, right after the sample request. */
export function WhatWeDo() {
  return (
    <section id="what-we-do" className={s.section} aria-labelledby="what-we-do-title">
      <div className={s.shell}>
        <div className={s.head}>
          <div className="new-eyebrow">What We Do</div>
          <h2 id="what-we-do-title">Custom flavors, developed and made in one Norco facility.</h2>
          <p>
            A family-owned team that develops, matches, and manufactures liquid and powder flavors for food, beverage, nutraceutical, oral care, and pharmaceutical products.
          </p>
        </div>

        <ul className={s.grid}>
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.title}>
                <Link href={service.href} className={s.card}>
                  <span className={s.icon} aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <span className={s.more}>
                    <span className={s.moreText}>Learn more</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={s.offer}>
          <div className={s.offerHead}>
            <div className={s.offerEyebrow}>What you get</div>
            <p>Every project, from the first sample on.</p>
          </div>
          <ul className={s.offerList}>
            {OFFER.map((item) => (
              <li key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={s.links}>
          <Link href="/capabilities">All capabilities</Link>
          <Link href="/industries">Industries we serve</Link>
          <Link href="/certifications">Certifications</Link>
        </div>
      </div>
    </section>
  );
}
