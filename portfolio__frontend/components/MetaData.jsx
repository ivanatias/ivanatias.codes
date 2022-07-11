import React from "react";
import Head from "next/head";

const MetaData = ({
  title,
  description,
  canonicalUrlPath,
  socialCardImage,
  contentType,
}) => {
  const defaultTitle = "Ivan Atias · Front-End Engineer, UI Designer";
  const defaultDescription =
    "Ivan Atias is a Front-End Engineer and UI Designer who enjoys a lot building good looking and functional websites and apps.";
  const defaultImage = "https://www.ivanatias.codes/card.png";
  const defaultOgType = "website";

  return (
    <Head>
      <title>{title ? `${title} - Ivan Atias` : defaultTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta name="description" content={description || defaultDescription} />
      <meta
        name="keywords"
        content="Frontend Developer, UI Designer, Ivan Atias, Portfolio, Blog"
      />
      <meta name="author" content="Ivan Atias" />
      <link
        rel="canonical"
        href={`https://www.ivanatias.codes${canonicalUrlPath || ""}`}
      />
      <meta
        property="og:url"
        content={`https://www.ivanatias.codes${canonicalUrlPath || ""}`}
      />
      <meta
        property="og:title"
        content={title ? `${title} - Ivan Atias` : defaultTitle}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Ivan Atias Website" />
      <meta
        name="twitter:title"
        content={title ? `${title} - Ivan Atias` : defaultTitle}
      />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta
        name="image"
        property="og:image"
        content={socialCardImage || defaultImage}
      />
      <meta name="twitter:image" content={socialCardImage || defaultImage} />
      <meta property="og:type" content={contentType || defaultOgType} />
    </Head>
  );
};

export default MetaData;
