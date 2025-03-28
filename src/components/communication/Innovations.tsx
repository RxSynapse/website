import { AutoAwesome, Call, SmartToy, CheckCircle } from "@mui/icons-material";
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
      title: "Conversation Intelligence Platform",
      description:
        "Our AI-powered platform analyzes customer interactions in real-time, providing actionable insights to improve service quality and efficiency.",
      icon: <AutoAwesome fontSize="large" color="primary" />,
      features: [
        "Real-time sentiment analysis",
        "Automated call summarization",
        "Speaker identification and diarization",
        "Compliance monitoring",
      ],
    },
    {
      title: "IVR-less Customer Support Flow",
      description:
        "Revolutionary natural language interface that eliminates frustrating IVR menus, connecting customers directly to the right solution.",
      icon: <Call fontSize="large" color="primary" />,
      features: [
        "Voice-first natural language understanding",
        "Context-aware routing",
        "Seamless handoff to live agents when needed",
        "24/7 automated resolution for common queries",
      ],
    },
    {
      title: "Autonomous Customer Success",
      description:
        "AI systems that proactively address customer needs before they escalate to support tickets.",
      icon: <SmartToy fontSize="large" color="primary" />,
      features: [
        "Predictive issue detection",
        "Automated resolution workflows",
        "Personalized financial guidance",
        "Continuous improvement through machine learning",
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
          Our Communication Innovations
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Cutting-edge technologies redefining customer experience in financial
          services
        </Typography>

        <Grid container spacing={4}>
          {innovations.map((innovation, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ display: "flex" }}>
              <motion.div
                whileHover={{ y: -5 }}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 3,
                    height: "100%",
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      textAlign: "center",
                      py: 4,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{innovation.icon}</Box>
                    <Typography variant="h5" gutterBottom>
                      {innovation.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, flexGrow: 1 }}>
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
