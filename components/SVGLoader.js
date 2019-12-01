import styled from "styled-components";
const Styles = styled.div`
  display: flex;
  justify-content: center;
  svg {
    width: 100px;
    height: 100px;
    margin: 20px;
    display: inline-block;
  }
`;

export default function SVGLoader() {
  return (
    <Styles>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 100 100"
        xmlSpace="preserve"
      >
        <circle cx="6" cy="50" r="6" fill="#ff7020">
          <animateTransform
            attributeName="transform"
            begin="0.1"
            dur="1s"
            repeatCount="indefinite"
            type="translate"
            values="0 15 ; 0 -15; 0 15"
          ></animateTransform>
        </circle>
        <circle cx="30" cy="50" r="6" fill="#ff8c4c">
          <animateTransform
            attributeName="transform"
            begin="0.2"
            dur="1s"
            repeatCount="indefinite"
            type="translate"
            values="0 10 ; 0 -10; 0 10"
          ></animateTransform>
        </circle>
        <circle cx="54" cy="50" r="6" fill="#f8b26a">
          <animateTransform
            attributeName="transform"
            begin="0.3"
            dur="1s"
            repeatCount="indefinite"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
          ></animateTransform>
        </circle>
      </svg>
    </Styles>
  );
}
