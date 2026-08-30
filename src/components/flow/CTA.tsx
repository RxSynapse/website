'use client';

import { Container, Typography, Box, Link } from "@mui/material";
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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 3 }}>
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
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            Want unlimited alerts? <Link href="/pricing" sx={{ color: '#3B82F6', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>View pricing →</Link>
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            New to RxSynapse? <Link href="https://flow.rxsynapse.com/docs/getting-started" target="_blank" rel="noopener" sx={{ color: '#3B82F6', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Read the Getting Started guide →</Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default CTA;
