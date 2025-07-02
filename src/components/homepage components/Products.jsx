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
    <Container sx={{ mt: 6, mb: 8 }}>
      <Typography
        variant="h4"
        sx={{
          textTransform: "uppercase",
        }}
        fontWeight={700}
        align="center"
        mb={4}
      >
        Featured Products
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
            onClick={() => handleCategoryClick(cat)}
            sx={{
              backgroundColor:
                selectedCategory === cat ? "#E4B015" : "transparent",
              color: selectedCategory === cat ? "#fff" : "inherit",
              borderColor: "#E4B015",
              "&:hover": {
                backgroundColor:
                  selectedCategory === cat ? "#E4B015" : "#f5f5f5",
                borderColor: "#E4B015",
              },
            }}
            variant="outlined"
          >
            {cat}
          </CustomButton>
        ))}
      </Box>

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
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {visibleCount < filteredProducts.length && (
        <Box mt={4} display="flex" justifyContent="center">
          <CustomButton onClick={handleLoadMore}>Load More</CustomButton>
        </Box>
      )}
    </Container>
  );
}
