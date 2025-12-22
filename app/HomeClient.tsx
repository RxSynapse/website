'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import Hero from '@/src/components/home/Hero';
import Services from '@/src/components/home/Services';
import AboutUs from '@/src/components/home/AboutUs';
import ContactUs from '@/src/components/ContactUs';

export default function HomeClient() {
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Box
        sx={{ minHeight: '100vh', overflowY: 'auto', scrollBehavior: 'smooth' }}
      >
        <Box id="hero">
          <Hero setContactOpen={setContactOpen} />
        </Box>
        <Box id="services">
          <Services />
        </Box>
        <Box id="about-us">
          <AboutUs />
        </Box>
      </Box>
      <Box id="contact-us">
        <ContactUs
          open={isContactOpen}
          setContactOpen={setContactOpen}
        />
      </Box>
    </>
  );
}
