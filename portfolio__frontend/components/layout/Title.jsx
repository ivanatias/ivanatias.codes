import React from 'react'

const H1Title = ({ children, titleStyles, semibold }) => (
  <h1
    className={`${titleStyles ?? 'xl-title'} ${
      semibold ? 'font-semibold' : 'font-bold'
    }`}
  >
    {children}
  </h1>
)

const H2Title = ({ children, titleStyles, semibold }) => (
  <h2
    className={`${titleStyles ?? 'large-title'} ${
      semibold ? 'font-semibold' : 'font-bold'
    }`}
  >
    {children}
  </h2>
)

const H3Title = ({ children, titleStyles, semibold }) => (
  <h3
    className={`${titleStyles ?? 'normal-title'} ${
      semibold ? 'font-semibold' : 'font-bold'
    }`}
  >
    {children}
  </h3>
)

const H4Title = ({ children, titleStyles, semibold }) => (
  <h4
    className={`${titleStyles ?? 'small-title'} ${
      semibold ? 'font-semibold' : 'font-bold'
    }`}
  >
    {children}
  </h4>
)

export { H1Title, H2Title, H3Title, H4Title }
