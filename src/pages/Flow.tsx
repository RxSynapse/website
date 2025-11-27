import React from "react";
import { Box } from "@mui/material";
import SEO from "../components/SEO";
import Hero from "../components/flow/Hero";
import Innovations from "../components/flow/Innovations";
import TelegramGuide from "../components/flow/TelegramGuide";
import Features from "../components/flow/Features";
import Integration from "../components/flow/Integration";
import Intelligence from "../components/flow/Intelligence";
import Results from "../components/flow/Results";
import CTA from "../components/flow/CTA";

const Flow: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <SEO
        title="RxFlow - Real-Time Options Intelligence & Smart Money Tracking Platform for Indian Markets"
        description="India's first institutional-grade options intelligence platform. Get instant unusual options activity alerts on Telegram - FREE tier available! Track smart money flows, FII/DII movements, bulk deals, and insider trades in real-time. Start receiving alerts in minutes - no credit card required."
        image="/images/og-image.jpg"
        url="/flow"
        keywords="rxflow, options trading india, unusual options activity, smart money tracking, telegram alerts, free options alerts, FII DII data real-time, institutional flows tracking, options flow scanner, open interest analysis, options intelligence platform, unusual whales india alternative, nifty options analysis, banknifty options tracker, finnifty options monitoring, insider trading alerts india, bulk deals tracker NSE BSE, telegram trading bot, free trading alerts india, options activity scanner, real-time options data india, option chain analysis, max pain calculator, put call ratio analysis, options volume analysis, aggressive options trading, options sweep detection, institutional options activity, options Greeks tracking, implied volatility scanner, F&O trading intelligence, derivatives market analysis, options alerts telegram, telegram trading signals, free tier trading platform, options intelligence free, smart money indicators, telegram stars payment"
      />
      <Box id="flow-hero">
        <Hero />
      </Box>
      <Innovations />
      <TelegramGuide />
      <Features />
      <Integration />
      <Intelligence />
      <Results />
      <CTA />
    </Box>
  );
};

export default Flow;
