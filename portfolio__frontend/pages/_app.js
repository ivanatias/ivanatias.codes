import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import { Layout } from "../components";
const DynamicAnimatePresence = dynamic(() =>
  import("../components/AnimateTransition")
);
import "../styles/globals.css";
import "../styles/prism-theme.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Layout router={router}>
        <DynamicAnimatePresence>
          <Component {...pageProps} key={router.asPath} />
        </DynamicAnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
