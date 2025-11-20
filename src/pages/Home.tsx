import React from "react";
import Hero from "../components/home/Hero";
import { Box } from "@mui/material";
import SEO from "../components/SEO";
import Services from "../components/home/Services";
import AboutUs from "../components/home/AboutUs";

interface HomeProps {
  setContactOpen: (state: boolean) => void;
}

const Home: React.FC<HomeProps> = ({ setContactOpen }) => {
  return (
    <Box
      sx={{ minHeight: "100vh", overflowY: "auto", scrollBehavior: "smooth" }}
    >
      <SEO
        title="RxSynapse - AI-Powered BFSI Solutions | Trading Intelligence & Communication Innovation"
        description="Leading AI-driven solutions transforming BFSI with intelligent automation, real-time market intelligence, and conversational AI. RxFlow offers institutional-grade options intelligence for traders. RxCommunication delivers IVR-less customer support and autonomous service automation for financial institutions."
        image="/images/og-image.jpg"
        url="/"
        keywords="RxSynapse, AI BFSI solutions, financial technology innovation, banking automation AI, trading intelligence platform, options trading india, smart money tracking, unusual options activity, FII DII flows, institutional trading intelligence, conversational AI banking, IVR-less customer support, AI customer service financial services, real-time market intelligence, automated trading analysis, financial services AI, fintech innovation india, digital transformation banking, AI-powered trading tools, market intelligence platform, customer experience automation, voice AI banking, sentiment analysis finance, AI call center solutions, financial data analytics, predictive analytics trading, machine learning finance, cognitive computing banks, risk management AI, fraud detection fintech, compliance automation, financial reporting automation, banking chatbots AI, customer engagement automation, process optimization finance, intelligent banking systems, algorithmic trading intelligence, options flow analysis, smart money indicators, derivative market intelligence, F&O trading tools india"
      />
      <Box id="hero">
        <Hero setContactOpen={(state) => setContactOpen(state)} />
      </Box>
      <Box id="services">
        <Services />
      </Box>
      <Box id="about-us">
        <AboutUs />
      </Box>
    </Box>
  );
};

export default Home;
