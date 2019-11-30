import Layout from "../components/Layout";
import LatestPosts from "../components/LatestPosts";
import PopularPosts from "../components/PopularPosts";

export default () => {
  return (
    <Layout>
      <LatestPosts />
      <PopularPosts />
    </Layout>
  );
};
