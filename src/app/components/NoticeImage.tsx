import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { NoticeImage as NoticeImageType } from "../config/notice.types";
import { callout } from "../theme/palette";

type NoticeImageProps = { image: NoticeImageType; align?: "left" | "center" };

/** Responsive image with optional caption; renders a dashed placeholder when src is missing. */
export default function NoticeImage({
  image,
  align = "center",
}: NoticeImageProps) {
  const { src, alt, caption, maxWidth = 520 } = image;

  return (
    <Box sx={{ mt: 1.5 }}>
      {caption && (
        <Typography
          variant="body2"
          sx={{ fontWeight: 700, color: callout.note.text, mb: 1 }}
        >
          {caption}
        </Typography>
      )}
      <Box
        sx={{
          maxWidth,
          width: "100%",
          mx: align === "center" ? "auto" : 0,
          borderRadius: 2,
          overflow: "hidden",
          border: `1px solid ${callout.note.border}`,
          bgcolor: "#fff",
        }}
      >
        {src ? (
          <Box
            component="img"
            src={src}
            alt={alt}
            loading="lazy"
            sx={{ display: "block", width: "100%", height: "auto" }}
          />
        ) : (
          <Box
            role="img"
            aria-label={alt}
            sx={{
              p: 3,
              textAlign: "center",
              color: "text.secondary",
              borderStyle: "dashed",
            }}
          >
            <Typography variant="body2">{alt}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
