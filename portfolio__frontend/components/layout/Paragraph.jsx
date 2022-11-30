import React from 'react'

const Paragraph = ({ children, semibold }) => {
  const paragraphStyles = semibold ? 'semi-bold-paragraph' : 'normal-paragraph'

  return <p className={paragraphStyles}>{children}</p>
}

export default Paragraph
