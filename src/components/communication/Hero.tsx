import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
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
        src="/communication/hero/background-placeholder.webp"
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
        src="/communication/hero/background.mp4"
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
        sx={{ mt: 3, maxWidth: "600px" }}
        zIndex={1}
      >
        Revolutionizing
        <br />
        BFSI Communication
      </Typography>

      {/* Subtitle */}
      <Typography
        component="h2"
        variant="h6"
        sx={{ mt: 2, maxWidth: "600px", opacity: 0.8 }}
      >
        AI-powered solutions that transform customer interactions from cost
        centers to strategic assets
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
        onClick={() => {
          const section: HTMLElement | null =
            document.getElementById("analytics-demo");
          if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      >
        View Demo
      </Button>
    </Box>
  );
};

export default Hero;
