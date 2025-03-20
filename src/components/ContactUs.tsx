import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ChatIcon from "@mui/icons-material/Chat";

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detects mobile screens
  const calendlyLink = "https://calendly.com/kuduwa-keshavram/30min";

  return (
    <>
      {/* ✅ SEO Optimization */}
      <Helmet>
        <meta
          name="description"
          content="Schedule a meeting with us instantly using our integrated Calendly booking system."
        />
        <meta property="og:title" content="Contact Us - Schedule a Meeting" />
        <meta
          property="og:description"
          content="Easily book a meeting with our team through Calendly."
        />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
      </Helmet>

      {/* ✅ Floating Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        {isMobile ? (
          <ChatIcon onClick={() => setOpen(true)} />
        ) : (
          <Button
            variant="contained"
            color="primary"
            startIcon={<ChatIcon />}
            onClick={() => setOpen(true)}
          >
            Contact Us
          </Button>
        )}
      </Box>

      {/* ✅ Contact Modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          {/* ✅ Calendly Embed */}
          <Box height="90vh">
            <iframe
              src={calendlyLink}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{
                border: "none", // ✅ Removes default border
                outline: "none", // ✅ Removes focus outline
                borderRadius: "8px", // ✅ Adds smooth corners
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // ✅ Optional: Soft shadow
              }}
              allowFullScreen
            />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactUs;
