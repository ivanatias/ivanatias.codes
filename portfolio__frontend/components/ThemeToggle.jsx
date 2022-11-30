import React from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.button
        className='flex items-center justify-center w-12 h-10 bg-indigo-700 border-none rounded-md outline-none cursor-pointer dark:bg-orange-600'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label='Toggle Theme'
        key={theme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <p aria-hidden={true} className='text-sm md:text-base'>
          {theme === 'light' ? '🌙' : '☀️'}
        </p>
      </motion.button>
    </AnimatePresence>
  )
}

export default ThemeToggle
