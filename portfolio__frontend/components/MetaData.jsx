import React from "react";
import Head from "next/head";

const MetaData = ({
  title,
  canonicalUrlPath,
  socialCardImage,
  contentType,
}) => {
  const defaultTitle = "Ivan Atias · Frontend Developer, UI Designer";
  const defaultImage = "https://www.ivanatias.codes/ivanatiasprofile.webp";
  const defaultOgType = "website";

  return (
    <Head>
      <title>{title ? `${title} - Ivan Atias` : defaultTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Ivan Atias is a Frontend Developer and UI Designer who enjoys a lot building good looking and functional websites and apps."
      />
      <meta
        name="keywords"
        content="Frontend Developer, UI Designer, Ivan Atias, Portfolio"
      />
      <meta name="author" content="Ivan Atias" />
      <meta
        property="og:title"
        content={title ? `${title} - Ivan Atias` : defaultTitle}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Ivan Atias Website" />
      <meta
        name="twitter:title"
        content={title ? `${title} - Ivan Atias` : defaultTitle}
      />
      <meta
        name="image"
        property="og:image"
        content={socialCardImage || defaultImage}
      />
      <meta name="twitter:image" content={socialCardImage || defaultImage} />
      <meta property="og:type" content={contentType || defaultOgType} />
      <meta
        property="og:url"
        content={`https://www.ivanatias.codes${canonicalUrlPath || ""}`}
      />
      <link
        rel="canonical"
        href={`https://www.ivanatias.codes${canonicalUrlPath || ""}`}
      />
      <meta charSet="UTF-8" />
    </Head>
  );
};

export default MetaData;
