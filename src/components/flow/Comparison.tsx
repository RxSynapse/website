import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { CheckCircle, Cancel, Remove } from "@mui/icons-material";
import { motion } from "framer-motion";

interface ComparisonFeature {
  feature: string;
  rxflow: { value: string | boolean; highlight?: boolean };
  bloomberg: { value: string | boolean };
  unusualWhales: { value: string | boolean };
}

const Comparison: React.FC = () => {
  const features: ComparisonFeature[] = [
    {
      feature: "Monthly Price",
      rxflow: { value: "₹410/mo or ₹41/day", highlight: true },
      bloomberg: { value: "₹9,999+/mo" },
      unusualWhales: { value: "₹8,250/mo" },
    },
    {
      feature: "Free Tier",
      rxflow: { value: true, highlight: true },
      bloomberg: { value: false },
      unusualWhales: { value: false },
    },
    {
      feature: "Alert Delivery",
      rxflow: { value: "Telegram (instant)", highlight: true },
      bloomberg: { value: "Terminal app" },
      unusualWhales: { value: "Web dashboard" },
    },
    {
      feature: "Indian Markets",
      rxflow: { value: true, highlight: true },
      bloomberg: { value: true },
      unusualWhales: { value: false },
    },
    {
      feature: "Real-time Data",
      rxflow: { value: true, highlight: true },
      bloomberg: { value: true },
      unusualWhales: { value: "Delayed 15min" },
    },
    {
      feature: "Setup Time",
      rxflow: { value: "< 2 minutes", highlight: true },
      bloomberg: { value: "Days + training" },
      unusualWhales: { value: "15 minutes" },
    },
    {
      feature: "Options Strikes Monitored",
      rxflow: { value: "528+ (4 indices + 15 stocks)", highlight: true },
      bloomberg: { value: "Global coverage" },
      unusualWhales: { value: "US markets only" },
    },
    {
      feature: "Mobile Access",
      rxflow: { value: true, highlight: true },
      bloomberg: { value: true },
      unusualWhales: { value: true },
    },
  ];

  const renderValue = (value: string | boolean, highlight?: boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircle sx={{ color: highlight ? "#4caf50" : "text.secondary" }} />
      ) : (
        <Cancel sx={{ color: "error.main", opacity: 0.7 }} />
      );
    }

    // Check if value starts with "No" or contains negative indicators
    const isNegative = value.toLowerCase().startsWith("no") ||
                      value.toLowerCase().includes("delayed") ||
                      value.startsWith("$");

    return (
      <Typography
        variant="body2"
        sx={{
          fontWeight: highlight ? 600 : 400,
          color: highlight ? "primary.main" : isNegative ? "text.secondary" : "text.primary",
        }}
      >
        {value}
      </Typography>
    );
  };

  return (
    <Box sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          How RxFlow Compares
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Institutional-grade intelligence without the institutional price tag
        </Typography>

        {/* Header Row */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={3}>
            <Typography variant="h6" fontWeight="600" color="text.secondary">
              Feature
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ textAlign: "center" }}>
              <Chip
                label="RxFlow"
                color="primary"
                sx={{ fontWeight: 600, mb: 1 }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="subtitle2" fontWeight="600">
                Bloomberg Terminal
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="subtitle2" fontWeight="600">
                Unusual Whales
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Feature Rows */}
        {features.map((row, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <Card
              sx={{
                mb: 1.5,
                bgcolor: row.rxflow.highlight ? "rgba(25, 118, 210, 0.05)" : "background.default",
                borderLeft: row.rxflow.highlight ? "4px solid" : "none",
                borderColor: "primary.main",
              }}
            >
              <CardContent sx={{ py: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3}>
                    <Typography variant="body2" fontWeight="600">
                      {row.feature}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      {renderValue(row.rxflow.value, row.rxflow.highlight)}
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      {renderValue(row.bloomberg.value)}
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      {renderValue(row.unusualWhales.value)}
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Footer CTA */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="body1" color="primary.main" fontWeight="600" gutterBottom>
            Get started with RxFlow's generous free tier today
          </Typography>
          <Typography variant="body2" color="text.secondary">
            No credit card required • EXTREME alerts always unlimited • Upgrade anytime
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Comparison;
