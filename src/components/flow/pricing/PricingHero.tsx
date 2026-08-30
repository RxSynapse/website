'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function PricingHero() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#000',
        color: '#fff',
        pt: { xs: 8, md: 10 },
        pb: { xs: 4, md: 5 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 70%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            component="h1"
            variant="h2"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Choose Your Plan
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.4rem' },
            }}
          >
            Unlock unlimited smart money alerts and institutional-grade options intelligence
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            Free tier included • Premium plans from ₹799
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
