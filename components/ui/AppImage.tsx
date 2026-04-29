"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
};

const FALLBACK_SRC = "/images/flavor-factory/hero-main.jpg";

export function AppImage({ src, alt, className, style }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);

  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} style={style} src={currentSrc} alt={alt} loading="lazy" onError={() => setCurrentSrc(FALLBACK_SRC)} />;
}
