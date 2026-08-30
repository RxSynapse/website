'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Telegram } from '@mui/icons-material';

export default function PricingCTA() {
  const handleOpenTelegram = () => {
    window.open('https://t.me/rxflow_alerts_bot', '_blank');
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#000',
        color: '#fff',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2rem' },
              }}
            >
              Need Help Choosing?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Contact us on Telegram @rxflow_alerts_bot for personalized recommendations
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<Telegram sx={{ fontSize: 20 }} />}
              onClick={handleOpenTelegram}
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: 2,
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: '1.1rem',
                background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                color: '#fff',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                  boxShadow: '0 15px 40px rgba(59, 130, 246, 0.4)',
                },
              }}
            >
              Open Telegram Bot
            </Button>

            <Typography
              variant="body2"
              sx={{
                mt: 3,
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '0.9rem',
              }}
            >
              Already a user? <a href="https://flow.rxsynapse.com" target="_blank" rel="noopener" style={{ color: '#3B82F6', textDecoration: 'none' }}>Sign in to your dashboard →</a>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
