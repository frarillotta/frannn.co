import '../styles/globals.css';
import Head from 'next/head';
import {Cursor} from "../components/Cursor/Cursor";
import {cursorTracker} from "../utils";
import { useEffect } from 'react';
import { PageTransition } from 'next-page-transitions';


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
     
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} key={router.route} />
      </PageTransition>
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
