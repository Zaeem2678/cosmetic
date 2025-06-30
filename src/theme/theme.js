// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004448",
    },
    secondary: {
      main: "#E0F7FA",
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

export default theme;
