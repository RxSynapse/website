import { createTheme } from "@mui/material/styles";
import "@fontsource/space-grotesk"; // Import font

const theme = createTheme({
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#000",
      paper: "#111",
    },
    text: {
      primary: "#fff",
      secondary: "#aaa",
    },
  },
});

export default theme;
