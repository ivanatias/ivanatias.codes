import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import MainSection from "../../components/layout/Section";
import CustomPortableText from "../../components/sanity-block-contents/CustomPortableText";
const DynamicSocialShare = dynamic(() =>
  import("../../components/SocialShare")
);
import {
  blogPostQuery,
  blogPostReadingTimeQuery,
  blogQuery,
} from "../../constants/queries";
import { client } from "../../sanity/client";
import { dateFormat, readingTimeFormat } from "../../utils/helpers";

const BlogArticle = ({ post, readingTime, date }) => {
  return (
    <MainSection
      title={post.articleTitle}
      description={post.excerpt}
      canonicalUrlPath={`/blog/${post.slug.current}`}
      socialCardImage={post.socialShareImage && post.socialShareImage.asset.url}
      contentType="article"
    >
      <article className="flex flex-col gap-5">
        <div className="flex flex-col w-full gap-3">
          <div className="relative flex-shrink-0 w-14 h-14">
            <Image
              src={post.coverImage.image.asset.url}
              placeholder="blur"
              blurDataURL={post.coverImage.image.asset.url}
              alt={post.coverImage.altText}
              layout="fill"
              objectFit="contain"
              sizes="56px"
            />
          </div>
          <h2 className="text-2xl font-bold text-black dark:text-gray-100 2xl:text-3xl">
            {post.articleTitle}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-black 2xl:text-sm dark:text-gray-400">
            {date}
          </span>
          <span className="text-xs text-black underline 2xl:text-sm dark:text-gray-400">
            {readingTime}
          </span>
        </div>
        <CustomPortableText value={post.articleBody} />
        <DynamicSocialShare slug={post.slug.current} />
      </article>
    </MainSection>
  );
};

export async function getStaticPaths() {
  const blogInfo = blogQuery();
  const blogPosts = await client.fetch(blogInfo);

  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postInfo = blogPostQuery(params.slug);
  const readingTimeInfo = blogPostReadingTimeQuery(params.slug);
  const post = await client.fetch(postInfo);
  const readingTime = await client.fetch(readingTimeInfo);

  const { estimatedReadingTime } = readingTime[0];
  const readingTimeText = readingTimeFormat(estimatedReadingTime);
  const { publishDate } = post[0];
  const date = dateFormat(publishDate);

  return {
    props: {
      post: post[0],
      readingTime: readingTimeText,
      date,
    },
  };
}

export default BlogArticle;
