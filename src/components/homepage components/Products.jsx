import { Grid, Container, Typography, Box, Pagination } from "@mui/material";
import { Card, CardMedia, CardContent, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ModalDialog from "./ModalDialog";
import { useState } from "react";

const products = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZXVwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    title: "Matte Lipstick",
    description:
      "Experience intense color payoff with our Matte Lipstick, designed for all-day wear without drying out your lips. This lipstick glides on smoothly and sets to a velvety finish that resists smudging and feathering. Infused with nourishing ingredients, it not only enhances your look but also keeps your lips hydrated and soft. Perfect for both bold and everyday styles.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29zbWV0aWN8ZW58MHx8MHx8fDA%3D",
    title: "Organic Face Cream",
    description:
      "Our Organic Face Cream is a luxurious blend of nature’s best ingredients, formulated to deeply moisturize and rejuvenate your skin. Rich in antioxidants and essential oils, it helps reduce signs of aging, evens skin tone, and restores a radiant glow. Perfect for sensitive and dry skin types, this cream absorbs quickly without leaving a greasy residue.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661769021743-7139c6fc4ab9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Nude Eyeshadow Palette",
    description:
      "Elevate your makeup game with our Nude Eyeshadow Palette featuring 12 versatile shades ranging from soft mattes to shimmering highlights. This palette is ideal for creating subtle daytime looks or bold evening styles. With a highly pigmented and blendable formula, it ensures smooth application and long-lasting wear for every skin tone.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZXVwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    title: "Matte Lipstick",
    description:
      "Experience intense color payoff with our Matte Lipstick, designed for all-day wear without drying out your lips. This lipstick glides on smoothly and sets to a velvety finish that resists smudging and feathering. Infused with nourishing ingredients, it not only enhances your look but also keeps your lips hydrated and soft. Perfect for both bold and everyday styles.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29zbWV0aWN8ZW58MHx8MHx8fDA%3D",
    title: "Organic Face Cream",
    description:
      "Our Organic Face Cream is a luxurious blend of nature’s best ingredients, formulated to deeply moisturize and rejuvenate your skin. Rich in antioxidants and essential oils, it helps reduce signs of aging, evens skin tone, and restores a radiant glow. Perfect for sensitive and dry skin types, this cream absorbs quickly without leaving a greasy residue.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661769021743-7139c6fc4ab9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Nude Eyeshadow Palette",
    description:
      "Elevate your makeup game with our Nude Eyeshadow Palette featuring 12 versatile shades ranging from soft mattes to shimmering highlights. This palette is ideal for creating subtle daytime looks or bold evening styles. With a highly pigmented and blendable formula, it ensures smooth application and long-lasting wear for every skin tone.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZXVwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    title: "Matte Lipstick",
    description:
      "Experience intense color payoff with our Matte Lipstick, designed for all-day wear without drying out your lips. This lipstick glides on smoothly and sets to a velvety finish that resists smudging and feathering. Infused with nourishing ingredients, it not only enhances your look but also keeps your lips hydrated and soft. Perfect for both bold and everyday styles.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29zbWV0aWN8ZW58MHx8MHx8fDA%3D",
    title: "Organic Face Cream",
    description:
      "Our Organic Face Cream is a luxurious blend of nature’s best ingredients, formulated to deeply moisturize and rejuvenate your skin. Rich in antioxidants and essential oils, it helps reduce signs of aging, evens skin tone, and restores a radiant glow. Perfect for sensitive and dry skin types, this cream absorbs quickly without leaving a greasy residue.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661769021743-7139c6fc4ab9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Nude Eyeshadow Palette",
    description:
      "Elevate your makeup game with our Nude Eyeshadow Palette featuring 12 versatile shades ranging from soft mattes to shimmering highlights. This palette is ideal for creating subtle daytime looks or bold evening styles. With a highly pigmented and blendable formula, it ensures smooth application and long-lasting wear for every skin tone.",
  },
  // Add more as needed
];

const PRODUCTS_PER_PAGE = 6;

export default function Products() {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  return (
    <>
      <Container
        sx={{
          marginLeft: { md: 30, xs: "none" },
          mt: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: "40px", fontWeight: "bold" }}
          gutterBottom
        >
          Our Products
        </Typography>

        <Grid container spacing={9}>
          {paginatedProducts.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            color="primary"
            shape="rounded"
          />
        </Box>
      </Container>
    </>
  );
}

function ProductCard({ image, title, description }) {
  const [open, setOpen] = useState(false);
  const product = { image, title, description };

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Card sx={{ width: { xs: "100%", md: "300px", height: "340px" } }}>
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
