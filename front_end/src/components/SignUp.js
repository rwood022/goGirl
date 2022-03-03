import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import BackButton from "./BackButton";

const SignUp = (props) => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const { match } = props;
    const { path = "/" } = match;
    if (path === "/signup") {
      document.body.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(/images/sign_up.jpg)";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.height = "100vh";
      document.body.style.backgroundRepeat = "no-repeat";
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="sign-up">
      <BackButton />
      <h2>Sign Up</h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Please enter your name"
            value={state.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Please enter your email"
            value={state.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Please enter your password"
            value={state.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
