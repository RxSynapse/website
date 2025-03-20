import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Helmet } from "react-helmet-async";

const navItems: string[] = [];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            "& img": {
              height: "1.2em",
              marginRight: "8px",
            },
          }}
        >
          <img src="/logo/rxsynapse-white-logo.png" alt="RxSynapse Logo" />
          RxSynapse
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Helmet>
        <meta property="og:title" content="RxSynapse - AI Innovation in BFSI" />
        <meta
          property="og:description"
          content="RxSynapse provides AI-driven solutions for BFSI, enhancing automation, migration, and strategic reporting."
        />
        <meta property="og:image" content="/logo/white.png" />
        <meta property="og:url" content="https://www.rxsynapse.com" />
      </Helmet>

      {/* Top Navigation */}
      <AppBar position="sticky" sx={{ bgcolor: "#000", color: "#fff" }}>
        <Toolbar>
          {/* Mobile Menu Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" }, mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                "& img": {
                  height: "1.2em",
                  marginRight: "8px",
                },
              }}
            >
              <img
                src="/logo/rxsynapse-white-logo.png"
                alt="RxSynapse AI BFSI Logo"
                loading="lazy"
              />
              RxSynapse
            </Typography>
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>

          {/* CTA */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#007BFF",
              color: "#fff",
              ml: 2,
              "&:hover": { bgcolor: "#0056b3" },
            }}
            component="a"
            href="/get-started"
          >
            Get Started
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { sm: "none" } }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
