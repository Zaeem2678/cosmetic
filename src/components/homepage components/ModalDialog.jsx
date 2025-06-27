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
      <DialogContent>
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
          />
        )}

        <Typography variant="body1" gutterBottom>
          {product.description}
        </Typography>

        <Box mt={2}>
          <Typography variant="subtitle2">
            <strong>Price:</strong> ${product.price}
          </Typography>
          <Typography variant="subtitle2">
            <strong>Category:</strong> {product.categoryId?.name || "N/A"}
          </Typography>
          <Typography variant="subtitle2">
            <strong>Added on:</strong>{" "}
            {new Date(product.createdAt).toLocaleDateString()}
          </Typography>
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
