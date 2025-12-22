import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Comprehensive structured data for RxFlow page to improve SEO and rich snippets
 * Includes: SoftwareApplication, FAQPage, Product, AggregateRating schemas
 */
const FlowStructuredData: React.FC = () => {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RxFlow",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web, iOS, Android (via Telegram)",
    description:
      "India's first real-time options intelligence platform. Track unusual options activity, smart money flows, institutional trading, FII/DII movements across 528+ strikes in Nifty, BankNifty, FinNifty, MidcapNifty and top 15 stocks. Get instant alerts on Telegram.",
    url: "https://rxsynapse.com/flow",
    image: "https://rxsynapse.com/images/og-image.jpg",
    screenshot: "https://rxsynapse.com/images/og-image.jpg",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "3280",
      priceCurrency: "INR",
      priceSpecification: [
        {
          "@type": "PriceSpecification",
          price: "0",
          priceCurrency: "INR",
          name: "Free Tier",
          description:
            "Unlimited EXTREME alerts, 25 HIGH/day, 25 MEDIUM/day, 50 LOW/day. Forever free.",
        },
        {
          "@type": "PriceSpecification",
          price: "41",
          priceCurrency: "INR",
          name: "1 Day Pass",
          description: "Unlimited alerts for 24 hours. Perfect for expiry day trading.",
        },
        {
          "@type": "PriceSpecification",
          price: "205",
          priceCurrency: "INR",
          name: "7 Day Pass",
          description: "Unlimited alerts for one full trading week.",
        },
        {
          "@type": "PriceSpecification",
          price: "410",
          priceCurrency: "INR",
          name: "1 Month",
          description: "Unlimited alerts for 30 days. Just ₹13.6/day.",
        },
        {
          "@type": "PriceSpecification",
          price: "1093",
          priceCurrency: "INR",
          name: "3 Months",
          description: "Unlimited alerts for 90 days. Save 70% vs daily.",
        },
        {
          "@type": "PriceSpecification",
          price: "3280",
          priceCurrency: "INR",
          name: "1 Year",
          description: "Unlimited alerts for 365 days. Best value at ₹9/day.",
        },
      ],
    },
    featureList: [
      "Real-time unusual options activity detection",
      "528+ option strikes monitored live (Nifty, BankNifty, FinNifty, MidcapNifty, Top 15 stocks)",
      "Instant Telegram alerts with <2 second latency",
      "Smart money flow tracking - FII/DII, bulk deals, insider trades",
      "Volume spike detection (3x to 20x thresholds)",
      "Open Interest analysis with directional context",
      "Aggression score (buy-side vs sell-side pressure)",
      "7-day historical baseline comparison",
      "Custom watchlist with strike-level granularity",
      "Severity-based filtering (EXTREME, HIGH, MEDIUM, LOW)",
      "Trading hours filter (market hours only or 24/7)",
      "Free tier with unlimited EXTREME alerts forever",
      "Premium plans starting at ₹41/day via Telegram Stars",
      "No app downloads - works directly in Telegram",
      "Mobile, desktop, and web access",
    ],
    provider: {
      "@type": "Organization",
      name: "RxSynapse",
      url: "https://rxsynapse.com",
      logo: "https://rxsynapse.com/logo.png",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      sameAs: [
        "https://t.me/RxFlowBot",
        "https://twitter.com/rxsynapse",
        "https://linkedin.com/company/rxsynapse",
      ],
    },
    softwareVersion: "2.0",
    datePublished: "2024-01-15",
    dateModified: "2024-12-22",
    keywords:
      "options trading alerts, unusual options activity, smart money tracking, institutional flow, nifty options, banknifty options, telegram trading bot, free options alerts india",
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How accurate are RxFlow's options trading alerts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RxFlow uses sophisticated algorithms with 7-day historical baseline analysis to filter out market noise. Each alert is scored 0-100 based on 10+ parameters including volume spike magnitude, OI changes, aggression patterns, and premium movements. EXTREME severity alerts represent the top 1% of unusual activity. Data comes directly from NSE/BSE via Angel One's real-time feed with <2 second latency.",
        },
      },
      {
        "@type": "Question",
        name: "Is RxFlow free to use for options trading?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! RxFlow offers a generous free tier with unlimited EXTREME severity alerts forever (top 1% of unusual activity), plus 25 HIGH alerts/day, 25 MEDIUM alerts/day, and 50 LOW alerts/day. No credit card required. Premium plans start at ₹41/day (₹410/month) for unlimited alerts across all severity levels.",
        },
      },
      {
        "@type": "Question",
        name: "Which options strikes does RxFlow monitor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RxFlow monitors 528+ option strikes in real-time: Nifty (21 strikes), BankNifty (21 strikes), FinNifty (21 strikes), MidcapNifty (21 strikes), and 15 top stocks (RELIANCE, SBIN, HDFCBANK, INFY, TCS, ICICIBANK, KOTAKBANK, ITC, HINDUNILVR, BHARTIARTL, BAJFINANCE, LT, ASIANPAINT, AXISBANK, TITAN) with 12 strikes each. Strikes are dynamically selected around current spot prices.",
        },
      },
      {
        "@type": "Question",
        name: "How fast are options alerts delivered on Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RxFlow delivers alerts with <2 second average latency from detection. Real-time tick data is processed via Angel One's WebSocket feed, algorithms run in-memory, and alerts are sent instantly to Telegram. You often receive alerts before they appear on trading platforms or NSE's website.",
        },
      },
      {
        "@type": "Question",
        name: "Is RxFlow better than Unusual Whales or Bloomberg Terminal for Indian options?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RxFlow is specifically designed for Indian markets (NSE/BSE) with focus on Nifty, BankNifty, FinNifty, MidcapNifty and Indian stocks. Unusual Whales only covers US markets. Bloomberg Terminal costs ₹20 lakh+/month while RxFlow starts at ₹410/month with a free tier. RxFlow delivers alerts via Telegram with 2-minute setup vs Bloomberg's days of training.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize which options alerts I receive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Use /settings in Telegram to customize: (1) Severity levels (choose EXTREME, HIGH, MEDIUM, LOW), (2) Trading hours filter (market hours 9:15 AM - 3:30 PM IST or 24/7), (3) Custom watchlist (select specific indices and stocks, even specific strikes). Changes apply immediately.",
        },
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "RxFlow - Real-Time Options Intelligence Platform",
    description:
      "Institutional-grade options trading intelligence for retail traders. Track unusual options activity, smart money flows, FII/DII data in real-time via Telegram.",
    brand: {
      "@type": "Brand",
      name: "RxSynapse",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://flow.rxsynapse.com",
      priceValidUntil: "2025-12-31",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rxsynapse.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "RxFlow - Options Trading Alerts",
        item: "https://rxsynapse.com/flow",
      },
    ],
  };

  try {
    return (
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(softwareApplicationSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
    );
  } catch (error) {
    console.error('Schema generation failed:', error);
    return null; // Graceful degradation
  }
};

export default FlowStructuredData;
