import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";

export default function ModalDialog({ product, open, onClose }) {
  if (!product) return null;

  const title = product.productName || product.name || "Product Details";
  const image = product.image;
  const description = product.description;
  const price = product.price;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          fontWeight: "bold",
          fontSize: "1.25rem",
          color: "#222",
        }}
      >
        {title}
      </DialogTitle>

      <DialogContent dividers>
        <Box display="flex" flexDirection="column" gap={2}>
          {image && (
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          )}

          {description && (
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                textAlign: "justify",
              }}
            >
              {description}
            </Typography>
          )}

          {price && (
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Price: €{price}
            </Typography>
          )}
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary" variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
