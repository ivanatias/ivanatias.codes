import React from 'react'
import Image from 'next/image'

const Skill = ({ skillImage, skillText }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <div className='relative w-10 h-10 p-1 rounded-md 2xl:w-12 2xl:h-12 dark:bg-gray-100'>
        <Image src={skillImage} width={48} height={48} alt={skillText} />
      </div>
      <p className='text-xs text-black underline dark:text-gray-300 2xl:text-sm'>
        {skillText}
      </p>
    </div>
  )
}

export default Skill
