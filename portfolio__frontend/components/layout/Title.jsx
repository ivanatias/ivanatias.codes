import React from 'react'

const Title = ({ title, largeTitle, xlTitle, titleTag }) => {
  const titleStyles = largeTitle
    ? 'large-title'
    : xlTitle
    ? 'xl-title'
    : 'normal-title'

  if (titleTag === 'h2') {
    return <h2 className={titleStyles}>{title}</h2>
  }

  if (titleTag === 'h3') {
    return <h3 className={titleStyles}>{title}</h3>
  }

  if (titleTag === 'h4') {
    return <h4 className={titleStyles}>{title}</h4>
  }

  return <h1 className={titleStyles}>{title}</h1>
}

export default Title
