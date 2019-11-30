import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../theme/GlobalStyles";
import { loadFonts } from "../lib/fonts";
import { withApollo } from "../lib/apollo";

const theme = {
  colors: {
    primary: "#0070f3"
  }
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
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default withApollo(MyApp);
