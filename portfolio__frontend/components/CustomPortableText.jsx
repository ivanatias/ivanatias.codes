import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Paragraph, CustomCode } from "../components";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "../sanity/client";

const CustomImageComponent = ({ value }) => {
  const { width, height } = getImageDimensions(value?.image);
  return (
    <figure>
      <Image
        src={urlFor(value?.image).url()}
        placeholder="blur"
        blurDataURL={urlFor(value?.image).url()}
        width={width}
        height={height}
        layout="responsive"
        alt={value?.altText || ""}
        className="rounded-md"
      />
      <figcaption className="mt-2 text-sm text-black 2xl:text-base dark:text-gray-300">
        {value?.caption || ""}
      </figcaption>
    </figure>
  );
};

const components = {
  block: {
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-black 2xl:text-2xl dark:text-gray-100">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-black 2xl:text-xl dark:text-gray-100">
        {children}
      </h4>
    ),
    normal: ({ children }) => <Paragraph>{children}</Paragraph>,
    blockquote: ({ children }) => (
      <blockquote className="pl-2 text-sm italic text-black border-l-2 2xl:text-base dark:text-gray-100 border-l-pink-800 dark:border-l-pink-600">
        {children}
      </blockquote>
    ),
  },

  types: {
    articleImage: ({ value }) => <CustomImageComponent value={value} />,
    customCode: ({ value }) => <CustomCode value={value} />,
  },
  marks: {
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    link: ({ value, children }) => {
      const rel = value?.isExternal ? "noreferrer noopener" : undefined;
      const target = value?.isExternal ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          rel={rel}
          target={target}
          className="text-pink-800 underline dark:text-pink-600"
        >
          {children}
        </a>
      );
    },
  },

  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },

  listItem: {
    bullet: ({ children }) => (
      <li
        className="text-base text-black dark:text-gray-300 2xl:text-lg"
        style={{ listStyleType: "disc" }}
      >
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li
        className="text-base text-black dark:text-gray-300 2xl:text-lg"
        style={{ listStyleType: "decimal" }}
      >
        {children}
      </li>
    ),
  },
};

const CustomPortableText = ({ value }) => {
  return <PortableText value={value} components={components} />;
};

export default CustomPortableText;
