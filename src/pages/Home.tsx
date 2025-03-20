import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Box } from "@mui/material";
import ContactUs from "../components/ContactUs";
import SEO from "../components/SEO";

const Home: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100vh", overflowY: "auto" }}>
      <SEO
        title="RxSynapse | AI-Powered BFSI Innovation"
        description="Leading AI-driven solutions for BFSI with automation, integration, and strategic analysis."
        image="/images/og-image-square.jpg"
        url="/"
      />
      <Navbar />
      <Hero />
      <ContactUs />
    </Box>
  );
};

export default Home;
