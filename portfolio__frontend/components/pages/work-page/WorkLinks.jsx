import React from 'react'
import SVG from '@/components/SVG'

const WorkLinks = ({ githubUrl, projectUrl }) => (
  <div className='flex flex-col gap-3 mt-2'>
    <a
      href={githubUrl}
      target='_blank'
      rel='noreferrer noopener'
      className='flex items-center gap-2 text-black dark:text-gray-100 hover:underline w-fit'
    >
      <SVG id='icon-github' hidden className='w-5 h-5' />
      Source code
    </a>
    <a
      href={projectUrl}
      target='_blank'
      rel='noreferrer noopener'
      className='flex items-center gap-2 text-black dark:text-gray-100 hover:underline w-fit'
    >
      <SVG id='icon-eye' hidden className='w-5 h-5' />
      Live project
    </a>
  </div>
)

export default WorkLinks
