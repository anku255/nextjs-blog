import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { screens } from "../theme";
import Post from "./Post";
import PlaceholderPost from "./PlaceholderPost";

const GET_LATEST_POSTS = gql`
  query getLatestPosts {
    getLatestPosts {
      id
      title
      imageURL
    }
  }
`;

const Wrapper = styled.div`
  color: black;
  padding: 8rem 8rem;
  .heading {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 4rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      flex: 1;
      &:not(:nth-child(4)) {
        margin-right: 2rem;
      }
    }
  }
  @media (max-width: ${screens.lg}) {
    padding: 2rem 4rem;
    ul {
      li {
        flex-basis: 40%;
        margin-bottom: 3rem;
        &:not(:nth-child(2n)) {
          margin-right: 2rem;
        }
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }
  @media (max-width: ${screens.sm}) {
    ul {
      li {
        flex-basis: 100%;
        &:nth-child(n) {
          margin-right: 0;
        }
      }
    }
  }
`;

const LatestArticles = props => {
  const { loading, error, data } = useQuery(GET_LATEST_POSTS);

  if (error) return <h1>Failed to load Posts</h1>;

  let articles = [];

  if (!loading) {
    articles = data.getLatestPosts.slice(0, 4);
  }

  return (
    <Wrapper {...props}>
      <div className="heading">Latest Articles</div>
      <ul>
        {loading
          ? [1, 2, 3, 4].map(i => (
              <li key={i}>
                <PlaceholderPost hideTitle={false} />
              </li>
            ))
          : articles.map(article => (
              <li key={article.id}>
                <Post height="20rem" hideTitle={false} post={article} />
              </li>
            ))}
      </ul>
    </Wrapper>
  );
};

export default LatestArticles;
