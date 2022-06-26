import React from "react";
import { links } from "../constants/links";
import Link from "next/link";

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

export default Menu;
