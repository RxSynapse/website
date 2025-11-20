import React from "react";
import { Box } from "@mui/material";
import SEO from "../components/SEO";
import Hero from "../components/communication/Hero";
import Innovations from "../components/communication/Innovations";
import Dashboard from "../components/communication/Dashboard";
import IVRlessFlow from "../components/communication/IVRlessFlow";
import CTA from "../components/communication/CTA";
import AnalyticsDemo from "../components/communication/AnalyticsDemo";
import AnalyticsDashboardDemo from "../components/communication/AnalyticsDashboardDemo";

interface CommunicationProps {
  setContactOpen: (state: boolean) => void;
}

const Communication: React.FC<CommunicationProps> = ({ setContactOpen }) => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <SEO
        title="RxCommunication - AI-Powered IVR-less Customer Support & Conversational Intelligence for BFSI"
        description="Revolutionary AI-driven communication platform eliminating traditional IVR frustrations. Autonomous customer service with natural language understanding, real-time sentiment analysis, conversation analytics, and intelligent call routing. Transform customer experience in banking and financial services with voice AI that understands context and intent."
        image="/images/og-image.jpg"
        keywords="RxCommunication, IVR-less customer support, conversational AI banking, AI customer service financial services, voice AI for banks, natural language processing finance, intelligent virtual agents banking, AI-powered customer interactions, sentiment analysis real-time, conversation analytics platform, autonomous customer service, AI contact center solutions, smart call routing, voice recognition banking, AI speech analytics, customer experience automation BFSI, self-service banking AI, omnichannel communication AI, predictive customer support, AI voice assistants finance, context-aware AI chatbots, intent recognition customer service, emotion detection AI, customer journey analytics, proactive customer engagement, AI-driven CRM, automated query resolution, intelligent call transcription, voice biometrics banking, multilingual AI support, customer satisfaction AI, NPS tracking automation, first call resolution AI, agent assist technology, call center automation, contact center AI transformation, voice of customer analytics, customer feedback analysis AI, complaint resolution automation, customer retention AI, personalized banking support, real-time customer insights, AI decision support agents, automated escalation management, intelligent IVR replacement, conversational banking platform"
        url="/communication"
      />
      <Box id="communication-hero">
        <Hero />
      </Box>
      <Innovations />
      <Dashboard />
      <IVRlessFlow />
      <Box id="analytics-demo">
        <AnalyticsDemo />
      </Box>
      <Box id="analytics-dashboard-demo">
        <AnalyticsDashboardDemo />
      </Box>
      <CTA setContactOpen={(state) => setContactOpen(state)} />
    </Box>
  );
};

export default Communication;
