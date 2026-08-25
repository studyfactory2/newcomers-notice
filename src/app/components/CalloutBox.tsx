import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { CalloutTone, RichText } from "../config/notice.types";
import { callout } from "../theme/palette";

type CalloutBoxProps = {
  tone: CalloutTone;
  title?: RichText;
  lines: RichText[];
};

/**
 * Soft-coloured info boxes:
 *  info   → light blue
 *  note   → light yellow
 *  danger → light red with a strong red left border
 */
export default function CalloutBox({ tone, title, lines }: CalloutBoxProps) {
  const colours = callout[tone];
  const isDanger = tone === "danger";

  return (
    <Box
      role={isDanger ? "alert" : undefined}
      sx={{
        bgcolor: colours.bg,
        borderRadius: isDanger ? "0 10px 10px 0" : 2.5,
        borderLeft: isDanger ? `4px solid ${colours.border}` : "none",
        px: { xs: 1.75, sm: 2.25 },
        py: { xs: 1.5, sm: 1.75 },
        color: colours.text,
      }}
    >
      {title && (
        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.75 }}>
          {title}
        </Typography>
      )}
      {lines.map((line, i) => (
        <Typography
          key={i}
          variant="body1"
          sx={{ color: "inherit", "& strong": { color: "inherit" } }}
        >
          {line}
        </Typography>
      ))}
    </Box>
  );
}
