import React from 'react'
import { SmallParagraph } from '@/components/layout/Paragraph'

const Loading = ({ message }) => (
  <div className='flex flex-col items-center gap-3 mt-5 text-black dark:text-gray-100'>
    <div className='w-8 h-8 border border-gray-300 rounded-full dark:border-gray-500 border-l-black dark:border-l-gray-100 animate-spin' />
    <SmallParagraph semibold>{message}</SmallParagraph>
  </div>
)

export default Loading
