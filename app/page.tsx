import type { Metadata } from 'next';
import { Box } from '@mui/material';
import FlowStructuredData from '@/src/components/flow/FlowStructuredData';
import Hero from '@/src/components/flow/Hero';
import Innovations from '@/src/components/flow/Innovations';
import TelegramAlertDemo from '@/src/components/flow/TelegramAlertDemo';
import AlertExplainer from '@/src/components/flow/AlertExplainer';
import TelegramGuide from '@/src/components/flow/TelegramGuide';
import Features from '@/src/components/flow/Features';
import Comparison from '@/src/components/flow/Comparison';
import Integration from '@/src/components/flow/Integration';
import Intelligence from '@/src/components/flow/Intelligence';
import Results from '@/src/components/flow/Results';
import SEOContent from '@/src/components/flow/SEOContent';
import FAQ from '@/src/components/flow/FAQ';
import CTA from '@/src/components/flow/CTA';

export const metadata: Metadata = {
  title: 'RxSynapse - Real-Time Options Trading Alerts & Smart Money Tracking | Institutional Grade Intelligence',
  description: 'Get FREE institutional-grade options trading alerts on Telegram. Track unusual options activity, smart money flows & FII/DII data in real-time. 528+ strikes monitored live across Nifty, BankNifty, FinNifty & top stocks. Start in 2 minutes - No credit card needed. India\'s #1 alternative to Bloomberg Terminal & Unusual Whales for Indian markets.',
  keywords: ['options trading alerts india', 'unusual options activity scanner', 'smart money tracking india', 'institutional flow tracking', 'nifty options alerts telegram', 'banknifty options activity', 'free options trading alerts', 'real-time options data india', 'FII DII data real-time', 'options flow scanner india', 'telegram trading bot india', 'unusual whales india alternative', 'bloomberg terminal alternative india', 'options intelligence platform', 'open interest analysis live', 'nifty 50 options tracker', 'banknifty weekly options', 'finnifty options live', 'midcap nifty options', 'stock options alerts india', 'NSE options live data', 'BSE options tracking', 'institutional options activity', 'smart money indicators india', 'options volume spike alerts', 'aggressive options trading detection', 'option chain analysis real-time', 'derivatives market intelligence india', 'F&O trading alerts', 'options Greeks live', 'implied volatility tracker', 'max pain calculator live', 'put call ratio analysis', 'options sweep scanner india', 'large options orders tracker', 'bulk deals NSE live', 'insider trading alerts india', 'institutional buying selling data', 'premium options trading signals', 'best options trading platform india', 'options trading for beginners india', 'learn options trading', 'options trading strategies india', 'options trading telegram channel', 'free trading signals india telegram', 'day trading alerts india', 'intraday options tips', 'options trading course india', 'retail trader tools india', 'discount broker alternatives'],
  openGraph: {
    title: 'RxSynapse - Real-Time Options Trading Alerts & Smart Money Tracking',
    description: 'Get FREE institutional-grade options trading alerts on Telegram. Track unusual options activity, smart money flows & FII/DII data in real-time.',
    url: 'https://rxsynapse.com',
    siteName: 'RxSynapse',
    images: [{
      url: '/images/rxflow/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'RxSynapse - Real-Time Options Trading Alerts & Smart Money Tracking',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RxSynapse - Real-Time Options Trading Alerts',
    description: 'Get FREE institutional-grade options trading alerts on Telegram. Track unusual activity & smart money flows.',
    images: ['/images/rxflow/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rxsynapse.com',
  },
};

export default function HomePage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <FlowStructuredData />
      <Box id="hero">
        <Hero />
      </Box>
      <Innovations />
      <TelegramAlertDemo />
      <AlertExplainer />
      <TelegramGuide />
      <Features />
      <Comparison />
      <Integration />
      <Intelligence />
      <Results />
      <SEOContent />
      <FAQ />
      <CTA />
    </Box>
  );
}
