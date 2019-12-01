import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../theme/GlobalStyles";
import { loadFonts } from "../lib/fonts";
import withApollo from "../lib/apollo";
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
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <NProgress />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
