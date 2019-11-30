import dynamic from "next/dynamic";
import styled from "styled-components";
import { Formik, Field } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Layout from "../components/Layout";
import CustomInput from "../components/CustomInput";

const CREATE_POST_MUTATION = gql`
  mutation createPost($title: String!, $imageURL: String!, $content: String!) {
    createPost(title: $title, imageURL: $imageURL, content: $content) {
      id
      title
      content
    }
  }
`;

const CKEditor = dynamic(() => import("../components/CKEditor"), {
  ssr: false
});

const StyledForm = styled.div`
  padding: 2rem 8rem;
  max-width: 60rem;

  h1 {
    width: 100%;
  }

  .ck-editor__editable_inline {
    max-height: 30rem;
  }

  label {
    display: block;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .error {
    color: red;
    margin-top: 0.5rem;
  }

  button {
    margin-top: 1.5rem;
  }
`;

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.imageURL) {
    errors.imageURL = "Required";
  }
  if (!values.content) {
    errors.content = "Required";
  }

  return errors;
};

const CreatePost = () => {
  const [createPost, { loading: createPostLoading }] = useMutation(
    CREATE_POST_MUTATION
  );

  return (
    <Layout>
      <StyledForm>
        <h1>Create a post</h1>

        <Formik
          initialValues={{
            title: "",
            imageURL: "",
            content: ""
          }}
          validate={validate}
          onSubmit={values => {
            createPost({
              variables: {
                title: values.title,
                imageURL: values.imageURL,
                content: values.content
              }
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue,
            setFieldTouched
          }) => (
            <form onSubmit={handleSubmit}>
              <Field
                required
                name="title"
                label="Title"
                placeholder="Title"
                component={CustomInput}
              />
              <Field
                required
                name="imageURL"
                label="Image URL"
                placeholder="Image URL"
                component={CustomInput}
              />
              <div>
                <label htmlFor="content">Content</label>
                <CKEditor
                  data={values.content}
                  onChange={(_, editor) => {
                    setFieldValue("content", editor.getData());
                  }}
                  onBlur={() => setFieldTouched("content", true)}
                />
                {errors.content && touched.content && (
                  <p className="error"> {errors.content}</p>
                )}
              </div>
              <button type="submit" disabled={createPostLoading}>
                {createPostLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </Formik>
      </StyledForm>
    </Layout>
  );
};

export default CreatePost;
