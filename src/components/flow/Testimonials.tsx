import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";
import { FormatQuote } from "@mui/icons-material";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Rohan M.",
      role: "Day Trader",
      initials: "RM",
      rating: 5,
      quote:
        "Finally found a platform that tracks smart money in Indian markets. The free EXTREME alerts alone are worth it. Saved me hours of manual NSE checking.",
      color: "#1976d2",
    },
    {
      name: "Priya K.",
      role: "Options Trader",
      initials: "PK",
      rating: 5,
      quote:
        "RxFlow's Telegram alerts are game-changing. I caught institutional positioning in BankNifty options that I would've missed otherwise. The 7-day baseline context helps filter noise.",
      color: "#f44336",
    },
    {
      name: "Arjun S.",
      role: "Retail Trader",
      initials: "AS",
      rating: 5,
      quote:
        "As a retail trader, getting institutional-grade intelligence for free is incredible. The volume spike alerts have improved my entry timing significantly.",
      color: "#ff9800",
    },
    {
      name: "Meera R.",
      role: "Swing Trader",
      initials: "MR",
      rating: 5,
      quote:
        "The Telegram integration is brilliant. No need to check multiple platforms - alerts come straight to my phone. The severity filtering lets me focus on high-impact moves.",
      color: "#4caf50",
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
          What Traders Are Saying
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Early adopters making smarter decisions with real-time institutional intelligence
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    boxShadow: 3,
                    "&:hover": {
                      boxShadow: 6,
                      transition: "all 0.3s",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      p: 3,
                    }}
                  >
                    {/* Quote Icon */}
                    <FormatQuote
                      sx={{
                        fontSize: 40,
                        color: testimonial.color,
                        opacity: 0.3,
                        mb: 1,
                      }}
                    />

                    {/* Rating */}
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      size="small"
                      sx={{ mb: 2 }}
                    />

                    {/* Quote */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, flexGrow: 1, fontStyle: "italic" }}
                    >
                      "{testimonial.quote}"
                    </Typography>

                    {/* Author */}
                    <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
                      <Avatar
                        sx={{
                          bgcolor: testimonial.color,
                          width: 48,
                          height: 48,
                          mr: 2,
                          fontWeight: "bold",
                        }}
                      >
                        {testimonial.initials}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" fontWeight="600">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional Trust Signal */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="body2" color="text.secondary">
            Serving traders across India • Real-time alerts delivered 24/7 • No credit card required for free tier
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
