import React from "react";
import { Box } from "@mui/material";
import SEO from "../components/SEO";
import FlowStructuredData from "../components/flow/FlowStructuredData";
import Hero from "../components/flow/Hero";
import Innovations from "../components/flow/Innovations";
import TelegramAlertDemo from "../components/flow/TelegramAlertDemo";
import AlertExplainer from "../components/flow/AlertExplainer";
import TelegramGuide from "../components/flow/TelegramGuide";
import Features from "../components/flow/Features";
import Comparison from "../components/flow/Comparison";
import Integration from "../components/flow/Integration";
import Intelligence from "../components/flow/Intelligence";
import Results from "../components/flow/Results";
import SEOContent from "../components/flow/SEOContent";
import FAQ from "../components/flow/FAQ";
import CTA from "../components/flow/CTA";

const Flow: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <SEO
        title="Best Options Trading Alerts India 2025 | Free Real-Time Unusual Activity Scanner | RxFlow"
        description="Get FREE institutional-grade options trading alerts on Telegram. Track unusual options activity, smart money flows & FII/DII data in real-time. 528+ strikes monitored live across Nifty, BankNifty, FinNifty & top stocks. Start in 2 minutes - No credit card needed. India's #1 alternative to Bloomberg Terminal & Unusual Whales for Indian markets."
        image="/images/og-image.jpg"
        url="/flow"
        keywords="options trading alerts india, unusual options activity scanner, smart money tracking india, institutional flow tracking, nifty options alerts telegram, banknifty options activity, free options trading alerts, real-time options data india, FII DII data real-time, options flow scanner india, telegram trading bot india, unusual whales india alternative, bloomberg terminal alternative india, options intelligence platform, open interest analysis live, nifty 50 options tracker, banknifty weekly options, finnifty options live, midcap nifty options, stock options alerts india, NSE options live data, BSE options tracking, institutional options activity, smart money indicators india, options volume spike alerts, aggressive options trading detection, option chain analysis real-time, derivatives market intelligence india, F&O trading alerts, options Greeks live, implied volatility tracker, max pain calculator live, put call ratio analysis, options sweep scanner india, large options orders tracker, bulk deals NSE live, insider trading alerts india, institutional buying selling data, premium options trading signals, best options trading platform india, options trading for beginners india, learn options trading, options trading strategies india, options trading telegram channel, free trading signals india telegram, day trading alerts india, intraday options tips, options trading course india, retail trader tools india, discount broker alternatives"
      />
      <FlowStructuredData />
      <Box id="flow-hero">
        <Hero />
      </Box>
      <Innovations />
      <TelegramAlertDemo />
      <AlertExplainer />
      <TelegramGuide />
      <Features />
      <Comparison />
      <Integration />
      <Intelligence />
      <Results />
      <SEOContent />
      <FAQ />
      <CTA />
    </Box>
  );
};

export default Flow;
