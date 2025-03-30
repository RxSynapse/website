import { AutoAwesome, SmartToy, CheckCircle } from "@mui/icons-material";
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
      title: "No-Code Algorithmic Trading",
      description:
        "Execute complex trading strategies using simple English prompts - no programming required",
      icon: <AutoAwesome fontSize="large" color="primary" />,
      features: [
        "Natural language strategy creation",
        "Plain English command interface",
        "No financial coding knowledge needed",
        "Democratizes algo trading for all investors",
      ],
    },
    {
      title: "Seamless Broker Integration",
      description:
        "Connect your existing trading accounts without opening new ones",
      icon: <AccountTree fontSize="large" color="primary" />,
      features: [
        "Works with Samco and AngelOne (more coming soon)",
        "Multi-account management via Workspaces",
        "No fund transfers required",
        "Real-time order execution",
      ],
    },
    {
      title: "Intelligent Trading Modes",
      description: "Advanced logic for adaptive market strategies",
      icon: <SmartToy fontSize="large" color="primary" />,
      features: [
        "Switch Mode for dynamic buy/sell toggling",
        "One-Off Mode for single execution triggers",
        "Conditional order chaining",
        "Real-time strategy adaptation",
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
          Trading Innovation for Everyone
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          paragraph
          sx={{ mb: 6 }}
        >
          RxMarket brings institutional-grade algorithmic trading to individual
          investors
        </Typography>

        <Grid container spacing={4}>
          {innovations.map((innovation, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ display: "flex" }}>
              <motion.div whileHover={{ y: -5 }}>
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
                          <Typography variant="body2">{feature}</Typography>
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
