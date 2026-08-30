'use client';

import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Is RxSynapse the same as RxFlow?",
      answer:
        "Yes. RxFlow is now RxSynapse - same product, same team, same Telegram bot (@rxflow_alerts_bot). We consolidated under one name; only the branding changed. All existing subscriptions, alerts, and links continue to work exactly as before.",
    },
    {
      question: "How accurate are the alerts?",
      answer:
        "RxSynapse uses sophisticated algorithms with 7-day historical baseline analysis to filter out market noise. Each alert is scored 0-100 based on 10+ parameters including volume spike magnitude, OI changes, aggression patterns, and premium movements. EXTREME severity alerts represent the top 1% of unusual activity, ensuring you only see genuinely significant institutional moves. Our data comes directly from NSE/BSE via Angel One's real-time feed with <2 second latency.",
    },
    {
      question: "What payment methods are available?",
      answer:
        "RxSynapse accepts payments via Razorpay on our web dashboard at flow.rxsynapse.com. You can pay using Credit/Debit Cards, UPI, Net Banking, or popular wallets. All payments are GST-inclusive with instant activation and automatic invoice generation. Use the /upgrade command in the Telegram bot to view pricing and get redirected to the secure payment page.",
    },
    {
      question: "Can I cancel my premium subscription anytime?",
      answer:
        "Yes, absolutely! You can cancel anytime using the /premium command in the bot. There are no cancellation fees or penalties. If you cancel, you'll retain access until the end of your current billing period. After that, you'll automatically revert to the free tier with generous daily quotas. EXTREME alerts remain unlimited forever, even on the free tier.",
    },
    {
      question: "Which instruments and strikes are covered?",
      answer:
        "RxSynapse monitors 528+ option strikes in real-time across: (1) Nifty - 21 strikes, (2) BankNifty - 21 strikes, (3) FinNifty - 21 strikes, (4) MidcapNifty - 21 strikes, and (5) 15 top stocks (RELIANCE, SBIN, HDFCBANK, INFY, TCS, ICICIBANK, KOTAKBANK, ITC, HINDUNILVR, BHARTIARTL, BAJFINANCE, LT, ASIANPAINT, AXISBANK, TITAN) - 12 strikes each. Strikes are dynamically selected around current spot prices and refreshed daily.",
    },
    {
      question: "Do I need a credit card to use the free tier?",
      answer:
        "No! The free tier requires zero payment information. Just start the bot on Telegram (@rxflow_alerts_bot), type /subscribe to activate your account, and you're ready. You get unlimited EXTREME alerts forever, plus generous daily quotas for HIGH (25/day), MEDIUM (25/day), and LOW (50/day) severity alerts. Quotas reset daily at 9:15 AM IST when market opens.",
    },
    {
      question: "How do refunds work for premium subscriptions?",
      answer:
        "Refunds are handled by Telegram according to their refund policy, as Stars are purchased from Telegram. Generally, Telegram allows refunds for accidental purchases within a short window. For subscription-related issues or concerns, contact our support via the /help command in the bot, and we'll do our best to assist. Premium subscriptions are billed upfront, and unused time is not prorated upon cancellation.",
    },
    {
      question: "What's the difference between alert severity levels?",
      answer:
        "Severity levels are based on statistical percentiles of unusual activity: EXTREME (top 1% - only the most significant institutional moves), HIGH (top 5% - strong unusual activity), MEDIUM (top 10% - moderate unusual activity), and LOW (all detected unusual activity beyond baseline). Higher severity means rarer, more significant activity. EXTREME alerts are always free and unlimited because we believe critical market information should never be paywalled.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Yes. RxSynapse only stores your Telegram user ID, subscription preferences (severity filters, trading hours, watchlist), and premium status. We never ask for or store your trading account credentials, financial information, or personal details. All communication happens via Telegram's encrypted messaging platform. We don't share your data with third parties. Your alert history is kept for 7 days for correlation analysis, then automatically purged.",
    },
    {
      question: "How fast are the alerts delivered?",
      answer:
        "Alerts are delivered with <2 second average latency from the moment unusual activity is detected in the market. Our infrastructure processes real-time tick data from NSE/BSE via Angel One's WebSocket feed, runs detection algorithms in-memory, and sends alerts directly to Telegram. You'll often receive RxSynapse alerts before you see the activity reflected on trading platforms or NSE's website.",
    },
    {
      question: "Can I customize which alerts I receive?",
      answer:
        "Yes! Use the /settings command to customize: (1) Severity levels - Choose which severities you want (EXTREME, HIGH, MEDIUM, LOW), (2) Trading hours filter - Receive alerts only during market hours (9:15 AM - 3:30 PM IST) or 24/7, and (3) Custom watchlist - Select specific indices (Nifty, BankNifty, FinNifty, MidcapNifty) and stocks from our top 15 list. Changes take effect immediately.",
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Everything you need to know about RxSynapse
        </Typography>

        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                boxShadow: 2,
                "&:before": { display: "none" },
                bgcolor: "background.paper",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  "& .MuiAccordionSummary-content": {
                    my: 1.5,
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight="600">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Additional Help */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="body2" color="text.secondary">
            Still have questions?{" "}
            <Typography
              component="span"
              variant="body2"
              color="primary.main"
              fontWeight="600"
            >
              Start the bot and type /help
            </Typography>{" "}
            for personalized support
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
