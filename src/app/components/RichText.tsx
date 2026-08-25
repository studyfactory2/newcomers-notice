import type { ReactNode } from "react";
import { brand, callout } from "../theme/palette";

/** Small inline helpers so the content file reads cleanly. */

export function B({ children }: { children: ReactNode }) {
  return <strong style={{ fontWeight: 700, color: brand.textPrimary }}>{children}</strong>;
}

export function Red({ children }: { children: ReactNode }) {
  return <span style={{ color: callout.danger.text, fontWeight: 600 }}>{children}</span>;
}

export function Gold({ children }: { children: ReactNode }) {
  return <span style={{ color: brand.gold, fontWeight: 700 }}>{children}</span>;
}

export function Muted({ children }: { children: ReactNode }) {
  return <span style={{ color: brand.textMuted }}>{children}</span>;
}
