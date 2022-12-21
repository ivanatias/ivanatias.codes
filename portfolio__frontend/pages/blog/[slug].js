import MainSection from '@/components/layout/Section'
import { Article } from '@/components/layout/Article'
import ArticleHeader from '@/components/pages/blog-article-page/ArticleHeader'
import ArticleMetaInfo from '@/components/pages/blog-article-page/ArticleMetaInfo'
import SwitchArticle from '@/components/SwitchArticle'
import SocialShare from '@/components/SocialShare'
import CustomPortableText from '@/components/sanity-block-contents/CustomPortableText'
import {
  blogPostQuery,
  blogPostReadingTimeQuery,
  blogQuery
} from '@/constants/queries'
import { client } from '@/sanity/client'
import { readingTimeFormat } from '@/utils/helpers'

const BlogArticle = ({
  currentPost,
  previousPost,
  nextPost,
  readingTime,
  date
}) => (
  <MainSection
    title={currentPost.articleTitle}
    description={currentPost.excerpt}
    canonicalUrlPath={`/blog/${currentPost.slug.current}`}
    socialCardImage={currentPost.socialShareImage.asset.url}
    contentType='article'
  >
    <Article>
      <ArticleHeader
        coverImageUrl={currentPost.coverImage.image.asset.url}
        coverImageAltText={currentPost.coverImage.altText}
        articleTitle={currentPost.articleTitle}
      />
      <ArticleMetaInfo
        publishedAt={currentPost.publishDate}
        readingTime={readingTime}
      />
      <CustomPortableText value={currentPost.articleBody} />
      <SwitchArticle previousPost={previousPost} nextPost={nextPost} />
      <SocialShare slug={currentPost.slug.current} />
    </Article>
  </MainSection>
)

export async function getStaticPaths() {
  const blogInfo = blogQuery()
  const blogPosts = await client.fetch(blogInfo)

  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug.current }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postInfo = blogPostQuery(params.slug)
  const readingTimeInfo = blogPostReadingTimeQuery(params.slug)
  const { currentPost, previousPost, nextPost } = await client.fetch(postInfo)
  const { estimatedReadingTime } = await client.fetch(readingTimeInfo)

  const readingTimeText = readingTimeFormat(estimatedReadingTime)

  return {
    props: {
      currentPost,
      previousPost,
      nextPost,
      readingTime: readingTimeText
    }
  }
}

export default BlogArticle
