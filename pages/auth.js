import styled from "styled-components";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Styles = styled.div`
  padding: 0 8rem;

  .container {
    display: flex;
    justify-content: center;
  }
`;

const Auth = props => {
  const router = useRouter();

  return (
    <Layout>
      <Styles>
        <div className="container">
          <Login router={router} />
          <Signup router={router} />
        </div>
      </Styles>
    </Layout>
  );
};

export default Auth;
