import type { Metadata } from 'next';
import { Box } from '@mui/material';
import PricingHero from '@/src/components/flow/pricing/PricingHero';
import PricingPlans from '@/src/components/flow/pricing/PricingPlans';
import PricingFeatures from '@/src/components/flow/pricing/PricingFeatures';
import PricingFAQ from '@/src/components/flow/pricing/PricingFAQ';
import PricingCTA from '@/src/components/flow/pricing/PricingCTA';

export const metadata: Metadata = {
  title: 'RxFlow Pricing - Plans Starting at ₹29 | Options Trading Alerts',
  description: 'Choose the perfect RxFlow plan for your trading needs. Get unlimited options alerts, smart money tracking, and institutional flow data. Plans start at just ₹29. Free trial available.',
  keywords: ['rxflow pricing', 'options trading subscription', 'trading alerts pricing india', 'telegram trading bot pricing', 'smart money tracking subscription', 'options intelligence pricing', 'institutional flow data cost', 'nifty options alerts price', 'banknifty alerts subscription'],
  openGraph: {
    title: 'RxFlow Pricing - Plans Starting at ₹29',
    description: 'Choose the perfect RxFlow plan. Unlimited options alerts, smart money tracking, institutional flows. Free trial available.',
    url: 'https://rxsynapse.com/flow/pricing',
    siteName: 'RxSynapse',
    images: [{
      url: '/images/rxflow/og-pricing.jpg',
      width: 1200,
      height: 630,
      alt: 'RxFlow Pricing Plans',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RxFlow Pricing - Plans Starting at ₹29',
    description: 'Choose the perfect RxFlow plan for your trading needs.',
    images: ['/images/rxflow/og-pricing.jpg'],
  },
  alternates: {
    canonical: 'https://rxsynapse.com/flow/pricing',
  },
};

export default function PricingPage() {
  return (
    <Box sx={{ bgcolor: '#000', minHeight: '100vh' }}>
      <PricingHero />
      <PricingPlans />
      <PricingFeatures />
      <PricingFAQ />
      <PricingCTA />
    </Box>
  );
}
