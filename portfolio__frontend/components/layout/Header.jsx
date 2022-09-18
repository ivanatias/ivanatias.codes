import React from 'react'
import Image from 'next/future/image'
import Social from '@/components/Social'

const Header = () => {
  return (
    <header className='flex flex-col items-center gap-5 pb-12 pt-28'>
      <Image
        src='/profile-pic.webp'
        className='rounded-full ring-2 ring-gray-900 dark:ring-gray-100'
        width='150'
        height='150'
        alt='Ivan Atias'
        priority={true}
      />
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold text-center text-black dark:text-gray-100 md:text-4xl'>
          Ivan Atias
        </h1>
        <p className='text-base font-semibold text-center text-black dark:text-gray-300 2xl:text-lg'>
          Front-End Engineer and UI Designer based in Venezuela
        </p>
      </div>
      <Social />
    </header>
  )
}

export default Header
