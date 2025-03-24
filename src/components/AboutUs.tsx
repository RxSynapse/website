import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import AccountTreeIcon from "@mui/icons-material/AccountTree"; // Integration
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh"; // AI-Powered
import ShowChartIcon from "@mui/icons-material/ShowChart"; // Data Insights
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"; // Customer Experience
import LanIcon from "@mui/icons-material/Lan"; // Scalability

const stats = [
  { value: "10+", label: "Fine-Tuned AI Workflows" },
  { value: "100K+", label: "Automated Transactions" },
  { value: "5M+", label: "Processed Data Points" },
];

const advantages = [
  {
    title: "AI-Powered Efficiency",
    desc: "Leverage machine learning to drive intelligent financial operations.",
    icon: <AutoFixHighIcon fontSize="large" color="primary" />,
  },
  {
    title: "Data-Driven Insights",
    desc: "Make strategic decisions with predictive analytics and risk modeling.",
    icon: <ShowChartIcon fontSize="large" color="primary" />,
  },
  {
    title: "End-to-End Solutions",
    desc: "Optimize everything from core banking to wealth management.",
    icon: <AccountTreeIcon fontSize="large" color="primary" />,
  },
  {
    title: "Seamless Customer Experience",
    desc: "Enhance interactions with AI-driven personalization and automation.",
    icon: <PeopleAltIcon fontSize="large" color="primary" />,
  },
  {
    title: "Scalable & Secure Architecture",
    desc: "Deploy future-proof technology meeting BFSI security standards.",
    icon: <LanIcon fontSize="large" color="primary" />,
  },
];

const AboutUs: React.FC = () => {
  return (
    <Box
      component="section"
      id="about-us"
      sx={{
        py: { xs: 6, md: 10 },
        px: 3,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image  */}
      <motion.img
        src="/about-us/background-placeholder.webp"
        alt="Background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.0625 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Section Heading */}
      <Typography
        component="h2"
        variant="h4"
        fontWeight="bold"
        gutterBottom
        color="primary"
      >
        Who Are We?
      </Typography>

      {/* Short Company Story */}
      <Typography
        component="p"
        variant="h6"
        sx={{ maxWidth: "800px", mx: "auto", opacity: 0.9 }}
      >
        At <strong>RxSynapse</strong>, we are pioneers in AI-driven
        transformation within the Banking, Financial Services, and Insurance
        (BFSI) sector. Our expertise lies in intelligent automation, seamless
        system integration, data migration, strategic risk assessment, and
        compliance reporting. <br /> <br /> The BFSI industry has long been
        burdened by legacy systems, siloed data, inefficient processes, and
        regulatory complexities. Traditional financial institutions struggle to
        keep pace with fintech innovation, real-time analytics, and AI-powered
        decision-making. Recognizing this gap, a team of seasoned AI engineers,
        financial analysts, subject matter experts and technology leaders came
        together to build RxSynapse.
      </Typography>

      {/* Key Stats Section */}
      <Grid container spacing={3} sx={{ mt: 4, justifyContent: "center" }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card
                sx={{
                  boxShadow: 3,
                  textAlign: "center",
                  py: 3,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="secondary"
                    gutterBottom
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body1">{stat.label}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Our Unique Advantage */}
      <Typography
        component="h3"
        variant="h5"
        fontWeight="bold"
        sx={{ mt: 6, mb: 2 }}
        color="primary"
      >
        Why Choose RxSynapse?
      </Typography>

      <Grid container sx={{ maxWidth: "1000px", mx: "auto" }}>
        {advantages.map((advantage, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={idx < 3 ? 4 : 6} // First 3 items take md={4}, last 2 take md={6}
            key={idx}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{ boxShadow: 2, py: 3, px: 3, textAlign: "center", flex: 1 }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {advantage.icon}
                <Typography variant="h6" fontWeight="bold" mt={1}>
                  {advantage.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
                  {advantage.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUs;
