import styled from "styled-components";

const PopularPostsWrapper = styled.div`
  padding: 4rem 8rem;
  .heading {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  .grid {
    display: flex;
    flex-direction: column;

    &__row {
      display: flex;

      &:not(:nth-child(3n)) {
        margin-bottom: 2.5rem;
      }

      &__element {
        &:first-child {
          flex-basis: 48.7%;
        }

        &:not(:first-child) {
          flex-basis: 23%;
        }

        &:not(:nth-child(3n)) {
          margin-right: 2rem;
        }
      }

      &:nth-child(2n) {
        flex-direction: row-reverse;

        .grid__row__element {
          &:not(:nth-child(3n)) {
            margin-left: 2rem;
            margin-right: 0;
          }
        }
      }
    }
  }
`;

const StyledPost = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 20rem;
    margin-bottom: 0.7rem;
    object-fit: cover;
  }

  div {
    font-size: 1.2rem;
    line-height: 1.6rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Post = props => (
  <StyledPost {...props}>
    <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate vel
      obcaecati iure omnis quam voluptatibus doloremque hic, labore,
      accusantium, repudiandae tempore magnam unde facilis dicta fugiat. A rerum
      qui quas impedit sint aliquam distinctio modi officiis vero, iure
      veritatis obcaecati ducimus, corporis ab quia ratione. Eius facere odio
      architecto illo!
    </div>
  </StyledPost>
);

const PopularPosts = props => {
  return (
    <PopularPostsWrapper {...props}>
      <div className="heading">Popular</div>
      <div className="grid">
        <div className="grid__row">
          <div className="grid__row__element">
            <Post />
          </div>
          <div className="grid__row__element">
            <Post />
          </div>
          <div className="grid__row__element">
            <Post />
          </div>
        </div>
        <div className="grid__row">
          <div className="grid__row__element">
            <Post />
          </div>
          <div className="grid__row__element">
            <Post />
          </div>
          <div className="grid__row__element">
            <Post />
          </div>
        </div>
        <div className="grid__row">
          <div className="grid__row__element">
            <Post />
          </div>
          <div className="grid__row__element">
            <Post />
          </div>
          <div className="grid__row__element">
            <Post />
          </div>
        </div>
      </div>
    </PopularPostsWrapper>
  );
};

export default PopularPosts;
