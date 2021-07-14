import "../styles/globals.css";
import {Cursor} from "../components/Cursor/Cursor";
import {cursorTracker} from "../utils";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import {theme} from "../constants";

function MyApp({ Component, pageProps }) {
  const { router } = pageProps;
  useEffect(()=>{
    cursorTracker();
  }, [])
  return (
    <>
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Cursor/>
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = async ({ Component, router, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  pageProps.router = router;

  return { pageProps }
}

export default MyApp
