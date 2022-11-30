import React from 'react'
import Image from 'next/future/image'
import { LargeTitle } from '@/components/layout/Title'

const ArticleHeader = ({ coverImageUrl, coverImageAltText, articleTitle }) => (
  <div className='flex flex-col w-full gap-3'>
    <Image
      src={coverImageUrl}
      alt={coverImageAltText}
      width='56'
      height='56'
      className='flex-shrink-0 w-14 h-14'
    />
    <LargeTitle titleTag='h2'>{articleTitle}</LargeTitle>
  </div>
)

export default ArticleHeader
