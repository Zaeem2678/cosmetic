import { Box, Typography, Container, Grid, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        mt: 10,
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Cosmetics Store
            </Typography>
            <Typography variant="body2">
              Discover premium cosmetics for your daily beauty needs.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="hover" display="block">
              Home
            </Link>
            <Link href="/about" color="inherit" underline="hover" display="block">
              About
            </Link>
            <Link href="/contact" color="inherit" underline="hover" display="block">
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              WhatsApp: +92 300 1234567 <br />
              Email: support@cosmeticsstore.com
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, fontSize: "0.875rem", opacity: 0.7 }}
        >
          © {new Date().getFullYear()} Cosmetics Store. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
