import React from "react";
import Image from "next/image";
import Link from "next/link";

const GridItem = ({ thumbnail, title, overview, slug }) => {
  return (
    <Link href={`/works/${slug}`} passHref scroll={false}>
      <a>
        <div className="flex flex-col items-center justify-center w-full h-full lg:hover:scale-110 transition-transform duration-300">
          <div className="relative w-full grid__image-container">
            <Image
              src={thumbnail}
              placeholder="blur"
              blurDataURL={thumbnail}
              alt={title}
              layout="fill"
              className="grid__image rounded-lg"
              objectFit="contain"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-3 gap-1">
            <h3 className="text-center text-base 2xl:text-lg font-bold text-black dark:text-gray-300">
              {title}
            </h3>
            <p className="text-center text-sm 2xl:text-base text-black dark:text-gray-300">
              {overview}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

const Grid = ({ data }) => {
  return (
    <article className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
      {data.map((item) => (
        <GridItem
          key={item._id}
          thumbnail={item.thumbNail.asset.url}
          title={item.title}
          overview={item.overview}
          slug={item.slug.current}
        />
      ))}
    </article>
  );
};

export default Grid;
