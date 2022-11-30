import React from 'react'
import { motion } from 'framer-motion'

export const Article = ({ children }) => (
  <article className='flex flex-col w-full gap-4'>{children}</article>
)

export const ArticleWithTitle = ({ children, title }) => (
  <Article>
    <h2 className='text-xl font-bold text-black dark:text-gray-100 md:text-2xl'>
      {title}
    </h2>
    {children}
  </Article>
)

export const AnimatedArticle = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    <Article>{children}</Article>
  </motion.div>
)

export const AnimatedArticleWithTitle = ({ children, title, delay = 0 }) => (
  <AnimatedArticle delay={delay}>
    <h2 className='text-xl font-bold text-black dark:text-gray-100 md:text-2xl'>
      {title}
    </h2>
    {children}
  </AnimatedArticle>
)
