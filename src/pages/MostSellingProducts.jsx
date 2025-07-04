import { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import MostSellingProductCard from "../components/MostSellingProductCard";
import CustomButton from "../components/CustomButton";
import axios from "axios";

const ITEMS_PER_PAGE = 6;

export default function MostSellingProducts() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/mostSalingProdoct/getTopMostSalingProduct_User"
        );
        setProducts(res.data.mostSalingProducts || []);
      } catch (error) {
        console.error("Failed to fetch most selling products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const visibleProducts = products.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <Container sx={{ mt: 6, mb: 8 }}>
      <Typography
        variant="h4"
        fontWeight={700}
        fontSize={25}
        align="center"
        sx={{
          textTransform: "uppercase",
        }}
        mb={4}
      >
        Most Selling Products 🔥
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={6}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container spacing={4} justifyContent="center">
            {visibleProducts.map((product, index) => (
              <Grid
                item
                key={product._id || index}
                xs={12}
                sm={6}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <MostSellingProductCard product={product} />
              </Grid>
            ))}
          </Grid>

          {visibleCount < products.length && (
            <Box mt={4} display="flex" justifyContent="center">
              <CustomButton onClick={handleLoadMore}>Load More</CustomButton>
            </Box>
          )}
        </>
      )}
    </Container>
  );
}
