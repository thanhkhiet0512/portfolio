import { Fragment, type ReactNode } from "react";
import type { L } from "@/content/types";

/** Turns "**bold**" markers into <strong>. */
export function rich(text: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>));
}

/**
 * Renders a bilingual string. Both languages are emitted; CSS shows the one
 * matching <html lang>. Pass `as` to wrap each language in a block element.
 */
export function T({ v, as: Tag = "span", className = "" }: { v: L; as?: "span" | "p" | "div" | "li"; className?: string }) {
  return (
    <>
      <Tag className={`en ${className}`.trim()}>{rich(v.en)}</Tag>
      <Tag className={`vi ${className}`.trim()}>{rich(v.vi)}</Tag>
    </>
  );
}
