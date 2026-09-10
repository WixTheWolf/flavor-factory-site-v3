import type { ImgHTMLAttributes } from "react";

type LogoVariant = "stacked" | "inline" | "monogram";

interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  variant?: LogoVariant;
  title?: string;
}

// Use the long-standing public/logo path so the same real logo is served
// consistently in the header, footer, homepage hero, and feedback page.
const LOGO_SRC = "/logo/layer-1.png";

export function Logo({
  variant = "stacked",
  title = "The Flavor Factory",
  style,
  ...props
}: LogoProps) {
  const variantStyle = variant === "inline"
    ? { height: 40, width: "auto" as const }
    : variant === "monogram"
      ? { height: 48, width: "auto" as const }
      : undefined;

  return (
    <img
      src={LOGO_SRC}
      alt={title}
      data-logo-variant={variant}
      {...props}
      style={{ ...variantStyle, ...style }}
    />
  );
}
