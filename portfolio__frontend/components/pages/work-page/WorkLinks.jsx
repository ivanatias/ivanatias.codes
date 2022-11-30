import React from 'react'
import { AiOutlineGithub, AiOutlineEye } from 'react-icons/ai'

const WorkLinks = ({ githubUrl, projectUrl }) => (
  <div className='flex flex-col gap-3 mt-2'>
    <a
      href={githubUrl}
      target='_blank'
      rel='noreferrer noopener'
      className='flex items-center gap-2 hover:underline w-fit'
    >
      <AiOutlineGithub fontSize={24} /> Source code
    </a>
    <a
      href={projectUrl}
      target='_blank'
      rel='noreferrer noopener'
      className='flex items-center gap-2 hover:underline w-fit'
    >
      <AiOutlineEye fontSize={24} /> Live project
    </a>
  </div>
)

export default WorkLinks
