import {
  Container,
  Grid,
  Typography,
  List,
  Box,
  Divider,
  IconButton,
  ListItem,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";

const footerLinks = [
  { label: "Services", path: "/", id: "services" },
  { label: "About Us", path: "/", id: "about-us" },
  { label: "Rx-Market", path: "/market", id: "market-hero" },
  {
    label: "Rx-Communication",
    path: "/communication",
    id: "communication-hero",
  },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (!id) return;
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
        // Clear the scroll state after handling it
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    }
  }, [location, navigate]);

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
                href="#"
                rel="nofollow noopener"
                aria-label="RxSynapse on Facebook"
                sx={{ color: "white" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="#"
                rel="nofollow noopener"
                aria-label="RxSynapse on LinkedIn"
                sx={{ color: "white" }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="#"
                rel="nofollow noopener"
                aria-label="RxSynapse on Twitter"
                sx={{ color: "white" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                rel="nofollow noopener"
                href="mailto:contact@rxsynapse.com"
                sx={{ color: "white" }}
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
                  <Box
                    component={RouterLink}
                    to={path}
                    state={{ scrollTo: id }}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                      py: 0.5,
                      display: "block",
                    }}
                  >
                    {label}
                  </Box>
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
          <Link href="#" underline="hover" color="inherit">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="#" underline="hover" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
