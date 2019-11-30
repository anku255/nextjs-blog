import styled from "styled-components";
import PropTypes from "prop-types";
import { Formik, Field } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import CustomInput from "./CustomInput";
import Message from "./Message";

const SIGNUP_MUTATION = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

const StyledSignup = styled.div`
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
  if (!values.name) {
    errors.name = "Required";
  }
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

const Signup = props => {
  const [signup, { loading: signupLoading, error }] = useMutation(
    SIGNUP_MUTATION,
    {
      onCompleted: data => {
        localStorage.setItem("AUTH_TOKEN", data.signup.token);
        props.router.push("/");
      }
    }
  );

  return (
    <StyledSignup>
      <h2>Signup</h2>

      <Message type="error" message={error && error.message} />

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: ""
        }}
        validate={validate}
        onSubmit={values => {
          signup({
            variables: {
              name: values.name,
              email: values.email,
              password: values.password
            }
          });
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              label="Name"
              placeholder="Name"
              component={CustomInput}
            />
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
            <button type="submit" disabled={signupLoading}>
              {signupLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        )}
      </Formik>
    </StyledSignup>
  );
};

export default Signup;

Signup.propTypes = {
  router: PropTypes.object.isRequired
};
