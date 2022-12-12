import React from 'react'

export const H1Title = ({ children, titleStyles, semibold }) => (
  <h1
    className={`${titleStyles ?? 'xl-title'} ${
      semibold ? 'font-semibold' : 'font-bold'
    }`}
  >
    {children}
  </h1>
)

export const H2Title = ({ children, titleStyles, semibold }) => (
  <h2
    className={`${titleStyles ?? 'large-title'} ${
      semibold ? 'font-semibold' : 'font-bold'
    }`}
  >
    {children}
  </h2>
)

export const H3Title = ({ children, titleStyles, semibold }) => (
  <h3
    className={`${titleStyles ?? 'normal-title'} ${
      semibold ? 'font-semibold' : 'font-bold'
    }`}
  >
    {children}
  </h3>
)

export const H4Title = ({ children, titleStyles, semibold }) => (
  <h4
    className={`${titleStyles ?? 'small-title'} ${
      semibold ? 'font-semibold' : 'font-bold'
    }`}
  >
    {children}
  </h4>
)
