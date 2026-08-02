import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  image = "/preview.png",
  url = "https://talal-hassan-portfolio.vercel.app",
}) {
  const fullTitle = `${title} | Talal Hassan`;

  const imageUrl = `https://talal-hassan-portfolio.vercel.app${image}`;

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Talal Hassan" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="format-detection" content="telephone=no" />

      {/* Google Search Console Verification */}
      <meta
        name="google-site-verification"
        content="15lW_aFAZ2hBtpTRtztdGVVstr1Y2Qp9kdVTnGExJl0"
      />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Talal Hassan Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Talal Hassan",
          url: "https://talal-hassan-portfolio.vercel.app/",
          image: imageUrl,
          jobTitle: "Front-End Developer",
          description:
            "Front-End Developer specializing in React, JavaScript, WordPress and responsive web development.",
          email: "mailto:talalhassan965@gmail.com",
          sameAs: [
            "https://github.com/talijan123",
            "https://linkedin.com/in/talal-undefined-85a63831a/"
          ]
        })}
      </script>
    </Helmet>
  );
}