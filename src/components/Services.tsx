import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import {
  BusinessCenter,
  CloudSync,
  Assessment,
  Security,
  Insights,
  AutoAwesome,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const services = [
  {
    title: "Automation & Process Optimization",
    description:
      "Accelerate workflows, reduce costs, and enhance efficiency with AI-driven automation.",
    icon: <AutoAwesome fontSize="large" color="primary" />,
  },
  {
    title: "Seamless System Integration",
    description:
      "Unify financial systems with AI-driven middleware for improved interoperability.",
    icon: <CloudSync fontSize="large" color="primary" />,
  },
  {
    title: "Data Migration & Digital Transformation",
    description:
      "Migrate legacy financial systems to modern, cloud-native architectures.",
    icon: <BusinessCenter fontSize="large" color="primary" />,
  },
  {
    title: "Strategic Analysis & Risk Assessment",
    description:
      "Leverage AI-powered insights for risk mitigation and strategic decision-making.",
    icon: <Assessment fontSize="large" color="primary" />,
  },
  {
    title: "Regulatory & Compliance Reporting",
    description:
      "Ensure adherence to industry regulations with automated compliance reporting.",
    icon: <Security fontSize="large" color="primary" />,
  },
  {
    title: "AI-Driven Financial Insights",
    description:
      "Gain predictive insights with advanced AI models tailored for BFSI.",
    icon: <Insights fontSize="large" color="primary" />,
  },
];

const Services: React.FC = () => {
  return (
    <>
      <Container component="section" maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Transforming with Innovation and Automation.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 2,
                    transition: "0.3s",
                  }}
                >
                  <Box sx={{ my: 2 }}>
                    <motion.div
                      whileHover={{ scale: 1.2, color: "#1976d2" }}
                      transition={{ type: "tween", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    {" "}
                    {/* Ensures uniform height */}
                    <Typography variant="h6" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {service.description}
                    </Typography>
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

export default Services;
