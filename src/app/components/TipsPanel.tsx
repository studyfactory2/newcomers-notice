import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { Tip } from "../config/notice.types";
import { brand, chip } from "../theme/palette";

type TipsPanelProps = { title: string; items: Tip[] };

/** Dark navy panel with numbered gold circles and coloured chips ("무조건 잘되는 법 3가지"). */
export default function TipsPanel({ title, items }: TipsPanelProps) {
  return (
    <Paper
      component="section"
      aria-label={title}
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: brand.navy,
        color: "#fff",
        borderRadius: { xs: 3, md: 3.5 },
        px: { xs: 2, sm: 3, md: 3.5 },
        py: { xs: 3, sm: 3.5, md: 4 },
        boxShadow: "0 10px 30px rgba(27,36,55,0.25)",
      }}
    >
      {/* decorative circles */}
      <Box aria-hidden sx={decoCircle({ top: -60, right: -60, size: 150 })} />
      <Box aria-hidden sx={decoCircle({ bottom: -50, left: -40, size: 110 })} />

      <Typography
        variant="h2"
        component="h2"
        sx={{
          textAlign: "center",
          color: brand.gold,
          mb: { xs: 2.5, md: 3 },
          position: "relative",
        }}
      >
        {title}
      </Typography>

      <Stack spacing={1.5} sx={{ position: "relative" }}>
        {items.map((tip, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.25, sm: 1.75 },
              bgcolor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 2.5,
              px: { xs: 1.5, sm: 2 },
              py: { xs: 1.5, sm: 1.75 },
            }}
          >
            <Box
              component="span"
              aria-hidden
              sx={{
                flexShrink: 0,
                width: { xs: 30, sm: 34 },
                height: { xs: 30, sm: 34 },
                borderRadius: "50%",
                bgcolor: brand.gold,
                color: brand.navy,
                fontWeight: 800,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {i + 1}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1,
                minWidth: 0,
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.92)" }}
              >
                {tip.text}
              </Typography>
              <Chip
                label={tip.chip.label}
                size="small"
                sx={{
                  bgcolor: chip[tip.chip.color].bg,
                  color: chip[tip.chip.color].text,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  height: 24,
                }}
              />
            </Box>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}

function decoCircle(pos: {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  size: number;
}) {
  return {
    position: "absolute",
    width: pos.size,
    height: pos.size,
    borderRadius: "50%",
    bgcolor: "rgba(255,255,255,0.05)",
    top: pos.top,
    bottom: pos.bottom,
    left: pos.left,
    right: pos.right,
    pointerEvents: "none",
  } as const;
}
