import {
  Grid,
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { getCategories } from "../../api/categoryAPI";
import { getProducts } from "../../api/productAPI";
import CustomButton from "../../components/CustomButton";

const ITEMS_PER_LOAD = 6;

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [fetchedCategories, fetchedProducts] = await Promise.all([
          getCategories(),
          getProducts(),
        ]);
        setCategories(["All", ...fetchedCategories.map((c) => c.name)]);
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error loading data", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.categoryId?.name === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(ITEMS_PER_LOAD);
  };

  if (loading) {
    return (
      <Box mt={8} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 3 }, // Better padding on mobile
      }}
    >
      <Typography variant="h4" sx={{ mb: 4,fontWeight: 700  }}>
        Our Products
      </Typography>

      <Box
        sx={{
          mb: 4,
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {categories.map((cat) => (
          <CustomButton
            key={cat}
            variant={selectedCategory === cat ? "contained" : "outlined"}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </CustomButton>
        ))}
      </Box>

      {/* Updated Grid with better spacing and alignment */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "stretch", // Ensures equal height cards
        }}
      >
        {visibleProducts.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={product._id}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {visibleCount < filteredProducts.length && (
        <Box sx={{ mt: 4 }}>
          <CustomButton variant="outlined" onClick={handleLoadMore}>
            Load More
          </CustomButton>
        </Box>
      )}
    </Container>
  );
}
