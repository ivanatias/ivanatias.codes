import Image from 'next/future/image'
import Paragraph from '@/components/layout/Paragraph'

const Skill = ({ skillImage, skillText }) => (
  <div className='flex flex-col items-center justify-center gap-2'>
    <div className='p-1 rounded-md dark:bg-gray-100'>
      <Image
        src={skillImage}
        width='40'
        height='40'
        alt={skillText}
        className='w-10 h-10'
      />
    </div>
    <Paragraph pClass='xsmall-paragraph' underlined>
      {skillText}
    </Paragraph>
  </div>
)

export default Skill
