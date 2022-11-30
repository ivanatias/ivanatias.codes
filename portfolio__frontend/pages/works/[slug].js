import React from 'react'
import MainSection from '@/components/layout/Section'
import { Article } from '@/components/layout/Article'
import WorkHeader from '@/components/pages/work-page/WorkHeader'
import WorkStack from '@/components/pages/work-page/WorkStack'
import WorkLinks from '@/components/pages/work-page/WorkLinks'
import WorkImage from '@/components/pages/work-page/WorkImage'
import Paragraph from '@/components/layout/Paragraph'
import { client } from '@/sanity/client'
import { worksQuery, workQuery } from '@/constants/queries'

const Work = ({ work }) => {
  return (
    <MainSection
      title={work.title}
      canonicalUrlPath={`/works/${work.slug.current}`}
    >
      <Article>
        <WorkHeader workTitle={work.title} />
        <Paragraph>{work.description}</Paragraph>
        <div className='flex flex-col gap-3 text-sm font-semibold text-black dark:text-white 2xl:text-base'>
          <WorkStack workStack={work.stack} />
          <WorkLinks githubUrl={work.githubUrl} projectUrl={work.projectUrl} />
        </div>
        <div className='grid grid-cols-1 gap-8'>
          {work.additionalImages.map((image) => (
            <WorkImage key={image.asset._id} image={image} />
          ))}
        </div>
      </Article>
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
