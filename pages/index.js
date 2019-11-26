import styled from "styled-components";
import Layout from "../components/Layout";

const Title = styled.h1`
  font-size: 62.5%;
  font-family: sans-serif;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => (
  <Title>
    <Layout />
  </Title>
);
