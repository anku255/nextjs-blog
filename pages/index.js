import styled from "styled-components";
import Layout from "../components/Layout";

import { screens } from "../theme";
import PopularPosts from "../components/PopularPosts";

const LatestPosts = styled.section`
  padding: 0 8rem;

  @media (max-width: ${screens.lg}) {
    padding: 0 4rem;
  }

  h1 {
    font-size: 2rem;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;

    .col {
      padding-right: 5px;
      padding-bottom: 5px;
    }

    .grid__left {
      width: 50%;

      @media (max-width: ${screens.lg}) {
        width: 100%;

        .col {
          padding-right: 0;
        }
      }

      .col {
        height: 100%;
      }
    }

    .grid__right {
      width: 50%;
      display: flex;
      flex-wrap: wrap;

      .col {
        width: 33.33%;
      }

      .col:nth-of-type(3n) {
        padding-right: 0;
      }

      @media (max-width: ${screens.lg}) {
        width: 100%;
      }

      @media (max-width: ${screens.md}) {
        .col {
          width: 50%;
          padding-right: 0;

          &:nth-last-of-type(2n) {
            padding-right: 5px;
          }
        }
      }

      @media (max-width: ${screens.sm}) {
        .col {
          width: 100%;
          &:nth-last-of-type(2n) {
            padding-right: 0;
          }
        }
      }
    }
  }
`;

const StyledPost = styled.div`
  width: 100%;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const Post = () => (
  <StyledPost>
    <img
      src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      alt="Blog post cover image"
    />
  </StyledPost>
);

export default () => (
  <Layout>
    <LatestPosts>
      <h1>Latest</h1>

      <div className="grid">
        <div className="grid__left">
          <div className="col">
            <Post />
          </div>
        </div>
        <div className="grid__right">
          <div className="col">
            <Post />
          </div>
          <div className="col">
            <Post />
          </div>
          <div className="col">
            <Post />
          </div>
          <div className="col">
            <Post />
          </div>
          <div className="col">
            <Post />
          </div>
          <div className="col">
            <Post />
          </div>
        </div>
      </div>
    </LatestPosts>
    <PopularPosts />
  </Layout>
);
