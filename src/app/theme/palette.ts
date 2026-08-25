/**
 * Brand colours for 자격증공장 notice pages.
 * Keep every colour here so components never hard-code hex values.
 */
export const brand = {
  navy: "#1B2437",
  navyDeep: "#131B2B",
  navySoft: "#25304A",
  gold: "#F5B942",
  goldDeep: "#E0A22A",
  pageBg: "#F0F3F7",
  cardBg: "#FFFFFF",
  textPrimary: "#1F2937",
  textSecondary: "#4B5563",
  textMuted: "#8A94A6",
  divider: "#E5E9F0",
} as const;

export const callout = {
  info: { bg: "#E6F5FB", border: "#BFE5F3", text: "#0B4F73" },
  note: { bg: "#FFF8E1", border: "#F4E3A6", text: "#5B4300" },
  danger: { bg: "#FDECEC", border: "#E53935", text: "#C62828" },
} as const;

export const chip = {
  gold: { bg: "#F5B942", text: "#1B2437" },
  red: { bg: "#E53935", text: "#FFFFFF" },
  green: { bg: "#1E9E5A", text: "#FFFFFF" },
} as const;
