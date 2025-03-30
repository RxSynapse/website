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
        title="RxSynapse Communication Innovation | AI-Powered Customer Experience"
        description="Discover our revolutionary communication solutions including IVR-less support, autonomous customer success, and real-time conversation analytics for the BFSI sector."
        image="/images/communication-og-image.jpg"
        keywords="RxCommunication, Reactive Communication, AI customer communication, Conversational AI for banking, IVR-less customer support, Natural language processing in finance, AI call center solutions, Voice AI for financial services, Intelligent virtual agents, AI-powered customer interactions, Sentiment analysis for banks, Real-time conversation analytics, Autonomous customer service, AI-driven contact center, Smart call routing, Voice recognition for banking, AI speech analytics, Customer experience automation, Self-service banking AI, Omnichannel AI communication, Predictive customer support, AI voice assistants for finance"
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
