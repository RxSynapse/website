'use client';

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { TrackedCTAButton } from '@/components/TrackedButton';
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

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
      {/* Background Image  */}
      <motion.img
        src="/market/hero/background-placeholder.webp"
        alt="Background"
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 0 : 0.5 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Background Video  */}
      <motion.video
        src="/market/hero/background.mp4"
        onCanPlayThrough={() => setVideoLoaded(true)}
        onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 0.75)}
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 0.5 : 0 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Title */}
      <Typography
        component="h1"
        variant="h3"
        fontWeight="bold"
        sx={{ mt: 3, maxWidth: "800px" }}
        zIndex={1}
      >
        India's First Real-Time
        <br />
        Options Intelligence Platform
      </Typography>

      {/* Subtitle */}
      <Typography
        component="h2"
        variant="h6"
        sx={{ mt: 2, maxWidth: "700px", opacity: 0.8 }}
      >
        Track unusual options activity and institutional flows. Get instant Telegram alerts - start free!
      </Typography>

      {/* CTA Button */}
      <TrackedCTAButton
        trackingName="start_telegram_flow"
        trackingLocation="flow_hero"
        trackingDestination="https://flow.rxsynapse.com"
        trackingParams={{
          pageSection: 'hero',
          priority: 'primary',
          conversionGoal: 'telegram_signup',
        }}
        variant="contained"
        href="https://flow.rxsynapse.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          mt: 4,
          bgcolor: "primary.main",
          color: "#fff",
          fontSize: "1.2rem",
          px: 4,
          py: 1.5,
          borderRadius: "8px",
          "&:hover": {
            bgcolor: "primary.dark",
            transform: "scale(1.05)",
            transition: "all 0.2s"
          }
        }}
      >
        Start Free on Telegram
      </TrackedCTAButton>
    </Box>
  );
};

export default Hero;
