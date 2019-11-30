import styled from "styled-components";
import PropTypes from "prop-types";
import { Formik, Field } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import CustomInput from "./CustomInput";
import Message from "./Message";

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const StyledLogin = styled.div`
  margin: 0.5rem 2rem;
  flex: 1 1 50%;
  border: 1px solid grey;
  padding: 0.5rem 1rem;

  .error-msg {
    background: red;
    color: white;
    padding: 0.5rem;
  }
`;

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Password length must be at least 6";
  }
  return errors;
};

const Login = props => {
  const [login, { loading: loginLoading, error }] = useMutation(
    LOGIN_MUTATION,
    {
      onCompleted: data => {
        localStorage.setItem("AUTH_TOKEN", data.login.token);
        props.router.push("/");
      }
    }
  );

  return (
    <StyledLogin>
      <h2>Login</h2>

      <Message type="error" message={error && error.message} />

      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validate={validate}
        onSubmit={values => {
          login({
            variables: {
              email: values.email,
              password: values.password
            }
          });
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              type="email"
              name="email"
              label="Email"
              placeholder="Email"
              component={CustomInput}
            />
            <Field
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
              component={CustomInput}
            />
            <button type="submit" disabled={loginLoading}>
              {loginLoading ? "Logging In..." : "Login"}
            </button>
          </form>
        )}
      </Formik>
    </StyledLogin>
  );
};

export default Login;

Login.propTypes = {
  router: PropTypes.object.isRequired
};
