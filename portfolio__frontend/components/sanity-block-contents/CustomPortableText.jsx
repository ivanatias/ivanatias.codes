import React from 'react'
import dynamic from 'next/dynamic'
import Paragraph from '../layout/Paragraph'
import SuspenseWrapper from '../SuspenseWrapper'
const DynamicCustomCode = dynamic(() => import('./CustomCode'), {
  suspense: true
})
const DynamicCustomImage = dynamic(() => import('./CustomImage'), {
  suspense: true
})
import { PortableText } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import { urlFor } from '../../sanity/client'

const components = {
  block: {
    h3: ({ children }) => (
      <h3 className='text-xl font-semibold text-black 2xl:text-2xl dark:text-gray-100'>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-lg font-semibold text-black 2xl:text-xl dark:text-gray-100'>
        {children}
      </h4>
    ),
    normal: ({ children }) => <Paragraph>{children}</Paragraph>,
    blockquote: ({ children }) => (
      <blockquote className='pl-2 text-sm italic text-black border-l-2 2xl:text-base dark:text-gray-100 border-l-pink-800 dark:border-l-pink-600'>
        {children}
      </blockquote>
    )
  },

  types: {
    articleImage: ({ value }) => {
      const { width, height } = getImageDimensions(value?.image)
      const imageUrl = urlFor(value?.image).url()
      return (
        <SuspenseWrapper
          loadingMessage='Loading image'
          containerHeight={height}
          threshold={0.15}
        >
          <DynamicCustomImage
            image={imageUrl}
            caption={value?.caption}
            altText={value?.altText}
            width={width}
            height={height}
          />
        </SuspenseWrapper>
      )
    },
    customCode: ({ value }) => (
      <>
        <div className='flex justify-between items-center mb-[-28px]'>
          <div className='flex-1 text-base italic tracking-tighter text-black dark:text-gray-100 2xl:text-lg'>
            {value?.codeFilename}
          </div>
          <div className='py-1 text-base font-semibold text-black uppercase dark:text-gray-100 2xl:text-lg'>
            {value?.code?.language}
          </div>
        </div>
        <SuspenseWrapper loadingMessage='Loading code' rootMargin='-10px'>
          <DynamicCustomCode
            code={value?.code?.code}
            language={value?.code?.language}
          />
        </SuspenseWrapper>
      </>
    )
  },
  marks: {
    em: ({ children }) => <em className='italic'>{children}</em>,
    strong: ({ children }) => <strong className='font-bold'>{children}</strong>,
    code: ({ children }) => (
      <code className='px-1 text-base italic tracking-tighter text-black bg-gray-200 dark:bg-gray-800 dark:text-gray-300 2xl:text-lg'>
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const rel = value?.isExternal ? 'noreferrer noopener' : undefined
      const target = value?.isExternal ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          rel={rel}
          target={target}
          className='text-pink-800 underline dark:text-pink-600'
        >
          {children}
        </a>
      )
    }
  },

  list: {
    bullet: ({ children }) => (
      <ul className='flex flex-col gap-2 pl-3'>{children}</ul>
    ),
    number: ({ children }) => (
      <ol className='flex flex-col gap-2 pl-3'>{children}</ol>
    )
  },

  listItem: {
    bullet: ({ children }) => (
      <li
        className='text-base text-black dark:text-gray-300 2xl:text-lg'
        style={{ listStyleType: 'disc' }}
      >
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li
        className='text-base text-black dark:text-gray-300 2xl:text-lg'
        style={{ listStyleType: 'decimal' }}
      >
        {children}
      </li>
    )
  }
}

const CustomPortableText = ({ value }) => {
  return <PortableText value={value} components={components} />
}

export default CustomPortableText
