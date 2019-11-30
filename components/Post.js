import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";

const StyledPost = styled.div`
  width: 100%;
  height: ${props => (props.height ? props.height : "100%")};

  &:hover {
    .post__image {
      background-color: #2e279d;
      img {
        opacity: 0.4;
      }
    }
  }

  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-decoration: inherit;
    color: inherit;
  }

  .post__image {
    width: 100%;
    height: ${props => (props.hideTitle ? "100%" : "90%")};
    position: relative;
    img {
      width: 100%;
      height: 100%;
      margin-bottom: 0.7rem;
      object-fit: cover;
    }

    .post__title {
      display: block;
      position: absolute;
      top: 2rem;
      left: 2rem;
      color: white;
      font-size: 1.5rem;
    }
  }

  .post__title {
    margin: 0;
    padding: 0.2rem 0;
    font-size: 1rem;
    line-height: 1.15rem;
    height: 3.45rem;
    display: ${props => (props.hideTitle ? "none" : "block")};
    overflow: hidden;
  }
`;

const Post = props => (
  <StyledPost
    className="post"
    height={props.height}
    hideTitle={props.hideTitle}
  >
    <Link href={`/post?id=${props.post.id}`}>
      <a>
        <div className="post__image">
          <img src={props.post.imageURL} alt={props.post.title} />
          {props.hideTitle && <p className="post__title">{props.post.title}</p>}
        </div>
        <p className="post__title">{props.post.title}</p>
      </a>
    </Link>
  </StyledPost>
);

Post.propTypes = {
  hideTitle: PropTypes.bool,
  height: PropTypes.string,
  post: PropTypes.object
};

export default Post;
