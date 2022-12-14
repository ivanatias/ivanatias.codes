import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import CustomLink from '@/components/CustomLink'
import Menu, { MenuButton } from '@/components/Menu'
const ThemeToggleButton = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false
})
import { links } from '@/constants/links'

export const Navlink = ({ children, path, onClick }) => (
  <CustomLink href={path}>
    <a
      className='block font-semibold text-black transition-all duration-150 decoration-black dark:decoration-gray-300 dark:text-gray-300 underline-offset-4 hover:underline dark:hover:text-white dark:hover:decoration-white'
      onClick={onClick}
    >
      {children}
    </a>
  </CustomLink>
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <header className='fixed top-0 z-50 w-full py-3 bg-white dark:bg-[#020105]'>
      <nav>
        <div className='flex items-center justify-between max-w-[824px] mx-auto px-4 md:px-5'>
          <div className='flex items-center gap-4'>
            <div className='flex items-center'>
              <CustomLink href='/'>
                <a className='pt-2'>
                  <Image
                    src='/logo.svg'
                    alt='Ivan Atias Logo'
                    width={50}
                    height={50}
                  />
                </a>
              </CustomLink>
            </div>
            <ul className='hidden md:flex md:items-center md:gap-2'>
              {links.map(({ path, label }) => (
                <li key={label}>
                  <Navlink path={path}>{label}</Navlink>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center justify-end flex-1 gap-4'>
            <ThemeToggleButton />
            <MenuButton toggleMenu={toggleMenu} isActive={menuOpen} />
          </div>
          {menuOpen && <Menu closeMenu={toggleMenu} isActive={menuOpen} />}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
