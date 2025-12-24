'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useComprehensiveTracking } from '@/hooks/useAnalytics';

type GoogleAnalyticsProps = {
  measurementId: string;
  enableAutoTracking?: boolean;
};

/**
 * Google Analytics 4 tracking component for Next.js App Router
 *
 * This component:
 * 1. Loads the GA4 gtag.js script
 * 2. Initializes GA4 with your Measurement ID
 * 3. Automatically tracks page views on route changes
 * 4. Tracks landing pages, time on page, scroll depth, and outbound links
 * 5. Provides the gtag function for custom event tracking
 *
 * Usage in layout.tsx:
 * <GoogleAnalytics
 *   measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}
 *   enableAutoTracking={true}
 * />
 */
export function GoogleAnalytics({
  measurementId,
  enableAutoTracking = true
}: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Enable comprehensive automatic tracking
  useComprehensiveTracking({
    trackLandingPage: enableAutoTracking,
    trackTimeOnPage: enableAutoTracking,
    trackScrollDepth: enableAutoTracking,
    trackOutboundLinks: enableAutoTracking,
    trackNavigation: enableAutoTracking,
  });

  // Track page views on route changes
  useEffect(() => {
    if (!measurementId || measurementId === 'undefined') {
      return;
    }

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

    // Send pageview with updated URL
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, measurementId]);

  // Don't render in development or if no measurement ID
  if (
    process.env.NODE_ENV !== 'production' ||
    !measurementId ||
    measurementId === 'undefined'
  ) {
    return null;
  }

  return (
    <>
      {/* Load gtag.js script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />

      {/* Initialize GA4 */}
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Type declaration for window.gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

/**
 * Helper function to send custom events to GA4
 *
 * @example
 * // Track a button click
 * sendGAEvent('click', 'cta_button', { button_name: 'Get Started' });
 *
 * // Track a form submission
 * sendGAEvent('submit', 'contact_form', { form_type: 'inquiry' });
 */
export function sendGAEvent(
  eventName: string,
  category: string,
  params?: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: category,
      ...params,
    });
  }
}
