import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme.js";
import "@fontsource/lato";
import "@fontsource/lato/300.css";
import "@fontsource/lato/700.css";
import '@fontsource/inter';
import '@fontsource/poppins';           // Default 400 weight
import '@fontsource/poppins/300.css';   // Light
import '@fontsource/poppins/600.css';   // Semi-bold
import '@fontsource/poppins/700.css';   // Bold

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
