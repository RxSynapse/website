/**
 * Pricing Configuration for RxFlow Subscriptions
 * Shared between marketing website and dashboard
 */

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number; // Price in INR
  stars: number; // Price in Telegram Stars (1 Star ≈ ₹1-2)
  duration: number; // Duration in days
  badge?: string;
  savings?: string;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1DAY',
    name: '1 Day Pass',
    description: 'Perfect for expiry day trading',
    price: 29,
    stars: 20,
    duration: 1,
    features: [
      'Unlimited alerts (all severities)',
      'Valid for 24 hours',
      'Perfect for weekly expiry days',
    ],
  },
  {
    id: '7DAY',
    name: '7 Day Pass',
    description: 'One full trading week',
    price: 149,
    stars: 100,
    duration: 7,
    savings: 'Save 28% vs daily',
    features: [
      'Unlimited alerts (all severities)',
      'Valid for 7 days',
      'Great for event-driven trading',
    ],
  },
  {
    id: '1MONTH',
    name: '1 Month',
    description: 'Most popular choice',
    price: 299,
    stars: 200,
    duration: 30,
    badge: '⭐ MOST POPULAR',
    savings: 'Save 65% vs daily',
    features: [
      'Unlimited alerts (all severities)',
      'Valid for 30 days',
      'Just ₹10/day',
      'Perfect for regular traders',
    ],
  },
  {
    id: '3MONTH',
    name: '3 Months',
    description: 'Serious trader commitment',
    price: 799,
    stars: 533,
    duration: 90,
    savings: 'Save 70% vs daily (₹8.8/day)',
    features: [
      'Unlimited alerts (all severities)',
      'Valid for 90 days',
      'Just ₹8.8/day',
      'Save ₹33/month vs monthly plan',
    ],
  },
  {
    id: '1YEAR',
    name: '1 Year',
    description: 'Professional trader choice',
    price: 2399,
    stars: 1600,
    duration: 365,
    badge: '💎 BEST VALUE',
    savings: 'Save 78% vs daily (₹6.5/day)',
    features: [
      'Unlimited alerts (all severities)',
      'Valid for 365 days',
      'Just ₹6.5/day',
      'Save ₹99/month vs monthly plan',
      'Best long-term value',
    ],
  },
];

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function formatStars(stars: number): string {
  return `${stars} ⭐`;
}
