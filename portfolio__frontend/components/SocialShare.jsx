import React, { useState } from 'react'
import SVG from '@/components/SVG'
import { socials, BASE_URL } from '@/constants/socials'

const SocialShare = ({ slug }) => {
  const [shareButtonActive, setShareButtonActive] = useState(false)

  const toggleShareButton = () => setShareButtonActive((prev) => !prev)

  return (
    <div className='flex items-center justify-center my-4'>
      <div className='relative'>
        <ShareButton
          isActive={shareButtonActive}
          toggleShareButton={toggleShareButton}
        />
        {socials.map(({ outlet, label, icon }, index) => (
          <ShareIcon
            key={label + index}
            slug={slug}
            isActive={shareButtonActive}
            toggleShareButton={toggleShareButton}
            outlet={outlet}
            label={label}
            icon={icon}
            position={index}
          />
        ))}
      </div>
    </div>
  )
}

const ShareIcon = ({
  slug,
  isActive,
  toggleShareButton,
  outlet,
  label,
  icon,
  position
}) => {
  const transition = `top 0.2s ${position * 50}ms, left 0.2s ${
    position * 50
  }ms, opacity 0.2s ${position * 50}ms`

  const opacity = isActive ? 1 : 0

  const left = isActive
    ? `calc(${(-1) ** position * Math.ceil(position / 2) * 40}px + 8px)`
    : 0

  const top = isActive ? '60px' : 0

  const pointerEvents = isActive ? 'auto' : 'none'

  return (
    <a
      href={`${outlet}${BASE_URL}/${slug}`}
      onClick={toggleShareButton}
      target='_blank'
      rel='noreferrer noopener'
      aria-label={`Share on ${label} opens a new window`}
      className='absolute z-0 transform-none'
      style={{
        transition,
        left,
        top,
        opacity,
        pointerEvents
      }}
    >
      <SVG id={icon} hidden title={label} className='w-9 h-9' />
    </a>
  )
}

const ShareButton = ({ toggleShareButton, isActive }) => (
  <button
    aria-label='Share button'
    aria-expanded={isActive}
    className={`z-10 text-pink-800 dark:text-pink-600 hover:drop-shadow-[0_0_12px] w-12 h-12 p-2 transition-transform duration-300 ease-in border border-gray-400 rounded-full dark:border-gray-700 ${
      isActive ? 'scale-75' : ''
    }`}
    onClick={toggleShareButton}
  >
    <SVG id='icon-share' hidden title='Share article' className='w-6 h-6' />
  </button>
)

export default SocialShare
