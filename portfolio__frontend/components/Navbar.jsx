import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "../components";
import { links } from "../constants/links";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
const ThemeToggleButton = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { theme } = useTheme();

  const openMenuIcon = (
    <MenuAlt2Icon
      className="w-6 cursor-pointer md:hidden text-black dark:text-white"
      onClick={() => setMenuOpen(true)}
      aria-label="Open Menu"
    />
  );

  const closeMenuIcon = (
    <XIcon
      className="w-6 cursor-pointer md:hidden text-black dark:text-white"
      onClick={() => setMenuOpen(false)}
      aria-label="Close Menu"
    />
  );

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, [menuOpen]);

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/20 backdrop-blur dark:bg-neutral-900/20">
      <div className=" flex items-center justify-between max-w-[824px] mx-auto px-4 md:px-5">
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity `}
          >
            <Link href="/" passHref scroll={false}>
              <a className="pt-2">
                <Image
                  src={`/FullLogo${theme}.svg`}
                  width={140}
                  height={80}
                  alt="Logo"
                  onLoad={handleImageLoaded}
                />
              </a>
            </Link>
          </div>
          <ul className="hidden md:flex md:items-center md:gap-2">
            {links.map((link, index) => (
              <li key={index + link.name}>
                <Link href={link.path} scroll={false}>
                  <a className="text-black decoration-black dark:decoration-gray-300 dark:text-gray-300 font-semibold underline-offset-4 hover:underline dark:hover:text-white dark:hover:decoration-white transition-all duration-150">
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 flex-1 justify-end">
          <ThemeToggleButton />
          {menuOpen ? closeMenuIcon : openMenuIcon}
        </div>
        {menuOpen && <Menu closeMenu={closeMenu} />}
      </div>
    </nav>
  );
};

export default Navbar;
