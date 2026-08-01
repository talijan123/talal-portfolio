export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Talal Hassan",

    url: "https://talal-hassan-portfolio.vercel.app",

    image:
      "https://talal-hassan-portfolio.vercel.app/preview.png",

    jobTitle: "Front-End Developer",

    description:
      "Front-End Developer specializing in React, JavaScript, Tailwind CSS and WordPress.",

    email: "mailto:talalhassan965@gmail.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Abbottabad",
      addressCountry: "Pakistan",
    },

    knowsAbout: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "WordPress",
      "Git",
      "GitHub",
      "Amazon Product Research",
      "SEO",
    ],

    sameAs: [
      "https://github.com/talijan123",
      "https://linkedin.com/in/talal-undefined-85a63831a/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}