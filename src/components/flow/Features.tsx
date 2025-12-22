import {
  AutoAwesome,
  Dashboard,
  ExpandMore,
  Notifications,
  History,
  TrendingUp,
  Assessment,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React from "react";

const Features: React.FC = () => {
  const features = [
    {
      title: "Instant Telegram Alerts",
      description: "Get real-time alerts directly in Telegram",
      icon: <Notifications fontSize="medium" color="primary" />,
      details:
        "Receive unusual options activity alerts instantly on Telegram. No app downloads needed - just start the bot and customize your preferences. Choose severity levels, trading hours filters, and watchlist. Works on all devices - mobile, desktop, and web.",
    },
    {
      title: "Generous Free Tier",
      description: "Start tracking smart money for free",
      icon: <AutoAwesome fontSize="medium" color="primary" />,
      details:
        "FREE tier includes: Unlimited EXTREME severity alerts (always free!), 25 HIGH alerts/day, 25 MEDIUM alerts/day, 50 LOW alerts/day. All features included - no credit card required. Perfect for retail traders who want institutional intelligence without the institutional price tag.",
    },
    {
      title: "Live Options Flow Scanner",
      description: "Detect unusual options activity the moment it happens",
      icon: <Dashboard fontSize="medium" color="primary" />,
      details:
        "Real-time monitoring of volume spikes (3x-20x thresholds), open interest changes, aggressive buy/sell detection, and premium value movements across Nifty, BankNifty, FinNifty, and top 50 Indian stocks. Get instant alerts when institutions make large moves.",
    },
    {
      title: "Historical Baseline Analysis",
      description: "Smart context with 7-day comparative data",
      icon: <History fontSize="medium" color="primary" />,
      details:
        "Every alert is contextualized against 7-day historical averages. Filter out false signals and focus on truly unusual patterns that indicate institutional positioning. Know when activity is genuinely abnormal vs regular market noise.",
    },
    {
      title: "Smart Quota Management",
      description: "Never miss critical alerts with intelligent quotas",
      icon: <TrendingUp fontSize="medium" color="primary" />,
      details: "EXTREME severity alerts are always unlimited and free - we never paywall critical market information. Lower severity alerts have daily quotas with automatic depletion warnings. Quotas reset daily at 9:15 AM IST. Upgrade anytime for unlimited access to all alert levels.",
    },
    {
      title: "Affordable Premium Plans",
      description: "Unlock unlimited alerts with Telegram Stars",
      icon: <Assessment fontSize="medium" color="primary" />,
      details: "Premium plans via Telegram Stars: 1 Day (20★ ≈ ₹41), 7 Days (100★ ≈ ₹205), 1 Month (200★ ≈ ₹410), 3 Months (533★ ≈ ₹1,093), 1 Year (1,600★ ≈ ₹3,280). Get unlimited alerts across all severity levels, priority delivery, and support our development. Pay securely directly in Telegram - no external payment processors.",
    },
  ];

  return (
    <>
      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Powerful Features
          </Typography>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Accordion sx={{ boxShadow: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ mr: 2 }}>{feature.icon}</Box>
                      <Box>
                        <Typography variant="subtitle1">
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">{feature.details}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Features;
