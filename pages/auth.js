import styled from "styled-components";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Login from "../components/Login";
import Signup from "../components/Signup";

import { screens } from "../theme";

const Styles = styled.div`
  padding: 0.75rem 8rem;

  @media (max-width: ${screens.lg}) {
    padding: 0.75rem 4rem;
  }

  .container {
    display: flex;
    justify-content: center;

    @media (max-width: ${screens.md}) {
      flex-wrap: wrap;
    }
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
