import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import LatestArticles from "./LatestArticles";

const Wrapper = styled.div``;

const Layout = props => {
  return (
    <Wrapper {...props}>
      <Header />
      {props.children}
      <LatestArticles />
      <Footer />
    </Wrapper>
  );
};

export default Layout;
