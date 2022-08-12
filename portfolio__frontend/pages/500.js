import React from 'react'
import Head from 'next/head'

const ServerErrorPage = () => {
  return (
    <>
      <Head>
        <title>Ivan Atias - 500 Internal Server Error</title>
      </Head>
      <div className='text-black dark:text-white h-screen grid place-content-center gap-3'>
        <h1 className='font-bold text-4xl 2xl:text-5xl'>
          Internal Server Error
        </h1>
        <p className='text-base 2xl:text-lg text-center'>
          Sorry, the page is not available right now, try again later.
        </p>
      </div>
    </>
  )
}

export default ServerErrorPage
