import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

const SEO = ({ title, description, url, image }: SEOProps) => {
  const siteUrl = "https://rxsynapse.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultImage = `${siteUrl}/images/og-image-square.jpg`;

  return (
    <Helmet>
      {/* ✅ Dynamic Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* ✅ Open Graph Meta Tags (For Facebook, LinkedIn) */}
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

      {/* ✅ JSON-LD Structured Data */}
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
    </Helmet>
  );
};

export default SEO;
