import React from 'react'

export const SmallParagraph = ({
  children,
  semibold,
  underlined,
  centered
}) => (
  <p
    className={`small-paragraph ${semibold ? 'font-semibold' : ''} ${
      underlined ? 'underline' : ''
    } ${centered ? 'text-center' : ''}`}
  >
    {children}
  </p>
)

export const NormalParagraph = ({
  children,
  semibold,
  underlined,
  centered
}) => (
  <p
    className={`normal-paragraph ${semibold ? 'font-semibold' : ''} ${
      underlined ? 'underline' : ''
    } ${centered ? 'text-center' : ''}`}
  >
    {children}
  </p>
)

export const XSmallParagraph = ({
  children,
  semibold,
  underlined,
  centered
}) => (
  <p
    className={`xsmall-paragraph ${semibold ? 'font-semibold' : ''} ${
      underlined ? 'underline' : ''
    } ${centered ? 'text-center' : ''}`}
  >
    {children}
  </p>
)
