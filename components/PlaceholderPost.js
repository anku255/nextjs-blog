import ContentLoader from "react-content-loader";

const PlaceholderPost = props => {
  return (
    <ContentLoader
      speed={2}
      style={{ height: "100%", width: "100%" }}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      {props.hideTitle ? (
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
      ) : (
        <>
          <rect x="0" y="0" rx="0" ry="0" width="100%" height="80%" />
          <rect x="0" y="85%" rx="0" ry="0" width="100%" height="10%" />
        </>
      )}
    </ContentLoader>
  );
};

export default PlaceholderPost;
