import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string;
}

const defaultKeywords =
  "AI in BFSI, AI-driven BFSI solutions, AI in financial services, AI-powered banking solutions, AI automation in fintech, Fintech automation, BFSI digital transformation, AI automation for banking, AI-driven compliance automation, Financial process automation, AI in risk management, AI-powered risk assessment, AI for fraud detection in finance, AI for regulatory compliance, BFSI compliance automation, AI risk analysis for banks, AI for financial data migration, AI-driven data analytics for BFSI, Secure data migration for BFSI, AI-powered financial reporting, Automated reporting for banks, AI-driven strategic analysis in BFSI, AI chatbots for BFSI, AI in customer engagement for banks";

const SEO = ({
  title,
  description,
  url,
  image,
  keywords = defaultKeywords,
}: SEOProps) => {
  const siteUrl = "https://rxsynapse.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultImage = `${siteUrl}/images/og-image-square.jpg`;

  return (
    <Helmet>
      {/* ✅ Title & Meta Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* ✅ Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* ✅ Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* ✅ JSON-LD Structured Data (Better for Search Ranking) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "RxSynapse",
          url: fullUrl,
          logo: `${siteUrl}/logo.png`,
          description: description,
          sameAs: [
            "https://linkedin.com/company/rxsynapse",
            "https://twitter.com/rxsynapse",
          ],
        })}
      </script>

      <link rel="preload" as="image" href={defaultImage} />
    </Helmet>
  );
};

export default SEO;
