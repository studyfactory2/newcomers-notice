import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import type { RichText } from "../config/notice.types";
import { callout } from "../theme/palette";

type AlertManualProps = {
  title: RichText;
  bullets: { label: RichText; text: RichText; note?: RichText }[];
};

/** Red-bordered "emergency manual" box with bullet points (section 4). */
export default function AlertManual({ title, bullets }: AlertManualProps) {
  return (
    <Box
      role="note"
      sx={{
        bgcolor: callout.danger.bg,
        borderLeft: `4px solid ${callout.danger.border}`,
        borderRadius: "0 10px 10px 0",
        px: { xs: 1.75, sm: 2.25 },
        py: { xs: 1.5, sm: 1.75 },
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontWeight: 800, color: callout.danger.text, mb: 1 }}
      >
        {title}
      </Typography>
      <List disablePadding sx={{ listStyle: "disc", pl: 2.5 }}>
        {bullets.map((b, i) => (
          <ListItem
            key={i}
            disableGutters
            sx={{ display: "list-item", py: 0.5, color: "text.primary" }}
          >
            <Typography variant="body1" component="div">
              <strong>{b.label}</strong> {b.text}
            </Typography>
            {b.note && (
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: 0.25 }}
              >
                {b.note}
              </Typography>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
