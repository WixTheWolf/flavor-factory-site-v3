type NetworkInfo = { saveData?: boolean; effectiveType?: string };

/** True on Data Saver or a 2G/3G-class connection, where decorative video isn't worth the bytes. */
export function prefersLightMedia() {
  if (typeof navigator === "undefined") return false;
  const connection = (navigator as Navigator & { connection?: NetworkInfo }).connection;
  return Boolean(connection?.saveData) || ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? "");
}

/** True when decorative background video may play: no reduced-motion request and no light-media preference. */
export function canPlayDecorativeVideo() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return !prefersLightMedia();
}

/** Local clip sources in preferred order. Files are expected at {prefix}.av1.mp4 / .hevc.mp4 / .h264.mp4. */
export function videoSources(prefix: string) {
  return [
    { src: `${prefix}.av1.mp4`, type: 'video/mp4; codecs="av01.0.05M.08"' },
    { src: `${prefix}.hevc.mp4`, type: 'video/mp4; codecs="hvc1"' },
    { src: `${prefix}.h264.mp4`, type: "video/mp4" },
  ];
}
