import React from 'react'
import Image from 'next/future/image'
import { Article } from '@/components/layout/Article'
import CustomLink from '@/components/CustomLink'
import Paragraph from '@/components/layout/Paragraph'
import Title from '@/components/layout/Title'
import { getImageDimensions } from '@sanity/asset-utils'

const GridItem = ({ thumbnail, title, overview, slug }) => {
  const { width, height } = getImageDimensions(thumbnail)
  return (
    <CustomLink href={`/works/${slug}`}>
      <a>
        <div className='flex flex-col items-center justify-center lg:transition-transform lg:duration-300 lg:hover:scale-110'>
          <Image
            src={thumbnail}
            alt={title}
            sizes='(max-width: 768px) 100vw, 50vw'
            width={width}
            height={height}
            className='w-full h-auto rounded-lg'
          />
          <div className='flex flex-col items-center justify-center w-full gap-1 mt-3'>
            <Title titleTag='h3' titleClass='small-title'>
              {title}
            </Title>
            <Paragraph pClass='small-paragraph'>{overview}</Paragraph>
          </div>
        </div>
      </a>
    </CustomLink>
  )
}

const WorksGrid = ({ data }) => (
  <section className='grid grid-cols-1 gap-8 md:grid-cols-2'>
    {data.map((item) => (
      <Article key={item._id}>
        <GridItem
          thumbnail={item.thumbNail.asset.url}
          title={item.title}
          overview={item.overview}
          slug={item.slug.current}
        />
      </Article>
    ))}
  </section>
)

export default WorksGrid
