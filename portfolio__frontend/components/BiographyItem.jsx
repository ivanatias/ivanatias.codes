import Paragraph from '@/components/layout/Paragraph'

const BioYear = ({ children }) => (
  <span className='text-sm font-bold text-pink-800 2xl:text-base dark:text-pink-600'>
    {children}
  </span>
)

const BioDescription = ({ children }) => <Paragraph>{children}</Paragraph>

const BiographyItem = ({ year, desc }) => (
  <div className='flex flex-col gap-3 sm:flex-row'>
    <BioYear>{year}</BioYear>
    <BioDescription>{desc}</BioDescription>
  </div>
)

export default BiographyItem
