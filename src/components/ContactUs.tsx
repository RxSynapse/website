'use client';

import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { useContactModal } from '@/app/components/ContactProvider';

const ContactUs: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detects mobile screens
  const setContactOpen = useContactModal();

  return (
    <>
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
          <ChatIcon onClick={() => setContactOpen(true)} />
        ) : (
          <Button
            variant="contained"
            color="primary"
            startIcon={<ChatIcon />}
            onClick={() => setContactOpen(true)}
          >
            Contact Us
          </Button>
        )}
      </Box>
    </>
  );
};

export default ContactUs;
