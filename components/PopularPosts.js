import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Post from "./Post";
import { screens } from "../theme";
import PlaceholderPost from "./PlaceholderPost";
import Message from "./Message";

const GET_POPULAR_POST_QUERY = gql`
  query getPopularPosts($skip: Int, $first: Int) {
    getPopularPosts(skip: $skip, first: $first) {
      id
      title
      imageURL
    }
  }
`;

const StyledPopularPosts = styled.div`
  padding: 4rem 8rem;

  @media (max-width: ${screens.lg}) {
    padding: 0 4rem;
  }

  @media (max-width: ${screens.sm}) {
    padding: 0 2rem;
  }

  .grid {
    display: flex;
    flex-direction: column;

    &__row {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 2.5rem;

      &__element {
        min-height: 30rem;
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

const PlaceholderRow = () => (
  <div className="grid__row">
    {[1, 2, 3].map(i => (
      <div key={i} className="grid__row__element">
        <PlaceholderPost hideTitle={false} />
      </div>
    ))}
  </div>
);

const PopularPostsError = ({ error }) => (
  <StyledPopularPosts>
    <h1>Latest Posts</h1>
    <Message type="error" message={error && error.message} />
  </StyledPopularPosts>
);

const PopularPosts = () => {
  const { loading, error, data } = useQuery(GET_POPULAR_POST_QUERY);

  if (error) return <PopularPostsError error={error} />;

  const postRows = loading ? [] : groupPostsByRow(data.getPopularPosts);

  return (
    <StyledPopularPosts>
      <h1>Popular</h1>
      <div className="grid">
        {loading
          ? [1, 2, 3].map(i => <PlaceholderRow key={i} />)
          : postRows.map((row, i) => <Row key={i} posts={row} />)}
      </div>
    </StyledPopularPosts>
  );
};

export default PopularPosts;
