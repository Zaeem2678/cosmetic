import { Button } from "@mui/material";

const CustomButton = ({ children, sx = {}, ...props }) => {
  return (
    <Button
      sx={{
        backgroundColor: "#D2B48C", // light brown
        color: "#FFFFFF", // white text
        "&:hover": {
          backgroundColor: "#8B4513", // dark brown on hover
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
