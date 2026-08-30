'use client';

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
      description: "Tick data processed in milliseconds, alerts within 2 seconds",
      icon: <Speed fontSize="large" color="primary" />
    },
    {
      name: "Deep Market Analysis",
      description: "Deep market data for institutional-grade insights",
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
              RxSynapse is built on cutting-edge technology infrastructure designed for institutional-grade performance and reliability. Our platform processes millions of data points in real-time to deliver actionable intelligence.
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
            {/* Terminal-style live pipeline panel; figures match claims made elsewhere on the page */}
            <Box
              sx={{
                bgcolor: "#0d1520",
                border: "1px solid rgba(59, 130, 246, 0.25)",
                borderRadius: 3,
                boxShadow: 3,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2.5,
                  py: 1.5,
                  bgcolor: "rgba(59, 130, 246, 0.08)",
                  borderBottom: "1px solid rgba(59, 130, 246, 0.15)",
                }}
              >
                <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#10B981" }} />
                <Typography variant="body2" sx={{ fontWeight: 600, color: "#fff" }}>
                  Market Data Pipeline
                </Typography>
                <Typography variant="caption" sx={{ ml: "auto", color: "rgba(255,255,255,0.5)" }}>
                  market hours · live
                </Typography>
              </Box>
              <Box sx={{ p: 2.5, fontFamily: "'Courier New', monospace", fontSize: { xs: "0.75rem", sm: "0.85rem" }, color: "rgba(255,255,255,0.85)" }}>
                {[
                  ["Tick feed (NSE/BSE)", "connected"],
                  ["Option strikes monitored", "528+"],
                  ["Indices covered", "4 + 15 stocks"],
                  ["Detection latency", "< 2 sec"],
                  ["Baseline window", "7-day rolling"],
                  ["Smart money sources", "FII/DII · bulk · block"],
                ].map(([label, value]) => (
                  <Box key={label} sx={{ display: "flex", justifyContent: "space-between", gap: 2, py: 1, borderBottom: "1px dashed rgba(255,255,255,0.08)", "&:last-child": { borderBottom: "none" } }}>
                    <Box component="span" sx={{ color: "rgba(255,255,255,0.55)" }}>{label}</Box>
                    <Box component="span" sx={{ color: "#3B82F6", textAlign: "right" }}>{value}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Integration;
