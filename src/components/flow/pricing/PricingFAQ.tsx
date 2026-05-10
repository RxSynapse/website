'use client';

import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'How do I pay with Telegram Stars?',
    answer: 'Open @rxflow_alerts_bot on Telegram, send /subscription, and choose your plan. Payment is processed securely through Telegram\'s in-app purchase system using Stars (Telegram\'s currency).',
  },
  {
    question: 'Can I pay with credit card or UPI?',
    answer: 'Razorpay integration for credit card, UPI, and netbanking payments is coming soon. For now, Telegram Stars is the primary payment method.',
  },
  {
    question: 'What happens when my subscription expires?',
    answer: 'Your account automatically downgrades to the FREE tier with daily quota limits. You can renew anytime to restore unlimited access.',
  },
  {
    question: 'Can I upgrade or downgrade mid-cycle?',
    answer: 'You can purchase a new subscription at any time. The new plan will activate immediately, and any remaining days from your current plan will be forfeited.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Due to the digital nature of the service and instant access provided, all sales are final. We recommend starting with a 1-day pass to try the service.',
  },
  {
    question: 'How do I get started?',
    answer: 'Start by joining our Telegram bot @rxflow_alerts_bot. You can use the FREE tier to experience the alerts. When ready, upgrade to unlock unlimited features.',
  },
];

export default function PricingFAQ() {
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
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              mb: 6,
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            Everything you need to know about RxFlow subscriptions
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px !important',
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ fontSize: 20, color: '#fff' }} />}
                  sx={{
                    py: 2,
                    px: 3,
                    '& .MuiAccordionSummary-content': {
                      my: 1,
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff', fontSize: '1.1rem' }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3 }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
