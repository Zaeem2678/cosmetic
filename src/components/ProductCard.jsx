import {
  Card,
  Button,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ModalDialog from "../components/homepage components/ModalDialog";
import { useState } from "react";
import CustomButton from "../components/CustomButton";

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  if (!product) return null;
  const fallbackImage =
    "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg";
  return (
    <>
      <Card
        sx={{
          width: "100%", // Ensures full width within grid item
          maxWidth: 350, // Fixed maximum width for consistency
          height: 400, // Fixed height for uniform card size
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component="img"
          image={imageError ? fallbackImage : product.image}
          alt={product.name}
          onError={() => setImageError(true)}
          sx={{
            width: 350, // Fixed width to match maxWidth of Card
            height: 200, // Fixed height for consistency
            objectFit: "cover", // Ensures image fills space without distortion
            backgroundColor: "#f5f5f5", // Light background in case image fails
            aspectRatio: "4/3", // Enforces consistent image proportion
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: { xs: 2, sm: 3 }, // Responsive padding
          }}
        >
          <Box>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
                fontWeight: 600,
                lineHeight: 1.3,
                mb: 1,
              }}
            >
              {product.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                display: "-webkit-box",
                WebkitLineClamp: 3, // Show 3 lines instead of 2 for better description
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                minHeight: "60px", // Adjusted for 3 lines
                lineHeight: 1.4,
              }}
            >
              {product.description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
              mt: "auto", // Pushes buttons to bottom
            }}
          >
            <CustomButton
              variant="text"
              onClick={() => setOpen(true)}
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
                px: { xs: 1, sm: 2 },
              }}
            >
              Read More
            </CustomButton>
            <Button
              variant="outlined"
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                minWidth: "auto",
                p: { xs: 1, sm: 1.5 },
                "& .MuiSvgIcon-root": {
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                },
              }}
            >
              <WhatsAppIcon />
            </Button>
          </Box>
        </CardContent>
      </Card>

      <ModalDialog
        product={product}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
