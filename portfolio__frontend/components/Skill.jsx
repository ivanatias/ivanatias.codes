import React from 'react'
import Image from 'next/future/image'

const Skill = ({ skillImage, skillText }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <div className='p-1 rounded-md dark:bg-gray-100'>
        <Image
          src={skillImage}
          width='40'
          height='40'
          alt={skillText}
          className='w-10 h-10'
        />
      </div>
      <p className='text-xs text-black underline dark:text-gray-300 2xl:text-sm'>
        {skillText}
      </p>
    </div>
  )
}

export default Skill
