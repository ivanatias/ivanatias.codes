import React from 'react'

const WorkStack = ({ workStack }) => (
  <div className='flex items-center gap-3'>
    <span className='inline-block px-4 py-1 text-xs font-semibold text-white bg-indigo-800 rounded-lg 2xl:text-sm dark:bg-indigo-600'>
      Stack
    </span>
    <div className='flex flex-wrap items-center gap-1'>
      {workStack.map((item) => (
        <span
          key={item._key}
          className='text-xs text-black underline dark:text-gray-300 2xl:text-sm'
        >
          {item.tech}
        </span>
      ))}
    </div>
  </div>
)

export default WorkStack
