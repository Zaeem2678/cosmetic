import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export default function ModalDialog({ product, open, onClose }) {
  if (!product) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{product.name}</DialogTitle>

      <DialogContent>
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          />
        )}

        {product.description && (
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
        )}

        {product.price && (
          <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
            Price: €{product.price}
          </Typography>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary" variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
