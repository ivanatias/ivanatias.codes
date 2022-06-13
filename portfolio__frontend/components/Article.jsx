import React from "react";

import { motion } from "framer-motion";

const Article = ({ children, title, delay = 0 }) => {
  return (
    <motion.article
      className="w-full flex flex-col gap-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <h2 className="relative text-black w-fit dark:text-gray-100 font-bold text-xl md:text-2xl">
        {title}
      </h2>
      {children}
    </motion.article>
  );
};

export default Article;
