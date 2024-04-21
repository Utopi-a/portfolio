// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "src/styles/global.css";

import { AnimatePresence } from "framer-motion";

import type { AppProps } from "next/app";
import { createTheme, MantineProvider } from "@mantine/core";
import Head from "next/head";
import { useRouter } from "next/router";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

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
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <MantineProvider theme={theme}>
          <Component key={router.asPath} {...pageProps} />
        </MantineProvider>
      </AnimatePresence>
    </>
  );
}
