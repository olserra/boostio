import Head from "next/head";

import "../styles/globals.css";
import { FocusProvider } from "@/context";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Boostio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <FocusProvider>
      <Component {...pageProps} />
    </FocusProvider>
  </>
);

export default MyApp;
