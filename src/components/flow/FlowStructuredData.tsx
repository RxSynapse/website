import React from "react";

/**
 * Comprehensive structured data for RxSynapse page to improve SEO and rich snippets
 * Includes: SoftwareApplication schema
 */
const FlowStructuredData: React.FC = () => {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RxSynapse",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web, iOS, Android (via Telegram)",
    description:
      "India's first real-time options intelligence platform. Track unusual options activity, smart money flows, institutional trading, FII/DII movements across 528+ strikes in Nifty, BankNifty, FinNifty, MidcapNifty and top 15 stocks. Get instant alerts on Telegram.",
    url: "https://rxsynapse.com",
    image: "https://rxsynapse.com/images/rxflow/og-image.jpg",
    screenshot: "https://rxsynapse.com/images/rxflow/og-image.jpg",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "2399",
      priceCurrency: "INR",
    },
    author: {
      "@type": "Organization",
      name: "RxSynapse",
      url: "https://rxsynapse.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(softwareApplicationSchema),
      }}
    />
  );
};

export default FlowStructuredData;
