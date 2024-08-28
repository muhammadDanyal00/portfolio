import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212", // Dark background
      paper: "#1E1E1E", // Card backgrounds
    },
    primary: {
      main: "#00C853", // Primary color
    },
    text: {
      primary: "#ffffff", // Main text color
      secondary: "#b0b0b0", // Secondary text color
    },
  },
});

const darkBlueTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0A1F3D", // Dark blue background
      paper: "#1E2A47", // Card backgrounds
    },
    primary: {
      main: "#00A1FF", // Bright blue for accents
    },
    text: {
      primary: "#ffffff", // Main text color
      secondary: "#b0b0b0", // Secondary text color
    },
  },
});

export { darkTheme, darkBlueTheme };
