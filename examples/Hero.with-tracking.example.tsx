/**
 * Example: Home Hero Component with GA4 Tracking
 *
 * This is an example showing how to add tracking to your existing Hero component.
 * Compare this with src/components/home/Hero.tsx to see the changes.
 *
 * Key Changes:
 * 1. Import TrackedCTAButton instead of regular Button
 * 2. Add tracking properties to the button
 * 3. That's it! Automatic tracking is already enabled globally.
 */

'use client';

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { TrackedCTAButton } from '@/components/TrackedButton';
import { motion } from "framer-motion";

interface HeroProps {
  setContactOpen: (state: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setContactOpen }) => {
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
        src="/home/hero/background-placeholder.webp"
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
        src="/home/hero/background.mp4"
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

      {/*
        CTA Button with Tracking

        What gets tracked:
        - Event name: "cta_click"
        - CTA name: "get_started_home"
        - CTA location: "home_hero"
        - CTA destination: "contact_form"
        - CTA text: "Get Started Today"
        - Page URL: "/"
        - Timestamp: ISO format

        You can view this in GA4:
        - Reports > Engagement > Events > "cta_click"
        - Or run: npm run ga:realtime -- --watch
      */}
      <TrackedCTAButton
        // Tracking properties
        trackingName="get_started_home"
        trackingLocation="home_hero"
        trackingDestination="contact_form"
        trackingParams={{
          pageSection: 'hero',
          priority: 'primary',
        }}

        // Regular MUI Button props
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
        onClick={() => setContactOpen(true)}
      >
        Get Started Today
      </TrackedCTAButton>
    </Box>
  );
};

export default Hero;

/**
 * How to Apply This to Your Component:
 *
 * 1. Open src/components/home/Hero.tsx
 *
 * 2. Replace the import:
 *    FROM: import { Box, Typography, Button } from "@mui/material";
 *    TO:   import { Box, Typography } from "@mui/material";
 *          import { TrackedCTAButton } from '@/components/TrackedButton';
 *
 * 3. Replace the Button with TrackedCTAButton:
 *    FROM: <Button
 *            variant="contained"
 *            sx={{ ... }}
 *            onClick={() => setContactOpen(true)}
 *          >
 *            Get Started Today
 *          </Button>
 *
 *    TO:   <TrackedCTAButton
 *            trackingName="get_started_home"
 *            trackingLocation="home_hero"
 *            trackingDestination="contact_form"
 *            sx={{ ... }}
 *            onClick={() => setContactOpen(true)}
 *          >
 *            Get Started Today
 *          </TrackedCTAButton>
 *
 * 4. Test it:
 *    - Run: npm run build && npm start
 *    - Open another terminal: npm run ga:realtime -- --watch
 *    - Visit your site and click the button
 *    - You should see the click event in realtime!
 *
 * 5. Repeat for other important buttons:
 *    - Flow page CTA buttons
 *    - Communication page CTA buttons
 *    - Navbar links
 *    - Footer links
 *    - Social media buttons
 */
