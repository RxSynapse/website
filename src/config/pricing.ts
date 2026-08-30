/**
 * Pricing Configuration for RxSynapse Subscriptions
 * Shared between marketing website and dashboard
 */

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number; // Price in INR (GST-inclusive)
  duration: number; // Duration in days
  badge?: string;
  savings?: string;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '3MONTH',
    name: '3 Months',
    description: 'Serious trader commitment',
    price: 799,
    duration: 90,
    badge: '⭐ MOST POPULAR',
    savings: 'Just ₹8.9/day',
    features: [
      'Unlimited alerts (all severities)',
      'Valid for 90 days',
      'Preferred expiries & outcome tracking',
      'Custom watchlist (strike-level)',
      'Smart money correlation alerts',
      'Perfect for regular traders',
    ],
  },
  {
    id: '1YEAR',
    name: '1 Year',
    description: 'Professional trader choice',
    price: 2399,
    duration: 365,
    badge: '💎 BEST VALUE',
    savings: 'Save 25% vs 3-month plan (₹6.6/day)',
    features: [
      'Unlimited alerts (all severities)',
      'Valid for 365 days',
      'Preferred expiries & outcome tracking',
      'Custom watchlist (strike-level)',
      'Smart money correlation alerts',
      'Performance insights & analytics',
      'Save ₹797 vs four 3-month plans',
      'Best long-term value',
    ],
  },
];

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}
