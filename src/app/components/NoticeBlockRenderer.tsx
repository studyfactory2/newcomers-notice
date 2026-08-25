import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import type { NoticeBlock } from "../config/notice.types";
import { callout } from "../theme/palette";
import AlertManual from "./AlertManual";
import CalloutBox from "./CalloutBox";
import CheckList from "./CheckList";
import LinkBox from "./LinkBox";
import NoticeImage from "./NoticeImage";
import StoreCard from "./StoreCard";

type NoticeBlockRendererProps = { block: NoticeBlock };

const paragraphSx = {
  default: { color: "text.secondary" },
  bold: { fontWeight: 700, color: "text.primary" },
  danger: { fontWeight: 600, color: callout.danger.text },
  muted: { color: "text.disabled", fontSize: "0.875rem" },
} as const;

/** Maps a content block to its visual component. */
export default function NoticeBlockRenderer({
  block,
}: NoticeBlockRendererProps) {
  switch (block.type) {
    case "paragraph":
      return (
        <Typography
          variant="body1"
          component="p"
          sx={paragraphSx[block.emphasis ?? "default"]}
        >
          {block.text}
        </Typography>
      );

    case "callout":
      return (
        <CalloutBox tone={block.tone} title={block.title} lines={block.lines} />
      );

    case "alert":
      return <AlertManual title={block.title} bullets={block.bullets} />;

    case "checklist":
      return <CheckList items={block.items} />;

    case "numbered":
      return (
        <List
          component="ol"
          disablePadding
          sx={{ listStyle: "none", m: 0, p: 0 }}
        >
          {block.items.map((item, i) => (
            <ListItem
              key={i}
              disableGutters
              sx={{ py: 0.35, display: "flex", gap: 1 }}
            >
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", flexShrink: 0 }}
              >
                {i + 1}.
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      );

    case "linkBox":
      return (
        <LinkBox
          label={block.label}
          href={block.href}
          items={block.items}
          image={block.image}
        />
      );

    case "image":
      return <NoticeImage image={block.image} />;

    case "storeCard":
      return <StoreCard store={block.store} />;

    default:
      return null;
  }
}
