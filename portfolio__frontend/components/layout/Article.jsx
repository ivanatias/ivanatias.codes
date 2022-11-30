import React from 'react'
import Title from '@/components/layout/Title'
import { motion } from 'framer-motion'

export const Article = ({ children }) => (
  <article className='flex flex-col w-full gap-4'>{children}</article>
)

export const ArticleWithTitle = ({ children, title, largeTitle, titleTag }) => (
  <Article>
    <Title title={title} largeTitle={largeTitle} titleTag={titleTag} />
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

export const AnimatedArticleWithTitle = ({
  children,
  title,
  largeTitle,
  titleTag,
  delay = 0
}) => (
  <AnimatedArticle delay={delay}>
    <Title title={title} largeTitle={largeTitle} titleTag={titleTag} />
    {children}
  </AnimatedArticle>
)
