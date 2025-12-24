import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Suspense } from 'react';
import { Providers } from './providers';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rxsynapse.com'),
  title: {
    default: 'RxSynapse - AI-Powered BFSI Solutions | Trading Intelligence & Communication Innovation',
    template: '%s | RxSynapse'
  },
  description: 'Leading AI-driven solutions transforming BFSI with intelligent automation, real-time market intelligence, and conversational AI. RxFlow for options trading intelligence, RxCommunication for IVR-less customer support.',
  keywords: ['RxSynapse', 'AI BFSI solutions', 'trading intelligence', 'options trading india', 'conversational AI banking', 'IVR-less customer support', 'smart money tracking', 'institutional flows'],
  authors: [{ name: 'RxSynapse' }],
  creator: 'RxSynapse',
  publisher: 'RxSynapse',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rxsynapse.com',
    siteName: 'RxSynapse',
    title: 'RxSynapse - AI-Powered BFSI Solutions',
    description: 'Leading AI-driven solutions for trading intelligence and customer communication in BFSI',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'RxSynapse - AI-Powered BFSI Solutions for Trading Intelligence and Customer Communication',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RxSynapse - AI-Powered BFSI Solutions',
    description: 'Leading AI-driven solutions for trading intelligence and customer communication',
    images: ['/images/og-image.jpg'],
    creator: '@rxsynapse',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {/* Google Analytics 4 Tracking */}
        <Suspense fallback={null}>
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        </Suspense>

        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'RxSynapse',
              url: 'https://rxsynapse.com',
              logo: 'https://rxsynapse.com/logo.png',
              description: 'Leading AI-driven solutions for BFSI with intelligent automation, real-time market intelligence, and conversational AI',
              foundingDate: '2024',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN'
              },
              sameAs: [
                'https://facebook.com/rxsynapse',
                'https://linkedin.com/company/rxsynapse',
                'https://twitter.com/rxsynapse',
              ],
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'SoftwareApplication',
                    name: 'RxFlow',
                    applicationCategory: 'FinanceApplication',
                    operatingSystem: 'Web',
                    description: 'Real-time options intelligence and smart money tracking platform for Indian markets'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'SoftwareApplication',
                    name: 'RxCommunication',
                    applicationCategory: 'BusinessApplication',
                    operatingSystem: 'Web',
                    description: 'IVR-less customer support and conversational AI platform for BFSI'
                  }
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
