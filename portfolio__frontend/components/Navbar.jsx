import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { links } from "../constants/links";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline";
const ThemeToggleButton = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});

const Menu = ({ closeMenu }) => {
  return (
    <div className="z-50 absolute bottom-[-120px] right-4 w-[200px] bg-white dark:bg-neutral-800 py-5 px-4  rounded-lg shadow-md dark:shadow-gray-600 md:hidden">
      <ul className="flex flex-col justify-center w-full gap-2">
        {links.map((link, index) => (
          <li key={index + link.name}>
            <Link href={link.path} scroll={false}>
              <a
                className="block font-semibold text-black transition-all duration-150 decoration-black dark:decoration-white dark:text-white underline-offset-4 hover:underline"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenuIcon = (
    <MenuAlt2Icon
      className="w-6 text-black cursor-pointer md:hidden dark:text-white"
      onClick={() => setMenuOpen(true)}
      aria-label="Open Menu"
    />
  );

  const closeMenuIcon = (
    <XIcon
      className="w-6 text-black cursor-pointer md:hidden dark:text-white"
      onClick={() => setMenuOpen(false)}
      aria-label="Close Menu"
    />
  );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full py-3 bg-white dark:bg-[#020105]">
      <div className=" flex items-center justify-between max-w-[824px] mx-auto px-4 md:px-5">
        <div className="flex items-center gap-4">
          <div className={`flex items-center`}>
            <Link href="/" passHref scroll={false}>
              <a className="pt-2">
                <Image
                  src="/logo.svg"
                  alt="Ivan Atias Logo"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </div>
          <ul className="hidden md:flex md:items-center md:gap-2">
            {links.map((link, index) => (
              <li key={index + link.name}>
                <Link href={link.path} scroll={false}>
                  <a className="font-semibold text-black transition-all duration-150 decoration-black dark:decoration-gray-300 dark:text-gray-300 underline-offset-4 hover:underline dark:hover:text-white dark:hover:decoration-white">
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end flex-1 gap-4">
          <ThemeToggleButton />
          {menuOpen ? closeMenuIcon : openMenuIcon}
        </div>
        {menuOpen && <Menu closeMenu={closeMenu} />}
      </div>
    </nav>
  );
};

export default Navbar;
