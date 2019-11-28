import styled from "styled-components";

import Layout from "../components/Layout";
import LatestArticles from "../components/LatestArticles";

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
      left: 10%;
      font-weight: 600;
      color: white;
      font-size: 2rem;
    }
  }
  .content {
    display: flex;
    padding: 4rem 8rem;
    &__blog {
      flex-basis: 60%;
      &__title {
        font-size: 2rem;
        margin-bottom: 2rem;
        font-weight: 600;
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
      flex-basis: 40%;
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
`;

const BlogDetail = props => {
  return (
    <Layout>
      <BlogWrapper {...props}>
        <div className="title-with-background">
          <img
            src="https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg"
            alt="title-background"
          />
          <div className="heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Quia numquam aut velit mollitia aperiam ipsa minima tempore
          </div>
        </div>
        <div className="content">
          <div className="content__blog">
            <div className="content__blog__title">How does Airbnb Work?</div>
            <div className="content__blog__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, repellat. Reiciendis excepturi molestiae mollitia
              optio ad nihil repudiandae dolorum dolores numquam, repellat
              labore, ut nobis dicta. Ullam nesciunt aperiam repellendus autem
              nisi ducimus placeat? Dolorum qui incidunt laboriosam illum eius
              suscipit reprehenderit, labore quisquam dignissimos laudantium ad
              atque perspiciatis, quidem, odit sint ea facere fugit! Sed tenetur
              ipsam blanditiis magnam culpa corporis quibusdam, natus tempora
              maxime dolor? Laudantium deleniti repellendus error ullam,
              accusantium modi esse temporibus neque molestias et quidem
              laboriosam, minus aspernatur natus exercitationem nihil inventore
              nam tempora, ea autem? Laborum perferendis accusamus corrupti
              optio modi ipsa quasi atque quisquam consectetur sequi? Voluptatem
              cupiditate cumque voluptatum totam nobis? Culpa modi voluptatibus
              consequuntur dolor at repellendus nobis obcaecati ipsam soluta
              iusto ullam odit nihil pariatur maxime, ut inventore numquam cum
              rerum iure quo tempora nostrum quibusdam quidem! Atque non
              accusamus, incidunt, delectus nam dolor facere perferendis
              deleniti repudiandae facilis ut nesciunt repellendus! Quod, sequi
              nihil repellat sit est voluptatum voluptatibus accusantium impedit
              reprehenderit maxime, in vel et beatae laborum illum, natus rerum
              quaerat nesciunt numquam quibusdam minima ad a. Voluptate
              temporibus rerum, corrupti molestias veniam architecto ad
              repudiandae quae hic.
              <br />
              <br />
              Accusantium qui quos vel delectus, exercitationem consectetur
              perspiciatis autem magni iusto adipisci tempora. Recusandae in
              quasi, aliquid illo veritatis accusamus iste cupiditate delectus
              error est omnis voluptate eveniet laudantium odio? Esse,
              repellendus cum! Sequi incidunt aliquid ullam reiciendis et,
              exercitationem consectetur rem omnis quae dignissimos culpa fugiat
              corporis doloribus enim, similique eius! Optio rem placeat dolorum
              obcaecati labore sed quas, maiores ab pariatur cupiditate
              architecto veritatis, modi reprehenderit repellendus at sit, sequi
              neque aliquam harum cumque? Sequi temporibus architecto saepe quia
              dicta aperiam fuga, consequatur natus dignissimos enim harum
              recusandae, praesentium quod cumque eos rerum placeat nostrum
              voluptatem?
              <img
                src="https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg"
                alt="text-image"
              />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
              esse omnis magni eos voluptatum, quam molestias hic accusamus
              earum dolorum quod neque deleniti perspiciatis, et excepturi.
              Harum quidem debitis accusantium quia quam repellat quod cumque
              tempora? Cum dignissimos commodi pariatur nam. Asperiores dolore
              laborum quo placeat, ducimus assumenda voluptate quibusdam porro
              veniam ea! Eligendi, architecto. Dolore temporibus dolorem hic
              natus, incidunt non magni asperiores dolores illum maiores, in
              pariatur laudantium doloremque corrupti ab porro illo expedita
              possimus sunt mollitia a? Doloribus, sed consectetur repellat sit
              optio facere rem nostrum? Soluta quasi quae debitis vero nobis
              obcaecati iure asperiores natus! Ipsum.
            </div>
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

export default BlogDetail;
