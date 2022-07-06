import React from "react";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "../../sanity/client";

const CustomImage = ({ value }) => {
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
      <figcaption className="mt-1 text-sm text-black 2xl:text-base dark:text-gray-300">
        {value?.caption || ""}
      </figcaption>
    </figure>
  );
};

export default CustomImage;
