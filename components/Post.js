import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";

const StyledPost = styled.div`
  width: 100%;
  height: ${props => (props.height ? props.height : "100%")};
  display: flex;
  flex-direction: column;

  &:hover {
    .post__image {
      background-color: #2e279d;
      img {
        opacity: 0.4;
      }
    }
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: inherit;
    color: inherit;
  }

  .post__image {
    width: 100%;
    height: ${props => (props.hideTitle ? "100%" : "90%")};
    img {
      width: 100%;
      height: 100%;
      margin-bottom: 0.7rem;
      object-fit: cover;
    }
  }

  .post__title {
    font-size: 1rem;
    line-height: 1.6rem;
    padding-bottom: 0.2rem;
    display: ${props => (props.hideTitle ? "none" : "-webkit-box")};
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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
