import React from "react";
import { links } from "../constants/links";
import Link from "next/link";

const Menu = ({ closeMenu }) => {
  return (
    <div className="z-50 absolute bottom-[-85px] right-4 w-[200px] bg-white dark:bg-neutral-800 py-5 px-4  rounded-lg shadow-md dark:shadow-gray-600 md:hidden">
      <ul className="flex flex-col justify-center gap-2 w-full">
        {links.map((link, index) => (
          <li key={index + link.name}>
            <Link href={link.path} scroll={false}>
              <a
                className="text-black block decoration-black dark:decoration-white dark:text-white font-semibold underline-offset-4 hover:underline transition-all duration-150"
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

export default Menu;
