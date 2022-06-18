import "../styles/globals.css";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
// import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   if (!("scrollBehavior" in document.documentElement.style)) {
  //     import("scroll-behavior-polyfill");
  //   }
  //   // async () => await
  //   // if (!("scrollBehavior" in document.documentElement.style))
  //   //   dynamic(() => import("scroll-behavior-polyfill"));
  // }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
