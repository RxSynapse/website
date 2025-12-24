'use client';

import { Container, Typography } from "@mui/material";
import { TrackedCTAButton } from '@/components/TrackedButton';

const CTA: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Ready to Track Smart Money Like Institutions?
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ maxWidth: 600, mx: "auto" }}
        >
          India's first real-time options intelligence platform. Track unusual activity, institutional flows, and smart money movements. Start with our generous free tier - EXTREME alerts always unlimited!
        </Typography>
        <TrackedCTAButton
          trackingName="get_started_flow_cta"
          trackingLocation="flow_cta_section"
          trackingDestination="https://flow.rxsynapse.com"
          trackingParams={{
            pageSection: 'bottom_cta',
            priority: 'secondary',
            conversionGoal: 'telegram_signup',
          }}
          variant="contained"
          size="large"
          href="https://flow.rxsynapse.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            mt: 3,
            px: 5,
            py: 1.5,
            fontSize: "1.1rem",
            "&:hover": {
              transform: "scale(1.05)",
              transition: "all 0.2s"
            }
          }}
        >
          Get Started Free on Telegram
        </TrackedCTAButton>
      </Container>
    </>
  );
};

export default CTA;
