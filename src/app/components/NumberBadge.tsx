import Box from "@mui/material/Box";
import { brand } from "../theme/palette";

type NumberBadgeProps = { value: number };

export default function NumberBadge({ value }: NumberBadgeProps) {
  return (
    <Box
      component="span"
      aria-hidden
      sx={{
        flexShrink: 0,
        width: { xs: 32, sm: 36, md: 40 },
        height: { xs: 32, sm: 36, md: 40 },
        borderRadius: "50%",
        bgcolor: brand.navy,
        color: brand.gold,
        fontWeight: 800,
        fontSize: { xs: "0.95rem", md: "1.05rem" },
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 6px rgba(27,36,55,0.25)",
      }}
    >
      {value}
    </Box>
  );
}
