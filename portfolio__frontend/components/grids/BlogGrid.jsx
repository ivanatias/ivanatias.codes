import React from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
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
    <Link href={`/blog/${slug}`} passHref scroll={false}>
      <a>
        <div className='flex w-full gap-5 p-2 transition-colors duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-800/40'>
          <Image
            src={coverImage}
            placeholder='blur'
            blurDataURL={coverImage}
            alt={altText}
            width='48'
            height='48'
            className='flex-shrink-0 w-12 h-12'
          />
          <div className='flex flex-col gap-1'>
            <h3 className='text-base font-bold text-black 2xl:text-lg dark:text-gray-300'>
              {title}
            </h3>
            <p className='text-sm text-black dark:text-gray-300 2xl:text-base'>
              {excerpt}
            </p>
            <span className='text-xs text-black 2xl:text-sm dark:text-gray-400'>
              {date}
            </span>
          </div>
        </div>
      </a>
    </Link>
  )
}

const BlogGrid = ({ data }) => {
  return (
    <article className='grid grid-cols-1 gap-8'>
      {data.map((item) => (
        <GridItem
          key={item._id}
          coverImage={item.coverImage.image.asset.url}
          title={item.articleTitle}
          slug={item.slug.current}
          excerpt={item.excerpt}
          altText={item.coverImage.altText}
          publishedAt={item.publishDate}
        />
      ))}
    </article>
  )
}

export default BlogGrid
