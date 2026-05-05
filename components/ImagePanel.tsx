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
      ? "from-[#102218]/55 via-[#102218]/8 to-[#b98745]/18"
      : tone === "light"
        ? "from-white/18 via-transparent to-[#102218]/20"
        : "from-[#06120d]/55 via-[#06120d]/10 to-[#06120d]/30";

  return (
    <figure className={`relative overflow-hidden rounded-[2.5rem] bg-[#17281f] shadow-[0_32px_90px_rgba(16,34,24,0.18)] ${className}`.trim()}>
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
        <figcaption className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/12 bg-[#102218]/55 p-5 text-sm leading-6 text-white/78 shadow-2xl backdrop-blur-md">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
