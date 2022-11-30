import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/future/image'
import MainSection from '@/components/layout/Section'
import { Article } from '@/components/layout/Article'
import SwitchArticle from '@/components/SwitchArticle'
import CustomPortableText from '@/components/sanity-block-contents/CustomPortableText'
const DynamicSocialShare = dynamic(() => import('@/components/SocialShare'))
import {
  blogPostQuery,
  blogPostReadingTimeQuery,
  blogQuery
} from '@/constants/queries'
import { client } from '@/sanity/client'
import { dateFormat, readingTimeFormat } from '@/utils/helpers'

const BlogArticle = ({
  currentPost,
  previousPost,
  nextPost,
  readingTime,
  date
}) => {
  return (
    <MainSection
      title={currentPost.articleTitle}
      description={currentPost.excerpt}
      canonicalUrlPath={`/blog/${currentPost.slug.current}`}
      socialCardImage={currentPost.socialShareImage.asset.url}
      contentType='article'
    >
      <Article>
        <div className='flex flex-col w-full gap-3'>
          <Image
            src={currentPost.coverImage.image.asset.url}
            alt={currentPost.coverImage.altText}
            width='56'
            height='56'
            className='flex-shrink-0 w-14 h-14'
          />
          <h2 className='text-2xl font-bold text-black dark:text-gray-100 2xl:text-3xl'>
            {currentPost.articleTitle}
          </h2>
        </div>
        <div className='flex items-center gap-3'>
          <span className='text-xs text-black 2xl:text-sm dark:text-gray-400'>
            {date}
          </span>
          <span className='text-xs text-black underline 2xl:text-sm dark:text-gray-400'>
            {readingTime}
          </span>
        </div>
        <CustomPortableText value={currentPost.articleBody} />
        <SwitchArticle previousPost={previousPost} nextPost={nextPost} />
        <DynamicSocialShare slug={currentPost.slug.current} />
      </Article>
    </MainSection>
  )
}

export async function getStaticPaths() {
  const blogInfo = blogQuery()
  const blogPosts = await client.fetch(blogInfo)

  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug.current }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postInfo = blogPostQuery(params.slug)
  const readingTimeInfo = blogPostReadingTimeQuery(params.slug)
  const { currentPost, previousPost, nextPost } = await client.fetch(postInfo)
  const { estimatedReadingTime } = await client.fetch(readingTimeInfo)

  const readingTimeText = readingTimeFormat(estimatedReadingTime)
  const date = dateFormat(currentPost.publishDate)

  return {
    props: {
      currentPost,
      previousPost,
      nextPost,
      readingTime: readingTimeText,
      date
    }
  }
}

export default BlogArticle
