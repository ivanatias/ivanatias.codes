import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";

const LinkButton = ({ children }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <Link href="/works" scroll={false}>
        <a className="cursor-pointer w-full max-w-[150px] 2xl:max-w-[200px] flex gap-2 items-center justify-center py-2 px-5 bg-indigo-700 dark:bg-indigo-600 text-gray-100 font-semibold text-sm 2xl:text-lg rounded-md hover:bg-indigo-800 dark:hover:bg-indigo-700 transition duration-150">
          {children} <ChevronRightIcon className="w-5 text-gray-100" />
        </a>
      </Link>
    </div>
  );
};

export default LinkButton;
