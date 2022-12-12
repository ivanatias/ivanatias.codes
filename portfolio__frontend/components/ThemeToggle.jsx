import React from 'react'
import SVG from '@/components/SVG'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

const themeOptions = {
  dark: { label: 'Light mode', icon: 'icon-sun', iconLabel: 'Sun icon' },
  light: { label: 'Dark mode', icon: 'icon-moon', iconLabel: 'Moon icon' }
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const { label, icon, iconLabel } = themeOptions[theme]

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.button
        className='flex items-center justify-center w-12 h-10 hover:drop-shadow-[0_0_12px] text-yellow-400 border-none outline-none cursor-pointer dark:text-orange-400'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label={label}
        key={theme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <SVG id={icon} title={iconLabel} className='w-6 h-6' />
      </motion.button>
    </AnimatePresence>
  )
}

export default ThemeToggle
