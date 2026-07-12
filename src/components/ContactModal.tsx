'use client';

import { Box, Dialog, DialogContent } from "@mui/material";

interface ContactModalProps {
  open: boolean;
  setContactOpen: (state: boolean) => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, setContactOpen }) => {
  const calendlyLink = "https://calendly.com/kuduwa-keshavram/30min";

  return (
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
  );
};

export default ContactModal;
