import React from "react";
import Image from "next/image";
import Social from "../Social";

const Header = () => {
  return (
    <header className="flex flex-col items-center gap-5 pb-12 pt-28">
      <div className="relative w-[128px] h-[128px] ring-2 ring-gray-900 dark:ring-gray-100 rounded-full md:w-[150px] md:h-[150px]">
        <Image
          src="/ivanatiasprofile.webp"
          placeholder="blur"
          blurDataURL="/ivanatiasprofile.webp"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          sizes="(max-width: 768px) 128px, 150px"
          alt="Ivan Atias Profile photo."
          priority
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-center text-black dark:text-gray-100 md:text-4xl">
          Ivan Atias
        </h1>
        <p className="text-base font-semibold text-center text-black dark:text-gray-300 2xl:text-lg">
          Front-End Engineer and UI Designer based in Venezuela
        </p>
      </div>
      <Social />
    </header>
  );
};

export default Header;
