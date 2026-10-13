import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SITE_STATS } from "@/data/site-stats";
import { flavorFamilyDetails } from "@/data/flavor-family-details";
import { AppImage } from "@/components/ui/AppImage";
import { CountUp } from "@/components/CountUp";
import { RevealWords } from "@/components/RevealWords";
import s from "./WhatWeDo.module.css";

const SERVICES = [
  {
    title: "Custom liquid flavors",
    copy: "Water- and oil-soluble flavors built for your base, use level, and process.",
    href: "/custom-liquid-flavors",
    image: "/images/flavor-factory/v4/service-liquid.jpg",
    area: s.liquid,
  },
  {
    title: "Custom powder flavors",
    copy: "Powder flavors for nutraceutical, bakery, snack, and dry-blend products.",
    href: "/custom-powder-flavors",
    image: "/images/flavor-factory/v4/service-powder.jpg",
    area: s.powder,
  },
  {
    title: "Flavor matching",
    copy: "Replace a discontinued, costly, or underperforming flavor in your finished product.",
    href: "/flavor-matching",
    image: "/images/flavor-factory/v4/service-matching.jpg",
    area: s.matching,
  },
  {
    title: "Masking and modulation",
    copy: "Tame bitter proteins, vitamins, botanicals, and actives without flattening the profile.",
    href: "/masking-and-modulation",
    image: "/images/flavor-factory/v4/service-masking.jpg",
    area: s.masking,
  },
  {
    title: "Natural and organic-compliant",
    copy: "Natural, N&A, artificial, organic-compliant, kosher, and halal directions, set early.",
    href: "/organic-compliant-flavors",
    image: "/images/flavor-factory/v4/service-organic.jpg",
    area: s.organic,
  },
  {
    title: "Sample to full production",
    copy: "The team that builds your sample takes it to repeatable production runs.",
    href: "/process",
    image: "/images/flavor-factory/inhouse-photos/production-room.png",
    area: s.production,
  },
];

const STATS = [
  { value: null, display: "3-5", label: "business days to first samples" },
  { value: SITE_STATS.flavorCount, suffix: "+", label: "flavors to start from" },
  { value: flavorFamilyDetails.length, suffix: "", label: "flavor families in the library" },
  { value: SITE_STATS.combinedYearsExperience, suffix: "+", label: "years of combined flavor experience" },
];

const PROMISES = ["Low minimums", "SQF facility, GMP practices, FDA registered", "Kosher, Halal & organic-compliant options"];

/** What we do and what customers get, right after the sample request. */
export function WhatWeDo() {
  return (
    <section id="what-we-do" className={s.section} aria-labelledby="what-we-do-title">
      <div className={s.shell}>
        <div className={s.head}>
          <div className="new-eyebrow">What We Do</div>
          <h2 id="what-we-do-title">
            <RevealWords text="Custom flavors, developed and made in one Norco facility." />
          </h2>
          <p>
            A family-owned team that develops, matches, and manufactures liquid and powder flavors for food, beverage, nutraceutical, oral care, and pharmaceutical products.
          </p>
        </div>

        <ul className={s.grid}>
          {SERVICES.map((service) => (
            <li key={service.title} className={service.area}>
              <Link href={service.href} className={s.tile}>
                <span className={s.media} aria-hidden="true">
                  <AppImage
                    src={service.image}
                    alt=""
                    sizes="(max-width: 640px) 50vw, (max-width: 1000px) 50vw, 33vw"
                  />
                </span>
                <span className={s.arrow} aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
                <span className={s.body}>
                  <span className={s.title}>{service.title}</span>
                  <span className={s.copy}>{service.copy}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={`${s.offer} glow-zone grain`}>
          <div className={s.offerHead}>
            <div className={s.offerEyebrow}>What you get</div>
            <p>Every project, from the first sample on.</p>
          </div>
          <dl className={s.stats}>
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>
                  {stat.value === null ? stat.display : <CountUp value={stat.value} />}
                  {stat.suffix}
                </dd>
              </div>
            ))}
          </dl>
          <ul className={s.promises}>
            {PROMISES.map((item) => (
              <li key={item}>
                <Check size={15} aria-hidden="true" />
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
