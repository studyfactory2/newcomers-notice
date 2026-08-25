import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import type { StoreCardInfo } from "../config/notice.types";
import { brand } from "../theme/palette";

type StoreCardProps = { store: StoreCardInfo };

/**
 * Highlighted external store card (section 19 — 쿠팡이츠 반찬가게).
 * Phone: stacked, full-width button. Tablet/desktop: icon + text + button in one row.
 */
export default function StoreCard({ store }: StoreCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 3,
        border: `1px solid ${brand.divider}`,
        background: "linear-gradient(135deg, #FFFFFF 0%, #FFF8E9 100%)",
        boxShadow: "0 6px 20px rgba(27,36,55,0.08)",
        p: { xs: 2, sm: 2.5 },
        transition: "transform .2s ease, box-shadow .2s ease",
        "&:hover": { transform: "translateY(-2px)", boxShadow: "0 10px 26px rgba(27,36,55,0.12)" },
      }}
    >
      {/* gold accent bar */}
      <Box
        aria-hidden
        sx={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 5, bgcolor: brand.gold }}
      />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 2.5 }}
        alignItems={{ xs: "stretch", sm: "center" }}
        sx={{ pl: 1 }}
      >
        <Box
          aria-hidden
          sx={{
            flexShrink: 0,
            width: { xs: 52, sm: 60 },
            height: { xs: 52, sm: 60 },
            borderRadius: 2.5,
            bgcolor: brand.navy,
            color: brand.gold,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(27,36,55,0.25)",
          }}
        >
          <StorefrontRoundedIcon sx={{ fontSize: { xs: 28, sm: 32 } }} />
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="caption"
            component="div"
            sx={{ fontWeight: 700, letterSpacing: "0.04em", color: brand.textMuted, mb: 0.25 }}
          >
            {store.platform}
          </Typography>
          <Typography variant="h3" component="p" sx={{ color: "text.primary", lineHeight: 1.3 }}>
            {store.name}
          </Typography>
          {store.description && (
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
              {store.description}
            </Typography>
          )}
          {store.tags && store.tags.length > 0 && (
            <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
              {store.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: "rgba(27,36,55,0.06)",
                    color: brand.textSecondary,
                    fontWeight: 600,
                    fontSize: "0.72rem",
                    height: 22,
                  }}
                />
              ))}
            </Stack>
          )}
        </Box>

        <Button
          href={store.href}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          disableElevation
          endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 18 }} />}
          sx={{
            flexShrink: 0,
            bgcolor: brand.gold,
            color: brand.navy,
            fontWeight: 800,
            textTransform: "none",
            borderRadius: 2,
            px: 2.5,
            py: 1.2,
            fontSize: { xs: "0.95rem", sm: "0.9rem" },
            "&:hover": { bgcolor: brand.goldDeep },
          }}
        >
          {store.ctaLabel}
        </Button>
      </Stack>
    </Box>
  );
}
