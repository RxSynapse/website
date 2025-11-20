import { AutoAwesome, SmartToy, CheckCircle, Timeline } from "@mui/icons-material";
import AccountTree from "@mui/icons-material/AccountTree";
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
      title: "Unified Smart Money Intelligence",
      description:
        "Stop checking multiple sources - track FII/DII flows, bulk deals, insider trades, and participant-wise OI data all in one powerful dashboard",
      icon: <AccountTree fontSize="large" color="primary" />,
      features: [
        "Real-time institutional money flow tracking with provisional updates",
        "Automated bulk & block deal alerts from NSE/BSE publications",
        "Insider trading activity with unusual pattern flagging",
        "Historical correlation: 'When FII bought X, market moved Y'",
      ],
    },
    {
      title: "Intelligent Multi-Condition Alert System",
      description: "Never miss a trading opportunity - get instant notifications via Telegram, email, or push when your custom multi-parameter conditions trigger",
      icon: <SmartToy fontSize="large" color="primary" />,
      features: [
        "Build complex alerts: 'Price breakout + Volume spike + FII buying'",
        "Pre-market scanners with automated gap-up/gap-down reports",
        "Post-market summaries highlighting unusual activity and opportunities",
        "Cross-asset alerts: 'US markets down + India VIX rising'",
      ],
    },
    {
      title: "Institutional-Grade Detection Algorithms",
      description: "Sophisticated pattern recognition powered by machine learning - identify market maker activities, sweeps, spreads, and position building before the crowd",
      icon: <Timeline fontSize="large" color="primary" />,
      features: [
        "OI directional analysis: Long build-up vs short covering detection",
        "Time-aware pattern recognition for opening, lunch, and closing sessions",
        "Composite scoring (0-100) combining 10+ parameters for actionability",
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
          Options Intelligence for Everyone
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          paragraph
          sx={{ mb: 6 }}
        >
          RxFlow brings institutional-grade options intelligence to individual
          traders - see what smart money is doing before it's too late
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
