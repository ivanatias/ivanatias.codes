import { ThemeProvider } from "next-themes";
import { Layout } from "../components";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider
      enableColorScheme={false}
      defaultTheme="light"
      attribute="class"
    >
      <Layout router={router}>
        <AnimatePresence
          initial={true}
          exitBeforeEnter
          onExitComplete={() => {
            if (window !== "undefined") {
              scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
