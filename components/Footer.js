import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  font-size: 1.2rem;
  .interestingLinks {
    padding: 0rem 8rem;
    color: black;
    .heading {
      font-size: 2rem;
      margin-bottom: 4rem;
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      .column {
        flex: 1;
        .label {
          font-size: 1rem;
        }
        .links {
          padding: 2.2rem 0;
          .link {
            font-size: 1rem;
            font-weight: 500;
            opacity: 0.5;
            &:not(:nth-child(4)) {
              margin-bottom: 1.2rem;
            }
          }
        }
      }
    }
  }
`;

const Footer = props => {
  return (
    <Wrapper {...props}>
      <div className="interestingLinks">
        <div className="heading">Interesting Links</div>
        <div className="grid">
          {[...Array(4).keys()].map(() => (
            <div className="column">
              <div className="label">Popular Real Estate Market</div>
              <div className="links">
                <div className="link">England</div>
                <div className="link">England</div>
                <div className="link">England</div>
                <div className="link">England</div>
              </div>
              <div className="more">
                <Button secondary rounded={false}>
                  See More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
