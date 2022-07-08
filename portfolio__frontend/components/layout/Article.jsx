import React from "react";
import { motion } from "framer-motion";

const Article = ({ children, title, delay = 0 }) => {
  return (
    <motion.article
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
    </motion.article>
  );
};

export default Article;
