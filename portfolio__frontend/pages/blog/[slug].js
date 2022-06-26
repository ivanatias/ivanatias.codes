import React from "react";
import Image from "next/image";
import { MainSection, CustomPortableText } from "../../components";
import {
  blogPostQuery,
  blogPostReadingTimeQuery,
  blogQuery,
} from "../../constants/queries";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "next-share";
import { client } from "../../sanity/client";

const BlogArticle = ({ post, readingTime }) => {
  const { estimatedReadingTime } = readingTime; //Estimated reading time for article in minutes.

  return (
    <MainSection
      title={post.articleTitle}
      canonicalUrlPath={`/blog/${post.slug.current}`}
      socialCardImage={post.socialShareImage && post.socialShareImage.asset.url}
      contentType="article"
    >
      <article>
        <div className="flex flex-col w-full gap-3">
          <div className="relative flex-shrink-0 w-14 h-14 2xl:w-16 2xl:h-16">
            <Image
              src={post.coverImage.image.asset.url}
              placeholder="blur"
              blurDataURL={post.coverImage.image.asset.url}
              alt={post.coverImage.altText}
              layout="fill"
              objectFit="contain"
              sizes="(max-width: 560px) 256px, (max-width: 1080px) 384px, 520px"
            />
          </div>
          <h2 className="text-2xl font-bold text-black dark:text-gray-100 2xl:text-3xl">
            {post.articleTitle}
          </h2>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <span className="text-xs text-black 2xl:text-sm dark:text-gray-400">
            {new Date(post.publishDate).toDateString()}
          </span>
          <span className="text-xs text-black underline 2xl:text-sm dark:text-gray-400">
            {estimatedReadingTime > 1
              ? `${estimatedReadingTime} minutes read`
              : `${estimatedReadingTime} minute read`}
          </span>
        </div>
        <CustomPortableText value={post.articleBody} />
      </article>
      <div className="flex flex-col gap-5">
        <h5 className="text-lg font-bold text-black 2xl:text-xl dark:text-gray-100">
          Share on social media
        </h5>
        <div className="flex flex-wrap items-center gap-3">
          <FacebookShareButton
            url={`https://www.ivanatias.codes/blog/${post.slug.current}`}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={`https://www.ivanatias.codes/blog/${post.slug.current}`}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton
            url={`https://www.ivanatias.codes/blog/${post.slug.current}`}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </div>
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

  return {
    props: {
      post: post[0],
      readingTime: readingTime[0],
    },
  };
}

export default BlogArticle;
