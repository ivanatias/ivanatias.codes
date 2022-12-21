import CustomLink from '@/components/CustomLink'

const WorkHeader = ({ workTitle }) => (
  <div className='flex items-center gap-2'>
    <CustomLink href='/works'>
      <a>
        <h2 className='text-base font-bold text-black dark:text-white 2xl:text-lg'>
          Works
        </h2>
      </a>
    </CustomLink>
    <span
      className='text-sm font-semibold text-black dark:text-white'
      aria-hidden={true}
    >
      |
    </span>
    <h3 className='text-base font-bold text-pink-800 dark:text-pink-600 2xl:text-lg'>
      {workTitle}
    </h3>
  </div>
)

export default WorkHeader
