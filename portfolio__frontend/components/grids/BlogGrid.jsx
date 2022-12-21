import React from 'react'
import { Article } from '@/components/layout/Article'
import Image from 'next/future/image'
import CustomLink from '@/components/CustomLink'
import Title from '@/components/layout/Title'
import { SmallParagraph } from '@/components/layout/Paragraph'
import { dateFormat } from '@/utils/helpers'

const GridItem = ({
  coverImage,
  altText,
  title,
  slug,
  excerpt,
  publishedAt
}) => {
  const date = dateFormat(publishedAt)
  return (
    <CustomLink href={`/blog/${slug}`}>
      <a>
        <div className='flex w-full gap-5 p-2 transition-colors duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-800/40'>
          <Image
            src={coverImage}
            alt={altText}
            width='48'
            height='48'
            className='flex-shrink-0 w-12 h-12'
          />
          <div className='flex flex-col gap-1'>
            <Title titleTag='h3' titleClass='small-title'>
              {title}
            </Title>
            <SmallParagraph>{excerpt}</SmallParagraph>
            <time
              dateTime={publishedAt}
              className='text-xs text-black 2xl:text-sm dark:text-gray-400'
            >
              {date}
            </time>
          </div>
        </div>
      </a>
    </CustomLink>
  )
}

const BlogGrid = ({ data }) => (
  <section className='grid grid-cols-1 gap-8'>
    {data.map((item) => (
      <Article key={item._id}>
        <GridItem
          coverImage={item.coverImage.image.asset.url}
          title={item.articleTitle}
          slug={item.slug.current}
          excerpt={item.excerpt}
          altText={item.coverImage.altText}
          publishedAt={item.publishDate}
        />
      </Article>
    ))}
  </section>
)

export default BlogGrid
