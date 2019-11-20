import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonWrapper = styled.button`
  padding: ${props => props.padding};
  width: ${props => props.width};
  border-radius: ${props => props.borderRadius};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  background: ${props => props.background};
  border: ${props => props.border};
  cursor: pointer;
  transition: all 0.3s;

  &:focus {
    outline: none;
  }
  &:hover {
    background: #dd6b20;
    color: white;
  }
`;

const Button = props => (
  <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
);

export default Button;

Button.propTypes = {
  padding: PropTypes.string,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string
};

Button.defaultProps = {
  padding: "0.75rem",
  width: "10rem",
  borderRadius: "5px",
  fontWeight: "600",
  color: "black",
  background: "none",
  border: "none"
};
