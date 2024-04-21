// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "src/styles/global.css";

import type { AppProps } from "next/app";
import { createTheme, MantineProvider } from "@mantine/core";
import Head from "next/head";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>utopi-a.dev</title>
        <meta
          name="description"
          content="utopi-a（ゆーとぴあ）のポートフォリオ"
        />
        <meta property="og:title" content="utopi-a.dev" />
        <meta
          property="og:description"
          content="utopi-a（ゆーとぴあ）のポートフォリオ"
        />
        <meta
          property="og:image"
          content="https://www.utopi-a.dev/opengraph-image.jpg"
        />
      </Head>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
