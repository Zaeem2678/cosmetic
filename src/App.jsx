import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { Box } from "@mui/material";
// import "@fontsource/lato/300.css";
// import "@fontsource/lato/400.css";
// import "@fontsource/lato/700.css";

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "secondary.main",
        }}
      >
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <AppRoutes />
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
