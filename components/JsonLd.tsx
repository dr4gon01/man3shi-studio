export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.man3shistudio.com/#nirmesh",
        "name": "Nirmesh Gollamandala",
        "alternateName": "Man3shi",
        "jobTitle": "Creative Technologist",
        "url": "https://www.man3shistudio.com",
        "sameAs": [
          "https://www.instagram.com/man3shi.studio/",
          "https://www.linkedin.com/in/nirmesh-gollamandala/"
        ]
      },
      {
        "@type": "Organization",
        "name": "Man3shi Studio",
        "url": "https://www.man3shistudio.com",
        "logo": "https://www.man3shistudio.com/logo-man3shi.png",
        "founder": {
          "@id": "https://www.man3shistudio.com/#nirmesh"
        },
        "sameAs": [
          "https://www.instagram.com/man3shi.studio/"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}