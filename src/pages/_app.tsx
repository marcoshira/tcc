import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
