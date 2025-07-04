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

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{product.name}</DialogTitle>

      <DialogContent dividers>
        <Box display="flex" flexDirection="column" gap={2}>
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          )}

          {product.description && (
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "pre-line", // keeps line breaks if present
                wordBreak: "break-word", // ensures long words wrap
                textAlign: "justify", // optional: aligns both sides
              }}
            >
              {product.description}
            </Typography>
          )}

          {product.price && (
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Price: €{product.price}
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
