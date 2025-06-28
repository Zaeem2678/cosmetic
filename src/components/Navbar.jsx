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
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
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
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ height: "70px", width: "70px", cursor: "pointer" }}
              src="/BlueCosmetcis.png"
              alt="logo"
            />
          </Link>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
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
          )}

          {/* Right Side Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton sx={{ color: "text.primary" }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: "text.primary" }}>
              <AccountCircleIcon />
            </IconButton>

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
          </Box>
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
            {navItems.map((item) => (
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
                    fontWeight: 500,
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
