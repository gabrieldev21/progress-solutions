"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { Montserrat } from "@next/font/google";

import { Header, Footer } from "@components/index";
import { GlobalStyle } from "@styles/globals";
import { defaultTheme } from "@styles/themes/default";
import * as S from "@/styled";

const lang = Montserrat({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head />

      <body>
        <ThemeProvider theme={defaultTheme}>
          <S.Container className={lang.className}>
            <Header />
            {children}
            <Footer />
          </S.Container>
          <GlobalStyle />
          <Normalize />
        </ThemeProvider>
      </body>
    </html>
  );
}
