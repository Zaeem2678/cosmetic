import { Box, Typography, Container, Grid, Link, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#0b1a2c", // darker blue tone
        color: "#ffffff",
        mt: 10,
        pt: 6,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Brand Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#fff" }}
            >
              Stella
            </Typography>
            <Typography
              variant="body2"
              sx={{ lineHeight: 1.8, color: "#c0c0c0" }}
            >
              Discover premium cosmetics to elevate your daily beauty routine.
              Quality, luxury, and care — all in one place.
              <br />
              Our curated collection features high-quality products sourced with
              care and effectiveness.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
              Quick Links
            </Typography>
            <Link href="/" underline="hover" display="block" sx={linkStyle}>
              Home
            </Link>
            <Link
              href="/about"
              underline="hover"
              display="block"
              sx={linkStyle}
            >
              About
            </Link>
            <Link
              href="/contact"
              underline="hover"
              display="block"
              sx={linkStyle}
            >
              Contact
            </Link>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
              Contact
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#c0c0c0", lineHeight: 1.8 }}
            >
              WhatsApp: +351 920 537 449
              <br />
              Email: support@cosmeticsstore.com
              <br />
              Location: PORTO, PORTUGAL{" "}
              <img
                src="https://flagcdn.com/w40/pt.png"
                alt="Portugal Flag"
                style={{
                  width: 20,
                  height: 15,
                  verticalAlign: "middle",
                  marginLeft: 4,
                }}
              />
            </Typography>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Footer Bottom */}
        <Typography
          variant="body2"
          align="center"
          sx={{ fontSize: "0.875rem", opacity: 0.6 }}
        >
          © {new Date().getFullYear()} Stella. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

// Style object for link hover effect
const linkStyle = {
  color: "#c0c0c0",
  mb: 1,
  transition: "color 0.3s",
  "&:hover": {
    color: "#ffffff",
  },
};
