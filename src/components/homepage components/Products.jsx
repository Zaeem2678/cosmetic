import { Grid, Container, Typography, Box, Button } from "@mui/material";
import { Card, CardMedia, CardContent } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ModalDialog from "./ModalDialog";
import { useState } from "react";

const products = [
  {
    id: 1,
    categoryName: "Lipsticks",
    image: "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2",
    title: "Matte Lipstick",
    description: "Experience intense color payoff with our Matte Lipstick...",
  },
  {
    id: 2,
    categoryName: "Skincare",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
    title: "Organic Face Cream",
    description: "Our Organic Face Cream is a luxurious blend of nature...",
  },
  {
    id: 3,
    categoryName: "Eyeshadow",
    image: "https://plus.unsplash.com/premium_photo-1661769021743-7139c6fc4ab9",
    title: "Nude Eyeshadow Palette",
    description: "Elevate your makeup game with our Nude Eyeshadow Palette...",
  },
  {
    id: 4,
    categoryName: "Lipsticks",
    image: "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2",
    title: "Matte Lipstick",
    description: "Experience intense color payoff with our Matte Lipstick...",
  },
  {
    id: 5,
    categoryName: "Skincare",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
    title: "Organic Face Cream",
    description: "Our Organic Face Cream is a luxurious blend of nature...",
  },
  {
    id: 6,
    categoryName: "Eyeshadow",
    image: "https://plus.unsplash.com/premium_photo-1661769021743-7139c6fc4ab9",
    title: "Nude Eyeshadow Palette",
    description: "Elevate your makeup game with our Nude Eyeshadow Palette...",
  },
  {
    id: 7,
    categoryName: "Lipsticks",
    image: "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2",
    title: "Matte Lipstick",
    description: "Experience intense color payoff with our Matte Lipstick...",
  },
  {
    id: 8,
    categoryName: "Skincare",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
    title: "Organic Face Cream",
    description: "Our Organic Face Cream is a luxurious blend of nature...",
  },
  {
    id: 9,
    categoryName: "Eyeshadow",
    image: "https://plus.unsplash.com/premium_photo-1661769021743-7139c6fc4ab9",
    title: "Nude Eyeshadow Palette",
    description: "Elevate your makeup game with our Nude Eyeshadow Palette...",
  },
  {
    id: 10,
    categoryName: "Lipsticks",
    image: "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2",
    title: "Matte Lipstick",
    description: "Experience intense color payoff with our Matte Lipstick...",
  },
  {
    id: 11,
    categoryName: "Skincare",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
    title: "Organic Face Cream",
    description: "Our Organic Face Cream is a luxurious blend of nature...",
  },
  {
    id: 12,
    categoryName: "Eyeshadow",
    image: "https://plus.unsplash.com/premium_photo-1661769021743-7139c6fc4ab9",
    title: "Nude Eyeshadow Palette",
    description: "Elevate your makeup game with our Nude Eyeshadow Palette...",
  },
  // Add more with appropriate categories...
];

const categories = ["All", "Lipsticks", "Skincare", "Eyeshadow"];
const ITEMS_PER_LOAD = 6;

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.categoryName === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(ITEMS_PER_LOAD); // Reset visible count when switching category
  };

  return (
    <Container
      sx={{
        marginLeft: { md: 11, xs: "none" },
        mt: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: "30px", fontWeight: "bold" }}
        gutterBottom
      >
        Our Products
      </Typography>

      {/* Category Filters */}
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
          <Button
            key={cat}
            variant={selectedCategory === cat ? "contained" : "outlined"}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </Button>
        ))}
      </Box>

      <Grid
        container
        spacing={5}
        sx={{
          marginLeft: { md: 10, xs: "none" },
        }}
      >
        {visibleProducts.map((product, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            justifyContent={"center"}
          >
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>

      {/* Load More Button */}
      {visibleCount < filteredProducts.length && (
        <Box sx={{ mt: 4 }}>
          <Button variant="outlined" onClick={handleLoadMore}>
            Load More
          </Button>
        </Box>
      )}
    </Container>
  );
}

function ProductCard({ image, title, description }) {
  const [open, setOpen] = useState(false);
  const product = { image, title, description };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", md: "300px" },
          height: "340px",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            boxShadow: 9,
            transform: "translateY(-5px)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          sx={{ width: "400px" }}
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 1,
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" onClick={handleOpen} color="primary">
              Read More
            </Button>
            <Button
              variant="text"
              color="primary"
              href="https://wa.me/923001234567"
              target="_blank"
            >
              <WhatsAppIcon />
            </Button>
          </Box>
        </CardContent>
      </Card>

      <ModalDialog product={product} open={open} onClose={handleClose} />
    </>
  );
}
