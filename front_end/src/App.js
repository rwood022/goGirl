import React, { useEffect } from "react";
import"./styles.css";
import { Button } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
// import Header from "./components/Header";
// import S3 from "./components/S3";
// import { gapi } from 'gapi-script';
import Auth from './components/Auth';

// const clientId = "181782094880-j468gjdl5lnthk3g0657ac450o4qrmb6.apps.googleusercontent.com"


const App = (props) => {
  console.log({ props });

  useEffect(() => {

    // function start() {
    //   gapi.client.init({
    //     clientId: clientId,
    //     scope: ""
    //   })
    // };

    // gapi.load('client:auth2', start);

    const { match } = props;
    const { path = "/" } = match;
    if (path === "/") {
      document.body.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/home_page.jpg)";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.height = "100vh";
      document.body.style.backgroundRepeat = "no-repeat";
    }
  }, []);

  // var accessToken = gapi.auth.getToken().access_token;

  const handleRedirect = (path) => {
    props.history.push(path);
  };
  return (
    <div className="container">
      <div className="login-buttons">
      <Auth />

        <Button
          variant="primary"
          className="signin-btn mt-4 mb-0"
          onClick={() => handleRedirect("/dashboard")}
        >
          Sign In
        </Button>
    
        <Button
          variant="info"
          className="signup-btn"
          onClick={() => handleRedirect("/signup")}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default App;
