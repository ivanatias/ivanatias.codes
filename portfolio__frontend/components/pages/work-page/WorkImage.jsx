import React from 'react'
import Image from 'next/future/image'
import { getImageDimensions } from '@sanity/asset-utils'

const WorkImage = ({ image }) => {
  const { width, height } = getImageDimensions(image)
  return (
    <Image
      src={image.asset.url}
      width={width}
      height={height}
      sizes='100vw'
      alt='Work screenshot'
      className='w-full h-auto rounded-lg'
    />
  )
}

export default WorkImage
