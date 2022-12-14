import React from 'react'
import { motion } from 'framer-motion'

const Article = ({ children }) => (
  <article className='flex flex-col w-full gap-4'>{children}</article>
)

const AnimatedArticle = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    <Article>{children}</Article>
  </motion.div>
)

export { Article, AnimatedArticle }
