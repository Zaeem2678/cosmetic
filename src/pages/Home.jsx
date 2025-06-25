import HeroSlider from "../components/homepage components/HeroSlider";
import Products from "../components/homepage components/Products";
import { Box } from "@mui/material";
import CharitySection from "../components/homepage components/CharitySection";

export default function Home() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <HeroSlider />
      <Products />
      <CharitySection />
    </Box>
  );
}
