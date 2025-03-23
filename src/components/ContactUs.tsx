import {
  Box,
  Button,
  Dialog,
  DialogContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

interface ContactUsProps {
  open: boolean;
  setContactOpen: (state: boolean) => void;
}

const ContactUs: React.FC<ContactUsProps> = ({ open, setContactOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detects mobile screens
  const calendlyLink = "https://calendly.com/kuduwa-keshavram/30min";

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

      {/* ✅ Contact Modal */}
      <Dialog
        open={open}
        onClose={() => setContactOpen(false)}
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
