import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import FacebookLogin from "react-facebook-login";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Cookies from "js-cookie";

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const FB_LOGIN_MUTATION = gql`
  mutation fblogin($name: String!, $email: String!, $facebookId: String!) {
    fblogin(name: $name, email: $email, facebookId: $facebookId) {
      token
      user {
        name
        email
      }
    }
  }
`;

import Button from "./Button";
import { screens } from "../theme";

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 0.75rem 0;

  .header {
    padding: 0 8rem;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${screens.lg}) {
      padding: 0 4rem;
    }

    @media (max-width: ${screens.sm}) {
      padding: 0 2rem;
    }

    &__left {
      display: flex;
      align-items: center;

      button {
        display: none;
        background: none;
        margin: 0;
        padding: 0;
        margin-right: 1rem;
        border: none;
        &:focus {
          outline: none;
        }
        svg {
          height: 1rem;
          width: 1rem;
          color: #667eea;
          fill: currentColor;
        }
      }
      a {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.25rem;
        text-decoration: inherit;
        color: inherit;

        &:visited {
          color: inherit;
          text-decoration: inherit;
        }
      }
    }

    &__right {
      display: flex;
      align-items: center;
    }
  }

  nav {
    padding: 0 7.5rem;
    display: none;
    ul {
      padding: 0;
      list-style: none;

      li {
        padding: 0.5rem 0.5rem;
        border-radius: 5px;

        &:focus,
        &:hover {
          background: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }

  @media (max-width: ${screens.md}) {
    .header {
      .header__left button {
        display: inline-block;
      }
      .header__right {
        display: none;
      }
    }

    nav {
      display: block;
      padding: 0 3.5rem;
    }
  }
`;

const StyledSelect = styled.div`
  position: relative;
  width: 5rem;
  margin-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  div {
    pointer-events: none;
    display: flex;
    align-items: center;
    color: grey;
    svg {
      height: 0.5rem;
      width: 0.5rem;
      fill: currentColor;
    }
  }

  select {
    display: block;
    appearance: none;
    border: none;
    border-radius: 3px;
    line-height: 1.25rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.875rem;
    background: none;

    &:focus {
      outline: none;
      background: white;
    }
  }
`;

const HeaderSelect = () => (
  <StyledSelect>
    <div>
      <svg viewBox="0 0 20 20">
        <path d="M10 20S3 10.87 3 7a7 7 0 1114 0c0 3.87-7 13-7 13zm0-11a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    </div>

    <select>
      <option>England</option>
      <option>India</option>
    </select>

    <div>
      <svg viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </StyledSelect>
);

const Header = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(data && data.isLoggedIn);
  const router = useRouter();
  const toggle = () => setIsOpen(isOpen => !isOpen);

  // facebook login stuff
  const [fblogin, { loading: loginLoading }] = useMutation(FB_LOGIN_MUTATION, {
    onCompleted: data => {
      Cookies.set("AUTH_TOKEN", data.fblogin.token);
      setIsLoggedIn(true);
    }
  });

  const responseFacebook = response => {
    const { email, name, userID } = response;
    fblogin({
      variables: {
        name: name,
        email: email,
        facebookId: userID
      }
    });
  };
  return (
    <StyledHeader>
      <div className="header">
        <div className="header__left">
          <button onClick={toggle}>
            <svg viewBox="0 0 20 20">
              {isOpen ? (
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              ) : (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              )}
            </svg>
          </button>
          <Link href="/">
            <a>Clanist.com</a>
          </Link>
        </div>

        <div className="header__right">
          <HeaderSelect isOpen={isOpen} />
          {isLoggedIn && (
            <Button primary onClick={() => router.push("/newpost")}>
              New Post
            </Button>
          )}
          {isLoggedIn ? (
            <Button
              secondary
              onClick={() => {
                Cookies.remove("AUTH_TOKEN");
                setIsLoggedIn(false);
              }}
            >
              Logout
            </Button>
          ) : (
            <FacebookLogin
              appId="556331778277969"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              textButton={loginLoading ? "Logging In..." : "Login With FB"}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <nav>
          <ul>
            <li>
              <HeaderSelect />
            </li>
            <li>
              {isLoggedIn ? (
                <Button
                  secondary
                  onClick={() => {
                    Cookies.remove("AUTH_TOKEN");
                    setIsLoggedIn(false);
                  }}
                >
                  Logout
                </Button>
              ) : (
                <FacebookLogin
                  appId="556331778277969"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  textButton={loginLoading ? "Logging In..." : "Login With FB"}
                />
              )}
            </li>
            <li>
              <Button primary onClick={() => router.push("/newpost")}>
                New Post
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </StyledHeader>
  );
};

export default Header;
