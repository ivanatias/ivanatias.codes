import React from 'react'
import MainSection from '@/components/layout/Section'
import {
  AnimatedArticleWithTitle,
  AnimatedArticle
} from '@/components/layout/Article'
import Paragraph from '@/components/layout/Paragraph'
import WorksGrid from '@/components/grids/WorksGrid'
import { worksQuery } from '@/constants/queries'
import { client } from '@/sanity/client'

const Works = ({ works }) => {
  return (
    <MainSection title='Works' canonicalUrlPath='/works'>
      <AnimatedArticleWithTitle title='Works' delay={0.1}>
        <Paragraph>
          These are some of my favorite projects that I have built, each one of
          them taught me different things during their development process.
        </Paragraph>
      </AnimatedArticleWithTitle>
      <AnimatedArticle delay={0.3}>
        <WorksGrid data={works} />
      </AnimatedArticle>
    </MainSection>
  )
}

export async function getStaticProps() {
  const worksInfo = worksQuery()
  const works = await client.fetch(worksInfo)

  return {
    props: {
      works
    }
  }
}

export default Works
