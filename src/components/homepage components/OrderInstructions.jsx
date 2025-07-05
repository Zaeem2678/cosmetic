import { Box, Typography, Container, Paper, Grid } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PaymentIcon from "@mui/icons-material/Payment";
import SendIcon from "@mui/icons-material/Send";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function OrderInstructions() {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        marginTop: 5,
        marginBottom: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            bgcolor: { xs: "secondary.main", md: "#E3DEDA" },
            boxShadow: "none",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            color="#1a1a1a"
            fontSize={25}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            How to Place Your Order
          </Typography>

          <Grid container spacing={3} mt={2}>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" gap={2}>
                <CameraAltIcon color="error" />
                <Typography variant="body1">
                  Take a clear picture or screenshot of the product you want to
                  buy.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" gap={2}>
                <PaymentIcon color="error" />
                <Typography variant="body1">
                  Send your payment to this account:
                  <strong style={{ color: "#d6336c", marginLeft: 5 }}>
                    [Your Account Number Here]
                  </strong>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" gap={2}>
                <SendIcon color="error" />
                <Typography variant="body1">
                  After payment, send a screenshot of the transaction.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center" gap={2}>
                <WhatsAppIcon color="success" />
                <Typography variant="body1">
                  WhatsApp us at:
                  <a
                    href="https://wa.me/351920537449"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#25D366",
                      marginLeft: 5,
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = "none")
                    }
                  >
                    +351 920 537 449
                  </a>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                justifyContent="center"
              >
                <LocalShippingIcon color="primary" />
                <Typography variant="body1">
                  Once confirmed, your product will be delivered to you
                  promptly!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
