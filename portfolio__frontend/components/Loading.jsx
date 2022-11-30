import React from 'react'
import Paragraph from '@/components/layout/Paragraph'
import { FaSpinner } from 'react-icons/fa'

const Loading = ({ message }) => (
  <div className='flex flex-col items-center gap-3 mt-5 text-black dark:text-gray-100'>
    <div className='animate-spin'>
      <FaSpinner fontSize={30} />
    </div>
    <Paragraph smallParagraph semibold>
      {message}
    </Paragraph>
  </div>
)

export default Loading
