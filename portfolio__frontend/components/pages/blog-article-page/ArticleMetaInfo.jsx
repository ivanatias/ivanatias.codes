import { dateFormat } from '@/utils/helpers'

const ArticleMetaInfo = ({ publishedAt, readingTime }) => {
  const date = dateFormat(publishedAt)
  return (
    <div className='flex items-center gap-3'>
      <time
        dateTime={publishedAt}
        className='text-xs text-black 2xl:text-sm dark:text-gray-400'
      >
        {date}
      </time>
      <span className='text-xs text-black underline 2xl:text-sm dark:text-gray-400'>
        {readingTime}
      </span>
    </div>
  )
}

export default ArticleMetaInfo
