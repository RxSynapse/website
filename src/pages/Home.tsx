import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Box } from "@mui/material";
import ContactUs from "../components/ContactUs";
import SEO from "../components/SEO";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <Box
      sx={{ minHeight: "100vh", overflowY: "auto", scrollBehavior: "smooth" }}
    >
      <SEO
        title="RxSynapse | AI-Powered BFSI Innovation"
        description="Leading AI-driven solutions for BFSI with automation, integration, and strategic analysis."
        image="/images/og-image-square.jpg"
        url="/"
      />
      <Navbar setContactOpen={(state) => setContactOpen(state)} />
      <Box id="hero">
        <Hero setContactOpen={(state) => setContactOpen(state)} />
      </Box>
      <Box id="services">
        <Services />
      </Box>
      <Box id="about-us">
        <AboutUs />
      </Box>
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

export default Home;
