import React from "react";
import Image from "next/image";
import { Navbar, Footer, MetaData } from "../components";

const Layout = ({ children, router }) => {
  return (
    <>
      <Navbar />
      <MetaData />
      <div className="flex">
        <main className="flex flex-col flex-1 max-w-3xl px-5 mx-auto">
          {router.pathname !== "/404" && router.pathname !== "/500" && (
            <div className="flex flex-col items-center gap-5 pb-12 pt-28">
              <div className="relative w-[120px] h-[120px] ring-2 ring-gray-900 dark:ring-gray-100 rounded-full md:w-[150px] md:h-[150px]">
                <Image
                  src="/ivanatiasprofile.webp"
                  placeholder="blur"
                  blurDataURL="/ivanatiasprofile.webp"
                  priority
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  sizes="(max-width: 560px) 256px, (max-width: 1080px) 384px, 520px"
                  alt="Ivan Atias Profile photo."
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-center text-black dark:text-gray-100 md:text-4xl">
                  Ivan Atias
                </h1>
                <p className="text-base font-semibold text-center text-black dark:text-gray-300 2xl:text-lg">
                  Frontend Developer and UI Designer based in Venezuela
                </p>
              </div>
            </div>
          )}
          {children}
        </main>
      </div>
      {router.pathname !== "/404" && router.pathname !== "/500" && <Footer />}
    </>
  );
};

export default Layout;
