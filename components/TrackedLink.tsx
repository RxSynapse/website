'use client';

import React from 'react';
import Link, { LinkProps } from 'next/link';
import { trackButtonClick } from '@/lib/analytics';

interface TrackedLinkProps extends Omit<LinkProps, 'onClick'> {
  /**
   * Name identifier for the link in analytics
   */
  trackingName: string;

  /**
   * Location/section where link appears
   */
  trackingLocation?: string;

  /**
   * Additional tracking parameters
   */
  trackingParams?: Record<string, any>;

  /**
   * React children
   */
  children: React.ReactNode;

  /**
   * Additional className
   */
  className?: string;

  /**
   * onClick handler
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Next.js Link with built-in analytics tracking
 *
 * @example
 * <TrackedLink
 *   href="/flow"
 *   trackingName="flow_nav_link"
 *   trackingLocation="navbar"
 * >
 *   RxFlow
 * </TrackedLink>
 */
export function TrackedLink({
  trackingName,
  trackingLocation,
  trackingParams,
  onClick,
  children,
  href,
  className,
  ...linkProps
}: TrackedLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const destination = typeof href === 'string' ? href : href.toString();

    // Track as button click
    trackButtonClick(trackingName, {
      buttonType: 'navigation',
      buttonLocation: trackingLocation,
      buttonDestination: destination,
      buttonText: typeof children === 'string' ? children : trackingName,
      ...trackingParams,
    });

    // Call original onClick if provided
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Link
      href={href}
      {...linkProps}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}
