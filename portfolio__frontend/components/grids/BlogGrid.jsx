import React from "react";
import Image from "next/image";
import Link from "next/link";

const GridItem = ({ coverImage, altText, title, slug, publishedAt }) => {
  return (
    <Link href={`/blog/${slug}`} passHref scroll={false}>
      <a>
        <div className="flex items-center w-full gap-5 p-2 transition-colors duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-800">
          <div className="relative flex-shrink-0 w-10 h-10 2xl:w-12 2xl:h-12">
            <Image
              src={coverImage}
              placeholder="blur"
              blurDataURL={coverImage}
              alt={altText}
              layout="fill"
              objectFit="contain"
              sizes="(max-width: 560px) 256px, (max-width: 1080px) 384px, 520px"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-bold text-black 2xl:text-lg dark:text-gray-300">
              {title}
            </h3>
            <span className="text-xs text-black 2xl:text-sm dark:text-gray-400">
              {new Date(publishedAt).toDateString()}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

const BlogGrid = ({ data }) => {
  return (
    <article className="grid grid-cols-1 gap-8">
      {data.map((item) => (
        <GridItem
          key={item._id}
          coverImage={item.coverImage.image.asset.url}
          title={item.articleTitle}
          slug={item.slug.current}
          altText={item.coverImage.altText}
          publishedAt={item.publishDate}
        />
      ))}
    </article>
  );
};

export default BlogGrid;
