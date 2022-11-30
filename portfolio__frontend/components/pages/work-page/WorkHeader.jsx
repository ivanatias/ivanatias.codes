import React from 'react'
import CustomLink from '@/components/CustomLink'
import { HiChevronRight } from 'react-icons/hi'

const WorkHeader = ({ workTitle }) => (
  <div className='flex items-center gap-2'>
    <CustomLink href='/works'>
      <a>
        <h2 className='text-sm font-bold text-black dark:text-white 2xl:text-base'>
          Works
        </h2>
      </a>
    </CustomLink>
    <HiChevronRight
      fontSize={20}
      className='text-black font-bold dark:text-white ml-[-4px]'
    />
    <h3 className='text-base font-bold text-pink-800 dark:text-pink-600 2xl:text-lg'>
      {workTitle}
    </h3>
  </div>
)

export default WorkHeader
