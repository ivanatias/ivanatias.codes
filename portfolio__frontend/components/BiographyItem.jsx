import React from 'react'
import { NormalParagraph } from '@/components/layout/Paragraph'

export const BioYear = ({ children }) => (
  <span className='text-sm font-bold text-pink-800 2xl:text-base dark:text-pink-600'>
    {children}
  </span>
)

export const BioDescription = ({ children }) => (
  <NormalParagraph>{children}</NormalParagraph>
)

const BiographyItem = ({ year, desc }) => (
  <div className='flex flex-col gap-3 sm:flex-row'>
    <BioYear>{year}</BioYear>
    <BioDescription>{desc}</BioDescription>
  </div>
)

export default BiographyItem
