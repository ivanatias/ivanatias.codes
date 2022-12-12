import React from 'react'
import { Navlink } from '@/components/Navbar'
import { links } from '@/constants/links'

export const MenuButton = ({ toggleMenu, isActive }) => (
  <button
    onClick={toggleMenu}
    className='flex flex-col justify-between items-center w-7 h-[22px] cursor-pointer md:hidden outline-none border-none'
    aria-expanded={isActive}
    aria-label={isActive ? 'Close nav menu' : 'Open nav menu'}
  >
    <span
      className={`menu-line ${isActive ? 'first-line-active' : ''}`}
      aria-hidden={true}
    />
    <span
      className={`menu-line ${isActive ? 'second-line-active' : ''}`}
      aria-hidden={true}
    />
    <span
      className={`menu-line ${isActive ? 'third-line-active' : ''}`}
      aria-hidden={true}
    />
  </button>
)

const Menu = ({ closeMenu, isActive }) => {
  return (
    <div
      className={`z-50 absolute bottom-[-120px] right-4 w-[200px] bg-white dark:bg-neutral-800 py-5 px-4  rounded-lg shadow-md dark:shadow-gray-600 md:hidden transition-opacity duration-300 ease-in ${
        isActive
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <ul className='flex flex-col justify-center w-full gap-2'>
        {links.map(({ path, label }) => (
          <li key={label}>
            <Navlink path={path} onClick={closeMenu}>
              {label}
            </Navlink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
