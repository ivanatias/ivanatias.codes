import React from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon
} from 'next-share'

const SocialShare = ({ slug }) => (
  <div className='flex flex-col gap-5 mt-5'>
    <h2 className='text-lg font-bold text-black 2xl:text-xl dark:text-gray-100'>
      Share on social media
    </h2>
    <div className='flex flex-wrap items-center gap-3'>
      <FacebookShareButton url={`https://www.ivanatias.codes/blog/${slug}`}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={`https://www.ivanatias.codes/blog/${slug}`}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={`https://www.ivanatias.codes/blog/${slug}`}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  </div>
)

export default SocialShare
