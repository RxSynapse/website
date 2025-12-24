/**
 * Analytics Tracking Utilities
 *
 * Comprehensive event tracking for user interactions including:
 * - Button clicks
 * - Page views and landing pages
 * - Time on page
 * - External link clicks
 * - Scroll depth
 * - Form interactions
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
    timestamp: new Date().toISOString(),
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
    timestamp: new Date().toISOString(),
    ...params,
  });
}

/**
 * Track page landing (first page user visits)
 */
export function trackLandingPage(
  params?: {
    referrer?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    [key: string]: any;
  }
): void {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);

  trackEvent('page_landing', {
    landing_page: window.location.pathname,
    landing_url: window.location.href,
    referrer: params?.referrer || document.referrer || 'direct',
    utm_source: params?.utm_source || urlParams.get('utm_source') || '',
    utm_medium: params?.utm_medium || urlParams.get('utm_medium') || '',
    utm_campaign: params?.utm_campaign || urlParams.get('utm_campaign') || '',
    utm_content: urlParams.get('utm_content') || '',
    utm_term: urlParams.get('utm_term') || '',
    timestamp: new Date().toISOString(),
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
    timestamp: new Date().toISOString(),
    ...params,
  });
}

/**
 * Track time spent on page
 * Call this when user is about to leave the page
 */
export function trackTimeOnPage(
  pageEntryTime: number,
  params?: {
    pageName?: string;
    pageUrl?: string;
    [key: string]: any;
  }
): void {
  const timeSpent = Math.round((Date.now() - pageEntryTime) / 1000); // in seconds

  trackEvent('time_on_page', {
    page_name: params?.pageName || '',
    page_url: params?.pageUrl || (typeof window !== 'undefined' ? window.location.pathname : ''),
    time_spent_seconds: timeSpent,
    time_spent_minutes: Math.round(timeSpent / 60 * 10) / 10, // rounded to 1 decimal
    timestamp: new Date().toISOString(),
    ...params,
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(
  scrollPercentage: number,
  params?: {
    pageUrl?: string;
    pageName?: string;
    [key: string]: any;
  }
): void {
  // Only track at certain milestones: 25%, 50%, 75%, 90%, 100%
  const milestone = Math.floor(scrollPercentage / 25) * 25;

  trackEvent('scroll_depth', {
    scroll_percentage: scrollPercentage,
    scroll_milestone: milestone,
    page_url: params?.pageUrl || (typeof window !== 'undefined' ? window.location.pathname : ''),
    page_name: params?.pageName || '',
    timestamp: new Date().toISOString(),
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
    timestamp: new Date().toISOString(),
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
    timestamp: new Date().toISOString(),
    ...params,
  });
}

/**
 * Track navigation between pages
 */
export function trackNavigation(
  fromPage: string,
  toPage: string,
  params?: {
    navigationType?: 'click' | 'back' | 'forward' | 'direct';
    navigationElement?: string; // e.g., 'navbar', 'footer', 'button'
    [key: string]: any;
  }
): void {
  trackEvent('page_navigation', {
    from_page: fromPage,
    to_page: toPage,
    navigation_type: params?.navigationType || 'click',
    navigation_element: params?.navigationElement || '',
    timestamp: new Date().toISOString(),
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
    timestamp: new Date().toISOString(),
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
    timestamp: new Date().toISOString(),
    ...params,
  });
}

/**
 * Track user engagement milestones
 */
export function trackEngagementMilestone(
  milestone: string,
  params?: {
    milestoneType?: 'time' | 'scroll' | 'interaction' | 'completion';
    milestoneValue?: number;
    [key: string]: any;
  }
): void {
  trackEvent('engagement_milestone', {
    milestone_name: milestone,
    milestone_type: params?.milestoneType || 'interaction',
    milestone_value: params?.milestoneValue || 0,
    page_url: typeof window !== 'undefined' ? window.location.pathname : '',
    timestamp: new Date().toISOString(),
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
    timestamp: new Date().toISOString(),
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
