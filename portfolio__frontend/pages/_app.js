import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
const DynamicLayout = dynamic(() => import("../components/layout/Layout.jsx"));
const DynamicAnimatePresence = dynamic(() =>
  import("../components/AnimateTransition")
);
import "../styles/globals.css";
import "../styles/prism-theme.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <DynamicLayout router={router}>
        <DynamicAnimatePresence>
          <Component {...pageProps} key={router.asPath} />
        </DynamicAnimatePresence>
      </DynamicLayout>
    </ThemeProvider>
  );
}

export default MyApp;
