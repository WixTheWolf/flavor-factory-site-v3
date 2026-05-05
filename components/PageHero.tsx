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
    <section className="relative overflow-hidden bg-[#f7f4ee] px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(185,135,69,0.18),transparent_32rem),linear-gradient(135deg,#f7f4ee_0%,#eee5d8_100%)]" />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[0.9fr_0.85fr]">
        <div className="max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-title mt-6 text-5xl md:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-[#405045] md:text-2xl md:leading-9">{body}</p>
        </div>
        {image && imageAlt ? (
          <ImagePanel src={image} alt={imageAlt} className="min-h-[420px] lg:min-h-[560px]" imageClassName="scale-105" priority />
        ) : null}
      </div>
    </section>
  );
}
