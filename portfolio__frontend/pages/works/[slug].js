import React from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import CustomLink from '@/components/CustomLink'
import MainSection from '@/components/layout/Section'
import Paragraph from '@/components/layout/Paragraph'
import { HiChevronRight } from 'react-icons/hi'
import { AiOutlineGithub, AiOutlineEye } from 'react-icons/ai'
import { client } from '@/sanity/client'
import { worksQuery, workQuery } from '@/constants/queries'
import { getImageDimensions } from '@sanity/asset-utils'

const Work = ({ work }) => {
  return (
    <MainSection
      title={work.title}
      canonicalUrlPath={`/works/${work.slug.current}`}
    >
      <article className='flex flex-col gap-5'>
        <div className='flex items-center gap-2'>
          <CustomLink href='/works'>
            <a>
              <h2 className='text-sm font-bold text-black dark:text-white 2xl:text-base'>
                Works
              </h2>
            </a>
          </CustomLink>
          <HiChevronRight
            fontSize={20}
            className='text-black font-bold dark:text-white ml-[-4px]'
          />
          <h3 className='text-base font-bold text-pink-800 dark:text-pink-600 2xl:text-lg'>
            {work.title}
          </h3>
        </div>
        <Paragraph>{work.description}</Paragraph>
        <div className='flex flex-col gap-3 text-sm font-semibold text-black dark:text-white 2xl:text-base'>
          <div className='flex items-center gap-3'>
            <span className='inline-block px-4 py-1 text-xs font-semibold text-white bg-indigo-800 rounded-lg 2xl:text-sm dark:bg-indigo-600'>
              Stack
            </span>
            <div className='flex flex-wrap items-center gap-1'>
              {work.stack.map((item) => (
                <span
                  key={item._key}
                  className='text-xs text-black underline dark:text-gray-300 2xl:text-sm'
                >
                  {item.tech}
                </span>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-3 mt-2'>
            <a
              href={work.githubUrl}
              target='_blank'
              rel='noreferrer noopener'
              className='flex items-center gap-2 hover:underline w-fit'
            >
              <AiOutlineGithub fontSize={24} /> Source code
            </a>
            <a
              href={work.projectUrl}
              target='_blank'
              rel='noreferrer noopener'
              className='flex items-center gap-2 hover:underline w-fit'
            >
              <AiOutlineEye fontSize={24} /> Live project
            </a>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-8'>
          {work.additionalImages.map((image) => {
            const { width, height } = getImageDimensions(image)
            return (
              <Image
                key={image.asset._id}
                src={image.asset.url}
                width={width}
                height={height}
                sizes='100vw'
                alt='Work screenshot'
                className='w-full h-auto rounded-lg'
              />
            )
          })}
        </div>
      </article>
    </MainSection>
  )
}

export async function getStaticPaths() {
  const worksInfo = worksQuery()
  const works = await client.fetch(worksInfo)

  const paths = works.map((work) => ({
    params: { slug: work.slug.current }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const workInfo = workQuery(params.slug)
  const work = await client.fetch(workInfo)

  return {
    props: {
      work
    }
  }
}

export default Work
