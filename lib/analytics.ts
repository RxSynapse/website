/**
 * Analytics Tracking Utilities
 *
 * Deliberate-action event tracking: button/CTA clicks, outbound links,
 * form interactions, errors. Pageviews, landing pages, UTM attribution,
 * scroll depth, and engagement time are covered by GA4's native collection
 * and enhanced measurement — do not add custom events that duplicate them.
 */

// Type definitions for GA4 events
export interface EventParams {
  [key: string]: string | number | boolean;
}

/**
 * Send a custom event to GA4
 */
export function trackEvent(
  eventName: string,
  params?: EventParams
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);

    // Console log in development for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 GA4 Event:', eventName, params);
    }
  }
}

/**
 * Track button clicks with detailed context
 */
export function trackButtonClick(
  buttonName: string,
  params?: {
    buttonType?: 'cta' | 'navigation' | 'action' | 'social' | 'download';
    buttonLocation?: string; // e.g., 'navbar', 'hero', 'footer'
    buttonDestination?: string; // URL or destination
    buttonText?: string;
    pageUrl?: string;
    [key: string]: any;
  }
): void {
  trackEvent('button_click', {
    button_name: buttonName,
    button_type: params?.buttonType || 'action',
    button_location: params?.buttonLocation || 'unknown',
    button_destination: params?.buttonDestination || '',
    button_text: params?.buttonText || buttonName,
    page_url: params?.pageUrl || (typeof window !== 'undefined' ? window.location.pathname : ''),
    ...params,
  });
}

/**
 * Track CTA (Call-to-Action) button clicks specifically
 */
export function trackCTAClick(
  ctaName: string,
  params?: {
    ctaLocation?: string;
    ctaDestination?: string;
    ctaText?: string;
    pageSection?: string; // e.g., 'hero', 'pricing', 'features'
    [key: string]: any;
  }
): void {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: params?.ctaLocation || 'unknown',
    cta_destination: params?.ctaDestination || '',
    cta_text: params?.ctaText || ctaName,
    page_section: params?.pageSection || '',
    page_url: typeof window !== 'undefined' ? window.location.pathname : '',
    ...params,
  });
}

/**
 * Track external link clicks (outbound)
 */
export function trackOutboundLink(
  destinationUrl: string,
  params?: {
    linkText?: string;
    linkLocation?: string;
    linkType?: 'social' | 'partner' | 'resource' | 'other';
    [key: string]: any;
  }
): void {
  trackEvent('outbound_link', {
    destination_url: destinationUrl,
    link_text: params?.linkText || '',
    link_location: params?.linkLocation || '',
    link_type: params?.linkType || 'other',
    source_page: typeof window !== 'undefined' ? window.location.pathname : '',
    ...params,
  });
}

/**
 * Track form interactions
 */
export function trackFormStart(
  formName: string,
  params?: {
    formLocation?: string;
    formType?: 'contact' | 'signup' | 'inquiry' | 'other';
    [key: string]: any;
  }
): void {
  trackEvent('form_start', {
    form_name: formName,
    form_location: params?.formLocation || '',
    form_type: params?.formType || 'other',
    page_url: typeof window !== 'undefined' ? window.location.pathname : '',
    ...params,
  });
}

export function trackFormSubmit(
  formName: string,
  params?: {
    formLocation?: string;
    formType?: 'contact' | 'signup' | 'inquiry' | 'other';
    success?: boolean;
    [key: string]: any;
  }
): void {
  trackEvent('form_submit', {
    form_name: formName,
    form_location: params?.formLocation || '',
    form_type: params?.formType || 'other',
    success: params?.success !== false,
    page_url: typeof window !== 'undefined' ? window.location.pathname : '',
    ...params,
  });
}

/**
 * Track video interactions (if you have videos)
 */
export function trackVideoPlay(
  videoTitle: string,
  params?: {
    videoUrl?: string;
    videoLocation?: string;
    videoDuration?: number;
    [key: string]: any;
  }
): void {
  trackEvent('video_play', {
    video_title: videoTitle,
    video_url: params?.videoUrl || '',
    video_location: params?.videoLocation || '',
    video_duration: params?.videoDuration || 0,
    page_url: typeof window !== 'undefined' ? window.location.pathname : '',
    ...params,
  });
}

/**
 * Track search queries (if you add search functionality)
 */
export function trackSearch(
  searchQuery: string,
  params?: {
    searchLocation?: string;
    resultsCount?: number;
    [key: string]: any;
  }
): void {
  trackEvent('search', {
    search_term: searchQuery,
    search_location: params?.searchLocation || '',
    results_count: params?.resultsCount || 0,
    page_url: typeof window !== 'undefined' ? window.location.pathname : '',
    ...params,
  });
}

/**
 * Track errors or issues users encounter
 */
export function trackError(
  errorType: string,
  params?: {
    errorMessage?: string;
    errorLocation?: string;
    errorSeverity?: 'low' | 'medium' | 'high';
    [key: string]: any;
  }
): void {
  trackEvent('error_occurred', {
    error_type: errorType,
    error_message: params?.errorMessage || '',
    error_location: params?.errorLocation || '',
    error_severity: params?.errorSeverity || 'medium',
    page_url: typeof window !== 'undefined' ? window.location.pathname : '',
    ...params,
  });
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
