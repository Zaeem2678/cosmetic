import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import PageNavigation from "../components/pagenav/PageNavigation";

export default function Contact() {
  return (
    <>
      <PageNavigation title="Contact Us" subheading="contact us" />
      {/* Contact Info Section */}
      <Box sx={{ overflowX: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { md: 7, xs: 1 },
            padding: 4,
          }}
        >
          {/* Address Section */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6">Address:</Typography>
            <Typography color="text.secondary">
              R RUA DOM AFONSO HENRIQUES N 201 2
             
              <br />
              4435-005 RIO TINTO
              <br />
              PORTO, PORTUGAL{" "}
              <img
                src="https://flagcdn.com/w40/pt.png"
                alt="Portugal Flag"
                style={{ width: 20, height: 15, verticalAlign: "middle" }}
              />
            </Typography>
          </Box>

          {/* Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              width: "1px",
              backgroundColor: "grey.400",
            }}
          />

          {/* Phone Section */}
          <Box sx={{ textAlign: "center" }}>
            {/* icon can go here*/}
            <Typography variant="h6">Phone:</Typography>
            <Typography color="text.secondary"> +351 920 537 449</Typography>
          </Box>

          {/* Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              height: { md: 120, xs: "none" },
              width: "1px",
              backgroundColor: "grey.400",
            }}
          />

          {/* Email Section */}
          <Box sx={{ textAlign: "center" }}>
            {/* icon can go here*/}
            <Typography variant="h6">Email:</Typography>
            <Typography color="text.secondary">info@yoursite.com</Typography>
          </Box>
        </Box>

        {/* Contact Form Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              mt: 9,
              mb: 6,
              fontSize: "26px",
              width: { xs: "400px", md: "500px" },
              marginX: "30px",
            }}
            variant="h6"
            color="#333333"
          >
            If you got any questions, please do not hesitate to send us a
            message.
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: "850px",
            margin: "0 auto",
            marginBottom: 9,
            padding: 7,
            background: "#F8F9FA",
            borderRadius: 2,
          }}
        >
          {/* Name Field */}
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          {/* Email Field */}
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          {/* Subject Field */}
          <TextField
            label="Subject"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          {/* Message Field */}
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={5}
          />

          {/* Send Button */}
          <Button variant="contained" sx={{ mt: 2, bgcolor: "primary.main" }}>
            Send Message
          </Button>
        </Box>
      </Box>
    </>
  );
}
