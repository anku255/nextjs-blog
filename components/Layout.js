import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
const Wrapper = styled.div``;

const Layout = props => {
  return (
    <Wrapper {...props}>
      <Header />
      {props.children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
