import React from 'react'
import Title from '@/components/layout/Title'
import Paragraph from '@/components/layout/Paragraph'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-between pt-12 pb-6'>
      <div className='flex flex-col gap-5 max-w-[824px] w-full mx-auto px-4 md:px-5'>
        <Title title='Feel free to reach out to me!' largeTitle titleTag='h2' />
        <Paragraph>
          Contact me through my email to talk about web development, design or
          any other subject.
        </Paragraph>
        <a
          className='text-base font-bold text-black dark:text-gray-300 2xl:text-lg'
          href='mailto:ivan.d.atias@gmail.com'
        >
          ivan.d.atias@gmail.com
        </a>
      </div>
      <small className='mt-5 text-xs font-semibold text-black dark:text-gray-500 2xl:text-sm'>
        © 2022 Ivan Atias
      </small>
    </footer>
  )
}

export default Footer
