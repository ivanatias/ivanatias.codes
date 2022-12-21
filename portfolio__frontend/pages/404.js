import Link from 'next/link'
import Head from 'next/head'

const NotFoundPage = () => (
  <>
    <Head>
      <title>Ivan Atias - 404 Not Found</title>
    </Head>
    <div className='grid h-screen gap-3 text-black dark:text-white place-content-center'>
      <h1 className='text-4xl font-bold 2xl:text-5xl'>Page not found</h1>
      <Link href='/'>
        <a className='text-base font-semibold text-center underline 2xl:text-lg'>
          Go back home
        </a>
      </Link>
    </div>
  </>
)

export default NotFoundPage
