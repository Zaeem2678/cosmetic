import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

export default function CharitySection() {
  const cardItems = [
    {
      title: "Supporting Women",
      description:
        "We empower underprivileged women through skills training and donations from every purchase.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg", // Replace with your actual image
    },
    {
      title: "Health & Wellness",
      description:
        "We contribute to health camps and hygiene product distribution in rural areas.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg", // Replace with your actual image
    },
    {
      title: "Community Growth",
      description:
        "A portion of our profits is reinvested into local education and skill development programs.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg", // Replace with your actual image
    },
  ];

  return (
    <Box sx={{ bgcolor: "secondary.main", py: 3, mt: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ marginLeft: { xs: 0, md: "80px" } }}
          align="center"
          fontSize={25}
          fontWeight="bold"
          gutterBottom
        >
          Social Responsibility
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          mb={5}
          sx={{ marginLeft: { xs: 0, md: "80px" } }}
        >
          We believe in giving back to our community through charity, support,
          and empowerment.
        </Typography>

        <Grid container spacing={4} sx={{ marginLeft: { md: "80px", xs: 0 } }}>
          {cardItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  width: { md: "320px", xs: "100%" },
                  height: "100%",
                  boxShadow: 0.00001,
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600 }}
                    color="text.secondary"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
