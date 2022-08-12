import React from 'react'

export const BioYear = ({ children }) => {
  return (
    <span className='text-sm font-bold text-pink-800 2xl:text-base dark:text-pink-600'>
      {children}
    </span>
  )
}

export const BioDescription = ({ children }) => {
  return (
    <p className='text-base text-black text-ellipsis dark:text-gray-300 2xl:text-lg'>
      {children}
    </p>
  )
}

const BiographyItem = ({ year, desc }) => {
  return (
    <div className='flex flex-col gap-3 sm:flex-row'>
      <BioYear>{year}</BioYear>
      <BioDescription>{desc}</BioDescription>
    </div>
  )
}

export default BiographyItem
