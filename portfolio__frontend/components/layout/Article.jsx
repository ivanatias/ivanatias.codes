import React from "react";
import { LazyMotion, m } from "framer-motion";

const loadFeatures = () =>
  import("../../constants/animateFeatures").then((res) => res.default);

const Article = ({ children, title, delay = 0 }) => {
  return (
    <LazyMotion features={loadFeatures} strict>
      <m.article
        className="flex flex-col w-full gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay }}
      >
        {title && (
          <h2 className="text-xl font-bold text-black dark:text-gray-100 md:text-2xl">
            {title}
          </h2>
        )}
        {children}
      </m.article>
    </LazyMotion>
  );
};

export default Article;
