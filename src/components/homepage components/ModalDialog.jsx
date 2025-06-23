import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export default function ModalDialog({ product, open, onClose }) {
  return (
    <Dialog open={open} onClose={() => {}} maxWidth="sm" fullWidth>
      <DialogTitle>{product.title}</DialogTitle>
      <DialogContent>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
        />
        <Typography variant="body1">{product.description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
