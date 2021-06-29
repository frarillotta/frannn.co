import "../styles/globals.css";
import Head from "next/head";
import Image from "next/image";
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
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      {/* {hack to loads the image in static files} */}
      <Image className={"display-none"} src={"/anseladams.jpg"} alt={"idk"}/>
     
      <AnimatePresence exitBeforeEnter initial={false}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} key={router.route} />
          <Cursor/>
        </ThemeProvider>
      </AnimatePresence>
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
