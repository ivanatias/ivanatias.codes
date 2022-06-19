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
  ogImage,
  twitterImage,
}) => {
  return (
    <>
      <Head>
        {title && (
          <title>{title} - Ivan Atias · Frontend Developer, UI Designer</title>
        )}
        {title && (
          <meta
            name="og:title"
            content={`${title} - Ivan Atias · Frontend Developer, UI Designer`}
          />
        )}
        {title && (
          <meta
            name="twitter:title"
            content={`${title} - Ivan Atias · Frontend Developer, UI Designer`}
          />
        )}
        {ogImage && <meta name="og:image" content={ogImage} />}
        {twitterImage && <meta name="twitter:image" content={twitterImage} />}

        <link
          rel="canonical"
          href={`https://ivanatias.codes${canonicalUrlPath || "/"}`}
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
