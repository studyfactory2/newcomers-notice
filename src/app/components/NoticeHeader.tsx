import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { brand } from "../theme/palette";

type NoticeHeaderProps = { title: string; subtitle: string };

/** Dark navy hero with gold underline. */
export default function NoticeHeader({ title, subtitle }: NoticeHeaderProps) {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: brand.navy,
        color: "#fff",
        borderBottom: `5px solid ${brand.gold}`,
        pt: { xs: 5, sm: 7, md: 8 },
        pb: { xs: 4.5, sm: 6, md: 7 },
        px: 2,
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          variant="h1"
          component="h1"
          sx={{ mb: { xs: 1.25, md: 1.75 } }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: brand.gold,
            fontWeight: 500,
            fontSize: { xs: "0.95rem", md: "1.05rem" },
          }}
        >
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
}
