import React from 'react'

const SVG = ({
  className,
  color = 'currentColor',
  id,
  hidden = false,
  noFill = false,
  title
}) => {
  const fill = noFill ? 'none' : color
  const classNames = `inline-block${className ? ` ${className}` : ''}`

  return (
    <svg className={classNames} fill={fill} role='img' aria-hidden={hidden}>
      {title && <title>{title}</title>}
      <use href={`/images/sprite.svg#${id}`} />
    </svg>
  )
}

export default SVG
