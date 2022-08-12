import React from 'react'
import MainSection from '../../components/layout/Section'
import Article from '../../components/layout/Article'
import BlogGrid from '../../components/grids/BlogGrid'
import Paragraph from '../../components/layout/Paragraph'
import { blogQuery } from '../../constants/queries'
import { client } from '../../sanity/client'

const BlogPage = ({ blog }) => {
  return (
    <MainSection title='Blog' canonicalUrlPath='/blog'>
      <Article title='Blog' delay={0.1}>
        <Paragraph>
          Writing about web development and performance, my personal experiences
          in this field, or simply random thoughts that cross my mind.
        </Paragraph>
      </Article>
      <h3 className='text-base font-semibold text-black 2xl:text-lg dark:text-gray-100 mb-[-24px]'>
        Latest articles
      </h3>
      <BlogGrid data={blog} />
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
