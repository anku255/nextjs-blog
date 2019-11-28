import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  padding: 0.75rem 1rem;
  margin-right: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  ${props => props.primary && "background: #f6ad55;"}
  ${props => props.secondary && "background: #fff;"}
  
  border-radius: ${props => (props.rounded ? "5px" : "0")};
  color: ${props => (props.primary ? "white" : "black")};
  border: ${props => (props.primary ? "none" : "1px solid #f6ad55")};

  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => (props.primary ? "#dd6b20" : "#f6ad55")};
    color: white;
  }
`;

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool
};

Button.defaultProps = {
  rounded: true
};

export default Button;
