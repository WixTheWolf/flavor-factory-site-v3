import type { SVGProps } from "react";

type LogoVariant = "stacked" | "inline" | "monogram";

interface LogoProps extends SVGProps<SVGSVGElement> {
  variant?: LogoVariant;
  title?: string;
}

const FONT = "'Playfair Display', Georgia, serif";

export function Logo({ variant = "stacked", title = "The Flavor Factory", ...props }: LogoProps) {
  if (variant === "inline") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 222 32"
        role="img"
        aria-label={title}
        data-logo-variant={variant}
        {...props}
      >
        <title>{title}</title>
        <text
          x="111"
          y="23"
          fill="currentColor"
          fontFamily={FONT}
          fontSize="22"
          fontWeight="400"
          letterSpacing="0.8"
          textAnchor="middle"
        >
          The Flavor Factory
        </text>
      </svg>
    );
  }

  if (variant === "monogram") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        role="img"
        aria-label="FF"
        data-logo-variant={variant}
        {...props}
      >
        <title>FF</title>
        <text
          x="64"
          y="82"
          fill="currentColor"
          fontFamily={FONT}
          fontSize="66"
          fontWeight="400"
          letterSpacing="1"
          textAnchor="middle"
        >
          FF
        </text>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 110"
      role="img"
      aria-label={title}
      data-logo-variant={variant}
      {...props}
    >
      <title>{title}</title>
      <text
        x="210"
        y="32"
        fill="currentColor"
        fontFamily={FONT}
        fontSize="22"
        fontStyle="italic"
        fontWeight="400"
        textAnchor="middle"
      >
        The
      </text>
      <text
        x="210"
        y="84"
        fill="currentColor"
        fontFamily={FONT}
        fontSize="52"
        fontWeight="400"
        letterSpacing="1.2"
        textAnchor="middle"
      >
        Flavor Factory
      </text>
    </svg>
  );
}
