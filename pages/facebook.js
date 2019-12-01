import FacebookLogin from "react-facebook-login";

const responseFacebook = response => {
  console.log(response);
};

const componentClicked = () => {
  console.log("clicked!!!!!");
};

const FacebookLoginPage = () => {
  return (
    <div>
      <FacebookLogin
        appId="556331778277969"
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};

export default FacebookLoginPage;
