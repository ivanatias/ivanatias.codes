import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-between pt-12 pb-6'>
      <div className='flex flex-col gap-5 max-w-[824px] w-full mx-auto px-4 md:px-5'>
        <h2 className='text-xl font-bold text-black dark:text-gray-100 md:text-2xl'>
          Feel free to reach out to me!
        </h2>
        <p className='text-black dark:text-gray-300 2xl:text-lg'>
          Contact me through my email to talk about web development, design or
          any other subject.
        </p>
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
