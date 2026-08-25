import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { brand } from "../theme/palette";

/** Floating "back to top" button — handy on phones with 21 long sections. */
export default function ScrollToTopButton() {
  const visible = useScrollTrigger({ disableHysteresis: true, threshold: 400 });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={visible}>
      <Fab
        size="medium"
        aria-label="맨 위로"
        onClick={handleClick}
        sx={{
          position: "fixed",
          right: { xs: 16, md: 28 },
          bottom: { xs: "calc(16px + env(safe-area-inset-bottom))", md: 28 },
          bgcolor: brand.gold,
          color: brand.navy,
          "&:hover": { bgcolor: brand.goldDeep },
        }}
      >
        <KeyboardArrowUpRoundedIcon />
      </Fab>
    </Fade>
  );
}
