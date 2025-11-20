import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import React from "react";
import { TrendingUp, Speed, Security, CloudQueue } from "@mui/icons-material";

const Integration: React.FC = () => {
  const capabilities = [
    {
      name: "Lightning-Fast Processing",
      description: "Real-time data analysis with millisecond latency",
      icon: <Speed fontSize="large" color="primary" />
    },
    {
      name: "Deep Market Analysis",
      description: "20-level order book depth for institutional insights",
      icon: <TrendingUp fontSize="large" color="primary" />
    },
    {
      name: "Enterprise Security",
      description: "Bank-grade encryption and data protection",
      icon: <Security fontSize="large" color="primary" />
    },
    {
      name: "Scalable Infrastructure",
      description: "Monitor thousands of instruments simultaneously",
      icon: <CloudQueue fontSize="large" color="primary" />
    },
  ];

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Enterprise-Grade Infrastructure
            </Typography>
            <Typography variant="body1" paragraph>
              RxFlow is built on cutting-edge technology infrastructure designed for institutional-grade performance and reliability. Our platform processes millions of data points in real-time to deliver actionable intelligence.
            </Typography>
            <Typography variant="body1" paragraph>
              Track unusual options activity across Nifty, BankNifty, FinNifty, and top Indian stocks with sophisticated algorithms that detect patterns institutional traders watch for.
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              {capabilities.map((capability, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card variant="outlined" sx={{ height: "100%", p: 2 }}>
                    <CardContent sx={{ textAlign: "center" }}>
                      <Box sx={{ mb: 1 }}>{capability.icon}</Box>
                      <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                        {capability.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {capability.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/market/integration/engine.png"
              alt="Real-time Options Intelligence Architecture"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
                maxHeight: 400,
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Integration;
