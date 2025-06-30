import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function MostSellingProductCard({ product }) {
  return (
    <Card
      sx={{
        maxWidth: 330,
        width: "100%",
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
        alt={product.name}
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
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "48px",
          }}
        >
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
