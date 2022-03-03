import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import BackButton from "./BackButton";

const SignIn = (props) => {
  console.log("props", props);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const { match } = props;
    const { path = "/" } = match;
    if (path === "/signin") {
      document.body.style.backgroundImage = "url(/images/sign_in.jpg)";
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
    <div>
      <BackButton />
      <h2>Sign In Form</h2>
      <Form onSubmit={handleOnSubmit}>
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

export default SignIn;
