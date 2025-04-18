import React, { JSX, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { Link } from "react-router-dom";
const Drawer = React.lazy(() => import("@mui/material/Drawer"));

interface NavbarProps {
  setContactOpen: (state: boolean) => void;
}

interface NavItem {
  label: string;
  id: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Services", path: "/", id: "services" },
  { label: "About Us", path: "/", id: "about-us" },
  { label: "Rx-Market", path: "/market", id: "market-hero" },
  {
    label: "Rx-Communication",
    path: "/communication",
    id: "communication-hero",
  },
];

const Navbar: React.FC<NavbarProps> = ({ setContactOpen }) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string, id: string) => {
    if (location.pathname !== path) {
      // Navigate to the new page first
      navigate(path, { state: { scrollTo: id } });
    } else if (id) {
      // Already on the correct page, just scroll to section
      scrollToSection(id);
    }
  };

  const scrollToSection = (id: string) => {
    if (!id) return;
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const drawer: JSX.Element = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="h6" fontWeight="bold">
        RxSynapse
      </Typography>
      <List>
        {navItems.map(({ label, id, path }: NavItem) => (
          <ListItem
            key={id}
            disablePadding
            onClick={() => handleNavigation(path, id)}
          >
            <ListItemButton
              component={Link}
              to={path}
              state={{ scrollTo: id }}
              sx={{ textAlign: "center" }}
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
      <AppBar
        component="nav"
        position="sticky"
        sx={{ bgcolor: "#000", color: "#fff" }}
      >
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

          {/* Logo with link to home */}
          <Link
            to="/"
            rel="canonical"
            style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "& img": {
                  height: "1.2em",
                  marginRight: "8px",
                },
              }}
            >
              <img
                src="/logo/rxsynapse-white-logo.png"
                alt="RxSynapse - AI-Powered BFSI Solutions"
              />
              RxSynapse
            </Typography>
          </Link>

          {/* Desktop Navigation */}
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            aria-label="Desktop navigation"
          >
            {navItems.map(({ label, id, path }) => (
              <Button
                key={id}
                component={Link}
                to={path}
                state={{ scrollTo: id }}
                sx={{ color: "#fff" }}
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
      <React.Suspense fallback={null}>
        <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      </React.Suspense>
    </>
  );
};

export default Navbar;
