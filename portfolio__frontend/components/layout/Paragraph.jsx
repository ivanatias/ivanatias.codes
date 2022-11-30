import React from 'react'

const Paragraph = ({
  children,
  smallParagraph,
  xsParagraph,
  semibold,
  underlined,
  centered
}) => {
  const paragraphSize = smallParagraph
    ? 'small-paragraph'
    : xsParagraph
    ? 'xsmall-paragraph'
    : 'normal-paragraph'

  return (
    <p
      className={`${paragraphSize} ${semibold ? 'font-semibold' : ''} ${
        underlined ? 'underline' : ''
      } ${centered ? 'text-center' : ''}`}
    >
      {children}
    </p>
  )
}

export default Paragraph
