import React from "react";

const Footer = () => {
  return (
    <footer className="dark:bg-neutral-900 flex flex-col justify-between items-center pt-12 pb-6">
      <div className="flex flex-col gap-5 max-w-[824px] mx-auto px-4 md:px-5">
        <h2 className=" text-black  dark:text-gray-100 font-bold text-xl md:text-2xl">
          Feel free to reach me out!
        </h2>
        <p className="text-black dark:text-gray-300 2xl:text-lg">
          Feel free to contact me through my email to talk about development,
          design or any other subject.
        </p>
        <a
          className="text-black font-bold dark:text-gray-300 text-base 2xl:text-lg"
          href="mailto:ivan.d.atias@gmail.com"
        >
          ivan.d.atias@gmail.com
        </a>
      </div>
      <small className="mt-5 font-semibold text-black dark:text-gray-500 text-xs 2xl:text-sm">
        © {new Date().getFullYear()} Ivan Atias. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
