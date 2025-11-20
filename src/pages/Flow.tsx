import React from "react";
import { Box } from "@mui/material";
import SEO from "../components/SEO";
import Hero from "../components/flow/Hero";
import Innovations from "../components/flow/Innovations";
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
        description="India's first institutional-grade options intelligence platform. Track unusual options activity, FII/DII flows, bulk deals, insider trades, and open interest changes in real-time. Advanced algorithms detect smart money moves across Nifty, BankNifty, FinNifty & top stocks before the crowd."
        image="/images/og-image.jpg"
        url="/flow"
        keywords="rxflow, options trading india, unusual options activity, smart money tracking, FII DII data real-time, institutional flows tracking, options flow scanner, open interest analysis, options intelligence platform, unusual whales india alternative, nifty options analysis, banknifty options tracker, finnifty options monitoring, insider trading alerts india, bulk deals tracker NSE BSE, block deals monitoring, options activity scanner, real-time options data india, option chain analysis, max pain calculator, put call ratio analysis, options volume analysis, aggressive options trading, options sweep detection, options spread strategies, institutional options activity, retail vs institutional options, options Greeks tracking, implied volatility scanner, options backtesting india, F&O trading intelligence, derivatives market analysis, stock options india, equity options tracking, options market depth, bid ask spread analysis, options order flow, market maker activity detection, options positioning analysis, directional options trading, neutral options strategies, volatility trading india, options alerts telegram, options trading signals, algorithmic options analysis, machine learning options trading, AI options intelligence, predictive options analytics, options sentiment analysis, multi-strike options analysis, expiry day trading strategies, weekly options trading, monthly options analysis, participant-wise open interest, options concentration analysis, unusual options volume, large options trades tracking, institutional money flow, smart money indicators"
      />
      <Box id="flow-hero">
        <Hero />
      </Box>
      <Innovations />
      <Features />
      <Integration />
      <Intelligence />
      <Results />
      <CTA />
    </Box>
  );
};

export default Flow;
