import React from "react";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Header from "./components/Header";
import PlacesTraveled from './components/S3'
const App = (props) => {
  console.log(props);

  const handleRedirect = (path) => {
    props.history.push(path);
  };
  return (
    <div className="container">
      {/* <div className="login-buttons">
        <Button
          variant="primary"
          className="signin-btn"
          onClick={() => handleRedirect("/signin")}
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
      </div> */}
      <PlacesTraveled />
    </div>
  );
};

export default App;
