import React from 'react'
import CustomLink from '@/components/CustomLink'

const LinkButton = ({ children, path }) => (
  <div className='flex items-center justify-center mt-4'>
    <CustomLink href={path}>
      <a className='cursor-pointer w-full max-w-[150px] 2xl:max-w-[200px] flex gap-2 items-center justify-center py-2 px-5 bg-indigo-700 dark:bg-indigo-600 text-gray-100 font-semibold text-sm 2xl:text-lg rounded-md hover:bg-indigo-800 dark:hover:bg-indigo-700 transition duration-150'>
        {children}
      </a>
    </CustomLink>
  </div>
)

export default LinkButton
