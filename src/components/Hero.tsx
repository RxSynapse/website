import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        bgcolor: "#000",
        color: "#fff",
        px: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Helmet>
        <title>RxSynapse | Transforming BFSI with AI-Powered Innovation</title>
        <meta
          name="description"
          content="RxSynapse specializes in AI-driven solutions for BFSI, including automation, integration, migration, strategic analysis, and reporting."
        />
        <meta
          name="keywords"
          content="AI BFSI, automation, fintech, strategic analysis, reporting"
        />
      </Helmet>
      {/* Background Video */}
      <motion.video
        src="/hero/background.mp4"
        onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 0.75)}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
      />

      {/* Title */}
      <Typography
        component="h1"
        variant="h3"
        fontWeight="bold"
        sx={{ mt: 3, maxWidth: "600px" }}
        zIndex={1}
      >
        Transforming BFSI with AI-Powered Innovation
      </Typography>

      {/* Subtitle */}
      <Typography
        component="h2"
        variant="h6"
        sx={{ mt: 2, maxWidth: "600px", opacity: 0.8 }}
      >
        Expertise in Automation, Integration, Migration, Strategic Analysis, and
        Reporting
      </Typography>

      {/* CTA Button */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
          bgcolor: "#007BFF",
          color: "#fff",
          fontSize: "1.2rem",
          px: 4,
          py: 1.5,
          borderRadius: "8px",
          "&:hover": { bgcolor: "#0056b3" },
        }}
      >
        Get Started Today
      </Button>
    </Box>
  );
};

export default Hero;
