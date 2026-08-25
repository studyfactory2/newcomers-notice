import type { ReactNode } from "react";

/** Inline rich text: plain strings or pre-built React nodes (bold, coloured, etc.). */
export type RichText = ReactNode;

export type CalloutTone = "info" | "note" | "danger";

/** One row in a ✔ checklist. */
export type CheckItem = {
  label: RichText;
  detail?: RichText;
  /** Small muted note under the row */
  note?: RichText;
};

/** Building blocks inside a section body, rendered in order. */
export type NoticeBlock =
  | { type: "paragraph"; text: RichText; emphasis?: "bold" | "danger" | "muted" }
  | { type: "callout"; tone: CalloutTone; title?: RichText; lines: RichText[] }
  | { type: "alert"; title: RichText; bullets: { label: RichText; text: RichText; note?: RichText }[] }
  | { type: "checklist"; items: CheckItem[] }
  | { type: "numbered"; items: RichText[] }
  | { type: "linkBox"; label: string; href: string; items: { heading: string; text: RichText }[]; image?: NoticeImage }
  | { type: "image"; image: NoticeImage }
  | { type: "storeCard"; store: StoreCardInfo };

/** External store / shop card with a call-to-action link. */
export type StoreCardInfo = {
  platform: string;
  name: string;
  description?: RichText;
  href: string;
  ctaLabel: string;
  /** Short facts shown as pills, e.g. "일요일 휴무" */
  tags?: string[];
};

export type NoticeImage = {
  /** Resolved asset URL (import from src/assets) or empty for placeholder */
  src?: string;
  alt: string;
  caption?: RichText;
  /** Max width in px on desktop */
  maxWidth?: number;
};

export type NoticeSection = {
  id: string;
  number: number;
  emoji: string;
  title: string;
  blocks: NoticeBlock[];
};

export type Tip = {
  text: RichText;
  chip: { label: string; color: "gold" | "red" | "green" };
};

export type NoticeContent = {
  header: { title: string; subtitle: string };
  sections: NoticeSection[];
  tips: { title: string; items: Tip[] };
  footer: { lines: RichText[] };
};
