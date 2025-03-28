import React, { useState } from "react";
import { Box } from "@mui/material";
import SEO from "../components/SEO";
import ContactUs from "../components/ContactUs";
import Navbar from "../components/Navbar";
import Hero from "../components/communication/Hero";
import Innovations from "../components/communication/Innovations";
import Dashboard from "../components/communication/Dashboard";
import IVRlessFlow from "../components/communication/IVRlessFlow";
import CTA from "../components/communication/CTA";
import Footer from "../components/Footer";
import AnalyticsDemo from "../components/communication/AnalyticsDemo";
import AnalyticsDashboardDemo from "../components/communication/AnalyticsDashboardDemo";

const Communication: React.FC = () => {
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <SEO
        title="RxSynapse Communication Innovation | AI-Powered Customer Experience"
        description="Discover our revolutionary communication solutions including IVR-less support, autonomous customer success, and real-time conversation analytics for the BFSI sector."
        image="/images/communication-og-image.jpg"
        url="/communication"
      />
      <Navbar setContactOpen={(state) => setContactOpen(state)} />
      <Hero />
      <Innovations />
      <Dashboard />
      <IVRlessFlow />
      <AnalyticsDemo />
      <AnalyticsDashboardDemo />
      <CTA />
      <Footer />
      <Box id="contact-us">
        <ContactUs
          open={isContactOpen}
          setContactOpen={(state) => setContactOpen(state)}
        />
      </Box>
    </Box>
  );
};

export default Communication;
