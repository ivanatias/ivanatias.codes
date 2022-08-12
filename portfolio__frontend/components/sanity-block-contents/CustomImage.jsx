import React from 'react'
import Image from 'next/image'

const CustomImage = ({ image, caption, altText, width, height }) => {
  return (
    <figure>
      <Image
        src={image}
        placeholder='blur'
        blurDataURL={image}
        width={width}
        height={height}
        layout='responsive'
        alt={altText || ''}
        className='rounded-md'
      />
      <figcaption className='mt-1 text-sm text-black 2xl:text-base dark:text-gray-300'>
        {caption || ''}
      </figcaption>
    </figure>
  )
}

export default CustomImage
