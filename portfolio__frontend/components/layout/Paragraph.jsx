import React from 'react'

const Paragraph = ({ children }) => {
  return (
    <p className={`text-black dark:text-gray-300 text-base 2xl:text-lg`}>
      {children}
    </p>
  )
}

export default Paragraph
