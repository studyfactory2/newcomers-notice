import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import type {
  NoticeImage as NoticeImageType,
  RichText,
} from "../config/notice.types";
import { brand, callout } from "../theme/palette";
import NoticeImage from "./NoticeImage";

type LinkBoxProps = {
  label: string;
  href: string;
  items: { heading: string; text: RichText }[];
  image?: NoticeImageType;
};

/** Yellow box holding the app link pill + registration instructions (section 14). */
export default function LinkBox({ label, href, items, image }: LinkBoxProps) {
  return (
    <Box
      sx={{
        bgcolor: callout.note.bg,
        borderRadius: 2.5,
        px: { xs: 1.75, sm: 2.25 },
        py: { xs: 1.75, sm: 2.25 },
      }}
    >
      <Typography
        variant="body2"
        sx={{ fontWeight: 700, color: callout.note.text, mb: 1 }}
      >
        [바로가기]
      </Typography>

      <Button
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        disableElevation
        endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 18 }} />}
        sx={{
          bgcolor: brand.navy,
          color: "#fff",
          fontWeight: 700,
          textTransform: "none",
          borderRadius: 2,
          px: 2,
          py: 1.1,
          maxWidth: "100%",
          fontSize: { xs: "0.85rem", sm: "0.95rem" },
          "&:hover": { bgcolor: brand.navySoft },
          "& .MuiButton-endIcon": { ml: 1 },
        }}
      >
        <Box
          component="span"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          {label}
        </Box>
      </Button>

      <Stack spacing={1.5} sx={{ mt: 2 }}>
        {items.map((item) => (
          <Box key={item.heading}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, color: callout.note.text }}
            >
              {item.heading}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </Stack>

      {image && <NoticeImage image={image} />}
    </Box>
  );
}
