import PageNavigation from "../components/pagenav/PageNavigation";
import CharitySection from "../components/homepage components/CharitySection";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <PageNavigation title="About Us" subheading="about us" />
      <CharitySection />
      {/* Closing Note */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          align="center"
          color="text.primary"
          sx={{ fontStyle: "italic", width: { md: "840px", xs: "400px",padding:'10px' } }}
        >
          "We proudly sell premium cosmetic products across Europe, offering a
          carefully curated selection designed to meet the highest standards of
          quality, safety, and elegance. Our products are crafted using
          ethically sourced ingredients and are trusted by customers in major
          European countries for their effectiveness and luxury appeal. Whether
          you're in Portugal, Germany, France, or beyond — Stella is your
          destination for sophisticated beauty solutions delivered right to
          your doorstep."
        </Typography>
      </Box>
    </>
  );
}
