import type { SelectHTMLAttributes } from "react";

export function SelectBox(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`input ${props.className ?? ""}`.trim()} />;
}
