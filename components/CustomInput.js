import styled from "styled-components";

const StyledInput = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    appearance: none;
    width: 100%;
    height: 2.4375rem;
    padding: 0.5rem;
    border: 1px solid #cacaca;
    margin: 0 0 1rem;
    font-family: inherit;
    font-size: 1rem;
    color: #0a0a0a;
    background-color: #fefefe;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    }
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
