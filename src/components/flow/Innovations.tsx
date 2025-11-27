import { AutoAwesome, SmartToy, CheckCircle, Timeline } from "@mui/icons-material";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { motion } from "framer-motion";

const Innovations: React.FC = () => {
  const innovations = [
    {
      title: "Telegram-First Delivery",
      description:
        "Get real-time alerts directly in Telegram - no app downloads, no signups, no hassle. Just start the bot and begin receiving institutional-grade intelligence instantly",
      icon: <SmartToy fontSize="large" color="primary" />,
      features: [
        "Instant delivery: Alerts appear in Telegram within 2 seconds",
        "Works everywhere: Mobile, desktop, and web - Telegram syncs across all devices",
        "Simple commands: /start, /subscribe, /settings, /status to control everything",
        "Customizable: Choose severity levels, trading hours filter, and watchlist",
      ],
    },
    {
      title: "Truly Free Tier",
      description:
        "Unlike other platforms that paywall everything, RxFlow offers generous free daily quotas. EXTREME severity alerts are unlimited forever - we never paywall critical market information",
      icon: <CheckCircle fontSize="large" color="primary" />,
      features: [
        "∞ Unlimited EXTREME alerts (top 1% activity) - always free!",
        "25 HIGH severity alerts/day (top 5% activity)",
        "25 MEDIUM severity alerts/day (top 10% activity)",
        "50 LOW severity alerts/day (all unusual activity)",
      ],
    },
    {
      title: "Real-Time Unusual Options Activity Scanner",
      description:
        "Detect institutional-level options activity the moment it happens - large orders, volume spikes, and aggressive trades across Nifty, BankNifty, FinNifty and top stocks",
      icon: <AutoAwesome fontSize="large" color="primary" />,
      features: [
        "Multi-threshold volume spike detection (3x to 20x above average)",
        "Real-time Open Interest change tracking with directional context",
        "Aggressive order flow analysis (buy-side vs sell-side aggression)",
        "Smart premium value filtering to focus on significant trades",
      ],
    },
    {
      title: "Institutional-Grade Detection Algorithms",
      description: "Sophisticated pattern recognition identifies market maker activities, sweeps, spreads, and position building. Every alert includes a 0-100 intelligence score combining 10+ parameters",
      icon: <Timeline fontSize="large" color="primary" />,
      features: [
        "OI directional analysis: Long build-up vs short covering detection",
        "Time-aware pattern recognition for opening, lunch, and closing sessions",
        "Composite scoring (0-100) combining volume, OI, aggression, and more",
        "Multi-strike clustering to identify institutional spread strategies",
      ],
    },
  ];

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Institutional Intelligence, Retail Pricing
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          paragraph
          sx={{ mb: 6 }}
        >
          RxFlow brings institutional-grade options intelligence to individual traders via Telegram.
          Start free with generous daily quotas - EXTREME alerts always unlimited!
        </Typography>

        <Grid container spacing={4}>
          {innovations.map((innovation, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
              <motion.div whileHover={{ y: -5 }} style={{ width: "100%" }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 3,
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: "center", py: 4 }}>
                    <Box sx={{ mb: 2 }}>{innovation.icon}</Box>
                    <Typography variant="h5" gutterBottom>
                      {innovation.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {innovation.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <List dense>
                      {innovation.features.map((feature, i) => (
                        <ListItem key={i}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircle color="primary" />
                          </ListItemIcon>
                          <Typography variant="body2" align="left">{feature}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Innovations;
