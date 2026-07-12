'use client';

import { useEffect } from 'react';
import { trackOutboundLink } from '@/lib/analytics';

/**
 * Hook to automatically track external link clicks.
 *
 * This is the only auto-tracking we run: GA4's built-in collection already
 * covers pageviews, landing pages, UTM attribution, scroll (90%), and
 * engagement time. Custom auto-events for those duplicated native data and
 * drowned out the deliberate signals (cta_click, outbound_link, form_submit).
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
 * Combined hook for automatic tracking.
 * Use this in your root layout.
 */
export function useComprehensiveTracking(options?: {
  trackOutboundLinks?: boolean;
}) {
  const { trackOutboundLinks: enableOutboundLinks = true } = options || {};

  useEffect(() => {
    if (!enableOutboundLinks) return;
  }, [enableOutboundLinks]);

  useOutboundLinkTracking();
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
