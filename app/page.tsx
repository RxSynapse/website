import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'RxSynapse - AI-Powered BFSI Solutions | Trading Intelligence & Communication Innovation',
  description: 'Leading AI-driven solutions transforming BFSI with intelligent automation, real-time market intelligence, and conversational AI. RxFlow offers institutional-grade options intelligence for traders. RxCommunication delivers IVR-less customer support and autonomous service automation for financial institutions.',
  keywords: ['RxSynapse', 'AI BFSI solutions', 'financial technology innovation', 'banking automation AI', 'trading intelligence platform', 'options trading india', 'smart money tracking', 'unusual options activity', 'FII DII flows', 'institutional trading intelligence', 'conversational AI banking', 'IVR-less customer support', 'AI customer service financial services', 'real-time market intelligence', 'automated trading analysis', 'financial services AI', 'fintech innovation india', 'digital transformation banking', 'AI-powered trading tools', 'market intelligence platform', 'customer experience automation', 'voice AI banking', 'sentiment analysis finance', 'AI call center solutions', 'financial data analytics', 'predictive analytics trading', 'machine learning finance', 'cognitive computing banks', 'risk management AI', 'fraud detection fintech', 'compliance automation', 'financial reporting automation', 'banking chatbots AI', 'customer engagement automation', 'process optimization finance', 'intelligent banking systems', 'algorithmic trading intelligence', 'options flow analysis', 'smart money indicators', 'derivative market intelligence', 'F&O trading tools india'],
  openGraph: {
    title: 'RxSynapse - AI-Powered BFSI Solutions | Trading Intelligence',
    description: 'Leading AI-driven solutions transforming BFSI with intelligent automation, real-time market intelligence, and conversational AI.',
    url: 'https://rxsynapse.com',
    siteName: 'RxSynapse',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'RxSynapse - AI-Powered BFSI Solutions',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RxSynapse - AI-Powered BFSI Solutions',
    description: 'Leading AI-driven solutions for trading intelligence and customer communication',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rxsynapse.com',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
