import React from 'react'
import MainSection from '@/components/layout/Section'
import { AnimatedArticle } from '@/components/layout/Article'
import { H2Title, H3Title } from '@/components/layout/Title'
import { NormalParagraph } from '@/components/layout/Paragraph'
import BlogGrid from '@/components/grids/BlogGrid'
import { blogQuery } from '@/constants/queries'
import { client } from '@/sanity/client'

const BlogPage = ({ blog }) => (
  <MainSection title='Blog' canonicalUrlPath='/blog'>
    <AnimatedArticle delay={0.1}>
      <H2Title>Blog</H2Title>
      <NormalParagraph>
        Writing about web development and performance, my personal experiences
        in this field, or simply random thoughts that cross my mind.
      </NormalParagraph>
    </AnimatedArticle>

    <AnimatedArticle delay={0.3}>
      <H3Title>Latest articles</H3Title>
      <BlogGrid data={blog} />
    </AnimatedArticle>
  </MainSection>
)

export async function getStaticProps() {
  const blogInfo = blogQuery()
  const blog = await client.fetch(blogInfo)

  return {
    props: {
      blog
    }
  }
}

export default BlogPage
