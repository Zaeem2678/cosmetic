import { Button } from "@mui/material";

const CustomButton = ({ children, sx = {}, ...props }) => {
  return (
    <Button
      sx={{
        backgroundColor: "#E4B015", // light brown
        color: "black", // white text
        "&:hover": {
          backgroundColor: "#fff", // dark brown on hover
        },
        ...sx, // allow runtime style overrides
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
