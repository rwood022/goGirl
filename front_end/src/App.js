import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import { gapi } from "gapi-script";
// import { Redirect } from "react-router-dom";
// import Header from "./components/Header";
// import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId = "181782094880-j468gjdl5lnthk3g0657ac450o4qrmb6.apps.googleusercontent.com";

const App = (props) => {
  console.log({ props });

  useEffect(() => {
    const { match } = props;
    const { path = "/" } = match;
    if (path === "/") {
      document.body.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/home_page.jpg)";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.height = "100vh";
      document.body.style.backgroundRepeat = "no-repeat";

      function start(){
        gapi.client.init({
          clientId: clientId,
          spoce: ""
        })
      };

      gapi.load("client:auth2", start);

    }
  }, []);

  var accessToken = gapi.auth.getToken().access_token;

  const handleRedirect = (path) => {
    props.history.push(path);
  };
  return (
    <div className="container">
      <div className="login-buttons">
 
        <LoginButton />
        <Button
          variant="info"
          className="signup-btn"
          onClick={() => handleRedirect("/signup")}
        >
          Sign Up
        </Button>

        <LogoutButton />
      </div>
    </div>
  );
};

export default App;
