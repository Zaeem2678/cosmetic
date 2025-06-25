import PageNavigation from "../components/pagenav/PageNavigation";
import CharitySection from "../components/homepage components/CharitySection";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <PageNavigation title="About Us" subheading="about us" />
      <CharitySection />
      {/* Closing Note */}
      <Box sx={{ mt: 8 }}>
        <Typography
          variant="body1"
          align="center"
          color="text.primary"
          sx={{ fontStyle: "italic" }}
        >
          Whether you’re looking for radiant skincare, bold makeup, or everyday
          essentials, we’re here to make you feel confident in your own skin.
        </Typography>
      </Box>
    </>
  );
}
