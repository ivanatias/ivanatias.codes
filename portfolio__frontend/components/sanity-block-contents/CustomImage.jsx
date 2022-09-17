import React from 'react'
import Image from 'next/future/image'
import { getImageDimensions } from '@sanity/asset-utils'
import { urlFor } from '../../sanity/client'

const CustomImage = ({ imageData }) => {
  const { image, altText, caption } = imageData
  const { width, height } = getImageDimensions(image)
  const imageUrl = urlFor(image).url()
  return (
    <figure>
      <Image
        src={imageUrl}
        width={width}
        height={height}
        alt={altText ?? 'Article image'}
        sizes='100vw'
        className='w-full h-auto rounded-md '
      />
      <figcaption className='mt-1 text-sm text-black 2xl:text-base dark:text-gray-300'>
        {caption ?? ''}
      </figcaption>
    </figure>
  )
}

export default CustomImage
