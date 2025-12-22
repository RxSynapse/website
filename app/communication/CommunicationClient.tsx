'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import Hero from '@/src/components/communication/Hero';
import Innovations from '@/src/components/communication/Innovations';
import Dashboard from '@/src/components/communication/Dashboard';
import IVRlessFlow from '@/src/components/communication/IVRlessFlow';
import CTA from '@/src/components/communication/CTA';
import AnalyticsDemo from '@/src/components/communication/AnalyticsDemo';
import AnalyticsDashboardDemo from '@/src/components/communication/AnalyticsDashboardDemo';
import ContactUs from '@/src/components/ContactUs';

export default function CommunicationClient() {
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
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
        <CTA setContactOpen={setContactOpen} />
      </Box>
      <ContactUs open={isContactOpen} setContactOpen={setContactOpen} />
    </>
  );
}
