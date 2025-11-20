import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string;
}

const defaultKeywords =
  "RxSynapse, Reactive Synapse, AI in BFSI, AI-driven banking solutions, Financial services automation, AI-powered fintech, Digital transformation in banking, Regulatory compliance automation, AI risk management, Fraud detection AI, Financial data migration, AI analytics for finance, Automated financial reporting, AI chatbots for banking, Customer engagement AI, AI process optimization, Intelligent banking systems, Machine learning in finance, Cognitive computing for banks, AI-powered decision making, Financial predictive analytics, Smart banking technologies";

const SEO = ({
  title,
  description,
  url,
  image,
  keywords = defaultKeywords,
}: SEOProps) => {
  const siteUrl = "https://rxsynapse.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultImage = `${siteUrl}${image || "/images/og-image.jpg"}`;

  return (
    <Helmet>
      {/* ✅ Title & Meta Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* ✅ Open Graph Meta Tags */}
      <meta property="og:site_name" content="RxSynapse" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:secure_url" content={defaultImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - RxSynapse`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />

      {/* ✅ Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rxsynapse" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:image:alt" content={`${title} - RxSynapse`} />

      {/* ✅ JSON-LD Structured Data (Better for Search Ranking) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "RxSynapse",
          url: fullUrl,
          logo: `${siteUrl}/logo/rxsynapse-white-logo.png`,
          description: description,
          foundingDate: "2024",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN"
          },
          sameAs: [
            "https://facebook.com/rxsynapse",
            "https://linkedin.com/company/rxsynapse",
            "https://twitter.com/rxsynapse",
          ],
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "SoftwareApplication",
                name: "RxFlow",
                applicationCategory: "FinanceApplication",
                operatingSystem: "Web",
                description: "Real-time options intelligence and smart money tracking platform for Indian markets"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "SoftwareApplication",
                name: "RxCommunication",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                description: "IVR-less customer support and conversational AI platform for BFSI"
              }
            }
          ]
        })}
      </script>

      <link rel="preload" as="image" href={defaultImage} />
    </Helmet>
  );
};

export default SEO;
