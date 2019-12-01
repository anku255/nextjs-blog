import styled from "styled-components";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Layout from "../components/Layout";
import LatestArticles from "../components/LatestArticles";
import Message from "../components/Message";
import SVGLoader from "../components/SVGLoader";
import { screens } from "../theme";

const GET_POST_BY_ID = gql`
  query getPostById($id: ID!) {
    getPostById(id: $id) {
      id
      title
      imageURL
      content

      author {
        name
      }
    }
  }
`;

const BlogWrapper = styled.div`
  .title-with-background {
    position: relative;
    height: 70vh;
    img {
      position: absolute;
      width: 100%;
      height: inherit;
      object-fit: cover;
      filter: brightness(50%);
    }
    .heading {
      position: absolute;
      top: 43%;
      left: 8%;
      font-weight: 600;
      color: white;
      font-size: 2rem;
    }
  }
  .content {
    display: flex;
    padding: 4rem 8rem;
    &__blog {
      flex-basis: 80%;
      &__title {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }
      &__author {
        font-size: 1rem;
        color: grey;
        margin-bottom: 2rem;
      }
      img {
        max-width: inherit;
        height: auto;
        margin: 2rem 0;
      }
      &__text {
        font-size: 1rem;
        font-weight: 500;
        line-height: 2rem;
        padding-right: 2rem;
      }
    }
    &__table {
      flex-basis: 20%;
      margin-left: 1rem;
      &__title {
        font-size: 1.6rem;
        margin-bottom: 2rem;
        font-weight: 600;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        border-left: 1px solid #000;
        padding-left: 2rem;
        li {
          margin-bottom: 0.8rem;
          cursor: pointer;
          &:hover {
            color: #dd6b20;
          }
        }
      }
    }
  }
  @media (max-width: ${screens.lg}) {
    .content {
      padding: 4rem;
    }
  }
  @media (max-width: ${screens.md}) {
    .content {
      &__blog {
        flex-basis: 100%;
        margin: 0;
      }
      &__table {
        display: none;
      }
    }
  }
  @media (max-width: ${screens.sm}) {
    .content {
      padding: 2rem;
    }
  }
`;

const LoadingPost = () => (
  <Layout>
    <BlogWrapper>
      <SVGLoader />
    </BlogWrapper>
  </Layout>
);

const PostError = ({ error }) => (
  <Layout>
    <BlogWrapper style={{ padding: "2rem 8rem" }}>
      <Message type="error" message={error && error.message} />
    </BlogWrapper>
  </Layout>
);

const PostPage = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: { id: router.query.id }
  });

  if (loading) return <LoadingPost />;
  if (error) return <PostError error={error} />;

  const post = data.getPostById;

  return (
    <Layout>
      <BlogWrapper>
        <div className="title-with-background">
          <img src={post.imageURL} alt={post.title} />
          <div className="heading">{post.title}</div>
        </div>
        <div className="content">
          <div className="content__blog">
            <div className="content__blog__title">{post.title}</div>
            <div className="content__blog__author">By {post.author.name}</div>
            <div
              className="content__blog__text"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
          <div className="content__table">
            <div className="content__table__title">Table of Contents</div>
            <ul>
              <li>Lorem Ipsum Dolor</li>
              <li>Lorem Ipsum Dolor</li>
              <li>Lorem Ipsum Dolor</li>
              <li>Lorem Ipsum Dolor</li>
              <li>Lorem Ipsum Dolor</li>
            </ul>
          </div>
        </div>
      </BlogWrapper>
      <LatestArticles />
    </Layout>
  );
};

export default PostPage;
