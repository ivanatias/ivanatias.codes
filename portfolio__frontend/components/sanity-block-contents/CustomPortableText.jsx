import React from 'react'
import dynamic from 'next/dynamic'
import Paragraph from '@/components/layout/Paragraph'
import Title from '@/components/layout/Title'
import NearScreenSuspense from '@/components/NearScreenSuspense'

// Note: remove loading: undefined from dynamic imports once Next.js console warning bug has been solved.
const DynamicCustomCode = dynamic(() => import('./CustomCode'), {
  suspense: true,
  loading: undefined
})
const DynamicCustomImage = dynamic(() => import('./CustomImage'), {
  suspense: true,
  loading: undefined
})
import { PortableText } from '@portabletext/react'

const components = {
  block: {
    h3: ({ children }) => (
      <Title titleTag='h3' titleClass='normal-title'>
        {children}
      </Title>
    ),
    h4: ({ children }) => (
      <Title titleTag='h4' titleClass='small-title'>
        {children}
      </Title>
    ),
    normal: ({ children }) => <Paragraph>{children}</Paragraph>,
    blockquote: ({ children }) => (
      <blockquote className='pl-2 text-sm italic text-black border-l-2 2xl:text-base dark:text-gray-100 border-l-pink-800 dark:border-l-pink-600'>
        {children}
      </blockquote>
    )
  },

  types: {
    articleImage: ({ value }) => (
      <NearScreenSuspense loadingMessage='Loading image' threshold={0.15}>
        <DynamicCustomImage imageData={value} />
      </NearScreenSuspense>
    ),
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
        <NearScreenSuspense loadingMessage='Loading code' rootMargin='-10px'>
          <DynamicCustomCode
            code={value?.code?.code}
            language={value?.code?.language}
          />
        </NearScreenSuspense>
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

const CustomPortableText = ({ value }) => (
  <PortableText value={value} components={components} />
)

export default CustomPortableText
