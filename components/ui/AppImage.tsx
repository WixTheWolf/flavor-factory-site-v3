"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
};

const FALLBACK_SRC = "/images/flavor-factory/hero-main-v3.jpg";

export function AppImage({ src, alt, className, style }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return <img className={className} style={style} src={currentSrc} alt={alt} loading="lazy" onError={() => setCurrentSrc(FALLBACK_SRC)} />;
}
