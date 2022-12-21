import Head from 'next/head'

const ServerErrorPage = () => (
  <>
    <Head>
      <title>Ivan Atias - 500 Internal Server Error</title>
    </Head>
    <div className='grid h-screen gap-3 text-black dark:text-white place-content-center'>
      <h1 className='text-4xl font-bold 2xl:text-5xl'>Internal Server Error</h1>
      <p className='text-base text-center 2xl:text-lg'>
        Sorry, the page is not available right now, try again later.
      </p>
    </div>
  </>
)

export default ServerErrorPage
