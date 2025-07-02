import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CustomButton from "./CustomButton";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

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
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ flexShrink: 0 }}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/logo.png"
                alt="logo"
                style={{ height: 70, width: 70, cursor: "pointer" }}
              />
            </Link>
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <>
              {/* Centered Menu */}
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {mainNavItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Box
                      key={item.text}
                      component={Link}
                      to={item.path}
                      sx={{
                        position: "relative",
                        color: "text.primary",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "1rem",
                        paddingBottom: "4px",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: isActive ? "100%" : "0%",
                          height: "2px",
                          backgroundColor: "#1a1a1a",
                          transition: "width 0.3s ease",
                        },
                        "&:hover::after": {
                          width: "100%",
                        },
                      }}
                    >
                      {item.text}
                    </Box>
                  );
                })}
              </Box>

              {/* Right Button */}
              <Box sx={{ flexShrink: 0 }}>
                <CustomButton sx={{
                  padding:'10px'
                }} component={Link} to="/most-selling">
                  Most Selling Items
                </CustomButton>
              </Box>
            </>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: "text.primary" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer Menu */}
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
                  justifyContent: "center",
                }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    align: "center",
                    fontWeight:
                      item.text === "Most Selling Products" ? 600 : 500,
                    sx: {
                      color: "#000", // plain black, no hover or underline
                    },
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
