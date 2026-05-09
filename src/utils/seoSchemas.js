// Structured data (JSON-LD) presets used across pages.
// Reference: https://schema.org

const SITE_URL = "https://www.greenschoolguwahati.com";

export const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "The Green School International",
  alternateName: "TGSI Guwahati",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  image: `${SITE_URL}/assets/school_one.jpg`,
  description:
    "CBSE-affiliated K-12 school in Sarusajai, Guwahati, founded in 2018. Holistic education through Sports, Sanskar, and Sustainability — the 3S Formula.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mahapurush Madhabdev Path, Nalapara, Sarusajai",
    addressLocality: "Guwahati",
    addressRegion: "Assam",
    postalCode: "781040",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.10387,
    longitude: 91.75879,
  },
  telephone: "+91-9387130617",
  email: "thegreenschoolinternational@gmail.com",
  foundingDate: "2018",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "CBSE Affiliation No.",
    value: "230317",
  },
  sameAs: [
    "https://www.facebook.com/greenschoolinternational/",
    "https://www.instagram.com/the_green_school_international",
    "https://www.youtube.com/@thegreenschoolinternational",
    "https://www.linkedin.com/company/the-green-school-international/",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "The Green School International",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const articleSchema = ({
  title,
  description,
  image,
  datePublished,
  author = "The Green School International",
  path,
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: image?.startsWith("http") ? image : `${SITE_URL}${image || ""}`,
  datePublished,
  author: {
    "@type": "Organization",
    name: author,
  },
  publisher: {
    "@type": "Organization",
    name: "The Green School International",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/assets/logo.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}`,
  },
});

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "School",
    name: "The Green School International",
    telephone: "+91-9387130617",
    email: "thegreenschoolinternational@gmail.com",
    address: schoolSchema.address,
  },
};

export const faqSchema = (qa) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: qa.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
});
