import React from 'react'

const ArticleMetaInfo = ({ date, readingTime }) => (
  <div className='flex items-center gap-3'>
    <span className='text-xs text-black 2xl:text-sm dark:text-gray-400'>
      {date}
    </span>
    <span className='text-xs text-black underline 2xl:text-sm dark:text-gray-400'>
      {readingTime}
    </span>
  </div>
)

export default ArticleMetaInfo
