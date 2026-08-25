import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { noticeContent } from "../config/notice.content";
import {
  NoticeCard,
  NoticeFooter,
  NoticeHeader,
  ScrollToTopButton,
  TipsPanel,
} from "../components";

export default function NewcomersNotice() {
  const { header, sections, tips, footer } = noticeContent;

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <NoticeHeader title={header.title} subtitle={header.subtitle} />

      <Container
        component="main"
        sx={{
          flex: 1,
          py: { xs: 2.5, sm: 4, md: 5 },
          px: { xs: 1.5, sm: 3 },
        }}
      >
        <Stack spacing={{ xs: 2, sm: 2.5, md: 3 }}>
          {sections.map((section) => (
            <NoticeCard key={section.id} section={section} />
          ))}
          <TipsPanel title={tips.title} items={tips.items} />
        </Stack>
      </Container>

      <NoticeFooter lines={footer.lines} />
      <ScrollToTopButton />
    </Box>
  );
}
