'use client';

import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { trackButtonClick, trackCTAClick } from '@/lib/analytics';

interface TrackedButtonProps extends ButtonProps {
  /**
   * Name identifier for the button in analytics
   */
  trackingName: string;

  /**
   * Type of button for categorization
   */
  trackingType?: 'cta' | 'navigation' | 'action' | 'social' | 'download';

  /**
   * Location/section where button appears
   */
  trackingLocation?: string;

  /**
   * Destination URL or action description
   */
  trackingDestination?: string;

  /**
   * Is this a primary CTA button?
   */
  isCTA?: boolean;

  /**
   * Additional tracking parameters
   */
  trackingParams?: Record<string, any>;

  /**
   * Link target (for external links)
   */
  target?: string;

  /**
   * Link rel attribute (for external links)
   */
  rel?: string;
}

/**
 * Material-UI Button with built-in analytics tracking
 *
 * @example
 * <TrackedButton
 *   trackingName="get_started_hero"
 *   trackingType="cta"
 *   trackingLocation="hero"
 *   trackingDestination="/flow"
 *   isCTA={true}
 *   variant="contained"
 *   href="/flow"
 * >
 *   Get Started
 * </TrackedButton>
 */
export function TrackedButton({
  trackingName,
  trackingType = 'action',
  trackingLocation,
  trackingDestination,
  isCTA = false,
  trackingParams,
  onClick,
  children,
  ...buttonProps
}: TrackedButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Track the click
    const params = {
      buttonType: trackingType,
      buttonLocation: trackingLocation,
      buttonDestination: trackingDestination,
      buttonText: typeof children === 'string' ? children : trackingName,
      ...trackingParams,
    };

    if (isCTA) {
      trackCTAClick(trackingName, {
        ctaLocation: trackingLocation,
        ctaDestination: trackingDestination,
        ctaText: typeof children === 'string' ? children : trackingName,
        ...trackingParams,
      });
    } else {
      trackButtonClick(trackingName, params);
    }

    // Call original onClick if provided
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Button {...buttonProps} onClick={handleClick}>
      {children}
    </Button>
  );
}

/**
 * Pre-configured CTA Button for primary actions
 */
export function TrackedCTAButton(props: Omit<TrackedButtonProps, 'isCTA' | 'trackingType'>) {
  return (
    <TrackedButton
      {...props}
      isCTA={true}
      trackingType="cta"
      variant={props.variant || 'contained'}
      color={props.color || 'primary'}
    />
  );
}

/**
 * Pre-configured Navigation Button
 */
export function TrackedNavButton(props: Omit<TrackedButtonProps, 'trackingType'>) {
  return (
    <TrackedButton
      {...props}
      trackingType="navigation"
      variant={props.variant || 'text'}
    />
  );
}

/**
 * Pre-configured Social Button
 */
export function TrackedSocialButton(props: Omit<TrackedButtonProps, 'trackingType'>) {
  return (
    <TrackedButton
      {...props}
      trackingType="social"
      variant={props.variant || 'outlined'}
    />
  );
}
