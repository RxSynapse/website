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
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { trackOutboundLink, trackNavigation } from '@/lib/analytics';

const footerLinks = [
  { label: "Services", path: "/", id: "services" },
  { label: "About Us", path: "/", id: "about-us" },
  { label: "RxFlow", path: "/flow", id: "flow-hero" },
  {
    label: "RxCommunication",
    path: "/communication",
    id: "communication-hero",
  },
];

export default function Footer() {
  const handleNavigation = (path: string, id: string, label: string) => {
    // Track navigation
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    trackNavigation(currentPath, path, {
      navigationType: 'click',
      navigationElement: 'footer',
    });

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
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold">
              RxSynapse
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
              Transforming BFSI with AI-powered automation, integration, and
              strategic insights.
            </Typography>
            <List sx={{ mt: 2, display: "flex" }}>
              <IconButton
                component="a"
                href="https://facebook.com/rxsynapse"
                rel="nofollow noopener"
                target="_blank"
                aria-label="RxSynapse on Facebook"
                sx={{ color: "white" }}
                onClick={() => handleSocialClick('Facebook', 'https://facebook.com/rxsynapse')}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com/company/rxsynapse"
                rel="nofollow noopener"
                target="_blank"
                aria-label="RxSynapse on LinkedIn"
                sx={{ color: "white" }}
                onClick={() => handleSocialClick('LinkedIn', 'https://linkedin.com/company/rxsynapse')}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/rxsynapse"
                rel="nofollow noopener"
                target="_blank"
                aria-label="RxSynapse on Twitter"
                sx={{ color: "white" }}
                onClick={() => handleSocialClick('Twitter', 'https://twitter.com/rxsynapse')}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                rel="nofollow noopener"
                href="mailto:contact@rxsynapse.com"
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
            md={4}
            component="nav"
            aria-label="Footer navigation"
          >
            <Typography variant="h6" fontWeight="bold">
              Quick Links
            </Typography>
            <List>
              {footerLinks.map(({ label, path, id }) => (
                <ListItem key={`${path}-${id}`} disablePadding>
                  <Link
                    href={path}
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
              ))}
            </List>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">
              Contact
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, opacity: 0.8 }}
              itemProp="email"
            >
              ✉️ contact@rxsynapse.com
            </Typography>
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
