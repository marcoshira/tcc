import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';
import { AppProps } from 'next/app';
import { InputProvider } from '../contexts/InputContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <InputProvider>
        <Component {...pageProps} />
      </InputProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
