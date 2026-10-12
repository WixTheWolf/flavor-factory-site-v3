import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { AppImage } from "@/components/ui/AppImage";
import { LoopVideo } from "@/components/LoopVideo";
import s from "./PageHero.module.css";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  /** Rendered right after the title in gold italic, e.g. "We'll build the rest." */
  accent?: string;
  copy: string;
  image: string;
  imageAlt: string;
  /** Optional clip prefix that plays over the image on larger screens. */
  video?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  imagePosition?: string;
  breadcrumbs?: Crumb[];
  /** "wide" fills the right side with the media; "card" frames a portrait image or clip. */
  layout?: "wide" | "card";
  children?: ReactNode;
};

/** Dark header for inner pages, matching the homepage hero and the request page. */
export function PageHero({
  eyebrow,
  title,
  accent,
  copy,
  image,
  imageAlt,
  video,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  imagePosition = "center center",
  breadcrumbs,
  layout = "wide",
  children,
}: PageHeroProps) {
  const media = (
    <>
      <AppImage
        src={image}
        alt={imageAlt}
        priority
        className={s.image}
        sizes={layout === "card" ? "(max-width: 900px) 80vw, 440px" : "(max-width: 900px) 100vw, 64vw"}
        style={{ objectPosition: imagePosition }}
      />
      {video && <LoopVideo video={video} className={s.video} playingClassName={s.videoOn} media="(min-width: 700px)" />}
    </>
  );

  return (
    <section className={`${s.hero} ${layout === "card" ? s.cardLayout : ""} glow-zone grain`}>
      {layout === "card" ? (
        <>
          <div className={s.ambient} aria-hidden="true">
            <AppImage src={image} alt="" sizes="64px" quality={40} />
          </div>
          <div className={s.shade} aria-hidden="true" />
        </>
      ) : (
        <div className={s.media}>{media}</div>
      )}
      <div className={s.glow} aria-hidden="true" />

      <div className={s.inner}>
        <div className={s.copyCol}>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className={s.crumbs} aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb.label}>
                  {index > 0 && <span className={s.sep} aria-hidden="true">/</span>}
                  {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
                </span>
              ))}
            </nav>
          )}
          <div className={s.eyebrow}>{eyebrow}</div>
          <h1 className={s.title}>
            {title}
            {accent && (
              <>
                {" "}
                <em>{accent}</em>
              </>
            )}
          </h1>
          <p className={s.copy}>{copy}</p>
          {(primaryHref || secondaryHref) && (
            <div className={s.actions}>
              {primaryHref && primaryLabel && (
                <Link href={primaryHref} className="btn-gold btn-lg">
                  {primaryLabel}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              )}
              {secondaryHref && secondaryLabel && (
                <Link href={secondaryHref} className={s.ghost}>
                  {secondaryLabel}
                </Link>
              )}
            </div>
          )}
          {children}
        </div>

        {layout === "card" && <div className={s.card}>{media}</div>}
      </div>
    </section>
  );
}
