'use client';

import {
  Container,
  Grid,
  Typography,
  List,
  Box,
  Divider,
  IconButton,
  ListItem,
  Link as MuiLink,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { trackOutboundLink } from '@/lib/analytics';

const footerLinks = [
  { label: "Pricing", path: "/pricing", id: "pricing" },
  { label: "Docs", path: "https://flow.rxsynapse.com/docs", id: "docs" },
  { label: "Open the App", path: "https://flow.rxsynapse.com", id: "app" },
];

export default function Footer() {
  const handleNavigation = (path: string, id: string, label: string) => {
    // For same-page navigation, scroll to section
    if (typeof window !== 'undefined' && window.location.pathname === path && id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleSocialClick = (platform: string, url: string) => {
    trackOutboundLink(url, {
      linkText: platform,
      linkLocation: 'footer',
      linkType: 'social',
    });
  };

  return (
    <Box component="footer" sx={{ bgcolor: "#121212", color: "white", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" fontWeight="bold">
              RxSynapse
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
              Real-time options intelligence and smart money tracking for
              Indian markets, delivered on Telegram.
            </Typography>
            <List sx={{ mt: 2, display: "flex" }}>
              <IconButton
                component="a"
                rel="nofollow noopener"
                href="mailto:contact@rxsynapse.com"
                aria-label="Email RxSynapse"
                sx={{ color: "white" }}
                onClick={() => handleSocialClick('Email', 'mailto:contact@rxsynapse.com')}
              >
                <EmailIcon />
              </IconButton>
            </List>
          </Grid>

          {/* Quick Links */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            component="nav"
            aria-label="Footer navigation"
          >
            <Typography variant="h6" fontWeight="bold">
              Quick Links
            </Typography>
            <List>
              {footerLinks.map(({ label, path, id }) => {
                const isExternal = path.startsWith("http");
                return (
                  <ListItem key={`${path}-${id}`} disablePadding>
                    <Link
                      href={path}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener" : undefined}
                      onClick={() => handleNavigation(path, id, label)}
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        padding: "4px 0",
                        display: "block",
                      }}
                    >
                      {label}
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Grid>

        </Grid>

        {/* Divider and Copyright */}
        <Divider sx={{ bgcolor: "gray", my: 3 }} />
        <Typography variant="body2" align="center" sx={{ opacity: 0.6 }}>
          © {new Date().getFullYear()} RxSynapse. All rights reserved. |{" "}
          <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>
            <MuiLink component="span" underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>
              Privacy Policy
            </MuiLink>
          </Link>{" "}
          |{" "}
          <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>
            <MuiLink component="span" underline="hover" color="inherit" sx={{ cursor: 'pointer' }}>
              Terms of Service
            </MuiLink>
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
