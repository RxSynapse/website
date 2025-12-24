'use client';

import { useEffect, useRef, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  trackLandingPage,
  trackTimeOnPage,
  trackScrollDepth,
  trackOutboundLink,
  trackNavigation,
} from '@/lib/analytics';

/**
 * Hook to track landing page (first page user visits)
 * Only fires once per session
 */
export function useLandingPageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasTracked = useRef(false);

  useEffect(() => {
    // Only track landing page once per session
    if (!hasTracked.current && typeof window !== 'undefined') {
      hasTracked.current = true;

      // Get UTM parameters
      const urlParams = new URLSearchParams(searchParams?.toString());

      trackLandingPage({
        referrer: document.referrer || 'direct',
        utm_source: urlParams.get('utm_source') || undefined,
        utm_medium: urlParams.get('utm_medium') || undefined,
        utm_campaign: urlParams.get('utm_campaign') || undefined,
      });
    }
  }, []); // Empty dependency - only run once
}

/**
 * Hook to track time spent on current page
 * Automatically tracks when user leaves the page
 */
export function useTimeOnPageTracking(pageName?: string) {
  const pathname = usePathname();
  const pageEntryTime = useRef<number>(Date.now());

  useEffect(() => {
    // Reset entry time when page changes
    pageEntryTime.current = Date.now();

    // Track time on page when user leaves
    const handleBeforeUnload = () => {
      trackTimeOnPage(pageEntryTime.current, {
        pageName: pageName || pathname,
        pageUrl: pathname,
      });
    };

    // Track on page unload
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Track when component unmounts (page change)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      trackTimeOnPage(pageEntryTime.current, {
        pageName: pageName || pathname,
        pageUrl: pathname,
      });
    };
  }, [pathname, pageName]);
}

/**
 * Hook to track scroll depth
 * Tracks at 25%, 50%, 75%, 90%, and 100% milestones
 */
export function useScrollDepthTracking(pageName?: string) {
  const pathname = usePathname();
  const trackedMilestones = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Reset tracked milestones on page change
    trackedMilestones.current.clear();

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      const scrollPercentage = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      );

      // Track at milestones: 25%, 50%, 75%, 90%, 100%
      const milestones = [25, 50, 75, 90, 100];

      milestones.forEach((milestone) => {
        if (
          scrollPercentage >= milestone &&
          !trackedMilestones.current.has(milestone)
        ) {
          trackedMilestones.current.add(milestone);
          trackScrollDepth(milestone, {
            pageName: pageName || pathname,
            pageUrl: pathname,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, pageName]);
}

/**
 * Hook to automatically track external link clicks
 * Add this to your root layout or page
 */
export function useOutboundLinkTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');

      if (!link || !link.href) return;

      try {
        const linkUrl = new URL(link.href);
        const currentHost = window.location.hostname;

        // Check if it's an external link
        if (
          linkUrl.hostname !== currentHost &&
          !linkUrl.hostname.includes(currentHost) &&
          linkUrl.protocol.startsWith('http')
        ) {
          trackOutboundLink(link.href, {
            linkText: link.textContent || link.innerText || '',
            linkLocation: getElementLocation(link),
            linkType: getLinkType(link),
          });
        }
      } catch (error) {
        // Invalid URL, skip
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);
}

/**
 * Hook to track navigation between pages
 */
export function usePageNavigationTracking() {
  const pathname = usePathname();
  const previousPathname = useRef<string>(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      trackNavigation(previousPathname.current, pathname, {
        navigationType: 'click',
      });
      previousPathname.current = pathname;
    }
  }, [pathname]);
}

/**
 * Combined hook that enables all automatic tracking
 * Use this in your root layout for comprehensive tracking
 */
export function useComprehensiveTracking(options?: {
  trackLandingPage?: boolean;
  trackTimeOnPage?: boolean;
  trackScrollDepth?: boolean;
  trackOutboundLinks?: boolean;
  trackNavigation?: boolean;
  pageName?: string;
}) {
  const {
    trackLandingPage: enableLandingPage = true,
    trackTimeOnPage: enableTimeOnPage = true,
    trackScrollDepth: enableScrollDepth = true,
    trackOutboundLinks: enableOutboundLinks = true,
    trackNavigation: enableNavigation = true,
    pageName,
  } = options || {};

  if (enableLandingPage) {
    useLandingPageTracking();
  }

  if (enableTimeOnPage) {
    useTimeOnPageTracking(pageName);
  }

  if (enableScrollDepth) {
    useScrollDepthTracking(pageName);
  }

  if (enableOutboundLinks) {
    useOutboundLinkTracking();
  }

  if (enableNavigation) {
    usePageNavigationTracking();
  }
}

// Helper functions
function getElementLocation(element: HTMLElement): string {
  // Try to determine the section/location of the element
  const section = element.closest('nav, header, main, footer, section');

  if (!section) return 'unknown';

  // Check for common identifiers
  if (section.tagName === 'NAV') return 'navbar';
  if (section.tagName === 'HEADER') return 'header';
  if (section.tagName === 'FOOTER') return 'footer';

  // Check for ID or class
  if (section.id) return section.id;
  if (section.className) {
    const classes = section.className.split(' ');
    return classes[0] || 'unknown';
  }

  return section.tagName.toLowerCase();
}

function getLinkType(link: HTMLElement): 'social' | 'partner' | 'resource' | 'other' {
  const href = (link as HTMLAnchorElement).href.toLowerCase();
  const text = (link.textContent || '').toLowerCase();

  // Check for social media
  if (
    href.includes('facebook') ||
    href.includes('twitter') ||
    href.includes('linkedin') ||
    href.includes('instagram') ||
    href.includes('youtube') ||
    href.includes('github')
  ) {
    return 'social';
  }

  // Check for common resource types
  if (
    href.endsWith('.pdf') ||
    href.endsWith('.doc') ||
    href.endsWith('.docx') ||
    text.includes('download')
  ) {
    return 'resource';
  }

  return 'other';
}
