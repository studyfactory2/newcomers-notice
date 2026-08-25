import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { brand } from "./palette";

/**
 * Breakpoints (MUI defaults, documented here for clarity):
 *  xs  0      → phone
 *  sm  600    → large phone / small tablet
 *  md  900    → tablet
 *  lg  1200   → desktop
 */
const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: brand.navy, dark: brand.navyDeep, contrastText: "#FFFFFF" },
    secondary: { main: brand.gold, dark: brand.goldDeep, contrastText: brand.navy },
    background: { default: brand.pageBg, paper: brand.cardBg },
    text: { primary: brand.textPrimary, secondary: brand.textSecondary },
    divider: brand.divider,
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: [
      '"Noto Sans KR"',
      "Pretendard",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Apple SD Gothic Neo"',
      '"Segoe UI"',
      "Roboto",
      "sans-serif",
    ].join(","),
    h1: { fontWeight: 800, fontSize: "2rem", lineHeight: 1.3, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, fontSize: "1.25rem", lineHeight: 1.4, letterSpacing: "-0.01em" },
    h3: { fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.4 },
    subtitle1: { fontSize: "1rem", lineHeight: 1.6 },
    body1: { fontSize: "1rem", lineHeight: 1.75, wordBreak: "keep-all" },
    body2: { fontSize: "0.9rem", lineHeight: 1.7, wordBreak: "keep-all" },
    caption: { fontSize: "0.8rem", lineHeight: 1.6, color: brand.textMuted },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { WebkitTextSizeAdjust: "100%" },
        body: { backgroundColor: brand.pageBg, wordBreak: "keep-all" },
        "*, *::before, *::after": { boxSizing: "border-box" },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          boxShadow: "0 4px 18px rgba(27, 36, 55, 0.06)",
        },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "md" },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme, {
  breakpoints: ["sm", "md"],
  factor: 2.2,
});
