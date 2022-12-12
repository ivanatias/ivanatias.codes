import React from 'react'
import SVG from '@/components/SVG'

const WorkLink = ({ children, url, iconId }) => (
  <a
    href={url}
    target='_blank'
    rel='noreferrer noopener'
    className='flex items-center gap-2 text-black dark:text-gray-100 hover:underline w-fit'
  >
    <SVG id={iconId} hidden className='w-5 h-5' />
    {children}
  </a>
)

const WorkLinks = ({ githubUrl, projectUrl }) => (
  <div className='flex flex-col gap-3 mt-2'>
    <WorkLink url={githubUrl} iconId='icon-github'>
      Source code
    </WorkLink>
    <WorkLink url={projectUrl} iconId='icon-eye'>
      Live project
    </WorkLink>
  </div>
)

export default WorkLinks
