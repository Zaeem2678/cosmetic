import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const mainNavItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
  ];

  const allNavItems = [
    ...mainNavItems,
    { text: "Most Selling Products", path: "/most-selling" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          bgcolor: "secondary.main",
          color: "text.primary",
          px: 2,
          boxShadow: "none",
          borderBottom: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo - Left Side */}
          <Box sx={{ flexShrink: 0 }}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "70px", width: "70px", cursor: "pointer" }}
                src="/logo.png"
                alt="logo"
              />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              {/* Center Navigation - Home, About, Contact */}
              <Box sx={{ 
                display: "flex", 
                gap: 2,
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}>
                {mainNavItems.map((item) => (
                  <Button
                    key={item.text}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: "text.primary",
                      fontWeight: 500,
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#E3F2FD",
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>

              {/* Right Side - Most Selling Products */}
              <Box sx={{ flexShrink: 0 }}>
                <Button
                  component={Link}
                  to="/most-selling"
                  sx={{
                    color: "text.primary",
                    fontWeight: 600,
                    textTransform: "none",
                    bgcolor: "rgba(251, 165, 4, 0.1)",
                    border: "1px solid #FBA504",
                    borderRadius: "8px",
                    px: 2,
                    "&:hover": {
                      backgroundColor: "#FBA504",
                      color: "#fff",
                    },
                  }}
                >
                  Most Selling Products
                </Button>
              </Box>
            </>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              edge="end"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            height: "100%",
            bgcolor: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            pt: 3,
          }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
          >
            Menu
          </Typography>
          <Divider />
          <List>
            {allNavItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: "text.primary",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    align: "center",
                    fontWeight: item.text === "Most Selling Products" ? 600 : 500,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}