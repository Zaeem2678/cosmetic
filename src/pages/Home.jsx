import HeroSlider from "../components/homepage components/HeroSlider";
import Products from "../components/homepage components/Products";
import { Box } from "@mui/material";
import CharitySection from "../components/homepage components/CharitySection";
import OrderInstructions from "../components/homepage components/OrderInstructions";
import MostSellingProducts from "./MostSellingProducts";

export default function Home() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <HeroSlider />
      <Products />
      <MostSellingProducts />
      <CharitySection />
      <OrderInstructions />
    </Box>
  );
}
