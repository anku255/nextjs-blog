import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Message from "../components/Message";
import SVGLoader from "../components/SVGLoader";

import { screens } from "../theme";

const ALL_POSTS_QUERY = gql`
  query getAllPosts {
    getAllPosts {
      id
      title
      published
      createdOn
      author {
        name
      }
    }
  }
`;

const DELETE_POST_MUTATION = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
      title
      published
      createdOn
    }
  }
`;
const PUBLISH_POST_MUTATION = gql`
  mutation updatePost($id: ID!, $published: Boolean!) {
    updatePost(id: $id, published: $published) {
      id
      title
      published
      createdOn
    }
  }
`;

const Styles = styled.div`
  padding: 0.75rem 8rem;

  @media (max-width: ${screens.sm}) {
    padding: 0.75rem 2rem;
  }

  button {
    margin: 0 0.5rem;
  }
`;

const ActionButtons = ({ postId, published }) => {
  const [deletePost, { loading: deletePostLoading }] = useMutation(
    DELETE_POST_MUTATION,
    {
      update(cache, { data: { deletePost } }) {
        const { getAllPosts } = cache.readQuery({ query: ALL_POSTS_QUERY });
        cache.writeQuery({
          query: ALL_POSTS_QUERY,
          data: {
            getAllPosts: getAllPosts.filter(post => post.id !== deletePost.id)
          }
        });
      }
    }
  );

  const [publishPost, { loading: publishPostLoading }] = useMutation(
    PUBLISH_POST_MUTATION
  );

  return (
    <div>
      <button
        onClick={() =>
          deletePost({
            variables: {
              id: postId
            }
          })
        }
        disabled={deletePostLoading}
      >
        {deletePostLoading ? "Deleting..." : "Delete"}
      </button>
      <button
        onClick={() =>
          publishPost({
            variables: {
              id: postId,
              published: !published
            }
          })
        }
        disabled={publishPostLoading}
      >
        {published
          ? publishPostLoading
            ? "Unpublishing..."
            : "Unpublish"
          : publishPostLoading
          ? "Publishing..."
          : "Publish"}
      </button>
    </div>
  );
};

const columns = [
  {
    Header: "Post Title",
    accessor: "postTitle"
  },
  {
    Header: "Author",
    accessor: "author"
  },
  {
    Header: "Posted On",
    accessor: "postedOn"
  },
  {
    Header: "Published",
    accessor: "published",
    Cell: ({ cell: { value } }) => (
      <div style={{ textAlign: "center" }}>{value ? "✅" : "❌"}</div>
    )
  },
  {
    Header: "Actions",
    accessor: "actions",
    disableSortBy: true,
    Cell: ({ cell: { value } }) => (
      <ActionButtons postId={value.id} published={value.published} />
    )
  }
];

const getRedableDate = dateInMilli =>
  new Date(+dateInMilli).toLocaleDateString();

const getTableData = data => {
  if (!data) return [];

  return data.getAllPosts.map(post => ({
    postTitle: post.title,
    author: post.author.name,
    postedOn: getRedableDate(post.createdOn),
    published: post.published,
    actions: { id: post.id, published: post.published }
  }));
};

const DashboardLoader = () => (
  <Layout>
    <Styles>
      <h1>Posts List</h1>
      <SVGLoader />
    </Styles>
  </Layout>
);

const Dashboard = () => {
  const { loading, error, data } = useQuery(ALL_POSTS_QUERY);
  const tableData = React.useMemo(() => getTableData(data), [data]);

  if (loading) return <DashboardLoader />;

  return (
    <Layout>
      <Styles>
        <h1>Posts List</h1>
        <Message type="error" message={error && error.message} />
        <Table
          loading={loading}
          error={error}
          columns={columns}
          data={tableData}
        />
      </Styles>
    </Layout>
  );
};

export default Dashboard;
