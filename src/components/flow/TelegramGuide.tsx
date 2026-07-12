'use client';

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";
import {
  Telegram,
  PlayArrow,
  Settings,
  Notifications,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const TelegramGuide: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Start the Bot",
      description: "Open Telegram and search for @rxflow_alerts_bot, then click /start",
      icon: <Telegram fontSize="large" color="primary" />,
    },
    {
      number: "2",
      title: "Activate Free Account",
      description: "Type /subscribe to activate your free account with generous daily quotas",
      icon: <PlayArrow fontSize="large" color="primary" />,
    },
    {
      number: "3",
      title: "Customize Settings",
      description: "Use /settings to choose alert severity, trading hours, and your watchlist",
      icon: <Settings fontSize="large" color="primary" />,
    },
    {
      number: "4",
      title: "Receive Real-Time Alerts",
      description: "Get instant unusual options activity alerts directly in Telegram!",
      icon: <Notifications fontSize="large" color="primary" />,
    },
  ];

  const quotas = [
    { severity: "EXTREME", quota: "∞ Unlimited", color: "#f44336", description: "Top 1% activity - Always FREE!" },
    { severity: "HIGH", quota: "25/day", color: "#ff9800", description: "Top 5% activity" },
    { severity: "MEDIUM", quota: "25/day", color: "#ffc107", description: "Top 10% activity" },
    { severity: "LOW", quota: "50/day", color: "#2196f3", description: "All unusual activity" },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, mb: 2 }}
        >
          Get Started in Minutes - It's Free!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          paragraph
          sx={{ mb: 6 }}
        >
          No app downloads, no credit cards, no signup forms. Just open Telegram and start receiving alerts.
        </Typography>

        {/* Steps Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ width: "100%", display: "flex" }}
              >
                <Card
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      transition: "all 0.3s",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent sx={{ py: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ mb: 2 }}>{step.icon}</Box>
                    <Typography variant="h6" gutterBottom fontWeight="600">
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Free Tier Quotas */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h5" gutterBottom fontWeight="600">
            Free Tier Daily Quotas
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Start with generous daily limits across all severity levels
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {quotas.map((quota, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  bgcolor: "background.paper",
                  borderTop: `4px solid ${quota.color}`,
                }}
              >
                <CardContent>
                  <Chip
                    label={quota.severity}
                    sx={{
                      bgcolor: quota.color,
                      color: "white",
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  />
                  <Typography variant="h4" fontWeight="700" gutterBottom>
                    {quota.quota}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {quota.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Button */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            href="https://flow.rxsynapse.com"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Telegram />}
            sx={{
              px: 6,
              py: 2,
              fontSize: "1.1rem",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "all 0.2s",
              },
            }}
          >
            Start Receiving Alerts Now
          </Button>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Quotas reset daily at 9:15 AM IST • Upgrade anytime for unlimited alerts
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TelegramGuide;
