import React from 'react'
import CustomLink from '@/components/CustomLink'
import { HiChevronRight } from 'react-icons/hi'
import { HiChevronLeft } from 'react-icons/hi'

const LinkToArticle = ({ slug, children }) => {
  return (
    <CustomLink href={`/blog/${slug}`}>
      <a className='flex items-center justify-center gap-1 text-sm font-bold text-black transition-colors duration-150 2xl:text-base hover:underline underline-offset-4 dark:text-gray-300 dark:hover:text-white'>
        {children}
      </a>
    </CustomLink>
  )
}

const SwitchArticle = ({ previousPost, nextPost, articleType = 'article' }) => {
  return (
    <div className='flex items-center justify-center gap-4 mt-10'>
      {previousPost && (
        <LinkToArticle slug={previousPost.slug.current}>
          <HiChevronLeft fontSize={20} />
          Previous {articleType}
        </LinkToArticle>
      )}
      {nextPost && (
        <LinkToArticle slug={nextPost.slug.current}>
          Next {articleType}
          <HiChevronRight fontSize={20} />
        </LinkToArticle>
      )}
    </div>
  )
}

export default SwitchArticle
