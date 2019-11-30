import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Post from "./Post";
import { screens } from "../theme";

const GET_POPULAR_POST_QUERY = gql`
  query getPopularPosts($skip: Int, $first: Int) {
    getPopularPosts(skip: $skip, first: $first) {
      id
      title
      imageURL
    }
  }
`;

const PopularPostsWrapper = styled.div`
  padding: 4rem 8rem;

  @media (max-width: ${screens.lg}) {
    padding: 0 4rem;
  }

  .grid {
    display: flex;
    flex-direction: column;

    &__row {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 2.5rem;

      &__element {
        &:first-child {
          flex-basis: 48.7%;
        }

        &:not(:first-child) {
          flex-basis: 23%;
        }

        &:not(:nth-child(3n)) {
          margin-right: 2.6%;
        }
      }

      &:nth-child(2n) {
        flex-direction: row-reverse;

        .grid__row__element {
          &:not(:nth-child(3n)) {
            margin-left: 2.6%;
            margin-right: 0;
          }
        }
      }
    }
  }
  @media (max-width: ${screens.lg}) {
    .grid__row {
      justify-content: space-between;

      &:nth-child(2n) {
        .grid__row__element {
          &:not(:nth-child(3n)) {
            margin-left: 0;
          }
        }
      }

      &__element {
        &:first-child {
          flex-basis: 100%;
          margin-bottom: 1rem;
        }

        &:not(:first-child) {
          flex-basis: 47.5%;
        }

        &:not(:nth-child(3n)) {
          margin-right: 0;
          margin-left: 0;
        }
      }
    }
  }

  @media (max-width: ${screens.sm}) {
    .grid {
      &__row {
        margin-bottom: 0;
        &__element {
          &:nth-child(n) {
            flex-basis: 100%;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
`;

const groupPostsByRow = posts => {
  return posts.reduce(
    (acc, currElement) => {
      const lastRow = acc.pop();
      if (lastRow.length < 3) {
        lastRow.push(currElement);
        acc.push(lastRow);
      } else {
        acc.push(lastRow);
        acc.push([currElement]);
      }
      return acc;
    },
    [[]]
  );
};

const Row = ({ posts }) => (
  <div className="grid__row">
    {posts.map(post => (
      <div key={post.id} className="grid__row__element">
        <Post post={post} />
      </div>
    ))}
  </div>
);

const PopularPosts = props => {
  const { loading, error, data } = useQuery(GET_POPULAR_POST_QUERY);

  if (error) return <h1>Failed to load posts.</h1>;

  const postRows = loading ? [] : groupPostsByRow(data.getPopularPosts);

  return (
    <PopularPostsWrapper {...props}>
      <h1>Popular</h1>
      {loading ? (
        <h1>Loading Posts....</h1>
      ) : (
        <div className="grid">
          {postRows.map((row, i) => (
            <Row key={i} posts={row} />
          ))}
        </div>
      )}
    </PopularPostsWrapper>
  );
};

export default PopularPosts;
