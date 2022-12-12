import React from 'react'
import SVG from '@/components/SVG'

const socialLinks = [
  {
    path: 'https://github.com/ivanatias',
    iconId: 'icon-github',
    name: 'Github'
  },
  {
    path: 'https://www.linkedin.com/in/ivandatiasr/',
    iconId: 'icon-linkedin',
    name: 'LinkedIn'
  },
  {
    path: 'https://stackoverflow.com/users/17195992/ivanatias',
    iconId: 'icon-stackoverflow',
    name: 'Stack Overflow'
  },
  {
    path: 'https://instagram.com/ivanatias',
    iconId: 'icon-instagram',
    name: 'Instagram'
  }
]

const Social = () => (
  <div className='flex items-center gap-1 text-pink-800 dark:text-pink-600'>
    {socialLinks.map(({ path, iconId, name }) => (
      <a key={name} href={path} target='_blank' rel='noreferrer noopener'>
        <span className='sr-only'>{name}</span>
        <SVG id={iconId} title={`${name} logo`} className='w-7 h-7' />
      </a>
    ))}
  </div>
)

export default Social
