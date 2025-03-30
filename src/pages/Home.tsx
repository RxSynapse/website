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
        title="RxSynapse | AI-Powered BFSI Innovation"
        description="Leading AI-driven solutions for BFSI with automation, integration, and strategic analysis."
        image="/images/og-image.jpg"
        url="/"
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
