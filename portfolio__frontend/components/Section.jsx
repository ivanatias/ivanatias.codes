import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Section = ({
  children,
  title,
  canonicalUrlPath,
  socialCardImage,
  contentType,
}) => {
  return (
    <>
      <Head>
        {title && (
          <>
            <title>{title} - Ivan Atias</title>
            <meta property="og:title" content={`${title} - Ivan Atias`} />
            <meta name="twitter:title" content={`${title} - Ivan Atias`} />
          </>
        )}
        <meta
          property="og:image"
          content={
            socialCardImage ||
            "https://www.ivanatias.codes/ivanatiasprofile.webp"
          }
        />
        <meta
          name="twitter:image"
          content={
            socialCardImage ||
            "https://www.ivanatias.codes/ivanatiasprofile.webp"
          }
        />
        <meta property="og:type" content={contentType || "website"} />
        <meta
          property="og:url"
          content={`https://www.ivanatias.codes${canonicalUrlPath || ""}`}
        />
        <link
          rel="canonical"
          href={`https://www.ivanatias.codes${canonicalUrlPath || ""}`}
        />
      </Head>
      <motion.section
        className="flex flex-col gap-10"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
      >
        {children}
      </motion.section>
    </>
  );
};

export default Section;
