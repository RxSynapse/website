import {
  Container,
  Grid,
  Typography,
  List,
  Link,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const footerLinks = [
  { label: "Services", path: "/", id: "services" },
  { label: "About Us", path: "/", id: "about-us" },
  { label: "Rx-Communication", path: "/communication", id: "hero" },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

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
              <IconButton component="a" href="#" sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton component="a" href="#" sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton component="a" href="#" sx={{ color: "white" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:contact@rxsynapse.com"
                sx={{ color: "white" }}
              >
                <EmailIcon />
              </IconButton>
            </List>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold">
              Quick Links
            </Typography>
            {footerLinks.map(({ label, path, id }) => (
              <Box key={`${path}-${id}`} sx={{ my: 1 }}>
                <Typography
                  sx={{
                    cursor: "pointer",
                    display: "inline-block",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  onClick={() => handleNavigation(path, id)}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
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
