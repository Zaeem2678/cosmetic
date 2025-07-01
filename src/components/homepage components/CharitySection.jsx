import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Diversity3Icon from "@mui/icons-material/Diversity3";

export default function CharitySection() {
  const hoverColors = ["#f06292", "#4CAF50", "#3F51B5"];
  const portugalFlag =
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg";

  return (
    <Box sx={{ bgcolor: "secondary.main", py: 3, mt: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ marginLeft: { xs: 0, md: "80px" } }}
          align="center"
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
          {[
            {
              icon: (
                <VolunteerActivismIcon
                  sx={{ fontSize: 40, color: "#d32f2f" }}
                />
              ),
              title: "Supporting Women",
              description:
                "We empower underprivileged women through skills training and donations from every purchase.",
            },
            {
              icon: <FavoriteIcon sx={{ fontSize: 40, color: "#e91e63" }} />,
              title: "Health & Wellness",
              description:
                "We contribute to health camps and hygiene product distribution in rural areas.",
            },
            {
              icon: <Diversity3Icon sx={{ fontSize: 40, color: "#1976d2" }} />,
              title: "Community Growth",
              description:
                "A portion of our profits is reinvested into local education and skill development programs.",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  py: 4,
                  width: { md: "320px", xs: "100%" },
                  height: "200px",
                  transition: "all 0.4s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${portugalFlag})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.4, // 👈 Adjust this for transparency level
                    zIndex: 0,
                  },
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent
                  sx={{
                    position: "relative",
                    zIndex: 1,

                    borderRadius: 2,
                    p: 2,
                  }}
                >
                  {item.icon}
                  <Typography variant="h6" mt={2} fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" mt={1}>
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
