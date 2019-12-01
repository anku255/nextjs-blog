import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../theme/GlobalStyles";
import { loadFonts } from "../lib/fonts";
import { withApollo } from "../lib/apollo";
import NProgress from "../components/NProgress";

const theme = {
  primary: "#ff7020",
  secondary: "#ff8c4c"
};

class MyApp extends App {
  componentDidMount = () => {
    loadFonts();
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NProgress />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default withApollo(MyApp);
