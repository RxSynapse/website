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

const footerLinks = [
  { label: "Services", id: "services" },
  { label: "About Us", id: "about-us" },
];

export default function Footer() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
            {footerLinks.map(({ label, id }) => (
              <Typography
                key={id}
                sx={{ cursor: "pointer", my: 1 }}
                onClick={() => handleScroll(id)}
              >
                {label}
              </Typography>
            ))}
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">
              Contact
            </Typography>
            {/* <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
              📍 123 AI Boulevard, Tech City, USA
            </Typography> */}
            {/* <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
              📞 +1 (800) 123-4567
            </Typography> */}
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
