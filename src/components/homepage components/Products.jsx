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
import CustomButton from "../../components/CustomButton"; // Adjust path if needed

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
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ mb: "30px", fontWeight: "bold" }}>
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

      <Grid container spacing={5} sx={{ ml: { md: 10, xs: "none" } }}>
        {visibleProducts.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4}>
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
