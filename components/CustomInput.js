import styled from "styled-components";

const StyledInput = styled.div`
  label {
    display: block;
  }

  p {
    color: red;
    margin-top: 0.5rem;
  }
`;
const CustomInput = props => {
  const {
    field,
    form: { errors, touched }
  } = props;
  return (
    <StyledInput>
      <label htmlFor={props.field.name}>{props.label}</label>
      <input {...field} type={props.type} />
      <p>{touched[field.name] && errors[field.name]}</p>
    </StyledInput>
  );
};
export default CustomInput;
