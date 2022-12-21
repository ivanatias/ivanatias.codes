import { motion } from 'framer-motion'
import MetaData from '@/components/MetaData'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Section = ({
  children,
  title,
  description,
  canonicalUrlPath,
  socialCardImage,
  contentType
}) => (
  <>
    <MetaData
      title={title}
      description={description}
      canonicalUrlPath={canonicalUrlPath}
      socialCardImage={socialCardImage}
      contentType={contentType}
    />

    <motion.section
      className='flex flex-col gap-10'
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
    >
      {children}
    </motion.section>
  </>
)

export default Section
