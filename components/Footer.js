import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.footer`
  font-size: 1.2rem;
  color: black;
  hr {
    margin: 0;
    padding: 0;
  }
  li {
    cursor: pointer;
  }
  .interesting-links {
    padding: 5rem 8rem 6rem 8rem;
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
        ul {
          padding: 2.2rem 0;
          list-style: none;
          li {
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
  .footer {
    padding: 1.5rem 8rem;
    background-color: #1b2a49;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.8rem;
    color: white;
    display: flex;
    .heading {
      margin-bottom: 0.7rem;
      font-weight: 600;
    }
    .company-links {
      flex-basis: 60%;
      display: flex;
      flex-wrap: wrap;
      .column {
        flex: 1;
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            margin-bottom: 0.7rem;
          }
        }
      }
    }
    .newsletter {
      flex-basis: 40%;
      form {
        display: flex;
        input {
          flex: 3;
          padding: 0.75rem;
          border: 0px;
        }
        button {
          flex: 1;
        }
      }
      ul {
        list-style: none;
        padding: 0.7rem 0 0 0;
        margin: 0;
        display: flex;
        li {
          &:not(:nth-child(4)) {
            margin-right: 1rem;
          }
          svg {
            height: 1rem;
            width: auto;
          }
        }
      }
    }
  }
  .footer-hr {
    border: 1px solid #3d3d3d;
  }
  .copyright {
    text-align: center;
    background-color: #1b2a49;
    color: white;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 1rem 0;
  }
`;

const Footer = props => {
  return (
    <Wrapper {...props}>
      <hr />
      <div className="interesting-links">
        <div className="heading">Interesting Links</div>
        <div className="grid">
          {[...Array(4).keys()].map(i => (
            <div key={i} className="column">
              <div className="label">Popular Real Estate Market</div>
              <ul>
                <li>England</li>
                <li>England</li>
                <li>England</li>
                <li>England</li>
              </ul>
              <div className="more">
                <Button secondary rounded={false}>
                  See More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <div className="company-links">
          {[...Array(4).keys()].map(i => (
            <div className="column" key={i}>
              <div className="heading">Contact Us</div>
              <ul>
                <li>jobs</li>
                <li>faqs</li>
                <li>jobs</li>
                <li>safety tips</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="newsletter">
          <div className="heading">Newsletter</div>
          <form onSubmit={e => {}}>
            <input type="text" />
            <Button type="submit" rounded={false} primary>
              Send
            </Button>
          </form>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="512px"
                height="512px"
                className="hovered-paths"
              >
                <g>
                  <path
                    d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-180 390c-74.441406 0-135-60.558594-135-135s60.558594-135 135-135 135 60.558594 135 135-60.558594 135-135 135zm150-240c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0"
                    data-original="#000000"
                    className="hovered-path active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  />
                  <path
                    d="m407 90c-8.277344 0-15 6.722656-15 15s6.722656 15 15 15 15-6.722656 15-15-6.722656-15-15-15zm0 0"
                    data-original="#000000"
                    className="hovered-path active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  />
                  <path
                    d="m257 150c-57.890625 0-105 47.109375-105 105s47.109375 105 105 105 105-47.109375 105-105-47.109375-105-105-105zm0 0"
                    data-original="#000000"
                    className="hovered-path active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  />
                </g>{" "}
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="512px"
                height="512px"
                className="hovered-paths"
              >
                <g>
                  <path
                    d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-180 390c-74.441406 0-135-60.558594-135-135s60.558594-135 135-135 135 60.558594 135 135-60.558594 135-135 135zm150-240c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0"
                    data-original="#000000"
                    className="hovered-path active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  />
                  <path
                    d="m407 90c-8.277344 0-15 6.722656-15 15s6.722656 15 15 15 15-6.722656 15-15-6.722656-15-15-15zm0 0"
                    data-original="#000000"
                    className="hovered-path active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  />
                  <path
                    d="m257 150c-57.890625 0-105 47.109375-105 105s47.109375 105 105 105 105-47.109375 105-105-47.109375-105-105-105zm0 0"
                    data-original="#000000"
                    className="hovered-path active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  />
                </g>{" "}
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="512px"
                height="512px"
                className="hovered-paths"
              >
                <g>
                  <path
                    d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-180 390c-74.441406 0-135-60.558594-135-135s60.558594-135 135-135 135 60.558594 135 135-60.558594 135-135 135zm150-240c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0"
                    data-original="#000000"
                    className="hovered-path active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  />
                  <path
                    d="m407 90c-8.277344 0-15 6.722656-15 15s6.722656 15 15 15 15-6.722656 15-15-6.722656-15-15-15zm0 0"
                    data-original="#000000"
                    className="hovered-path active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  />
                  <path
                    d="m257 150c-57.890625 0-105 47.109375-105 105s47.109375 105 105 105 105-47.109375 105-105-47.109375-105-105-105zm0 0"
                    data-original="#000000"
                    className="hovered-path active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  />
                </g>{" "}
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="512px"
                height="512px"
                className="hovered-paths"
              >
                <g>
                  <path
                    d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-180 390c-74.441406 0-135-60.558594-135-135s60.558594-135 135-135 135 60.558594 135 135-60.558594 135-135 135zm150-240c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45 45 20.1875 45 45-20.1875 45-45 45zm0 0"
                    data-original="#000000"
                    className="hovered-path active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  />
                  <path
                    d="m407 90c-8.277344 0-15 6.722656-15 15s6.722656 15 15 15 15-6.722656 15-15-6.722656-15-15-15zm0 0"
                    data-original="#000000"
                    className="hovered-path active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  />
                  <path
                    d="m257 150c-57.890625 0-105 47.109375-105 105s47.109375 105 105 105 105-47.109375 105-105-47.109375-105-105-105zm0 0"
                    data-original="#000000"
                    className="hovered-path active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  />
                </g>{" "}
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="copyright">Clanist. 2019, All Rights Reserved</div>
    </Wrapper>
  );
};

export default Footer;
