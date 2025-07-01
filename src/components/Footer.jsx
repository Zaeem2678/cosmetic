import { Box, Typography, Container, Grid, Link, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#0b1a2c",
        color: "#ffffff",
        pt: 5,
        pb: 3,
        mt: 10,
        fontSize: "0.9rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 1, color: "#fff" }}
            >
              Stella
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#c0c0c0", width: { md: "700px", xs: "none" } }}
            >
              Discover premium cosmetics to elevate your beauty routine. Our
              curated collection brings quality and care in every product.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" sx={{ mb: 1, color: "#fff" }}>
              Quick Links
            </Typography>
            <Link href="/" underline="hover" sx={linkStyle}>
              Home
            </Link>
            <Link href="/about" underline="hover" sx={linkStyle}>
              About
            </Link>
            <Link href="/contact" underline="hover" sx={linkStyle}>
              Contact
            </Link>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="h6" sx={{ mb: 1, color: "#fff" }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={infoStyle}>
              WhatsApp: +351 920 537 449
              <br />
              Email: support@cosmeticsstore.com
              <br />
              Location: Porto, Portugal{" "}
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

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ fontSize: "0.8rem", color: "#aaa" }}
        >
          © {new Date().getFullYear()} Stella. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

// Styles
const linkStyle = {
  display: "block",
  color: "#c0c0c0",
  mb: 1,
  fontSize: "0.875rem",
  "&:hover": {
    color: "#ffffff",
  },
};

const infoStyle = {
  color: "#c0c0c0",
  lineHeight: 1.6,
};
