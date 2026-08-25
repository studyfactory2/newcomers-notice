import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { NoticeSection } from "../config/notice.types";
import NoticeBlockRenderer from "./NoticeBlockRenderer";
import NumberBadge from "./NumberBadge";

type NoticeCardProps = { section: NoticeSection };

export default function NoticeCard({ section }: NoticeCardProps) {
  const headingId = `section-${section.id}-title`;

  return (
    <Paper
      component="section"
      aria-labelledby={headingId}
      sx={{
        borderRadius: { xs: 3, md: 3.5 },
        px: { xs: 2, sm: 3, md: 3.5 },
        py: { xs: 2.25, sm: 3, md: 3.25 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 1.25, sm: 1.75 },
          mb: { xs: 1.25, sm: 1.5 },
        }}
      >
        <NumberBadge value={section.number} />
        <Typography
          id={headingId}
          variant="h2"
          component="h2"
          sx={{ minWidth: 0 }}
        >
          <Box component="span" aria-hidden sx={{ mr: 0.75 }}>
            {section.emoji}
          </Box>
          {section.title}
        </Typography>
      </Box>

      <Stack spacing={1.25} sx={{ pl: { xs: 0, sm: 6.75, md: 7.25 } }}>
        {section.blocks.map((block, i) => (
          <NoticeBlockRenderer key={i} block={block} />
        ))}
      </Stack>
    </Paper>
  );
}
