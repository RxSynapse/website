import type { Metadata } from 'next';
import CommunicationClient from './CommunicationClient';

export const metadata: Metadata = {
  title: 'RxCommunication - AI-Powered IVR-less Customer Support & Conversational Intelligence for BFSI',
  description: 'Revolutionary AI-driven communication platform eliminating traditional IVR frustrations. Autonomous customer service with natural language understanding, real-time sentiment analysis, conversation analytics, and intelligent call routing. Transform customer experience in banking and financial services with voice AI that understands context and intent.',
  keywords: ['RxCommunication', 'IVR-less customer support', 'conversational AI banking', 'AI customer service financial services', 'voice AI for banks', 'natural language processing finance', 'intelligent virtual agents banking', 'AI-powered customer interactions', 'sentiment analysis real-time', 'conversation analytics platform', 'autonomous customer service', 'AI contact center solutions', 'smart call routing', 'voice recognition banking', 'AI speech analytics', 'customer experience automation BFSI', 'self-service banking AI', 'omnichannel communication AI', 'predictive customer support', 'AI voice assistants finance', 'context-aware AI chatbots', 'intent recognition customer service', 'emotion detection AI', 'customer journey analytics', 'proactive customer engagement', 'AI-driven CRM', 'automated query resolution', 'intelligent call transcription', 'voice biometrics banking', 'multilingual AI support', 'customer satisfaction AI', 'NPS tracking automation', 'first call resolution AI', 'agent assist technology', 'call center automation', 'contact center AI transformation', 'voice of customer analytics', 'customer feedback analysis AI', 'complaint resolution automation', 'customer retention AI', 'personalized banking support', 'real-time customer insights', 'AI decision support agents', 'automated escalation management', 'intelligent IVR replacement', 'conversational banking platform'],
  openGraph: {
    title: 'RxCommunication - AI-Powered IVR-less Customer Support',
    description: 'Revolutionary AI-driven communication platform for BFSI. Eliminate IVR frustrations with natural language understanding and intelligent automation.',
    url: 'https://rxsynapse.com/communication',
    siteName: 'RxSynapse',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'RxCommunication - AI-Powered Customer Support Platform',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RxCommunication - AI-Powered IVR-less Support',
    description: 'Revolutionary AI-driven communication platform for BFSI with natural language understanding.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rxsynapse.com/communication',
  },
};

export default function CommunicationPage() {
  return <CommunicationClient />;
}
