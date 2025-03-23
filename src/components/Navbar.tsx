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

interface NavbarProps {
  setContactOpen: (state: boolean) => void;
}

const navItems = [
  { label: "Services", id: "services" },
  { label: "About Us", id: "about-us" },
];

const Navbar: React.FC<NavbarProps> = ({ setContactOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="h6" fontWeight="bold">
        RxSynapse
      </Typography>
      <List>
        {navItems.map(({ label, id }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleScroll(id)}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#000", color: "#fff" }}>
        <Toolbar>
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
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            RxSynapse
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ label, id }) => (
              <Button
                key={id}
                sx={{ color: "#fff" }}
                onClick={() => handleScroll(id)}
              >
                {label}
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
            onClick={() => setContactOpen(true)}
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
