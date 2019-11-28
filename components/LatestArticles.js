import styled from "styled-components";

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
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      flex: 1;
      &:not(:nth-child(4)) {
        margin-right: 2rem;
      }
      img {
        height: 20rem;
        width: 100%;
        object-fit: cover;
      }
      div {
        padding-top: 0.5rem;
        font-weight: 500;
        font-size: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 1.6rem;
        max-height: 4.8rem;
        -webkit-line-clamp: 3; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }
  }
`;

const LatestArticles = props => {
  return (
    <Wrapper {...props}>
      <div className="heading">Latest Articles</div>
      <ul>
        {[...Array(4).keys()].map(i => (
          <li key={i}>
            <img
              src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="article"
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur consequuntur incidunt aliquid voluptatum officiis
              fugit veniam labore eveniet dolorem id eius, voluptatibus
              exercitationem enim mollitia vel aperiam reprehenderit nesciunt
              esse.
            </div>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default LatestArticles;
