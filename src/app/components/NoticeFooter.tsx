import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { RichText } from "../config/notice.types";
import { brand } from "../theme/palette";

type NoticeFooterProps = { lines: RichText[] };

export default function NoticeFooter({ lines }: NoticeFooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: brand.navy,
        color: "#fff",
        textAlign: "center",
        px: 2,
        py: { xs: 4, sm: 5, md: 6 },
        pb: { xs: "calc(32px + env(safe-area-inset-bottom))", sm: 5, md: 6 },
      }}
    >
      <Container>
        {lines.map((line, i) => (
          <Typography
            key={i}
            variant="h3"
            component="p"
            sx={{ fontWeight: 600, fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" }, lineHeight: 1.7 }}
          >
            {line}
          </Typography>
        ))}
      </Container>
    </Box>
  );
}
