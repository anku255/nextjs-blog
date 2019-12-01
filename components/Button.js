import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  padding: 0.75rem 1rem;
  margin-right: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  min-width: 7rem;
  cursor: pointer;
  ${props => props.primary && `background: ${props.theme.primary};`}
  ${props =>
    props.primary && `box-shadow: rgba(255, 112, 32, 0.6) 0px 5px 16px 0px;`}
  ${props => props.secondary && `background: #fff;`}

  
  border-radius: ${props => (props.rounded ? "5px" : "0")};
  color: ${props => (props.primary ? "white" : "black")};
  border: ${props =>
    props.primary ? "none" : `1px solid ${props.theme.secondary};`};

  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props =>
      props.primary ? props.theme.primary : props.theme.secondary};
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
