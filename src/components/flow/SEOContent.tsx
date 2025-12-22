import React from "react";
import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { TrendingUp, ShowChart, Assessment, Speed } from "@mui/icons-material";

/**
 * SEO-optimized content section targeting informational search queries
 * Helps rank for: "what is unusual options activity", "how to track smart money", etc.
 */
const SEOContent: React.FC = () => {
  const contentSections = [
    {
      title: "What is Unusual Options Activity?",
      icon: <TrendingUp fontSize="large" color="primary" />,
      content:
        "Unusual options activity refers to trading volumes or open interest changes that significantly exceed historical averages. When institutions or smart money take large positions, it creates detectable patterns in options flow. RxFlow's algorithms monitor 528+ strikes across Nifty, BankNifty, FinNifty, MidcapNifty and top 15 Indian stocks to detect volume spikes ranging from 3x to 20x above average. These patterns often precede major price movements, making them valuable leading indicators for retail traders.",
    },
    {
      title: "How to Track Smart Money in Indian Markets?",
      icon: <ShowChart fontSize="large" color="primary" />,
      content:
        "Smart money tracking involves monitoring institutional flows (FII/DII data), bulk deals, block deals, insider trading disclosures, and unusual options activity. Traditional methods require manually checking NSE/BSE websites, Excel analysis, and multiple data sources - taking 2-3 hours daily. RxFlow automates this entire process, aggregating FII/DII flows, participant-wise OI, bulk deals from NSE/BSE, and unusual options activity into instant Telegram alerts. Track institutional positioning in real-time without manual effort.",
    },
    {
      title: "Why Use Telegram for Options Trading Alerts?",
      icon: <Speed fontSize="large" color="primary" />,
      content:
        "Telegram offers several advantages for trading alerts: (1) Cross-platform sync - alerts appear instantly on mobile, desktop, and web, (2) No app downloads required - works natively in Telegram, (3) Fast delivery with <2 second latency, (4) Customizable notifications per severity level, (5) Works even when your trading platform is down, (6) Secure Telegram Stars payment - no external processors. Unlike web dashboards that require constant monitoring, Telegram alerts come to you automatically, ensuring you never miss critical market moves.",
    },
    {
      title: "RxFlow vs Bloomberg Terminal for Indian Options",
      icon: <Assessment fontSize="large" color="primary" />,
      content:
        "Bloomberg Terminal costs ₹20 lakh+ per month ($25,000+) with complex setup requiring days of training. RxFlow starts at ₹410/month (or free tier) with 2-minute Telegram setup. While Bloomberg offers global coverage, RxFlow specializes in Indian markets (NSE/BSE) with focus on Nifty derivatives, stock F&O, and Indian equities. For retail traders and institutions focused on Indian markets, RxFlow provides institutional-grade intelligence at 0.002% of Bloomberg's cost. No terminals, no training, no complexity.",
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, mb: 2 }}
        >
          Understanding Options Intelligence & Smart Money Tracking
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Learn how professional traders use options flow data to make better trading decisions
        </Typography>

        <Grid container spacing={4}>
          {contentSections.map((section, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: "100%", boxShadow: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box sx={{ mr: 2 }}>{section.icon}</Box>
                    <Typography variant="h6" component="h3" fontWeight="600">
                      {section.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {section.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional SEO text block */}
        <Box sx={{ mt: 6, textAlign: "center", maxWidth: 900, mx: "auto" }}>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            <strong>Options trading in India</strong> has grown exponentially with Nifty, BankNifty, FinNifty, and MidcapNifty
            derivatives becoming key instruments for retail and institutional traders. <strong>Real-time options data</strong>,
            combined with <strong>institutional flow tracking</strong>, provides edge in timing entries and exits. RxFlow brings
            Wall Street-grade <strong>options intelligence</strong> to Indian markets, making it accessible to retail traders through
            free Telegram alerts. Whether you're tracking <strong>Nifty options weekly expiry</strong>,
            <strong>BankNifty monthly options</strong>, or stock F&O activity, RxFlow's <strong>unusual options activity scanner</strong>
            helps you identify opportunities before they become obvious.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SEOContent;
