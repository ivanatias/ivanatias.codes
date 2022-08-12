import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout'
import '../styles/globals.css'
import '../styles/prism-theme.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider defaultTheme='light' attribute='class'>
      <Layout router={router}>
        <AnimatePresence
          initial={true}
          exitBeforeEnter
          onExitComplete={() => {
            if (window !== 'undefined') {
              scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
