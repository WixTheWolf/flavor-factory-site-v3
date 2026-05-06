import { ImagePanel } from "@/components/ImagePanel";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({ eyebrow, title, body, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE5] px-6 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[0.86fr_0.9fr]">
        <div className="max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-title mt-5 text-5xl md:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#645f55] md:text-lg md:leading-8">{body}</p>
        </div>
        {image && imageAlt ? (
          <ImagePanel src={image} alt={imageAlt} className="min-h-[340px] lg:min-h-[430px]" imageClassName="scale-105" priority />
        ) : null}
      </div>
    </section>
  );
}
