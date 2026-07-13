"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  height?: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  style?: CSSProperties;
  width?: number;
};

const FALLBACK_SRC = "/images/flavor-factory/hero-main-v3.jpg";
const DEFAULT_SIZES = "(max-width: 1200px) calc(100vw - 48px), 50vw";

export function AppImage({
  src,
  alt,
  className,
  fill = true,
  height,
  priority = false,
  quality = 90,
  sizes = DEFAULT_SIZES,
  style,
  width,
}: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);

  if (!fill && width && height) {
    return (
      <Image
        className={className}
        style={style}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        quality={quality}
        priority={priority}
        onError={() => setCurrentSrc(FALLBACK_SRC)}
      />
    );
  }

  return (
    <Image
      className={className}
      style={{ objectFit: "cover", ...style }}
      src={currentSrc}
      alt={alt}
      fill
      sizes={sizes}
      quality={quality}
      priority={priority}
      onError={() => setCurrentSrc(FALLBACK_SRC)}
    />
  );
}
