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
      title: "Live Options Flow Scanner",
      description: "Detect unusual options activity the moment it happens",
      icon: <AutoAwesome fontSize="medium" color="primary" />,
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
      title: "Actionable Composite Scoring",
      description: "0-100 intelligence score for every alert",
      icon: <Assessment fontSize="medium" color="primary" />,
      details:
        "Institutional-grade scoring algorithm combines 10+ parameters including volume, OI direction, order aggression, premium value, moneyness, time-of-day patterns, and historical context. Higher scores = higher conviction institutional moves.",
    },
    {
      title: "Institutional Strategy Detection",
      description: "Identify sweeps, spreads, and multi-strike positioning",
      icon: <TrendingUp fontSize="medium" color="primary" />,
      details: "Advanced clustering algorithms automatically detect when institutions build complex positions across multiple strikes simultaneously. Catch iron condors, straddles, strangles, and directional spreads as they're being constructed.",
    },
    {
      title: "Smart Multi-Condition Alerts",
      description: "Build complex triggers combining any parameters",
      icon: <Notifications fontSize="medium" color="primary" />,
      details: "Create sophisticated alerts like 'Nifty breaks 22,500 AND call OI increases >20% AND FII bought yesterday AND volume >2x' with delivery via Telegram, email, SMS, or app push notifications. Pre-market and post-market digests included.",
    },
    {
      title: "Unified Intelligence Dashboard",
      description: "All market intelligence in one powerful view",
      icon: <Dashboard fontSize="medium" color="primary" />,
      details: "Single dashboard showing unusual options activity, FII/DII flows, bulk deals, insider trades, max pain calculations, put/call ratios, and participant-wise OI. Stop checking 5 different platforms - see everything that matters in real-time.",
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
