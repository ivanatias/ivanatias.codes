import React from 'react'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram
} from 'react-icons/ai'
import { BsStackOverflow } from 'react-icons/bs'

const socialLinks = [
  {
    path: 'https://github.com/ivanatias',
    icon: <AiFillGithub />,
    name: 'Github'
  },
  {
    path: 'https://www.linkedin.com/in/ivandatiasr/',
    icon: <AiFillLinkedin />,
    name: 'Linkedin'
  },
  {
    path: 'https://stackoverflow.com/users/17195992/ivanatias',
    icon: <BsStackOverflow />,
    name: 'Stackoverflow'
  },
  {
    path: 'https://instagram.com/ivanatias',
    icon: <AiOutlineInstagram />,
    name: 'Instagram'
  }
]

const Social = () => {
  return (
    <div className='flex items-center gap-3'>
      {socialLinks.map((item) => (
        <a
          className='text-2xl text-pink-800 dark:text-pink-600'
          key={item.name}
          href={item.path}
          target='_blank'
          rel='noreferrer noopener'
        >
          <span className='sr-only'>{item.name}</span>
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default Social
