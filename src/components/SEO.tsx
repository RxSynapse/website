import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>RxSynapse | AI-Powered BFSI Innovation</title>
      <meta
        name="description"
        content="RxSynapse leverages AI to transform BFSI with automation, integration, migration, strategic analysis, and reporting."
      />
      <meta
        name="keywords"
        content="AI, BFSI, Automation, Integration, Migration, AI Strategy"
      />
      <meta name="author" content="RxSynapse" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta
        property="og:title"
        content="RxSynapse | AI-Powered BFSI Transformation"
      />
      <meta
        property="og:description"
        content="Leading AI-driven solutions for BFSI with automation, integration, and strategic analysis."
      />
      <meta property="og:image" content="/images/og-image.jpg" />
      <meta property="og:url" content="https://rxsynapse.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="og:image" content="/images/og-image-square.jpg" />
      <meta property="og:image:width" content="1080" />
      <meta property="og:image:height" content="1080" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="RxSynapse | AI-Powered BFSI Transformation"
      />
      <meta
        name="twitter:description"
        content="Leading AI-driven solutions for BFSI."
      />
      <meta name="twitter:image" content="/images/twitter-card.jpg" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "RxSynapse",
          url: "https://rxsynapse.com",
          logo: "https://rxsynapse.com/logo.png",
          description:
            "RxSynapse provides AI-driven solutions for BFSI with automation, integration, migration, and strategic analysis.",
          sameAs: [
            "https://linkedin.com/company/rxsynapse",
            "https://twitter.com/rxsynapse",
          ],
        })}
      </script>
    </Helmet>
  );
}
