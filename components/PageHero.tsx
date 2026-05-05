import { AppImage } from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  imagePosition?: string;
};

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  imagePosition = "center center",
}: PageHeroProps) {
  return (
    <section className="clean-page-hero">
      <div className="clean-page-hero-copy">
        <div className="new-eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{copy}</p>
        {(primaryHref || secondaryHref) && (
          <div className="new-actions">
            {primaryHref && primaryLabel && <Button href={primaryHref}>{primaryLabel}</Button>}
            {secondaryHref && secondaryLabel && (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            )}
          </div>
        )}
      </div>
      <div className="clean-page-hero-image">
        <AppImage
          src={image}
          alt={imageAlt}
          priority
          sizes="(max-width: 980px) calc(100vw - 40px), 48vw"
          style={{ objectPosition: imagePosition }}
        />
      </div>
    </section>
  );
}
