import styled from "styled-components";
import Header from "./Header";
const Wrapper = styled.div``;

const Layout = props => {
  return (
    <Wrapper {...props}>
      <Header />
      {props.children}
    </Wrapper>
  );
};

export default Layout;
