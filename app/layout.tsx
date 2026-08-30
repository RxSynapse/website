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
    default: 'RxSynapse - Real-Time Options Trading Alerts & Smart Money Tracking',
    template: '%s | RxSynapse'
  },
  description: 'Real-time unusual options activity alerts and smart money tracking for Indian markets. FII/DII flows, bulk deals, and institutional intelligence delivered instantly on Telegram.',
  keywords: ['RxSynapse', 'options trading alerts india', 'unusual options activity', 'smart money tracking', 'FII DII flows', 'institutional flows', 'nifty options alerts', 'telegram trading alerts'],
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
    title: 'RxSynapse - Real-Time Options Trading Alerts & Smart Money Tracking',
    description: 'Real-time unusual options activity alerts and smart money tracking for Indian markets, delivered instantly on Telegram.',
    images: [{
      url: '/images/rxflow/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'RxSynapse - Real-Time Options Trading Alerts & Smart Money Tracking',
    }],
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
              description: 'Real-time options intelligence and smart money tracking platform for Indian markets',
              foundingDate: '2024',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN'
              },
              sameAs: [
                'https://linkedin.com/company/rxsynapse',
              ],
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'SoftwareApplication',
                    name: 'RxSynapse',
                    applicationCategory: 'FinanceApplication',
                    operatingSystem: 'Web',
                    description: 'Real-time options intelligence and smart money tracking platform for Indian markets'
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
