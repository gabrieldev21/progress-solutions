import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import { Layout } from "components";
import { GlobalStyle } from "styles/globals";
import { defaultTheme } from "styles/themes/default";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
      <Normalize />
    </ThemeProvider>
  );
}
