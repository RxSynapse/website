'use client';

import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods through Razorpay including Credit/Debit Cards, UPI, Net Banking, and popular wallets. All payments are processed securely with industry-standard encryption.',
  },
  {
    question: 'Is my payment information secure?',
    answer: 'Yes! All payments are processed through Razorpay, a PCI DSS compliant payment gateway. We never store your card details or payment information on our servers.',
  },
  {
    question: 'How does the trading-day subscription logic work?',
    answer: 'Subscriptions are calculated based on actual trading days, not calendar days. Weekend purchases start counting from Monday to ensure you get actual trading time. All subscriptions expire at 8 AM on weekdays only - never on Saturday or Sunday when markets are closed. For the 1 Day Pass: daytime purchases (9 AM-7 PM) get 2 full trading days, while night purchases get 1 full trading day.',
  },
  {
    question: 'What happens when my subscription expires?',
    answer: 'Your subscription expires at 8 AM on a weekday (never on weekends). Your account automatically downgrades to the FREE tier with daily quota limits: 50 LOW alerts, 25 MEDIUM alerts, and 25 HIGH alerts per day. EXTREME alerts remain unlimited forever. You can renew anytime to restore unlimited access to all severity levels.',
  },
  {
    question: 'What are Preferred Expiries and Outcome Tracking?',
    answer: 'Premium users get two powerful features: (1) Preferred Expiries - Set your preferred contract expiry dates (weekly/monthly) to filter alerts for your trading strategy. (2) Outcome Tracking - Track alert performance at 15min, 30min, 1hr, and 1day intervals to measure your edge and refine your strategy based on actual results.',
  },
  {
    question: 'Can I upgrade or downgrade mid-cycle?',
    answer: 'You can purchase a new subscription at any time. The new plan will activate immediately, and any remaining days from your current plan will be forfeited.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Due to the digital nature of the service and instant access provided, all sales are final. We recommend starting with a 1-day pass to try the service. The 1 Day Pass is perfect for testing RxFlow before committing to longer plans.',
  },
  {
    question: 'What do I get with the FREE tier?',
    answer: 'The FREE tier includes unlimited EXTREME alerts (top 1% unusual activity) forever, plus daily quotas of 50 LOW alerts, 25 MEDIUM alerts, and 25 HIGH alerts. Quotas reset daily at 9:15 AM IST when the market opens. You can customize severity filters, trading hours, and watchlists using /settings command.',
  },
  {
    question: 'How do I get started?',
    answer: 'Start by joining our Telegram bot at https://t.me/rxflow_alerts_bot. Type /subscribe to activate your FREE account and start receiving alerts immediately. When ready, use /upgrade to view premium plans and unlock unlimited alerts, preferred expiries, and outcome tracking.',
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
