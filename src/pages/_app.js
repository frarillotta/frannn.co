import '../styles/globals.css';
import Head from 'next/head';
import {Cursor} from "../components/Cursor/Cursor";
import {cursorTracker} from "../utils";
import { useEffect } from 'react';
import { AnimatePresence } from "framer-motion"
function MyApp({ Component, pageProps }) {
  const {router} = pageProps;
  useEffect(()=>{
    cursorTracker();
  }, [])
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      {/* {hack to loads the image in static files} */}
      <img className={'display-none'} src={"/assets/pictures/anseladams.jpg"}/>
     
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Cursor/>
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
