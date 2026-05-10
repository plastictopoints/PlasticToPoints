import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
}

export const Meta: React.FC<MetaProps> = ({
  title = "PlasticToPoints | Nepal's Leading Plastic Recycling Credits",
  description = "Join Nepal's largest community-driven plastic credit system. Scan, recycle, and earn points while making a global environmental impact.",
  keywords = "plastic recycling Nepal, PlasticToPoints, recycle plastic earn points, TerraSync, environmental impact, scrap to points",
  ogImage = "/lady1.png",
  canonicalUrl = "https://plastictopoints.app",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PlasticToPoints",
    "url": "https://plastictopoints.app",
    "logo": "https://plastictopoints.app/lady1.png",
    "sameAs": [
      "https://facebook.com/profile.php?id=61588993689857",
      "https://x.com/PlasticToPoints",
      "https://www.linkedin.com/in/plastic-to-points-2b325a409/"
    ],
    "description": description,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "plastictopoints@gmail.com",
      "contactType": "customer support"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Structured Data (JSON-LD) for AEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
