import React from "react";
import { Button } from "react-bootstrap";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="login-buttons">
        <Button variant="primary" className="signin-btn">
          Sign In
        </Button>
        <Button variant="info" className="signup-btn">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default App;
