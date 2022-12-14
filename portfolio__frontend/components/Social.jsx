import React from 'react'
import SVG from '@/components/SVG'
import { socialLinks } from '@/constants/socials'

const Social = () => (
  <div className='flex items-center gap-1 text-pink-800 dark:text-pink-600'>
    {socialLinks.map(({ path, icon, name }) => (
      <a
        key={name}
        href={path}
        target='_blank'
        rel='noreferrer noopener'
        className='hover:drop-shadow-[0_0_12px]'
      >
        <SVG
          id={icon}
          title={`Ivan Atias' ${name} profile`}
          className='w-7 h-7'
        />
        <span className='sr-only'>opens a new window</span>
      </a>
    ))}
  </div>
)

export default Social
