import Slider from "../components/Slider";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs with Scroll Snap</title>
        <meta
          name="description"
          content="Example of using scroll snap slider with Nextjs."
        />
        <meta name="author" content="Hutchii" />
        <link rel="canonical" href="https://nextjs-snap.vercel.app/" />
      </Head>
      <Slider />
    </>
  );
}
