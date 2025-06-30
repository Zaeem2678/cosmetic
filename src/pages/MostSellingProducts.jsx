import { Grid, Container, Typography, Box } from "@mui/material";
import MostSellingProductCard from "../components/MostSellingProductCard";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

const dummyProducts = [
  {
    _id: "1",
    name: "Rose Glow Serum",
    description:
      "A luxurious serum that revitalizes your skin with natural rose extracts.",
    image: "https://images.pexels.com/photos/2537930/pexels-photo-2537930.jpeg",
  },
  {
    _id: "2",
    name: "Velvet Matte Lipstick",
    description: "Bold and beautiful lipstick with a smooth matte finish.",
    image: "https://images.pexels.com/photos/234220/pexels-photo-234220.jpeg",
  },
  {
    _id: "3",
    name: "Hydrating Face Mist",
    description: "Instant hydration for a fresh, dewy look all day long.",
    image: "https://images.pexels.com/photos/354962/pexels-photo-354962.jpeg",
  },
  {
    _id: "4",
    name: "Coconut Hair Mask",
    description:
      "Deep nourishment for silky smooth hair using 100% organic coconut.",
    image: "https://images.pexels.com/photos/3286389/pexels-photo-3286389.jpeg",
  },
  {
    _id: "5",
    name: "Aloe Vera Gel",
    description: "Soothing gel for irritated skin, perfect after sun exposure.",
    image: "https://images.pexels.com/photos/7712467/pexels-photo-7712467.jpeg",
  },
  {
    _id: "6",
    name: "Charcoal Detox Mask",
    description: "Deep cleansing mask with activated charcoal for oily skin.",
    image: "https://images.pexels.com/photos/6527702/pexels-photo-6527702.jpeg",
  },
  {
    _id: "7",
    name: "Coconut Hair Mask",
    description:
      "Deep nourishment for silky smooth hair using 100% organic coconut.",
    image: "https://images.pexels.com/photos/3286389/pexels-photo-3286389.jpeg",
  },
  {
    _id: "8",
    name: "Aloe Vera Gel",
    description: "Soothing gel for irritated skin, perfect after sun exposure.",
    image: "https://images.pexels.com/photos/7712467/pexels-photo-7712467.jpeg",
  },
  {
    _id: "9",
    name: "Charcoal Detox Mask",
    description: "Deep cleansing mask with activated charcoal for oily skin.",
    image: "https://images.pexels.com/photos/6527702/pexels-photo-6527702.jpeg",
  },
];

export default function MostSellingProducts() {
  const ITEMS_PER_PAGE = 6;

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleProducts = dummyProducts.slice(0, visibleCount);

  function handleLoadMore() {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  }

  return (
    <Container sx={{ mt: 6, mb: 8 }}>
      <Typography variant="h4" fontWeight={700} align="center" mb={4}>
        Most Selling Products 🔥
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {visibleProducts.map((product) => (
          <Grid
            item
            key={product._id}
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <MostSellingProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      {visibleCount < dummyProducts.length && (
        <Box mt={4} display="flex" justifyContent="center">
          <CustomButton onClick={handleLoadMore}>Load More</CustomButton>
        </Box>
      )}
    </Container>
  );
}
