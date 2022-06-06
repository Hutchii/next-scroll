import "../styles/globals.css";
import { useEffect } from "react";
import { polyfill } from "smoothscroll-polyfill";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    polyfill();
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
