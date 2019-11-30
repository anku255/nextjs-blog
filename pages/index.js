import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import gql from "graphql-tag";
import Layout from "../components/Layout";

const GET_LATEST_POST_QUERY = gql`
  query getLatestPosts($skip: Int, $first: Int) {
    getLatestPosts(skip: $skip, first: $first) {
      id
      imageURL
    }
  }
`;

import { screens } from "../theme";
import Post from "../components/Post";
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

export default () => {
  const { loading, error, data } = useQuery(GET_LATEST_POST_QUERY, {
    variables: { skip: 0, first: 7 }
  });

  if (loading) return <h1>Loading Posts....</h1>;
  if (error) return <h1>Failed to load posts.</h1>;

  const latestPost = data.getLatestPosts[0];
  const remainingPosts = data.getLatestPosts.slice(1);

  return (
    <Layout>
      <LatestPosts>
        <h1>Latest</h1>

        <div className="grid">
          <div className="grid__left">
            <div className="col">
              <Post hideTitle post={latestPost} />
            </div>
          </div>
          <div className="grid__right">
            {remainingPosts.map(post => (
              <div className="col" key={post.id}>
                <Post hideTitle height="200px" post={post} />
              </div>
            ))}
          </div>
        </div>
      </LatestPosts>
      <PopularPosts />
    </Layout>
  );
};
