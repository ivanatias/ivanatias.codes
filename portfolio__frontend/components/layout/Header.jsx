import React from 'react'
import Image from 'next/future/image'
import Social from '@/components/Social'
import { XLargeTitle } from '@/components/layout/Title'
import Paragraph from '@/components/layout/Paragraph'

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
      <div className='flex flex-col items-center gap-2'>
        <XLargeTitle>Ivan Atias</XLargeTitle>
        <Paragraph semibold centered>
          Front-end Engineer and UI Designer based in Venezuela
        </Paragraph>
      </div>
      <Social />
    </header>
  )
}

export default Header
