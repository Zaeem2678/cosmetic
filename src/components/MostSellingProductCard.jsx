import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function MostSellingProductCard({ product }) {
  return (
    <Card
      sx={{
        width: 330,
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.productName}
        sx={{
          height: 220,
          objectFit: "cover",
          width: "100%",
          backgroundColor: "#f5f5f5",
        }}
      />
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ color: "#333", fontSize: "1.15rem" }}
        >
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Quantity: {product.quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Category: {product.categoryName}
        </Typography>
      </CardContent>
    </Card>
  );
}
