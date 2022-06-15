import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Navbar, Footer } from "../components";

const Layout = ({ children, router }) => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Ivan Atias Portfolio - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Ivan Atias is a Frontend Developer and UI Designer who enjoys a lot building good looking and functional websites and apps."
        />
        <meta
          name="keywords"
          content="Frontend Developer, UI Designer, Ivan Atias, Portfolio"
        />
        <meta name="author" content="Ivan Atias" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="twitter:title" content="Ivan Atias Portfolio - Home" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.ivanatias.codes/ivanatiasprofile.jpg"
        />
        <meta property="og:site_name" content="Ivan Atias Portfolio" />
        <meta name="og:title" content="Ivan Atias Portfolio - Home" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.ivanatias.codes/ivanatiasprofile.jpg"
        />
        <meta charSet="UTF-8" />
      </Head>
      <div className="flex">
        <main className="flex flex-col flex-1 max-w-3xl mx-auto px-5">
          {router.pathname !== "/404" && router.pathname !== "/500" && (
            <div className="flex flex-col gap-5 items-center pt-28 pb-12">
              <div className="relative w-[120px] h-[120px] ring-2 ring-gray-900 dark:ring-gray-100 rounded-full md:w-[150px] md:h-[150px]">
                <Image
                  src="/ivanatiasprofile.jpg"
                  placeholder="blur"
                  blurDataURL="/ivanatiasprofile.jpg"
                  priority
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  alt="Ivan Atias Profile photo."
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-black dark:text-gray-100 font-bold text-center text-3xl md:text-4xl">
                  Ivan Atias
                </h1>
                <p className="text-black dark:text-gray-300 font-semibold text-center text-base 2xl:text-lg">
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
