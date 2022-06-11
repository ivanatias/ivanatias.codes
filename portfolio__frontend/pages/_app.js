import { ThemeProvider } from "next-themes";
import { Layout } from "../components";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider
      enableColorScheme={false}
      attribute="class"
      defaultTheme="system"
    >
      <Layout>
        <AnimatePresence initial={true} exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
