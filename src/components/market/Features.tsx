import {
  AutoAwesome,
  Dashboard,
  ExpandMore,
  MonetizationOn,
  Notifications,
  Schedule,
  History,
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
      title: "Prompt-Based Strategy Builder",
      description: "Create strategies using simple English commands",
      icon: <AutoAwesome fontSize="medium" color="primary" />,
      details:
        "Example: 'Buy 100 shares of XYZ when price crosses 50-day moving average'",
    },
    {
      title: "Comprehensive Backtesting",
      description: "Test strategies against historical data",
      icon: <History fontSize="medium" color="primary" />,
      details:
        "Get detailed P&L reports, success rates, and commission impact analysis",
    },
    {
      title: "Live Paper Trading",
      description: "Test strategies with real market data without risk",
      icon: <MonetizationOn fontSize="medium" color="primary" />,
      details: "Virtual execution with BlackBox Wallet credits",
    },
    {
      title: "Automated Scheduling",
      description: "Set it and forget it trading",
      icon: <Schedule fontSize="medium" color="primary" />,
      details: "Continuous execution until your specified end date",
    },
    {
      title: "Real-time Notifications",
      description: "Stay informed on all trading activity",
      icon: <Notifications fontSize="medium" color="primary" />,
      details: "Instant alerts on order triggers and strategy performance",
    },
    {
      title: "Performance Dashboard",
      description: "At-a-glance strategy analytics",
      icon: <Dashboard fontSize="medium" color="primary" />,
      details: "Interactive P&L charts, trigger history, and order details",
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
