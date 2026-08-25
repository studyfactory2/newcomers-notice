import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./app/theme/theme";
import NewcomersNotice from "./app/screens/NewcomersNotice";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NewcomersNotice />
    </ThemeProvider>
  );
}
