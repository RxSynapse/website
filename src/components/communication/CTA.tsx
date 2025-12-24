'use client';

import { Container, Typography } from "@mui/material";
import { TrackedCTAButton } from '@/components/TrackedButton';

interface CtaProps {
  setContactOpen: (state: boolean) => void;
}

export default ({ setContactOpen }: CtaProps) => {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Ready to Transform Your Customer Communication?
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ maxWidth: 600, mx: "auto" }}
        >
          Discover how RxSynapse can revolutionize your customer interactions
          and drive measurable business results.
        </Typography>
        <TrackedCTAButton
          trackingName="schedule_consultation_communication"
          trackingLocation="communication_cta_section"
          trackingDestination="contact_form"
          trackingParams={{
            pageSection: 'bottom_cta',
            priority: 'secondary',
            conversionGoal: 'consultation_request',
          }}
          variant="contained"
          size="large"
          sx={{ mt: 3, px: 5, py: 1.5 }}
          onClick={() => setContactOpen(true)}
        >
          Schedule a Consultation
        </TrackedCTAButton>
      </Container>
    </>
  );
};
