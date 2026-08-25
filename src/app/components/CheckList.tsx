import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { CheckItem } from "../config/notice.types";

type CheckListProps = { items: CheckItem[] };

/** ✔ bullet list used for item recommendations and trash rules. */
export default function CheckList({ items }: CheckListProps) {
  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: "none", m: 0, p: 0 }}>
      {items.map((item, i) => (
        <Box component="li" key={i} sx={{ display: "flex", gap: 1.25, alignItems: "flex-start" }}>
          <Box component="span" aria-hidden sx={{ fontWeight: 800, lineHeight: 1.75, flexShrink: 0 }}>
            ✔
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="body1" component="div">
              <strong>{item.label}</strong> {item.detail}
            </Typography>
            {item.note && (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.note}
              </Typography>
            )}
          </Box>
        </Box>
      ))}
    </Stack>
  );
}
