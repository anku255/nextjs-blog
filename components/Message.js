import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  background: ${props => (props.type === "success" ? "green" : "red")};
  color: white;
`;

const Message = ({ type, message }) => {
  if (message) return <StyledMessage type={type}>{message}</StyledMessage>;
  return null;
};

Message.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default Message;
