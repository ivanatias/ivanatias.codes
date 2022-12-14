import React from 'react'

const SmallParagraph = ({ children, semibold, underlined, centered }) => (
  <p
    className={`small-paragraph ${semibold ? 'font-semibold' : ''} ${
      underlined ? 'underline' : ''
    } ${centered ? 'text-center' : ''}`}
  >
    {children}
  </p>
)

const NormalParagraph = ({ children, semibold, underlined, centered }) => (
  <p
    className={`normal-paragraph ${semibold ? 'font-semibold' : ''} ${
      underlined ? 'underline' : ''
    } ${centered ? 'text-center' : ''}`}
  >
    {children}
  </p>
)

const XSmallParagraph = ({ children, semibold, underlined, centered }) => (
  <p
    className={`xsmall-paragraph ${semibold ? 'font-semibold' : ''} ${
      underlined ? 'underline' : ''
    } ${centered ? 'text-center' : ''}`}
  >
    {children}
  </p>
)

export { SmallParagraph, NormalParagraph, XSmallParagraph }
