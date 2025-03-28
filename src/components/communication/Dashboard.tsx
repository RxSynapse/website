import {
  SentimentSatisfied,
  Assessment,
  Timeline,
  Security,
  Insights,
} from "@mui/icons-material";
import Dashboard from "@mui/icons-material/Dashboard";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

export default () => {
  const dashboardFeatures = [
    {
      title: "Real-time Monitoring",
      description: "Live view of all customer interactions and system health",
      icon: <Dashboard fontSize="medium" color="primary" />,
    },
    {
      title: "Sentiment Tracking",
      description: "Visualization of customer sentiment across all channels",
      icon: <SentimentSatisfied fontSize="medium" color="primary" />,
    },
    {
      title: "Performance Analytics",
      description: "Agent and system performance metrics with benchmarks",
      icon: <Assessment fontSize="medium" color="primary" />,
    },
    {
      title: "Trend Analysis",
      description: "Historical data visualization for strategic planning",
      icon: <Timeline fontSize="medium" color="primary" />,
    },
    {
      title: "Automated Reporting",
      description: "Regulatory and compliance reports generated automatically",
      icon: <Security fontSize="medium" color="primary" />,
    },
    {
      title: "Predictive Insights",
      description: "AI-driven forecasts for customer needs and market trends",
      icon: <Insights fontSize="medium" color="primary" />,
    },
  ];

  return (
    <>
      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Intelligent Conversation Analytics
              </Typography>
              <Typography variant="body1" paragraph>
                Our real-time monitoring dashboard provides unprecedented
                visibility into customer interactions across all channels. Track
                sentiment, compliance, agent performance, and emerging trends
                with our AI-powered analytics platform.
              </Typography>
              <Typography variant="body1" paragraph>
                The system automatically detects issues, recommends actions, and
                surfaces insights that would be impossible to find manually.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                sx={{ mt: 2 }}
                onClick={() => {
                  const section: HTMLElement | null = document.getElementById(
                    "analytics-dashboard-demo"
                  );
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                Explore Dashboard Features
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "background.default",
                  borderRadius: 2,
                  boxShadow: 2,
                  height: "100%", // Ensure container takes full height
                }}
              >
                <Grid container spacing={2} sx={{ height: "100%" }}>
                  {dashboardFeatures.map((feature, index) => (
                    <Grid item xs={6} key={index} sx={{ display: "flex" }}>
                      {" "}
                      {/* Add flex display */}
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        style={{ width: "100%", height: "100%" }} // Full width/height
                      >
                        <Card
                          sx={{
                            height: "100%", // Card takes full height
                            p: 2,
                            textAlign: "center",
                            display: "flex", // Flex layout
                            flexDirection: "column", // Column direction
                          }}
                        >
                          <CardContent sx={{ flexGrow: 1 }}>
                            {" "}
                            {/* Content grows to fill space */}
                            {feature.icon}
                            <Typography
                              variant="subtitle1"
                              sx={{ mt: 1, mb: 0.5 }}
                            >
                              {feature.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              sx={{ flexGrow: 1 }} // Description pushes content down
                            >
                              {feature.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
