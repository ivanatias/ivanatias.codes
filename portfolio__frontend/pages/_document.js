import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/icons/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/icons/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/icons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/icons/favicon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/icons/favicon-16x16.png'
          />
          <meta
            name='theme-color'
            media='(prefers-color-scheme: light)'
            content='#ffffff'
          />
          <meta
            name='theme-color'
            media='(prefers-color-scheme: dark)'
            content='#020105'
          />
        </Head>
        <body className='bg-white dark:bg-[#020105]'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
