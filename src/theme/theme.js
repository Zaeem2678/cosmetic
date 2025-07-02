// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004448",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

export default theme;
