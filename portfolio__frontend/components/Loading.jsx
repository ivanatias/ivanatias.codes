import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loading = ({ message, containerHeight = 'auto' }) => {
  return (
    <div
      className='flex flex-col items-center gap-3 mt-5 text-black dark:text-gray-100'
      style={{ height: containerHeight }} //Receives images height as containerHeight to avoid CLS
    >
      <div className='animate-spin'>
        <FaSpinner fontSize={30} />
      </div>
      <p className='text-sm font-semibold text-black dark:text-gray-300 2xl:text-base'>
        {message}
      </p>
    </div>
  )
}

export default Loading
