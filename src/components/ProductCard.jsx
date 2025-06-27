import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ModalDialog from "../components/homepage components/ModalDialog";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);

  if (!product) return null; // Safety check

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
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
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
            {product.description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Read More
            </Button>
            <Button variant="text" href="https://wa.me/923001234567" target="_blank">
              <WhatsAppIcon />
            </Button>
          </Box>
        </CardContent>
      </Card>

      <ModalDialog product={product} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
