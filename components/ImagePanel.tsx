import Image from "next/image";

type ImagePanelProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  tone?: "light" | "dark" | "amber";
};

export function ImagePanel({
  src,
  alt,
  label,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(max-width: 1024px) calc(100vw - 48px), 50vw",
  tone = "dark",
}: ImagePanelProps) {
  const overlay =
    tone === "amber"
      ? "from-[#12382B]/58 via-[#12382B]/10 to-[#C6843A]/18"
      : tone === "light"
        ? "from-white/22 via-transparent to-[#12382B]/20"
        : "from-[#07140f]/58 via-[#07140f]/8 to-[#07140f]/28";

  return (
    <figure className={`relative overflow-hidden rounded-[2rem] bg-[#12382B] shadow-[0_32px_90px_rgba(18,56,43,0.16)] ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imageClassName}`.trim()}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${overlay}`} />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/12" />
      {label ? (
        <figcaption className="absolute bottom-5 left-5 right-5 rounded-[1.25rem] border border-white/12 bg-[#12382B]/58 p-5 text-sm leading-6 text-white/78 shadow-2xl backdrop-blur-md">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
