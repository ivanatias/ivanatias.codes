import Image from 'next/future/image'
import Title from '@/components/layout/Title'

const ArticleHeader = ({ coverImageUrl, coverImageAltText, articleTitle }) => (
  <div className='flex flex-col w-full gap-3'>
    <Image
      src={coverImageUrl}
      alt={coverImageAltText}
      width='56'
      height='56'
      className='flex-shrink-0 w-14 h-14'
    />
    <Title titleTag='h2' titleClass='large-title'>
      {articleTitle}
    </Title>
  </div>
)

export default ArticleHeader
