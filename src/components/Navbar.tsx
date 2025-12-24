'use client';

import React, { JSX, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { TrackedNavButton, TrackedCTAButton } from '@/components/TrackedButton';
import { trackNavigation } from '@/lib/analytics';
const Drawer = React.lazy(() => import("@mui/material/Drawer"));

interface NavbarProps {
  setContactOpen?: (state: boolean) => void;
}

interface NavItem {
  label: string;
  id: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Services", path: "/", id: "services" },
  { label: "About Us", path: "/", id: "about-us" },
  { label: "RxFlow", path: "/flow", id: "flow-hero" },
  {
    label: "RxCommunication",
    path: "/communication",
    id: "communication-hero",
  },
];

const Navbar: React.FC<NavbarProps> = ({ setContactOpen }) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string, id: string, label: string) => {
    // Track navigation
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    trackNavigation(currentPath, path, {
      navigationType: 'click',
      navigationElement: 'navbar',
    });

    // For same-page navigation, scroll to section
    if (typeof window !== 'undefined' && window.location.pathname === path && id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
          >
            <ListItemButton
              component={Link}
              href={path}
              onClick={() => handleNavigation(path, id, label)}
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
            href="/"
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
              <TrackedNavButton
                key={id}
                trackingName={`nav_${id}`}
                trackingLocation="navbar"
                trackingDestination={path}
                component={Link}
                href={path}
                onClick={() => handleNavigation(path, id, label)}
                sx={{ color: "#fff" }}
              >
                {label}
              </TrackedNavButton>
            ))}
          </Box>

          {/* CTA */}
          {setContactOpen && (
            <TrackedCTAButton
              trackingName="get_started_navbar"
              trackingLocation="navbar"
              trackingDestination="contact_form"
              trackingParams={{
                priority: 'tertiary',
                conversionGoal: 'contact_form_open',
              }}
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
            </TrackedCTAButton>
          )}
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
