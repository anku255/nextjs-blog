import styled from "styled-components";
import Post from "./Post";
import { screens } from "../theme";

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

const post = {
  title: "How Does Airbnb Work?",
  imageURL:
    "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
};

const PopularPosts = props => {
  return (
    <PopularPostsWrapper {...props}>
      <h1>Popular</h1>
      <div className="grid">
        <div className="grid__row">
          <div className="grid__row__element">
            <Post post={post} />
          </div>
          <div className="grid__row__element">
            <Post post={post} />
          </div>
          <div className="grid__row__element">
            <Post post={post} />
          </div>
        </div>
        <div className="grid__row">
          <div className="grid__row__element">
            <Post post={post} />
          </div>
          <div className="grid__row__element">
            <Post post={post} />
          </div>
          <div className="grid__row__element">
            <Post post={post} />
          </div>
        </div>
        <div className="grid__row">
          <div className="grid__row__element">
            <Post post={post} />
          </div>
          <div className="grid__row__element">
            <Post post={post} />
          </div>
          <div className="grid__row__element">
            <Post post={post} />
          </div>
        </div>
      </div>
    </PopularPostsWrapper>
  );
};

export default PopularPosts;
