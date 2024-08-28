import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./styles/theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      {" "}
      <App />
    </ThemeProvider>
  </StrictMode>
);
