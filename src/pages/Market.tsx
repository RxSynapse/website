import React from "react";
import { Box } from "@mui/material";
import SEO from "../components/SEO";
import Hero from "../components/market/Hero";
import Innovations from "../components/market/Innovations";
import Features from "../components/market/Features";
import Integration from "../components/market/Integration";
import Wallet from "../components/market/Wallet";
import Results from "../components/market/Results";
import CTA from "../components/market/CTA";

const Market: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <SEO
        title="BlackBox Trading | No-Code Algorithmic Trading Platform"
        description="Transform your trading with BlackBox - the intuitive no-code platform for algorithmic trading. Connect existing accounts, build strategies in plain English, and automate your trades."
        image="/images/og-image.jpg"
        url="/blackbox-trading"
        keywords="rxmarket, reactive market, no-code algo trading, algorithmic trading platform, automated stock trading, retail algo trading, AI trading strategies, automated trading software, stock market automation, trading bot platform, algorithmic trading for beginners, automated investment platform"
      />
      <Box id="market-hero">
        <Hero />
      </Box>
      <Innovations />
      <Features />
      <Integration />
      <Wallet />
      <Results />
      <CTA />
    </Box>
  );
};

export default Market;
