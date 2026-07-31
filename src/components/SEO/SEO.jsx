import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  image = "/preview.png",
  url = "https://your-domain.vercel.app",
}) {
  const fullTitle = `${title} | Talal Hassan`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="author"
        content="Talal Hassan"
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="theme-color"
        content="#2563eb"
      />

      <link
        rel="canonical"
        href={url}
      />

      {/* Open Graph */}

      <meta property="og:type" content="website" />

      <meta property="og:title" content={fullTitle} />

      <meta
        property="og:description"
        content={description}
      />

      <meta property="og:image" content={image} />

      <meta property="og:url" content={url} />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />
    </Helmet>
  );
}