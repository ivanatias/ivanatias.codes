import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Ivan Atias - 404 Not Found</title>
      </Head>
      <div className='text-black dark:text-white h-screen grid place-content-center gap-3'>
        <h1 className='font-bold text-4xl 2xl:text-5xl'>Page not found</h1>
        <Link href='/'>
          <a className='text-base 2xl:text-lg underline font-semibold text-center'>
            Go back home
          </a>
        </Link>
      </div>
    </>
  )
}

export default NotFoundPage
