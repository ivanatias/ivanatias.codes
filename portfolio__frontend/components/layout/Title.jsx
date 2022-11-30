import React from 'react'

export const Title = ({ children, titleTag, styles, semibold }) => {
  if (titleTag === 'h2') {
    return (
      <h2 className={`${styles} ${semibold ? 'font-semibold' : 'font-bold'}`}>
        {children}
      </h2>
    )
  }

  if (titleTag === 'h3') {
    return (
      <h3 className={`${styles} ${semibold ? 'font-semibold' : 'font-bold'}`}>
        {children}
      </h3>
    )
  }

  if (titleTag === 'h4') {
    return (
      <h4 className={`${styles} ${semibold ? 'font-semibold' : 'font-bold'}`}>
        {children}
      </h4>
    )
  }

  return (
    <h1 className={`${styles} ${semibold ? 'font-semibold' : 'font-bold'}`}>
      {children}
    </h1>
  )
}

export const SmallTitle = ({ children, titleTag, semibold }) => (
  <Title titleTag={titleTag} semibold={semibold} styles='small-title'>
    {children}
  </Title>
)

export const NormalTitle = ({ children, titleTag, semibold }) => (
  <Title titleTag={titleTag} semibold={semibold} styles='normal-title'>
    {children}
  </Title>
)

export const LargeTitle = ({ children, titleTag, semibold }) => (
  <Title titleTag={titleTag} semibold={semibold} styles='large-title'>
    {children}
  </Title>
)

export const XLargeTitle = ({ children, titleTag, semibold }) => (
  <Title titleTag={titleTag} semibold={semibold} styles='xl-title'>
    {children}
  </Title>
)
