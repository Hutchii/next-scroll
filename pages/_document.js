import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Joan&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="follow, index" />
        <meta content="#f7f3f0" name="theme-color" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
