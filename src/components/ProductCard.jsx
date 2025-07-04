import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import ModalDialog from "../components/homepage components/ModalDialog";

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const fallbackImage =
    "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg";

  return (
    <>
      <Card
        sx={{
          width: 330,
          borderRadius: "2px",
          boxShadow: "none",
          transition: "all 0.3s ease",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          },
        }}
      >
        <CardMedia
          component="img"
          image={product.image || fallbackImage}
          alt={product.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
          sx={{
            height: 220,
            objectFit: "cover",
            width: "100%",
            backgroundColor: "#f5f5f5",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            gutterBottom
            sx={{ color: "#333", fontSize: "1.15rem" }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
              display: "-webkit-box",
              WebkitLineClamp: 3, // Show 3 lines instead of 2
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minHeight: "72px", // Adjust for consistent height
            }}
          >
            {product.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
              marginTop: 0,
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
              href="https://wa.me/351920537449"
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
