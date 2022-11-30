import React from 'react'
import MainSection from '@/components/layout/Section'
import { AnimatedArticleWithTitle } from '@/components/layout/Article'
import BlogGrid from '@/components/grids/BlogGrid'
import Paragraph from '@/components/layout/Paragraph'
import { blogQuery } from '@/constants/queries'
import { client } from '@/sanity/client'

const BlogPage = ({ blog }) => {
  return (
    <MainSection title='Blog' canonicalUrlPath='/blog'>
      <AnimatedArticleWithTitle
        title='Blog'
        delay={0.1}
        largeTitle
        titleTag='h2'
      >
        <Paragraph>
          Writing about web development and performance, my personal experiences
          in this field, or simply random thoughts that cross my mind.
        </Paragraph>
      </AnimatedArticleWithTitle>
      <AnimatedArticleWithTitle
        title='Latest articles'
        titleTag='h3'
        delay={0.3}
      >
        <BlogGrid data={blog} />
      </AnimatedArticleWithTitle>
    </MainSection>
  )
}

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
