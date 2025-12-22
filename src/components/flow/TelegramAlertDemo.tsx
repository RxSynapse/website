'use client';

import React from "react";
import { Box, Container, Typography, Card, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { Telegram, TrendingUp, ShowChart, Speed } from "@mui/icons-material";

const TelegramAlertDemo: React.FC = () => {
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
          See What Alerts Look Like
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Real-time institutional activity delivered instantly to Telegram
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {/* Telegram Message Mockup */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  bgcolor: "#0088cc",
                  color: "white",
                  p: 3,
                  borderRadius: 3,
                  boxShadow: 4,
                  position: "relative",
                }}
              >
                {/* Bot Header */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      bgcolor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <Telegram sx={{ color: "#0088cc", fontSize: 28 }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      RxFlow Bot
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>
                      Just now
                    </Typography>
                  </Box>
                </Box>

                {/* Alert Content */}
                <Box
                  sx={{
                    bgcolor: "rgba(255,255,255,0.15)",
                    p: 2,
                    borderRadius: 2,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Chip
                    label="🔥 EXTREME"
                    size="small"
                    sx={{
                      bgcolor: "#f44336",
                      color: "white",
                      fontWeight: "bold",
                      mb: 1.5,
                    }}
                  />
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                    NIFTY 24500 CE
                  </Typography>
                  <Box sx={{ mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
                      📊 Volume: <strong>8.5x avg</strong> (23,450 contracts)
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
                      📈 OI Change: <strong>+2,100</strong> (Long buildup)
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
                      🎯 Aggression: <strong>94% BUY-side</strong>
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
                      💰 Premium: <strong>₹12.50</strong> (+18% in 5min)
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      borderTop: "1px solid rgba(255,255,255,0.3)",
                      pt: 1,
                      mt: 1,
                    }}
                  >
                    <Typography variant="body2" fontWeight="bold">
                      Intelligence Score: 96/100
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* Explanation */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom fontWeight="600">
              Institutional Activity, Decoded
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Every alert includes rich context to help you understand what's happening in the market:
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <TrendingUp sx={{ mr: 2, color: "primary.main", mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight="600">
                    Volume Spike Detection
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    8.5x above 7-day average indicates unusual institutional interest
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <ShowChart sx={{ mr: 2, color: "primary.main", mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight="600">
                    Open Interest Analysis
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +2,100 OI with long buildup suggests bullish positioning
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Speed sx={{ mr: 2, color: "primary.main", mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight="600">
                    Aggression Score
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    94% buy-side aggression reveals smart money is actively accumulating
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Typography variant="body2" color="primary.main" fontWeight="600">
              EXTREME alerts like this are always free, unlimited forever!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TelegramAlertDemo;
