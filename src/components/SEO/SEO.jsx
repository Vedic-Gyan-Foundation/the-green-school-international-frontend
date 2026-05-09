import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.greenschoolguwahati.com";
const SITE_NAME = "The Green School International";
const DEFAULT_IMAGE = `${SITE_URL}/assets/school_one.jpg`;
const DEFAULT_DESCRIPTION =
  "The Green School International is a CBSE-affiliated K-12 school in Sarusajai, Guwahati. Founded in 2018, we nurture global citizens through our 3S Formula — Sports, Sanskar, and Sustainability.";

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  path = "",
  type = "website",
  noIndex = false,
  jsonLd,
  keywords,
}) {
  const finalTitle = title
    ? `${title} · ${SITE_NAME}`
    : `${SITE_NAME} · CBSE School in Guwahati`;
  const url = `${SITE_URL}${path}`;
  const absoluteImage = image.startsWith("http")
    ? image
    : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
