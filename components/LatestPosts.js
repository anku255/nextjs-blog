import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { screens } from "../theme";
import Post from "../components/Post";
import PlaceholderPost from "./PlaceholderPost";

const GET_LATEST_POST_QUERY = gql`
  query getLatestPosts($skip: Int, $first: Int) {
    getLatestPosts(skip: $skip, first: $first) {
      id
      title
      imageURL
    }
  }
`;

const StyledLatestPosts = styled.section`
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
      padding-right: 1rem;
      padding-bottom: 1rem;
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
        min-height: 15rem;
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
            padding-right: 1rem;
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

const LatestPosts = () => {
  const { loading, error, data } = useQuery(GET_LATEST_POST_QUERY, {
    variables: { skip: 0, first: 7 }
  });

  if (error) return <h1>Failed to load posts.</h1>;

  const latestPost = loading ? null : data.getLatestPosts[0];
  const remainingPosts = loading ? null : data.getLatestPosts.slice(1);

  return (
    <StyledLatestPosts>
      <h1>Latest</h1>
      <div className="grid">
        <div className="grid__left">
          <div className="col">
            {loading ? (
              <PlaceholderPost hideTitle />
            ) : (
              <Post hideTitle post={latestPost} />
            )}
          </div>
        </div>
        <div className="grid__right">
          {loading
            ? [1, 2, 3, 4, 5, 6].map(i => (
                <div className="col" key={i}>
                  <PlaceholderPost key={i} hideTitle={false} />
                </div>
              ))
            : remainingPosts.map(post => (
                <div className="col" key={post.id}>
                  <Post post={post} />
                </div>
              ))}
        </div>
      </div>
    </StyledLatestPosts>
  );
};

export default LatestPosts;
