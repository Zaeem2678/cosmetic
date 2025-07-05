import { useState } from "react";
import axios from "axios";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import CustomButton from "../components/CustomButton";
import PageNavigation from "../components/pagenav/PageNavigation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitted(true);
      const res = await axios.post(
        "http://localhost:4000/api/contactUs/mailingService",
        formData
      );
      //alert(res.data.message);
      MySwal.fire({
        title: "Contact Us",
        text: res?.data?.message || "Thanks for contacting us!!",
        icon: "success", // Can be 'success', 'error', 'warning', 'info', or 'question'
        confirmButtonText: "Okay",
      });
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
    } catch (err) {
      setIsSubmitted(false);
      MySwal.fire({
        title: "Contact Us",
        text: err.response?.data?.message || "Failed to send message",
        icon: "error", // Can be 'success', 'error', 'warning', 'info', or 'question'
        confirmButtonText: "Try Again",
      });
      //alert(err.response?.data?.message || "Failed to send message");
    }
  };

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
            sx={{ width: "1px", backgroundColor: "grey.400" }}
          />

          {/* Phone Section */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6">Phone:</Typography>
            <Typography color="text.secondary">+351 920 537 449</Typography>
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
            <Typography variant="h6">Email:</Typography>
            <Typography color="text.secondary">info@yoursite.com</Typography>
          </Box>
        </Box>

        {/* Contact Form Section */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              textAlign: "center",
              mt: 9,
              mb: 6,
              fontSize: "26px",
              width: { xs: "400px", md: "500px" },
              mx: "30px",
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
            mx: "auto",
            mb: 9,
            p: 7,
            background: "#F8F9FA",
            borderRadius: 2,
          }}
        >
          {/* Name Field */}
          <TextField
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          {/* Email Field */}
          <TextField
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          {/* Subject Field */}
          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          {/* Message Field */}
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={5}
          />

          {/* Send Button */}
          <CustomButton
            sx={{ mt: 2 }}
            onClick={handleSubmit}
            disabled={isSubmitted}
          >
            {isSubmitted ? "Sending Message..." : "Send Message"}
          </CustomButton>
        </Box>
      </Box>
    </>
  );
}
