import dynamic from "next/dynamic";
import styled from "styled-components";
import { Formik, Field } from "formik";

import Layout from "../components/Layout";

const CKEditor = dynamic(() => import("../components/CKEditor"), {
  ssr: false
});

const CustomInput = props => <input {...props} />;

const StyledForm = styled.div`
  padding: 0.75rem 8rem;
  .ck-editor__editable_inline {
    max-height: 30rem;
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
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <Field
                required
                name="title"
                label="title"
                placeholder="Title"
                component={CustomInput}
              />
              <Field
                required
                name="imageURL"
                label="imageURL"
                placeholder="Image URL"
                component={CustomInput}
              />
              <CKEditor
                data={values.content}
                onChange={(_, editor) => {
                  setFieldValue("content", editor.getData());
                }}
                onBlur={() => setFieldTouched("content", true)}
              />
              {errors.content && touched.content && errors.content}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </StyledForm>
    </Layout>
  );
};

export default CreatePost;
