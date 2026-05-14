'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Bolt, Check, TrendingUp, Notifications, BarChart, Schedule } from '@mui/icons-material';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Bolt,
    title: 'Unlimited Alerts',
    description: 'Get every unusual activity alert across all severity levels - EXTREME, HIGH, MEDIUM, and LOW. No daily quotas or restrictions.',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
  },
  {
    icon: Check,
    title: 'Preferred Expiries',
    description: 'Filter alerts by your preferred contract expiry dates (weekly/monthly). Focus on strikes that match your trading timeframe and strategy.',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  },
  {
    icon: Schedule,
    title: 'Outcome Tracking',
    description: 'Track alert performance at 15min, 30min, 1hr, and 1day intervals. Measure your edge and refine your strategy based on actual results.',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
  },
  {
    icon: TrendingUp,
    title: 'Custom Watchlists',
    description: 'Create strike-level watchlists tailored to your trading strategy. Get alerts only for the specific strikes and instruments you trade.',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
  },
  {
    icon: Notifications,
    title: 'Smart Money Correlation',
    description: 'Receive correlation alerts combining options flow with FII/DII data and bulk deals - see the complete institutional picture.',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
  },
  {
    icon: BarChart,
    title: 'Real-Time Intelligence',
    description: 'Instant Telegram notifications with <2 second latency. 528+ strikes monitored live across Nifty, BankNifty, FinNifty, MidcapNifty & top stocks.',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
  },
];

export default function PricingFeatures() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#000',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            What You Get With Premium
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              mb: 6,
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Every premium plan includes these powerful features to help you trade smarter
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      height: '100%',
                      bgcolor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        background: feature.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <Icon sx={{ fontSize: 28, color: '#fff' }} />
                    </Box>

                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1.5, color: '#fff' }}>
                      {feature.title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.7 }}>
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
